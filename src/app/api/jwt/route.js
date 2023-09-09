// Steps of Token Encription:

// 1. import { SignJWT, jwtVerify } from "jose"
// 2. create a function using GET() method
// 3. get key from .env file
// 4. get payload(i.e. user_id, email)
// 5. create token by using:
// i) signJWT
// ii) setProtectedHeader
// iii) setIssuedAt
// iv) setIssuer
// v) setExpirationTime
// v) sign
// 6. Return encripted token as NextResponse

import { SignJWT, jwtVerify } from "jose";
import { NextResponse } from "next/server";

// token encoding

export async function GET() {
  const jwtKey = new TextEncoder().encode(process.env.JWT_KEY);
  const payload = { user_id: "01", email: "nayem.hossain7298@gmail.com" };
  let token = await new signJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setIssuer("http://localhost:3000")
    .setExpirationTime("2h")
    .sign(jwtKey);

  return NextResponse.json({ jwtToken: token });
}

// token decoding
