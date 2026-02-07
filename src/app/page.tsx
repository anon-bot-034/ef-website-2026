'use client';

// Announcements as needed @connor.yanz
// import AnnouncementBar from '@/components/layout/announcement-bar';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import HeroSection from '@/features/home/components/hero-section';
import HowItWorksSection from '@/features/home/components/how-it-works-section';
import FeaturesSection from '@/features/home/components/features-section';
import CTASection from '@/components/common/cta-section';

export default function HomePage() {
  return (
    <div className="bg-body text-body font-body antialiased min-h-screen flex flex-col">
      {/* <AnnouncementBar /> */}
      <Header variant="home" />
      <section className="relative">
        <HeroSection />
      </section>
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <p className="text-sm font-semibold tracking-widest uppercase text-darkGreen-900 mb-4">Who We Are</p>
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-darkGreen-900 mb-6">Our Mission</h2>
          <p className="text-gray-600 text-lg md:text-xl leading-relaxed">
            We are a horse, farmed animal &amp; exotic animal rescue &amp; sanctuary specializing in hands on education for our community &amp; beyond
          </p>
        </div>
      </section>
      {/* <HowItWorksSection /> */}
      <FeaturesSection />
      {/* // <CTASection /> */}
      {/* <Footer /> */}
      <footer className="bg-darkGreen-900 py-6 text-center mt-auto">
        <p className="text-white/80 text-sm">Erin&apos;s Farm NFP &copy; 2026 | All Rights Reserved</p>
      </footer>
    </div>
  );
}