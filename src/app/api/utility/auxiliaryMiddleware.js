import { NextResponse } from "next/server";
import { verifyToken } from "./jwtEncodeDecode";


export async function checkTokenCookieAuth(req) {
    try {
        let token = req.cookies.get('token');
        let payload = await verifyToken(token['value']);

        let requestHeaders = new Headers(req.headers);
        requestHeaders.set('email', payload['email']);

        return NextResponse.next({
            request: { headers: requestHeaders }
        })

    } catch (error) {
        console.log(error);
        return NextResponse.redirect(new URL('/login', req.url));
    }
}