// import { EmailTemplate } from '../../../components/EmailTemplate';
import { sendMail } from "@/app/services/common";
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = process.env.FROM_EMAIL;

export async function POST(req, res) {
  const { to, subject, text } = await req.json();
  console.log(to, subject, text);
  try {
    //   const data = await resend.emails.send({
    //     from: fromEmail,
    //     to: [fromEmail, email],
    //     subject: subject,
    //     react: (
    //       <>
    //         <h1>{subject}</h1>
    //         <p>Thank you for contacting us!</p>
    //         <p>New message submitted:</p>
    //         <p>{message}</p>
    //       </>
    //     ),
    //   });
    // return NextResponse.json(data);
    const data = await sendMail({
      to,
      subject,
      text,
    });
    return NextResponse.json({ success: true, data: data }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error });
  }
}
