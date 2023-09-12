import { NextResponse } from "next/server";
import { setTokenCookie } from "../utility/setTokenCookie";
import { cookies } from "next/headers";

export async function POST(req, res) {
    const data = await req.json();
    let email = data['email'];
    let password = data['password'];

    if (email === 'nayem.hossain7298@gmail.com' && password === '123') {
        let cookie = await setTokenCookie(email);

        return NextResponse.json(
            {
                status: true,
                message: 'login success',

            },
            {
                status: 200,
                headers: cookie,

            }
        )
    } else {
        return NextResponse.json(
            {
                status: false,
                message: 'login faild',

            },

        )
    }
}

export async function GET(req, res) {
    cookies().delete('token');
    return NextResponse.json(
        {
            status: true,
            message: 'logout success',

        },

    )
}