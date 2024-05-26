/* eslint-disable @typescript-eslint/no-unsafe-assignment */
// middleware.ts
import { NextResponse, type NextRequest } from 'next/server';
import jwt from 'jsonwebtoken';
import Cookies from 'cookies-js'

const secret = process.env.JWT_SECRET;

export function middleware(req: NextRequest) {
  const token = req.cookies.get('token');
    console.log('CHEGOU AQUI', token)
  if (!token) {
    return NextResponse.redirect(new URL('/login', req.url));
  }

  try {
    const decoded = jwt.verify(token, secret);
    req.user = decoded;
    return NextResponse.next();
  } catch (err) {
    return NextResponse.redirect(new URL('/login', req.url));
  }
}

export const config = {
  matcher: [
    '/cadastroEmpresa',
    '/cadastroFuncionario',
    '/tickets',
    '/upload',
    '/listagem'
  ],
};
