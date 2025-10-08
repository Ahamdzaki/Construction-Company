import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    // --- DEBUGGING ENV VARIABLES ---
    console.log("SMTP_HOST:", process.env.SMTP_HOST);
    console.log("SMTP_PORT:", process.env.SMTP_PORT);
    console.log("SMTP_SECURE:", process.env.SMTP_SECURE);
    console.log("SMTP_USER:", process.env.SMTP_USER);
    console.log("SMTP_PASS length:", process.env.SMTP_PASS?.length);
    console.log("REVIEW_INBOX:", process.env.REVIEW_INBOX);

    const body = await req.json();

    // Create transporter using environment variables
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
      from: `"Website Reviews" <${process.env.SMTP_USER}>`,
      to: process.env.REVIEW_INBOX,
      subject: `New Review from ${body.name}`,
      text: `
Name: ${body.name}
Email: ${body.email}
Title: ${body.title}
Rating: ${body.rating}/5
Date: ${new Date().toLocaleString("en-AU", { timeZone: "Australia/Sydney" })}
Review:
${body.review}
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
  }
}
