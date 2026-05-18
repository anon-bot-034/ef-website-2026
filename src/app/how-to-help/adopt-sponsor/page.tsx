'use client';

import { useState, useRef } from 'react';
import Image from 'next/image';
import Header from '@/components/layout/header';

const animals = [
  {
    name: 'Daisy',
    species: 'Goat',
    photo: '/images/IMG_5268.jpg',
    bio: 'Daisy is a playful Nigerian Dwarf goat who loves scratches behind the ears and sneaking treats from visitors.',
  },
  {
    name: 'Clover',
    species: 'Sheep',
    photo: '/images/IMG_5609.jpg',
    bio: 'Clover arrived at the farm as a tiny lamb and has grown into one of the friendliest members of the flock.',
  },
  {
    name: 'Biscuit',
    species: 'Pig',
    photo: '/images/IMG_5547.jpg',
    bio: 'Biscuit is a curious Kunekune pig who enjoys belly rubs and rolling in the mud on warm afternoons.',
  },
  {
    name: 'Maple',
    species: 'Horse',
    photo: '/images/IMG_7289.jpg',
    bio: 'Maple is a gentle quarter horse who has been with the farm since the very beginning. She loves apples and long walks.',
  },
];

const sponsorTiers = [
  { value: '$15/month', label: '$15/month', description: 'Covers basic feed and bedding.' },
  { value: '$30/month', label: '$30/month', description: 'Feed, bedding, and routine vet care.' },
  { value: '$50/month', label: '$50/month', description: 'Full sponsorship: feed, vet, shelter, and enrichment.' },
];

const countries = ['United States', 'Canada', 'United Kingdom', 'Australia', 'Other'];

