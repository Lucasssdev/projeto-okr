import { NextResponse } from 'next/server'
import { isValid } from './src/jwt/isValidToken';

export async function middleware(request) {
  const cookie = request.cookies.get('userLogged')?.value ?? '';
  // console.log('COOKIE: ',cookie, '\n',typeof cookie);
  const { pathname } = request.nextUrl;

  if (pathname.startsWith("/_next") || pathname.startsWith('/api')) return NextResponse.next();

  const authPages = [
    "/login",
    "/register/newPassword",
    "/register/createAccount",
    "/register/inviteTeam",
    "/register/updatePassword",
  ];

  // console.log('pathname',pathname.toString());

  if(!request.cookies.has('userLogged'))
  {
    if(authPages.includes(pathname)){
      request.nextUrl.pathname = pathname;
      return NextResponse.rewrite(request.nextUrl)
      // return NextResponse.redirect(new URL(pathname, request.url))
    }else{
      return NextResponse.redirect(new URL('/login', request.url))
    }
  }
 
  // console.log(request.headers);
  // if(pathname === '/api/auth/logout'){
  //   console.log('quero fazer o logout');
  //   return NextResponse.redirect(new URL('/login', request.url))
  // }

  if(await isValid(cookie) && request.cookies.has('userLogged') ){
    if(!authPages.includes(pathname)){
      return NextResponse.next();
    }else{
      // console.log('Redireciona para a dashboard', request.url)
      // request.nextUrl.pathname ='/dashboard';
      return NextResponse.redirect(new URL('/', request.url))
    }
  }
}