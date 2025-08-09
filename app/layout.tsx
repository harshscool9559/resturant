// app/layout.tsx
import { cookies } from "next/headers";
import Layout from "@/component/Layout";
import jwt from "jsonwebtoken";

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const cookieStore = await cookies();
  const token = cookieStore.get("token")?.value || null;

  let username: string | null = null;

  if (token) {
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET!) as { name?: string };
      username = decoded.name || null;
    } catch (err) {
      console.error("Invalid token:", err);
    }
  }

  return (
    <html lang="en">
      <body>
        <Layout username={username}>{children}</Layout>
      </body>
    </html>
  );
}


