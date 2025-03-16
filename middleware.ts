import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  // Add image optimization headers
  const response = NextResponse.next();

  if (request.nextUrl.pathname.match(/\.(jpg|jpeg|png|webp|avif)$/i)) {
    response.headers.set(
      "Cache-Control",
      "public, max-age=31536000, immutable"
    );
    response.headers.set("Accept-CH", "DPR, Width, Viewport-Width");
    response.headers.set("Accept-CH-Lifetime", "86400");
  }

  return response;
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
