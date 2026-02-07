'use client';

import { useState } from 'react';
import Header from '@/components/layout/header';

const presetAmounts = [10, 20, 50, 100];
const frequencies = [
  { value: 'one-time', label: 'One-Time' },
  { value: 'monthly', label: 'Monthly' },
  { value: 'quarterly', label: 'Quarterly' },
  { value: 'yearly', label: 'Yearly' },
];

export default function DonatePage() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [amount, setAmount] = useState<number | ''>('');
  const [customAmount, setCustomAmount] = useState('');
  const [frequency, setFrequency] = useState('one-time');
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const selectedAmount = amount || (customAmount ? parseFloat(customAmount) : 0);

  function validate() {
    const newErrors: Record<string, string> = {};
    if (!firstName.trim()) newErrors.firstName = 'First name is required';
    if (!lastName.trim()) newErrors.lastName = 'Last name is required';
    if (!email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = 'Please enter a valid email';
    }
    if (!selectedAmount || selectedAmount <= 0) {
      newErrors.amount = 'Please select or enter a donation amount';
    }
    return newErrors;
  }

  function handlePresetClick(value: number) {
    setAmount(value);
    setCustomAmount('');
    setErrors((prev) => ({ ...prev, amount: '' }));
  }

  function handleCustomAmountChange(value: string) {
    setCustomAmount(value);
    setAmount('');
    setErrors((prev) => ({ ...prev, amount: '' }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
    const newErrors = validate();
    setErrors(newErrors);

    if (Object.values(newErrors).some(Boolean)) return;

    const params = new URLSearchParams({
      business: 'erinsfarm14@gmail.com',
      amount: String(selectedAmount),
      currency_code: 'USD',
      first_name: firstName.trim(),
      last_name: lastName.trim(),
      email: email.trim(),
    });

    if (frequency !== 'one-time') {
      params.set('recurring', '1');
    }

    window.open(
      `https://www.paypal.com/donate/?${params.toString()}`,
      '_blank',
      'noopener,noreferrer'
    );
  }

  return (
    <div className="bg-body text-body font-body antialiased min-h-screen flex flex-col">
      <Header variant="home" />

      {/* Page Hero */}
      <section className="bg-darkGreen-900 pt-32 pb-20">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm font-semibold tracking-widest uppercase text-white/60 mb-4">Support Our Mission</p>
          <h1 className="font-heading text-white text-4xl md:text-6xl font-bold">Donate</h1>
        </div>
      </section>

      {/* Donate Form */}
      <section className="py-20 bg-white flex-1">
        <div className="container mx-auto px-4 max-w-xl">
          <form onSubmit={handleSubmit} noValidate className="space-y-8">
            {/* Name Fields */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                <input
                  id="firstName"
                  type="text"
                  value={firstName}
                  onChange={(e) => { setFirstName(e.target.value); setErrors((prev) => ({ ...prev, firstName: '' })); }}
                  className={`w-full rounded-lg border px-4 py-3 text-gray-900 outline-none transition focus:ring-2 focus:ring-darkGreen-900/30 ${submitted && errors.firstName ? 'border-red-500' : 'border-gray-300'}`}
                  placeholder="First name"
                />
                {submitted && errors.firstName && <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>}
              </div>
              <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                <input
                  id="lastName"
                  type="text"
                  value={lastName}
                  onChange={(e) => { setLastName(e.target.value); setErrors((prev) => ({ ...prev, lastName: '' })); }}
                  className={`w-full rounded-lg border px-4 py-3 text-gray-900 outline-none transition focus:ring-2 focus:ring-darkGreen-900/30 ${submitted && errors.lastName ? 'border-red-500' : 'border-gray-300'}`}
                  placeholder="Last name"
                />
                {submitted && errors.lastName && <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>}
              </div>
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => { setEmail(e.target.value); setErrors((prev) => ({ ...prev, email: '' })); }}
                className={`w-full rounded-lg border px-4 py-3 text-gray-900 outline-none transition focus:ring-2 focus:ring-darkGreen-900/30 ${submitted && errors.email ? 'border-red-500' : 'border-gray-300'}`}
                placeholder="you@example.com"
              />
              {submitted && errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
            </div>

            {/* Amount */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">Donation Amount</label>
              <div className="flex flex-wrap gap-3 mb-3">
                {presetAmounts.map((preset) => (
                  <button
                    key={preset}
                    type="button"
                    onClick={() => handlePresetClick(preset)}
                    className={`px-6 py-3 rounded-lg font-semibold text-sm transition ${
                      amount === preset
                        ? 'bg-darkGreen-900 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    ${preset}
                  </button>
                ))}
              </div>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 font-medium">$</span>
                <input
                  type="number"
                  min="1"
                  step="any"
                  value={customAmount}
                  onChange={(e) => handleCustomAmountChange(e.target.value)}
                  className={`w-full rounded-lg border pl-8 pr-4 py-3 text-gray-900 outline-none transition focus:ring-2 focus:ring-darkGreen-900/30 ${submitted && errors.amount ? 'border-red-500' : 'border-gray-300'}`}
                  placeholder="Custom amount"
                />
              </div>
              {submitted && errors.amount && <p className="text-red-500 text-sm mt-1">{errors.amount}</p>}
            </div>

            {/* Frequency */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">Frequency</label>
              <div className="flex flex-wrap gap-2">
                {frequencies.map((freq) => (
                  <button
                    key={freq.value}
                    type="button"
                    onClick={() => setFrequency(freq.value)}
                    className={`px-5 py-2.5 rounded-full text-sm font-medium transition ${
                      frequency === freq.value
                        ? 'bg-darkGreen-900 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {freq.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full bg-darkGreen-900 hover:bg-darkGreen-800 text-white font-semibold py-4 rounded-lg text-lg transition"
            >
              Donate {selectedAmount ? `$${selectedAmount}` : ''}{frequency !== 'one-time' ? ` ${frequency}` : ''}
            </button>

            <p className="text-center text-gray-400 text-sm">
              You will be redirected to PayPal to complete your donation securely.
            </p>
          </form>
        </div>
      </section>

      <footer className="bg-darkGreen-900 py-6 text-center mt-auto">
        <p className="text-white/80 text-sm">Erin&apos;s Farm NFP &copy; 2026 | All Rights Reserved</p>
      </footer>
    </div>
  );
}
