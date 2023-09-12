// # Steps of Token Encoding:

// 1. import { SignJWT, jwtVerify } from "jose"
// 2. create a function using GET() method
// 3. get secret_key from .env file
// 4. get payload(i.e. user_id, email)
// 5. create token by using:
// i) signJWT
// ii) setProtectedHeader
// iii) setIssuedAt
// iv) setIssuer
// v) setExpirationTime
// v) sign
// 6. Return encripted token as NextResponse


//----------------------------------------------//


// # Steps of Token Decoding:

// 1. get secret_key from .env file
// 2. decoding by using jwtVerify() built-in method from jose packege
// 3. return verified token

import { SignJWT, jwtVerify } from "jose";

// token encoding

export async function createToken(email) {
    const jwtSecretKey = new TextEncoder().encode(process.env.JWT_SECRET_KEY);
    const payload = { email: email };
    let tokenCreate = await new SignJWT(payload) // token encoding
        .setProtectedHeader({ alg: "HS256" })
        .setIssuedAt() // current time
        .setIssuer(process.env.JWT_ISSUER)
        .setExpirationTime(process.env.JWT_EXPIRE_TIME)
        .sign(jwtSecretKey);

    return tokenCreate;
}

// token decoding

export async function verifyToken(jwtToken) {
    const jwtSecretKey = new TextEncoder().encode(process.env.JWT_SECRET_KEY);
    const tokenVerified = await jwtVerify(jwtToken, jwtSecretKey); // token decoding

    return tokenVerified;
}