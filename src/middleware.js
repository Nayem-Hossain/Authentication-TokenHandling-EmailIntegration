import { checkTokenCookieAuth } from "./app/api/utility/auxiliaryMiddleware";

export async function middleware(req) {
    if (req.nextUrl.pathname.startsWith('/profile')) {
        return checkTokenCookieAuth(req);
    }
}