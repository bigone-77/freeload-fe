import { NextResponse } from 'next/server';
import { auth } from './auth';

export async function middleware() {
  const session = await auth();

  if (!session?.user) {
    const redirectUrl =
      process.env.NODE_ENV === 'development'
        ? `${process.env.NEXT_PUBLIC_DEV_URL}/login`
        : `${process.env.NEXT_PUBLIC_PROD_URL}/login`;
    return NextResponse.redirect(redirectUrl);
  }
  return NextResponse.next();
}
export const config = {
  matcher: ['/profile'],
};
