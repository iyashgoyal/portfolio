import { NextResponse } from "next/server";

import nodemailer from "nodemailer";

export async function POST(request) {
  try {
    const { name, email, message } = await request.json();

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.MAILER_USER_EMAIL,
        pass: process.env.MAILER_USER_PASSWORD,
      },
    });

    const mailOptions = {
      from: `Yash Goyal <${process.env.MAILER_USER_EMAIL}>`,
      to: email,
      cc: "work.yashgoyal@gmail.com",
      subject: "Contact Yash Goyal",
      html: `
            <h2>Heloo <b>${name}</b>,</h2>
            <p>Your message was received, I will respond shortly.</p>
            <hr>
            <p>${message}</p>
          `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: "Email sent successfully" },
      { status: 200 }
    );
  } catch (error) {

    return NextResponse.json(
      { message: "Error sending email: " + error.message }, // Include error details
      { status: 500 }
    );
  }
}
