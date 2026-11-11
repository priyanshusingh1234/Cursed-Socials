import { NextResponse } from 'next/server';

export async function POST(request) {
  const appUrl = process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000';
  const response = NextResponse.json({ success: true });
  response.cookies.delete('hc_user_session');
  return response;
}

