// import { NextResponse } from 'next/server';
// import type { NextRequest } from 'next/server';
// import jwt from 'jsonwebtoken';

// export function middleware(req: NextRequest) {
//   const token = req.cookies.get('token')?.value;

//   // Agar /cart route open kiya aur token nahi hai → login pe bhej do
//   if (req.nextUrl.pathname.startsWith('/cart') && !token||req.nextUrl.pathname.startsWith('/menu')&& !token) {
//     return NextResponse.redirect(new URL('/login', req.url));
//   }

//   const res = NextResponse.next();

//   // Agar token hai → username header me set karo
//   if (token) {
//     try {
//       const decoded = jwt.verify(token, process.env.JWT_SECRET!) as any;
//       res.headers.set('x-user-name', decoded.name);
//     } catch {}
//   }

//   return res;
// }

// export const config = {
//   matcher: ['/cart/:path*', '/menu/:path*', '/((?!api|_next|static|favicon.ico).*)'],
// };


import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET!;

export function middleware(req: NextRequest) {
  const token = req.cookies.get('token')?.value;

  if (
    (req.nextUrl.pathname.startsWith('/cart') && !token) ||
    (req.nextUrl.pathname.startsWith('/menu') && !token)
  ) {
    return NextResponse.redirect(new URL('/login', req.url));
  }

  const res = NextResponse.next();

  if (token) {
    try {
      const decoded = jwt.verify(token, JWT_SECRET) as { name: string };
      res.headers.set('x-user-name', decoded.name);
    } catch {
      // optionally clear invalid token cookie here or handle error
    }
  }

  return res;
}

export const config = {
  matcher: ['/cart/:path*', '/menu/:path*', '/((?!api|_next|static|favicon.ico).*)'],
};
