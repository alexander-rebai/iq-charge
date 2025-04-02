/* eslint-disable */
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { firstname, lastname, email, phone, message } = await request.json();

    const data = await resend.emails.send({
      from: "Contact Form <laadexpert@mail.leveragelabs.io>",
      to: ["info@laadexpert.be"],
      subject: "New Contact Form Submission",
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${firstname} ${lastname}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
      reply_to: email,
    });

    await resend.contacts.create({
      email: email,
      firstName: firstname,
      lastName: lastname,
      unsubscribed: false,
      audienceId: "a1dc23d7-6372-4de5-b9e8-2e89420dd867",
    });

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.log("error", error);
    return NextResponse.json(
      { success: false, error: "Failed to send email" },
      { status: 500 },
    );
  }
}
