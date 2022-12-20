import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {

  const { pathname } = request.nextUrl;
    const url = request.nextUrl
   console.log(pathname)
  if (pathname.startsWith("/_next")) return NextResponse.next();

  const authPages = ['/login','/register'];

  
  if(!request.cookies.has('userLogged')){
    if(url.pathname == '/register/newPassord'){
        return NextResponse.next();
    } else {
    request.nextUrl.pathname = "/login";
    console.log(request.nextUrl)
    return NextResponse.rewrite(request.nextUrl);
  }} 

  if(request.cookies.has('userLogged') && !authPages.includes(pathname)){
    return NextResponse.next();
  }else{
    request.nextUrl.pathname = "/";
    console.log(request.nextUrl)
    return NextResponse.redirect(request.nextUrl);
  }

}