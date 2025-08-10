// import jwt from 'jsonwebtoken';

// const JWT_SECRET = process.env.JWT_SECRET!;

// export function createJWT(user: { _id: string; firstName: string; lastName: string }) {
//   return jwt.sign(
//     {
//       userId: user._id,
//       name: `${user.firstName} ${user.lastName}`,  
//     },
//     process.env.JWT_SECRET!,
//     { expiresIn: '7d' }
//   );
// }


// export function verifyToken(token: string) {
//   try {
//     return jwt.verify(token, JWT_SECRET) as { userId: string; name: string };
//   } catch (err) {
//     return null;
//   }
// }

import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET!;

interface JwtPayload {
  userId: string;
  name: string;
}

export function createJWT(user: { _id: string; firstName: string; lastName: string }) {
  return jwt.sign(
    {
      userId: user._id,
      name: `${user.firstName} ${user.lastName}`,
    },
    JWT_SECRET,
    { expiresIn: '7d' }
  );
}

export function verifyToken(token: string): JwtPayload | null {
  try {
    return jwt.verify(token, JWT_SECRET) as JwtPayload;
  } catch (err) {
    return null;
  }
}
