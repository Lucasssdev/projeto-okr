import { NextResponse } from "next/server";
import { isValid } from "./src/jwt/isValidToken";

export default async function middleware(request) {

  const cookie = request.cookies.get("userLogged")?.value ?? "";

  const { pathname } = request.nextUrl;

  if (pathname.startsWith("/_next") || pathname.startsWith("/api"))
    return NextResponse.next();

  const authPages = [
    "/login",
    "/register/newPassword",
    "/register/createAccount",
    "/register/inviteTeam",
    "/register/updatePassword",
  ];

  if (
    request.nextUrl.pathname == "/expiredToken" &&
    request.cookies.has("userLogged")
  ) {
    return NextResponse.next();
  }
  if (!request.cookies.has("userLogged")) {
    if (authPages.includes(pathname)) {
      request.nextUrl.pathname = pathname;
      return NextResponse.rewrite(request.nextUrl);
      // return NextResponse.redirect(new URL(pathname, request.url))
    } else {
      return NextResponse.redirect(new URL("/login", request.url));
    }
  }

  if ((await isValid(cookie)) && request.cookies.has("userLogged")) {
    if (!authPages.includes(pathname)) {
      return NextResponse.next();
    } else {
      return NextResponse.redirect(new URL("/dashboard", request.url));
    }
  } else {
    return NextResponse.redirect(new URL("/session-expired", request.url));
  }
}
