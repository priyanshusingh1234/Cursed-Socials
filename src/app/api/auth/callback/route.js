import { NextResponse } from 'next/server';

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const code = searchParams.get('code');

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
    const tokenRes = await fetch('https://auth.hackclub.com/oauth/token', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
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
      return NextResponse.redirect(`${appUrl}/?auth_error=token_failed`);
    }

    let user = {};

    if (tokenData.id_token) {
      try {
        const parts = tokenData.id_token.split('.');
        const decoded = JSON.parse(Buffer.from(parts[1], 'base64').toString());
        Object.assign(user, decoded);
      } catch (e) {}
    }

    try {
      const r = await fetch('https://auth.hackclub.com/oauth/userinfo', {
        headers: { Authorization: `Bearer ${tokenData.access_token}` }
      });
      if (r.ok) Object.assign(user, await r.json());
    } catch (e) {}

    try {
      const r = await fetch('https://auth.hackclub.com/api/v1/me', {
        headers: { Authorization: `Bearer ${tokenData.access_token}` }
      });
      if (r.ok) {
        const data = await r.json();
        if (data.identity) Object.assign(user, data.identity);
        else Object.assign(user, data);
      }
    } catch (e) {}

    const clubApiKey = process.env.CLUBAPI_KEY;
    if (clubApiKey) {
      const headers = { Authorization: clubApiKey };
      if (user.slack_id && !user.club) {
        try {
          const r = await fetch(`https://clubapi.hackclub.com/leader/slack?slackid=${user.slack_id}`, { headers, signal: AbortSignal.timeout(4000) });
          if (r.ok) {
            const d = await r.json();
            if (d.club_name) user.club = d.club_name;
          }
        } catch (e) {}
      }
      if (!user.club && (user.primary_email || user.email)) {
        try {
          const email = user.primary_email || user.email;
          const r = await fetch(`https://clubapi.hackclub.com/member/email?email=${email}`, { headers, signal: AbortSignal.timeout(4000) });
          if (r.ok) {
            const d = await r.json();
            if (d.club_name) user.club = d.club_name;
          }
        } catch (e) {}
      }
    }

    const response = NextResponse.redirect(`${appUrl}/`);
    response.cookies.set('hc_user_session', JSON.stringify({ user, token: tokenData.access_token }), {
      httpOnly: false,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 60 * 60 * 24 * 30,
      path: '/'
    });

    return response;
  } catch (err) {
    return NextResponse.redirect(`${appUrl}/?auth_error=${encodeURIComponent(err.message)}`);
  }
}
