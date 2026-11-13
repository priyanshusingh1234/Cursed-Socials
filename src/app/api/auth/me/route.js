import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';

export async function GET() {
  const cookieStore = await cookies();
  const session = cookieStore.get('hc_user_session');

  if (!session) {
    return NextResponse.json({ authenticated: false, user: null });
  }

  try {
    const data = JSON.parse(session.value);
    return NextResponse.json({ authenticated: true, user: data.user });
  } catch {
    return NextResponse.json({ authenticated: false, user: null });
  }
}
