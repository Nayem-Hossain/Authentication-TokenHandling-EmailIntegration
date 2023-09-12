import { createToken } from "./jwtEncodeDecode";

export async function setTokenCookie(email) {
    let getToken = await createToken(email);
    return { 'Set-Cookie': `token=${getToken}; Max-age=7200; Secure; HttpOnly; Path=/; SameSite=Strict;` }
}