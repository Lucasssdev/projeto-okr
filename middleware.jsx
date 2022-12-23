import { NextResponse } from "next/server";
import { isValid } from "./src/jwt/isValidToken";

export async function middleware(request) {
  const cookie = request.cookies.get("userLogged")?.value ?? "";
  // console.log('COOKIE: ',cookie, '\n',typeof cookie);

  const { pathname } = request.nextUrl;

  if (pathname.startsWith("/_next")) return NextResponse.next();

  // console.log('pathname',pathname.toString());

  const authPages = [
    "/login",
    "/register/newPassword",
    "/register/createAccount",
    "/register/inviteTeam",
    "/register/updatePassword",
  ];

  if (!request.cookies.has("userLogged")) {
    if (authPages.includes(pathname)) {
      request.nextUrl.pathname = pathname;
      return NextResponse.rewrite(request.nextUrl);
    } else {
      const url = request.nextUrl.clone();
      url.pathname = "/login";
      //return NextResponse.redirect(new URL('/login', request.nextUrl))
    }
  } else if (
    request.cookies.has("userLogged") &&
    (await isValid(cookie)) &&
    !authPages.includes(pathname)
  ) {
    return NextResponse.next();
  }
}
