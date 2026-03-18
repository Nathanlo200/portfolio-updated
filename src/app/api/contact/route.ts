/**
 * Contact API route
 *
 * To enable email sending, set the following environment variables in `.env.local`:
 *   SMTP_HOST
 *   SMTP_PORT
 *   SMTP_USER
 *   SMTP_PASS
 *   EMAIL_TO
 *
 * Example (Mailtrap):
 *   SMTP_HOST=smtp.mailtrap.io
 *   SMTP_PORT=2525
 *   SMTP_USER=... 
 *   SMTP_PASS=...
 *   EMAIL_TO=nathanlomito@gmail.com
 */
import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

type RequestBody = {
  name: string;
  email: string;
  message: string;
};

function validateEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(request: Request) {
  const body: RequestBody = await request.json();

  if (!body.name || !body.email || !body.message) {
    return NextResponse.json({ error: "Missing required fields." }, { status: 400 });
  }

  if (!validateEmail(body.email)) {
    return NextResponse.json({ error: "Invalid email address." }, { status: 400 });
  }

  const smtpHost = process.env.SMTP_HOST;
  const smtpPort = Number(process.env.SMTP_PORT ?? 587);
  const smtpSecure =
    process.env.SMTP_SECURE?.toLowerCase() === "true" || smtpPort === 465;
  const smtpUser = process.env.SMTP_USER;
  const smtpPass = process.env.SMTP_PASS;
  const emailTo = process.env.EMAIL_TO;
  const emailFrom = process.env.EMAIL_FROM ?? smtpUser;

  if (!smtpHost || !smtpUser || !smtpPass || !emailTo) {
    return NextResponse.json(
      {
        error:
          "Email configuration is not set. Please define SMTP_HOST, SMTP_USER, SMTP_PASS, and EMAIL_TO in your environment.",
      },
      { status: 500 }
    );
  }

  const transporter = nodemailer.createTransport({
    host: smtpHost,
    port: smtpPort,
    secure: smtpSecure,
    auth: {
      user: smtpUser,
      pass: smtpPass,
    },
    // Allow STARTTLS on port 587 (and other non-465 ports).
    tls: {
      rejectUnauthorized: process.env.SMTP_TLS_REJECT_UNAUTHORIZED !== "false",
    },
  });

  const subject = `Portfolio message from ${body.name}`;
  const text = `Name: ${body.name}\nEmail: ${body.email}\n\n${body.message}`;
  const html = `
    <div>
      <p><strong>Name:</strong> ${body.name}</p>
      <p><strong>Email:</strong> ${body.email}</p>
      <div style="margin-top: 1rem;"><strong>Message:</strong></div>
      <p style="white-space: pre-wrap;">${body.message}</p>
    </div>
  `;

  try {
    await transporter.sendMail({
      from: emailFrom,
      to: emailTo,
      replyTo: body.email,
      subject,
      text,
      html,
    });
    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Failed to send contact email", error);
    return NextResponse.json({ error: "Failed to send email." }, { status: 500 });
  }
}
