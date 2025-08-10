// import { cookies } from "next/headers";
// import { verifyToken } from "@/lib/jwt";
// const cookie=await cookies();
// export async function GET() {
//   const token = cookie.get("token")?.value;
//   if (!token) {
//     return new Response("Unauthorized", { status: 401 });
//   }

//   const user = verifyToken(token);
//   if (!user||typeof user==="string") {
//     return new Response("Invalid token", { status: 403 });
//   }

//   return new Response(`Hello user with ID ${user.userId}`);
// }

import { cookies } from "next/headers";
import { verifyToken } from "@/lib/jwt";

export async function GET(): Promise<Response> {
  const cookie = await cookies();
  const token = cookie.get("token")?.value;

  if (!token) {
    return new Response("Unauthorized", { status: 401 });
  }

  const user = verifyToken(token);
  if (!user || typeof user === "string") {
    return new Response("Invalid token", { status: 403 });
  }

  return new Response(`Hello user with ID ${user.userId}`);
}
