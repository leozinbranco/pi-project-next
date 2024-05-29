/* eslint-disable @typescript-eslint/no-unsafe-assignment */
// middleware.ts
import { NextResponse, type NextRequest } from 'next/server';

export function middleware(req: NextRequest) {
  const token = req.cookies.get('token')?.value;
  if (!token) {
    return NextResponse.redirect(new URL('/login', req.url));
  }
  NextResponse.next();

  // try {
  //   return NextResponse.next();
  // } catch (err) {
  //   return NextResponse.redirect(new URL('/login', req.url));
  // }
}

export const config = {
  matcher: [
    '/cadastro',
    '/tickets',
    '/upload',
    '/listagem'
  ],
};
