import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: process.env.SMTP_SECURE === "true",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: `"BYD B Website" <${process.env.SMTP_USER}>`,
      to: "bpanahi@bydb.com.au",
      replyTo: body.email,
      subject: `New Quote Request from ${body.name}`,
      text: `
New quote request received from the website.

Name:         ${body.name}
Email:        ${body.email}
Phone:        ${body.phone}
Project Type: ${body.projectType}
Suburb:       ${body.suburb || "Not provided"}
Budget:       ${body.budget || "Not provided"}
Date:         ${new Date().toLocaleString("en-AU", { timeZone: "Australia/Perth" })}

Message:
${body.message}
      `.trim(),
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error sending quote email:", error);
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
  }
}
