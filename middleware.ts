import { NextRequest, NextResponse } from 'next/server'

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl

  // Admin login page — allow karo
  if (pathname === '/admin/login') {
    return NextResponse.next()
  }

  // Admin pages — cookie check karo
  if (pathname.startsWith('/admin')) {
    const token = req.cookies.get('admin_token')?.value

    if (!token || token !== process.env.ADMIN_PASSWORD) {
      return NextResponse.redirect(new URL('/admin/login', req.url))
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/admin/:path*'],
}