export default function AdoptSponsorPage() {
  const formRef = useRef<HTMLDivElement>(null);

  const [selectedAnimal, setSelectedAnimal] = useState('');
  const [sponsorTier, setSponsorTier] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [confirmEmail, setConfirmEmail] = useState('');
  const [address, setAddress] = useState('');
  const [address2, setAddress2] = useState('');
  const [city, setCity] = useState('');
  const [stateRegion, setStateRegion] = useState('');
  const [zip, setZip] = useState('');
  const [country, setCountry] = useState('');
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  function scrollToForm(animalName: string) {
    setSelectedAnimal(animalName);
    formRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  function validate() {
    const errs: Record<string, string> = {};
    if (!firstName.trim()) errs.firstName = 'Required';
    if (!lastName.trim()) errs.lastName = 'Required';
    if (!email.trim()) errs.email = 'Required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errs.email = 'Enter a valid email';
    if (!confirmEmail.trim()) errs.confirmEmail = 'Required';
    else if (email !== confirmEmail) errs.confirmEmail = 'Emails do not match';
    if (!address.trim()) errs.address = 'Required';
    if (!city.trim()) errs.city = 'Required';
    if (!stateRegion.trim()) errs.stateRegion = 'Required';
    if (!zip.trim()) errs.zip = 'Required';
    if (!country) errs.country = 'Required';
    if (!selectedAnimal) errs.animal = 'Please select an animal';
    if (!sponsorTier) errs.sponsorTier = 'Please select a sponsorship tier';
    return errs;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
    const errs = validate();
    setErrors(errs);
    if (Object.keys(errs).length > 0) return;

    setLoading(true);
    try {
      const res = await fetch('/api/adopt', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          firstName, lastName, email,
          address, address2, city, state: stateRegion, zip, country,
          animal: selectedAnimal, sponsorTier,
        }),
      });
      if (res.ok) {
        setSuccess(true);
      } else {
        setErrors({ submit: 'Something went wrong. Please try again.' });
      }
    } catch {
      setErrors({ submit: 'Something went wrong. Please try again.' });
    } finally {
      setLoading(false);
    }
  }

  const inputClass = (field: string) =>
    `w-full rounded-lg border px-4 py-3 text-gray-900 outline-none transition focus:ring-2 focus:ring-darkGreen-900/30 ${
      submitted && errors[field] ? 'border-red-500' : 'border-gray-300'
    }`;

  return (
    <div className="bg-body text-body font-body antialiased min-h-screen flex flex-col">
      <Header variant="home" />

      {/* Page Hero */}
      <section className="bg-darkGreen-900 pt-32 pb-20">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm font-semibold tracking-widest uppercase text-white/60 mb-4">Make a Difference</p>
          <h1 className="font-heading text-white text-4xl md:text-6xl font-bold">Adopt &amp; Sponsor an Animal</h1>
          <p className="mt-4 text-white/70 max-w-2xl mx-auto">
            By sponsoring one of our resident animals, you directly help cover the cost of their feed, veterinary care, and shelter.
            Each animal can have multiple sponsors&mdash;there&rsquo;s always room for more love.
          </p>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">How Sponsorship Works</h2>
          <p className="text-gray-600 leading-relaxed mb-8">
            Choose an animal below and select a monthly sponsorship plan that fits your budget. Your contribution goes
            directly toward that animal&rsquo;s care. Multiple people can sponsor the same animal, so don&rsquo;t worry if
            your favorite already has a sponsor&mdash;they can always use more support!
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-left">
            {sponsorTiers.map((tier) => (
              <div key={tier.value} className="bg-gray-50 rounded-xl p-6">
                <p className="text-lg font-semibold text-darkGreen-900 mb-2">{tier.label}</p>
                <p className="text-sm text-gray-600">{tier.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Animal Cards */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Meet the Animals</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {animals.map((animal) => (
              <div key={animal.name} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 flex flex-col">
                <div className="aspect-square relative overflow-hidden bg-gray-200">
                  <Image src={animal.photo} alt={animal.name} fill className="object-cover" />
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <h3 className="text-lg font-bold text-gray-900">{animal.name}</h3>
                  <p className="text-sm text-darkGreen-900 font-medium mb-2">{animal.species}</p>
                  <p className="text-sm text-gray-600 leading-relaxed flex-1">{animal.bio}</p>
                  <button
                    onClick={() => scrollToForm(animal.name)}
                    className="mt-4 w-full text-center bg-darkGreen-900 hover:bg-darkGreen-800 text-white font-semibold px-4 py-2.5 rounded-lg text-sm transition"
                  >
                    Adopt {animal.name}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Adoption Form */}
      <section className="py-20 bg-white" ref={formRef}>
        <div className="container mx-auto px-4 max-w-2xl">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-10">Adopt an Animal</h2>

          {success ? (
            <div className="text-center py-16">
              <div className="text-5xl mb-4">🐾</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Thank you!</h3>
              <p className="text-gray-600">We&rsquo;ve received your adoption request for <strong>{selectedAnimal}</strong> at <strong>{sponsorTier}</strong>. We&rsquo;ll be in touch soon.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="space-y-8">

              {/* Animal + Tier */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">I would like to adopt <span className="text-red-500">*</span></label>
                  <select
                    value={selectedAnimal}
                    onChange={(e) => { setSelectedAnimal(e.target.value); setErrors((p) => ({ ...p, animal: '' })); }}
                    className={inputClass('animal')}
                  >
                    <option value="">Select an animal</option>
                    {animals.map((a) => (
                      <option key={a.name} value={a.name}>{a.name} ({a.species})</option>
                    ))}
                  </select>
                  {submitted && errors.animal && <p className="text-red-500 text-sm mt-1">{errors.animal}</p>}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Sponsorship tier <span className="text-red-500">*</span></label>
                  <select
                    value={sponsorTier}
                    onChange={(e) => { setSponsorTier(e.target.value); setErrors((p) => ({ ...p, sponsorTier: '' })); }}
                    className={inputClass('sponsorTier')}
                  >
                    <option value="">Select a tier</option>
                    {sponsorTiers.map((t) => (
                      <option key={t.value} value={t.value}>{t.label} – {t.description}</option>
                    ))}
                  </select>
                  {submitted && errors.sponsorTier && <p className="text-red-500 text-sm mt-1">{errors.sponsorTier}</p>}
                </div>
              </div>

              {/* Name */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <input type="text" value={firstName} onChange={(e) => { setFirstName(e.target.value); setErrors((p) => ({ ...p, firstName: '' })); }} className={inputClass('firstName')} placeholder="First" />
                    {submitted && errors.firstName && <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>}
                  </div>
                  <div>
                    <input type="text" value={lastName} onChange={(e) => { setLastName(e.target.value); setErrors((p) => ({ ...p, lastName: '' })); }} className={inputClass('lastName')} placeholder="Last" />
                    {submitted && errors.lastName && <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>}
                  </div>
                </div>
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email <span className="text-red-500">*</span></label>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <input type="email" value={email} onChange={(e) => { setEmail(e.target.value); setErrors((p) => ({ ...p, email: '' })); }} className={inputClass('email')} placeholder="Enter email" />
                    {submitted && errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                  </div>
                  <div>
                    <input type="email" value={confirmEmail} onChange={(e) => { setConfirmEmail(e.target.value); setErrors((p) => ({ ...p, confirmEmail: '' })); }} className={inputClass('confirmEmail')} placeholder="Confirm email" />
                    {submitted && errors.confirmEmail && <p className="text-red-500 text-sm mt-1">{errors.confirmEmail}</p>}
                  </div>
                </div>
              </div>

              {/* Address */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Address <span className="text-red-500">*</span></label>
                <div className="space-y-3">
                  <div>
                    <input type="text" value={address} onChange={(e) => { setAddress(e.target.value); setErrors((p) => ({ ...p, address: '' })); }} className={inputClass('address')} placeholder="Street Address" />
                    {submitted && errors.address && <p className="text-red-500 text-sm mt-1">{errors.address}</p>}
                  </div>
                  <input type="text" value={address2} onChange={(e) => setAddress2(e.target.value)} className={inputClass('')} placeholder="Address Line 2 (optional)" />
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <input type="text" value={city} onChange={(e) => { setCity(e.target.value); setErrors((p) => ({ ...p, city: '' })); }} className={inputClass('city')} placeholder="City" />
                      {submitted && errors.city && <p className="text-red-500 text-sm mt-1">{errors.city}</p>}
                    </div>
                    <div>
                      <input type="text" value={stateRegion} onChange={(e) => { setStateRegion(e.target.value); setErrors((p) => ({ ...p, stateRegion: '' })); }} className={inputClass('stateRegion')} placeholder="State / Province / Region" />
                      {submitted && errors.stateRegion && <p className="text-red-500 text-sm mt-1">{errors.stateRegion}</p>}
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <input type="text" value={zip} onChange={(e) => { setZip(e.target.value); setErrors((p) => ({ ...p, zip: '' })); }} className={inputClass('zip')} placeholder="ZIP / Postal Code" />
                      {submitted && errors.zip && <p className="text-red-500 text-sm mt-1">{errors.zip}</p>}
                    </div>
                    <div>
                      <select value={country} onChange={(e) => { setCountry(e.target.value); setErrors((p) => ({ ...p, country: '' })); }} className={inputClass('country')}>
                        <option value="">Country</option>
                        {countries.map((c) => <option key={c} value={c}>{c}</option>)}
                      </select>
                      {submitted && errors.country && <p className="text-red-500 text-sm mt-1">{errors.country}</p>}
                    </div>
                  </div>
                </div>
              </div>

              {errors.submit && <p className="text-red-500 text-sm text-center">{errors.submit}</p>}

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-darkGreen-900 hover:bg-darkGreen-800 disabled:opacity-60 text-white font-semibold py-4 rounded-lg text-lg transition"
              >
                {loading ? 'Submitting…' : 'Submit'}
              </button>
            </form>
          )}
        </div>
      </section>

      <footer className="bg-darkGreen-900 py-6 text-center mt-auto">
        <p className="text-white/80 text-sm">Erin&apos;s Farm NFP &copy; 2026 | All Rights Reserved</p>
      </footer>
    </div>
  );
}
