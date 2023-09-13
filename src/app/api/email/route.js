import { NextResponse } from "next/server";
import nodemailer from 'nodemailer';

export async function GET(req, res) { // SMTP-simple mail transfer protocol.
    try {
        // 1. Get Email Address
        const { searchParams } = new URL(req.url);
        let receiverEmail = searchParams.get('email');

        // 2. Mail Transporter
        const transporter = nodemailer.createTransport({
            host: 'mail.teamrabbil.com',
            port: 25,
            secure: false,
            auth: {
                user: "info@teamrabbil.com",
                pass: "~sR4[bhaC[Qs",
            },
            tls: {
                rejectUnauthorized: false
            },
        });

        // 3. Mail Options
        let myEmail = {
            form: "info@teamrabbil.com",
            to: receiverEmail,
            subject: "Testing Email",
            text: "Hello! How are you ?",
            html: <a href="https://mail.google.com" target="blank">Try Gmail</a>
        }

        // 4. Send Email
        const result = await transporter.sendMail(myEmail);
        return NextResponse.json({ result: result })

    } catch (error) {
        return NextResponse.json({ result: error })
    }
}