import { auth } from "~/libraries/auth"

export const middleware = auth(req => {
  if (!req.auth && req.nextUrl.pathname !== "/api/auth/signin") {
    return Response.redirect(new URL("/api/auth/signin", req.nextUrl.origin))
  }
})

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
}
