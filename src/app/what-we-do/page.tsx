'use client';

import Header from '@/components/layout/header';

export default function WhatWeDoPage() {
  return (
    <div className="bg-body text-body font-body antialiased min-h-screen flex flex-col">
      <Header variant="home" />

      {/* Page Hero */}
      <section className="bg-darkGreen-900 pt-32 pb-20">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm font-semibold tracking-widest uppercase text-white/60 mb-4">Our Work</p>
          <h1 className="font-heading text-white text-4xl md:text-6xl font-bold">What We Do</h1>
        </div>
      </section>

      {/* Rescue Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="flex flex-col md:flex-row items-start gap-12">
            <div className="md:w-1/3">
              <p className="text-sm font-semibold tracking-widest uppercase text-darkGreen-900 mb-3">01</p>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-darkGreen-900">Rescue</h2>
            </div>
            <div className="md:w-2/3 space-y-6">
              <p className="text-gray-600 text-lg leading-relaxed">
                At Erin&apos;s Farm, we provide an amazing home for rescued animals while giving the public exposure and education about animals in our food and farm industry as well as reptiles and other exotics found in nature.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                Our rescue efforts include trapping and rehabilitating abandoned farm animals, rescuing animals from slaughter facilities and kill auctions, and accepting owner surrenders of unwanted pets. Every animal that comes through our doors receives the care, love, and safe haven they deserve.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                As a non-profit rescue farm and animal sanctuary located in Hobart, Indiana, we are dedicated to giving each animal a second chance at life in a safe and nurturing environment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="container mx-auto px-4 max-w-5xl">
        <hr className="border-gray-200" />
      </div>

      {/* Educate Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="flex flex-col md:flex-row items-start gap-12">
            <div className="md:w-1/3">
              <p className="text-sm font-semibold tracking-widest uppercase text-darkGreen-900 mb-3">02</p>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-darkGreen-900">Educate</h2>
            </div>
            <div className="md:w-2/3 space-y-6">
              <p className="text-gray-600 text-lg leading-relaxed">
                We believe that it is important for our next generation to witness, experience, and understand nature in all of its true forms to ensure that we all will become better stewards for the future.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                Inspired by Jane Goodall&apos;s foundation and message for peace, unity, and understanding, our education programs focus on rescue, education, and exposure to all of the world&apos;s sentient beings. We conduct hands-on programs for groups of all ages, connecting people directly with our rescued animals.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                From school field trips and Girl Scout visits to community outreach events, our goal is to foster compassion and responsibility toward all living creatures through real, meaningful interactions.
              </p>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-darkGreen-900 py-6 text-center mt-auto">
        <p className="text-white/80 text-sm">Erin&apos;s Farm NFP &copy; 2026 | All Rights Reserved</p>
      </footer>
    </div>
  );
}
