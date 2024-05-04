// import { EmailTemplate } from '../../../components/EmailTemplate';
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req, res) {
  const { email, subject, message} = await req.body;
  console.log(email, subject, message);

  try {
    const data = await resend.emails.send({
      from: "Ujeong <uxia99@kakao.com>",
      to: ["uxia99@kakao.com"],
      subject: "Hello world",
      react: (
        <>
          <p>Email Body</p>
        </>
      ),
    });

    return Response.json(data);
  } catch (error) {
    return Response.json({ error });
  }
}
