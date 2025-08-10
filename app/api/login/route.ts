// // app/api/login/route.js
// import { NextRequest, NextResponse } from 'next/server';
// import User from "@/models/User";
// import bcrypt from 'bcryptjs';
// import { createJWT } from '@/lib/jwt';
// import connectDB from '@/lib/mongodb';
// import { cookies } from 'next/headers';

// export async function POST(req:NextRequest) {

//   await connectDB();
//   const body = await req.json(); // get JSON body from request
// // check what you get from client
//   const { email, password } = body;
//    console.log("login api", body);
//    if (!email || !password) {
//     return NextResponse.json({ message: "Missing fields" }, { status: 400 });
//   }

//   const user = await User.findOne({email});

//   if(!user) {
//     return NextResponse.json({ message: "Invalid credentials 1" }, { status: 403 });
//   }

//   const isMatch = await bcrypt.compare(password, user.password);
  
//   if(!isMatch){
     
//        return NextResponse.json({ message: "Invalid credentials 2" }, { status: 401 });

//   }

//  const token = createJWT({
//   _id: user._id,
//   firstName: user.firstName,
//   lastName: user.lastName,
// });
//       const cookieStore = await cookies();
//       cookieStore.set("token", token, {
//         httpOnly: true,
//         secure: process.env.NODE_ENV === "production",
//         sameSite: "strict",
//         maxAge: 60 * 60 * 24 * 7, // 7 days
//         path: "/",
//       });
//   return NextResponse.json({ message: "Login successful", token, user });
// }


import { NextRequest, NextResponse } from 'next/server';
import User from "@/models/User";
import bcrypt from 'bcryptjs';
import { createJWT } from '@/lib/jwt';
import connectDB from '@/lib/mongodb';
import { cookies } from 'next/headers';

export async function POST(req: NextRequest): Promise<NextResponse> {
  await connectDB();
  
  const body = await req.json() as { email: string; password: string };
  const { email, password } = body;

  console.log("login api", body);

  if (!email || !password) {
    return NextResponse.json({ message: "Missing fields" }, { status: 400 });
  }

  const user = await User.findOne({ email });

  if (!user) {
    return NextResponse.json({ message: "Invalid credentials 1" }, { status: 403 });
  }

  const isMatch = await bcrypt.compare(password, user.password);

  if (!isMatch) {
    return NextResponse.json({ message: "Invalid credentials 2" }, { status: 401 });
  }

  const token = createJWT({
    _id: user._id,
    firstName: user.firstName,
    lastName: user.lastName,
  });

  const cookieStore = await cookies();
  cookieStore.set("token", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    maxAge: 60 * 60 * 24 * 7, // 7 days
    path: "/",
  });

  return NextResponse.json({ message: "Login successful", token, user });
}
