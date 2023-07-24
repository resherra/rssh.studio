import Email from "../../../components/email/index"
import { NextResponse } from "next/server"
import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST() {
  try {
    const data = await resend.emails.send({
      from: "jack <contact@chred.me>",
      to: ["redouancherrat@gmail.com"],
      subject: "Hello jack",
      react: Email(),
    })

    return NextResponse.json(data)
  } catch (error) {
    return NextResponse.json({ error })
  }
}
