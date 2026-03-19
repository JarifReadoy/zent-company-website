import { NextRequest, NextResponse } from 'next/server';
import { cookies } from 'next/headers';

export async function POST(req: NextRequest) {
  const { email, password } = await req.json();

  const adminEmail = process.env.ADMIN_EMAIL || 'admin@zent.com';
  const adminPassword = process.env.ADMIN_PASSWORD || 'zent@admin2024';

  if (email !== adminEmail || password !== adminPassword) {
    return NextResponse.json({ error: 'Invalid email or password' }, { status: 401 });
  }

  const cookieStore = await cookies();
  cookieStore.set('admin_session', 'authenticated', {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    maxAge: 60 * 60 * 24 * 7, // 7 days
    path: '/',
  });

  return NextResponse.json({ success: true });
}

export async function DELETE() {
  const cookieStore = await cookies();
  cookieStore.delete('admin_session');
  return NextResponse.json({ success: true });
}
