import { EmailTemplate } from "@/components/email-template";
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  try {
    const json = await req.json();
    const { firstName, email, link } = json;
    const data = await resend.emails.send({
      from: "Quid Quest <onboarding@quid.quest>",
      to: [email],
      subject: "Onboading Invite",
      react: EmailTemplate({ firstName, link }),
    });

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}
