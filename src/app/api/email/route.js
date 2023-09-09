import { NextResponse } from "next/server";

export async function GET(req, res) { // SMTP-simple mail transfer protocol.

    // 1. Get Email Address
    const { searchParams } = new URL(req.url);
    let receiverEmail = searchParams.get('email')

    // 2. Mail Transporter
    let mailTransporter = nodemailer.createTransport({
        host: '',
        port: '',
        secure: '',
        auth: '',
        tls: '',
    })

    // 3. Mail Options
    let mailOptons = {
        form: "",
        to: "",
        sub: "",
        text: "",
    }

    // 3. Results
    const result = await mailTransporter.sendmail(mailOptons)
}