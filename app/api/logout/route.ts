// // app/api/logout/route.ts
// import { NextResponse } from 'next/server';

// export async function POST() {
//   const res = NextResponse.json({ message: 'Logged out' });
//   res.cookies.set('token', '', {
//     httpOnly: true,
//     expires: new Date(0),
//   });
//   return res;
// }

// app/api/logout/route.ts
import { NextResponse } from 'next/server';

export async function POST() {
  const response = new NextResponse(JSON.stringify({ message: 'Logged out' }), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
    },
  });

  response.cookies.set('token', '', {
    httpOnly: true,
    expires: new Date(0),
    path: '/',
  });

  return response;
}
