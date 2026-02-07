import Image from 'next/image';

/**
 * HeroSection component for the homepage hero area
 * Features full-width background image with overlaid text
 * @returns {JSX.Element} HeroSection component with hero content
 */
const HeroSection = () => {
  return (
    <div className="relative min-h-[85vh] flex items-center">
      <Image
        className="absolute inset-0 w-full h-full object-cover"
        src="/images/kids-looking-at-cows.jpg"
        alt=""
        fill
        priority
      />
      <div className="absolute inset-0 bg-black/40" />
      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-2xl">
          <h1 className="font-heading text-white text-4xl sm:text-5xl md:text-7xl font-bold leading-tight">
            Welcome to Erin's Farm
          </h1>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
