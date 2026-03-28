import { NextRequest, NextResponse } from "next/server";
import { getUser } from "./services/getUser";

export async function proxy(request: NextRequest) {
    const { data } = await getUser()

    if (!data?.isAdmin && request.nextUrl.pathname.startsWith("/admin")) {
        return NextResponse.json({ message: 'forbidden', status: 403 }, { status: 403 })
    }

    if (request.nextUrl.pathname.startsWith("/403") && !request.headers.get('x-middleware')) {
        return NextResponse.json({ status: 404 }, { status: 404 })
    }
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico, sitemap.xml, robots.txt (metadata files)
     */
    "/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)",
  ],
};