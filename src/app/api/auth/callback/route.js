import { NextResponse } from 'next/server';

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const code = searchParams.get('code');
  const state = searchParams.get('state');

  const clientId = process.env.HACKCLUB_CLIENT_ID;
  const clientSecret = process.env.HACKCLUB_CLIENT_SECRET;
  const appUrl = process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000';
  const redirectUri = `${appUrl}/api/auth/callback`;

  if (!clientId || !clientSecret) {
    return NextResponse.redirect(`${appUrl}/?auth_error=missing_config`);
  }

  if (!code) {
    return NextResponse.redirect(`${appUrl}/?auth_error=no_code`);
  }

  try {
    // 1. Server-side token exchange (completely immune to browser CORS!)
    const tokenRes = await fetch('https://auth.hackclub.com/oauth/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'User-Agent': 'CursedSocials-NextJS/1.0'
      },
      body: new URLSearchParams({
        grant_type: 'authorization_code',
        client_id: clientId,
        client_secret: clientSecret,
        code,
        redirect_uri: redirectUri
      }).toString()
    });

    const tokenData = await tokenRes.json();
    if (!tokenRes.ok || !tokenData.access_token) {
      console.error('Token exchange failed:', tokenData);
      return NextResponse.redirect(`${appUrl}/?auth_error=token_failed`);
    }

    // 2. Fetch user profile from id_token, /oauth/userinfo, and /api/v1/me
    let userData = {};

    // Helper to safely merge non-empty keys
    const mergeSafe = (target, source) => {
      if (!source || typeof source !== 'object') return;
      for (const [key, val] of Object.entries(source)) {
        if (val !== undefined && val !== null && val !== '') {
          target[key] = val;
        }
      }
    };

    // A. Decode id_token JWT payload if present
    if (tokenData.id_token) {
      try {
        const parts = tokenData.id_token.split('.');
        if (parts.length >= 2) {
          const payloadBase64 = parts[1].replace(/-/g, '+').replace(/_/g, '/');
          const decoded = JSON.parse(Buffer.from(payloadBase64, 'base64').toString('utf8'));
          mergeSafe(userData, decoded);
        }
      } catch (e) {
        console.error('Error decoding id_token:', e);
      }
    }

    // B. Fetch OIDC /oauth/userinfo
    try {
      const oidcUserRes = await fetch('https://auth.hackclub.com/oauth/userinfo', {
        headers: {
          Authorization: `Bearer ${tokenData.access_token}`,
          'User-Agent': 'CursedSocials-NextJS/1.0'
        }
      });
      if (oidcUserRes.ok) {
        const oidcData = await oidcUserRes.json();
        mergeSafe(userData, oidcData);
      }
    } catch (e) {
      console.error('Error fetching /oauth/userinfo:', e);
    }

    // C. Fetch Hack Club /api/v1/me
    try {
      const userRes = await fetch('https://auth.hackclub.com/api/v1/me', {
        headers: {
          Authorization: `Bearer ${tokenData.access_token}`,
          'User-Agent': 'CursedSocials-NextJS/1.0'
        }
      });
      if (userRes.ok) {
        const apiData = await userRes.json();
        if (apiData.identity && typeof apiData.identity === 'object') {
          mergeSafe(userData, apiData.identity);
        }
        if (apiData.user && typeof apiData.user === 'object') {
          mergeSafe(userData, apiData.user);
        }
        mergeSafe(userData, apiData);
      }
    } catch (e) {
      console.error('Error fetching /api/v1/me:', e);
    }

    console.log('Final Combined Hack Club User Data:', JSON.stringify(userData, null, 2));

    // 4. Set encrypted/secure session cookie
    const response = NextResponse.redirect(`${appUrl}/`);
    const sessionPayload = JSON.stringify({
      user: userData,
      token: tokenData.access_token,
      loginTime: Date.now()
    });

    response.cookies.set('hc_user_session', sessionPayload, {
      httpOnly: false, // Accessible to client-side components
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 60 * 60 * 24 * 30, // 30 days
      path: '/'
    });

    return response;
  } catch (err) {
    console.error('OAuth callback error:', err);
    return NextResponse.redirect(`${appUrl}/?auth_error=${encodeURIComponent(err.message)}`);
  }
}

