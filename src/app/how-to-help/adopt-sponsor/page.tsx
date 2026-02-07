import Header from '@/components/layout/header';
import Link from 'next/link';

const animals = [
  {
    name: 'Daisy',
    species: 'Goat',
    bio: 'Daisy is a playful Nigerian Dwarf goat who loves scratches behind the ears and sneaking treats from visitors.',
  },
  {
    name: 'Clover',
    species: 'Sheep',
    bio: 'Clover arrived at the farm as a tiny lamb and has grown into one of the friendliest members of the flock.',
  },
  {
    name: 'Biscuit',
    species: 'Pig',
    bio: 'Biscuit is a curious Kunekune pig who enjoys belly rubs and rolling in the mud on warm afternoons.',
  },
  {
    name: 'Maple',
    species: 'Horse',
    bio: 'Maple is a gentle quarter horse who has been with the farm since the very beginning. She loves apples and long walks.',
  },
];

export default function AdoptSponsorPage() {
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
            <div className="bg-gray-50 rounded-xl p-6">
              <p className="text-lg font-semibold text-darkGreen-900 mb-2">$15/month</p>
              <p className="text-sm text-gray-600">Covers basic feed and bedding for one animal.</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6">
              <p className="text-lg font-semibold text-darkGreen-900 mb-2">$30/month</p>
              <p className="text-sm text-gray-600">Covers feed, bedding, and routine veterinary care.</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6">
              <p className="text-lg font-semibold text-darkGreen-900 mb-2">$50/month</p>
              <p className="text-sm text-gray-600">Full sponsorship: feed, vet care, shelter maintenance, and enrichment.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Animal Cards */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Meet the Animals</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {animals.map((animal) => (
              <div key={animal.name} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100">
                <div className="aspect-square bg-gray-200 flex items-center justify-center">
                  <span className="text-gray-400 text-sm">Photo coming soon</span>
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-bold text-gray-900">{animal.name}</h3>
                  <p className="text-sm text-darkGreen-900 font-medium mb-2">{animal.species}</p>
                  <p className="text-sm text-gray-600 leading-relaxed">{animal.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certificate */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-2xl text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Sponsorship Certificate</h2>
          <p className="text-gray-600 leading-relaxed mb-8">
            Every sponsor receives a personalized digital certificate featuring your chosen animal, perfect for framing
            or gifting to a fellow animal lover.
          </p>
          <Link
            href="/how-to-help/donate"
            className="inline-block bg-darkGreen-900 hover:bg-darkGreen-800 text-white font-semibold px-8 py-4 rounded-lg transition"
          >
            Become a Sponsor
          </Link>
        </div>
      </section>

      <footer className="bg-darkGreen-900 py-6 text-center mt-auto">
        <p className="text-white/80 text-sm">Erin&apos;s Farm NFP &copy; 2026 | All Rights Reserved</p>
      </footer>
    </div>
  );
}
