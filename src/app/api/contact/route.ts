import { NextResponse } from 'next/server';

const RECIPIENT = 'FILLER@example.com'; // TODO: replace with real email

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();

    if (!name?.trim() || !email?.trim() || !message?.trim()) {
      return NextResponse.json({ error: 'All fields are required.' }, { status: 400 });
    }

    // TODO: Replace with a real email service (SendGrid, Resend, etc.)
    // For now, log to the server console so you can verify it works.
    console.log('--- New Contact Form Submission ---');
    console.log(`To: ${RECIPIENT}`);
    console.log(`From: ${name} <${email}>`);
    console.log(`Message: ${message}`);
    console.log('----------------------------------');

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: 'Something went wrong.' }, { status: 500 });
  }
}
