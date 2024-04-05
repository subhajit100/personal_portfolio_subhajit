// import { EmailTemplate } from '../../../components/EmailTemplate';
import { sendMail } from "@/app/services/common";
import { NextResponse } from "next/server";

export async function POST(req, res) {
  const { to, subject, text } = await req.json();
  console.log(to, subject, text);
  try {
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
