import { getToken } from 'next-auth/jwt';
import { NextRequestWithAuth, withAuth } from 'next-auth/middleware';
import { NextResponse } from 'next/server';

export default withAuth(
  async function middleware(req: NextRequestWithAuth) {
    const pathname = req.nextUrl.pathname;
    //protect routes
    const isAuth = await getToken({ req });
    const isLoginPage = pathname.startsWith('/login');
    const sensitiveRoutes = ['/dashboard'];

    const isAccessingSensitiveRoute = sensitiveRoutes.some((route) =>
      pathname.startsWith(route)
    );
    if (isLoginPage) {
      if (isAuth?.User) {
        return NextResponse.redirect(new URL('/dashboard', req.url));
      }
    }
    if (!isAuth?.User && isAccessingSensitiveRoute) {
      return NextResponse.redirect(new URL('/login', req.url));
    }
    // if (isAuth?.User.role !== 'ADMIN' && isAccessingSensitiveRoute) {
    //   return NextResponse.redirect(new URL('/', req.url));
    // }
    if (isAuth?.User && !isAccessingSensitiveRoute) {
      return NextResponse.redirect(new URL('/dashboard', req.url));
    }
  },
  {
    callbacks: {
      async authorized() {
        return true;
      },
    },
  }
);
export const config = {
  matcher: ['/', '/login', '/signup', '/tarifs', '/dashboard/:path*'],
};
