import Header from '@/components/layout/header';
import ContactUsText from '@/components/ui/contact-us';

export default function ContactPage() {
  return (
    <div className="bg-body text-body font-body antialiased min-h-screen flex flex-col">
      <Header />

      {/* Page Hero */}
      <section className="bg-darkGreen-900 pt-32 pb-20">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm font-semibold tracking-widest uppercase text-white/60 mb-4">Get in Touch</p>
          <h1 className="font-heading text-white text-4xl md:text-6xl font-bold">Contact Us</h1>
        </div>
      </section>

      <ContactUsText />

      <footer className="bg-darkGreen-900 py-6 text-center mt-auto">
        <p className="text-white/80 text-sm">Erin&apos;s Farm NFP &copy; 2026 | All Rights Reserved</p>
      </footer>
    </div>
  );
}
