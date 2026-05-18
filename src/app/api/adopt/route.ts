import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);
const RECIPIENT = 'connor.yanz@gmail.com';

function esc(str: string) {
  return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

export async function POST(request: Request) {
  try {
    const { firstName, lastName, email, address, city, state, zip, country, animal, sponsorTier } = await request.json();

    if (!firstName?.trim() || !lastName?.trim() || !email?.trim() || !animal?.trim() || !sponsorTier?.trim()) {
      return NextResponse.json({ error: 'Required fields are missing.' }, { status: 400 });
    }

    await resend.emails.send({
      from: "Erin's Farm <onboarding@resend.dev>",
      to: RECIPIENT,
      subject: `New Adoption Request – ${animal}`,
      html: `
        <h2>New Animal Adoption Request</h2>
        <p><strong>Animal:</strong> ${esc(animal)}</p>
        <p><strong>Sponsorship Tier:</strong> ${esc(sponsorTier)}</p>
        <hr />
        <p><strong>Name:</strong> ${esc(firstName)} ${esc(lastName)}</p>
        <p><strong>Email:</strong> ${esc(email)}</p>
        <p><strong>Address:</strong> ${esc(address || '—')}</p>
        <p><strong>City:</strong> ${esc(city || '—')}</p>
        <p><strong>State:</strong> ${esc(state || '—')}</p>
        <p><strong>ZIP:</strong> ${esc(zip || '—')}</p>
        <p><strong>Country:</strong> ${esc(country || '—')}</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: 'Something went wrong.' }, { status: 500 });
  }
}
