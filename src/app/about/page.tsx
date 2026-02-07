import Header from '@/components/layout/header';
import AboutText from '@/components/ui/about-text';

export default function AboutPage() {
  return (
    <div className="bg-body text-body font-body antialiased">
      <Header />

      {/* Page Hero */}
      <section className="bg-darkGreen-900 pt-32 pb-20">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm font-semibold tracking-widest uppercase text-white/60 mb-4">Our Story</p>
          <h1 className="font-heading text-white text-4xl md:text-6xl font-bold">About</h1>
        </div>
      </section>

      <AboutText />

      <footer className="bg-darkGreen-900 py-6 text-center">
        <p className="text-white/80 text-sm">Erin&apos;s Farm NFP &copy; 2026 | All Rights Reserved</p>
      </footer>
    </div>
  );
}
