import Header from '@/components/layout/header';
import Link from 'next/link';

const sponsorableItems = [
  { name: 'Barn Foundation & Framing', price: 25000, description: 'Structural foundation, framing, and roofing for the main barn.' },
  { name: 'Classroom Build-Out', price: 15000, description: 'Interior walls, flooring, and climate control for the learning center classroom.' },
  { name: 'Fencing & Paddocks', price: 8000, description: 'Safe, durable fencing for animal paddocks and pasture areas.' },
  { name: 'Water & Irrigation System', price: 5000, description: 'Plumbing, troughs, and irrigation lines for the barn and surrounding fields.' },
  { name: 'Lighting & Electrical', price: 6000, description: 'Electrical wiring, LED barn lighting, and outdoor safety lights.' },
  { name: 'Storage & Feed Room', price: 4000, description: 'Climate-controlled feed storage and equipment shed.' },
];

export default function BarnRaisingPage() {
  return (
    <div className="bg-body text-body font-body antialiased min-h-screen flex flex-col">
      <Header variant="home" />

      {/* Page Hero */}
      <section className="bg-darkGreen-900 pt-32 pb-20">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm font-semibold tracking-widest uppercase text-white/60 mb-4">Build With Us</p>
          <h1 className="font-heading text-white text-4xl md:text-6xl font-bold">Barn Raising</h1>
          <p className="mt-4 text-white/70 max-w-2xl mx-auto">
            Help us build our new barn and learning center&mdash;a space where animals are cared for and
            children learn about agriculture, empathy, and stewardship.
          </p>
        </div>
      </section>

      {/* About the Project */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">The Project</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            Our barn raising project will create a purpose-built facility that combines animal housing with
            an educational learning center. The barn will provide safe, comfortable shelter for our growing
            family of rescue animals, while the attached classroom will host school field trips, workshops,
            and community events.
          </p>
          <p className="text-gray-600 leading-relaxed">
            We&rsquo;re inviting supporters to sponsor individual components of the build. Whether you fund a
            section of fencing or the entire foundation, every contribution brings us closer to opening day.
            Payment plans are available for larger sponsorships&mdash;reach out to us to discuss options.
          </p>
        </div>
      </section>

      {/* Sponsorable Items */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-4">Sponsor a Component</h2>
          <p className="text-gray-500 text-center mb-12 max-w-xl mx-auto">
            Choose a piece of the project to sponsor. Payment plans are available for items over $5,000.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {sponsorableItems.map((item) => (
              <div key={item.name} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex flex-col">
                <h3 className="text-lg font-bold text-gray-900 mb-1">{item.name}</h3>
                <p className="text-darkGreen-900 font-semibold mb-3">
                  ${item.price.toLocaleString()}
                </p>
                <p className="text-sm text-gray-600 leading-relaxed flex-1">{item.description}</p>
                <Link
                  href="/how-to-help/donate"
                  className="mt-5 inline-block text-center bg-darkGreen-900 hover:bg-darkGreen-800 text-white font-semibold px-6 py-3 rounded-lg text-sm transition"
                >
                  Sponsor This
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-2xl text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Interested in a Payment Plan?</h2>
          <p className="text-gray-600 leading-relaxed mb-8">
            For sponsorships over $5,000 we offer flexible monthly payment plans. Get in touch and we&rsquo;ll
            work out a schedule that fits your budget.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-darkGreen-900 hover:bg-darkGreen-800 text-white font-semibold px-8 py-4 rounded-lg transition"
          >
            Contact Us
          </Link>
        </div>
      </section>

      <footer className="bg-darkGreen-900 py-6 text-center mt-auto">
        <p className="text-white/80 text-sm">Erin&apos;s Farm NFP &copy; 2026 | All Rights Reserved</p>
      </footer>
    </div>
  );
}
