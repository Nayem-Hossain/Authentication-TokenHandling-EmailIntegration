import { NextResponse } from "next/server";
import nodemailer from 'nodemailer';

export async function POST(req, res) { // SMTP-simple mail transfer protocol.
    const data = await req.json()

    let subject = data['subject'];
    let email = data['email'];
    let message = data['message'];

    // 1. Get Email Address from params
    /* const { searchParams } = new URL(req.url);
    let receiverEmail = searchParams.get('email'); */

    // 2. Mail Transporter

    // let transporter = nodemailer.createTransport({
    //     host: "mail.teamrabbil.com",
    //     port: 25,
    //     secure: false,
    //     auth: {
    //         user: "info@teamrabbil.com",
    //         pass: "~sR4[bhaC[Qs",
    //     },
    //     tls: {
    //         rejectUnauthorized: false,
    //     },
    // });

    // 3. Mail Options

    // let myEmail = {
    //     from: "info@teamrabbil.com",
    //     to: receiverEmail,
    //     subject: "Testing Email",
    //     text: "Hello! How are you ?",
    //     html: "<p>See <a href='https://nodemailer.com/smtp/oauth2/'>Nodemailer OAuth2 Doc.</a></p>",
    // }

    /* According to OAuth2 => transporter and mailOptions format */

    let transporter = nodemailer.createTransport({
        service: 'gmail',
        host: "smtp.gmail.com",
        secure: false, // true for "port: 465", false for other ports
        auth: {
            user: process.env.NODEMAIL_USER,
            // pass: process.env.NODEMAIL_APP_PASS, // App password does not require when use type OAuth2 
            type: "OAuth2",
            clientId: process.env.NODEMAIL_OAUTH2_CLIENT_ID,
            clientSecret: process.env.NODEMAIL_OAUTH2_CLIENT_SECRET,

            accessToken: process.env.NODEMAIL_OAUTH2_ACCESS_TOKEN,
            refreshToken: process.env.NODEMAIL_OAUTH2_REFRESH_TOKEN,
            expires: 3599,
        },
    });

    // According to OAuth2 mailOptions formatting
    let myEmail = {
        from: process.env.NODEMAIL_USER,
        to: email,
        subject: subject,
        text: "",
        html: `<p>${message}<br/><a href='https://nodemailer.com/smtp/oauth2/'>Nodemail OAuth2.</a></p>`,
    }

    // 4. Send Email
    try {

        await transporter.sendMail(myEmail);
        return NextResponse.json({ message: "send email successfully" })

    } catch (error) {
        return NextResponse.json({ status: false, message: "sending email faild" })
    }
}