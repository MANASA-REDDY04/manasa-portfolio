import { NextResponse } from "next/server";
import { Resend } from "resend";
import * as z from "zod";
import { portfolioData } from "@/data/portfolio";

const resend = new Resend(process.env.RESEND_API_KEY);

const formSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  message: z.string().min(10),
  honeypot: z.string().max(0),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const data = formSchema.parse(body);

    if (data.honeypot) {
      // Return 200 to trick bots
      return NextResponse.json({ success: true });
    }

    if (!process.env.RESEND_API_KEY) {
      console.warn("RESEND_API_KEY is not set. Simulating success.");
      return NextResponse.json({ success: true, simulated: true });
    }

    await resend.emails.send({
      from: "Portfolio Contact Form <onboarding@resend.dev>",
      to: portfolioData.personal.email,
      subject: `New Message from ${data.name}`,
      text: `Name: ${data.name}\nEmail: ${data.email}\nMessage: ${data.message}`,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Failed to send email:", error);
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    );
  }
}
