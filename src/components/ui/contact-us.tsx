'use client';

import { useState } from 'react';

export default function ContactUsText() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  function validate() {
    const newErrors: Record<string, string> = {};
    if (!name.trim()) newErrors.name = 'Name is required';
    if (!email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = 'Please enter a valid email';
    }
    if (!message.trim()) newErrors.message = 'Message is required';
    return newErrors;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
    const newErrors = validate();
    setErrors(newErrors);
    if (Object.values(newErrors).some(Boolean)) return;

    setStatus('sending');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: name.trim(), email: email.trim(), message: message.trim() }),
      });
      if (!res.ok) throw new Error();
      setStatus('sent');
      setName('');
      setEmail('');
      setMessage('');
      setSubmitted(false);
    } catch {
      setStatus('error');
    }
  }

  return (
    <section className="py-20 bg-white flex-1">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-5xl mx-auto">

          {/* Left — Photo placeholders + info */}
          <div className="flex flex-col gap-8">
            {/* Photo grid */}
            <div className="grid grid-cols-2 gap-4">
              <div className="aspect-[4/3] rounded-2xl bg-gray-200 flex items-center justify-center">
                <span className="text-gray-400 text-sm">Photo</span>
              </div>
              <div className="aspect-[4/3] rounded-2xl bg-gray-200 flex items-center justify-center">
                <span className="text-gray-400 text-sm">Photo</span>
              </div>
              <div className="col-span-2 aspect-[2/1] rounded-2xl bg-gray-200 flex items-center justify-center">
                <span className="text-gray-400 text-sm">Photo</span>
              </div>
            </div>

            {/* Quick info */}
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 text-darkGreen-900 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <p className="text-gray-600">Hobart, Indiana &mdash; 33-acre farm</p>
              </div>
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 text-darkGreen-900 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <p className="text-gray-600">erinsfarm14@gmail.com</p>
              </div>
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 text-darkGreen-900 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p className="text-gray-600">Open for tours &amp; visits by appointment</p>
              </div>
            </div>
          </div>

          {/* Right — Contact form */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Send Us a Message</h2>
            <p className="text-gray-500 mb-8">We&rsquo;d love to hear from you. Fill out the form and we&rsquo;ll get back to you as soon as we can.</p>

            {status === 'sent' ? (
              <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center">
                <p className="text-green-800 font-semibold text-lg mb-1">Message sent!</p>
                <p className="text-green-700 text-sm">Thank you for reaching out. We&rsquo;ll be in touch soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-6">
                <div>
                  <label htmlFor="contact-name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                  <input
                    id="contact-name"
                    type="text"
                    value={name}
                    onChange={(e) => { setName(e.target.value); setErrors((p) => ({ ...p, name: '' })); }}
                    className={`w-full rounded-lg border px-4 py-3 text-gray-900 outline-none transition focus:ring-2 focus:ring-darkGreen-900/30 ${submitted && errors.name ? 'border-red-500' : 'border-gray-300'}`}
                    placeholder="Your name"
                  />
                  {submitted && errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                </div>

                <div>
                  <label htmlFor="contact-email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input
                    id="contact-email"
                    type="email"
                    value={email}
                    onChange={(e) => { setEmail(e.target.value); setErrors((p) => ({ ...p, email: '' })); }}
                    className={`w-full rounded-lg border px-4 py-3 text-gray-900 outline-none transition focus:ring-2 focus:ring-darkGreen-900/30 ${submitted && errors.email ? 'border-red-500' : 'border-gray-300'}`}
                    placeholder="you@example.com"
                  />
                  {submitted && errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                </div>

                <div>
                  <label htmlFor="contact-message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                  <textarea
                    id="contact-message"
                    rows={5}
                    value={message}
                    onChange={(e) => { setMessage(e.target.value); setErrors((p) => ({ ...p, message: '' })); }}
                    className={`w-full rounded-lg border px-4 py-3 text-gray-900 outline-none transition focus:ring-2 focus:ring-darkGreen-900/30 resize-none ${submitted && errors.message ? 'border-red-500' : 'border-gray-300'}`}
                    placeholder="How can we help?"
                  />
                  {submitted && errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
                </div>

                {status === 'error' && (
                  <p className="text-red-500 text-sm">Something went wrong. Please try again.</p>
                )}

                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="w-full bg-darkGreen-900 hover:bg-darkGreen-800 disabled:opacity-60 text-white font-semibold py-4 rounded-lg text-lg transition"
                >
                  {status === 'sending' ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
