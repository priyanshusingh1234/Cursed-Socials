import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';

export async function GET() {
  const cookieStore = await cookies();
  const sessionCookie = cookieStore.get('hc_user_session');

  if (!sessionCookie || !sessionCookie.value) {
    return NextResponse.json({ authenticated: false, user: null });
  }

  try {
    const session = JSON.parse(sessionCookie.value);
    return NextResponse.json({
      authenticated: true,
      user: session.user
    });
  } catch {
    return NextResponse.json({ authenticated: false, user: null });
  }
}

