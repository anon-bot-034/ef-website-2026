'use client';

import { useState, useCallback } from 'react';
import Image from 'next/image';

const slides = [
  { src: '/images/kids-looking-at-cows.jpg', alt: 'Kids looking at cows' },
  { src: null, alt: 'Placeholder 2' },
  { src: null, alt: 'Placeholder 3' },
  { src: null, alt: 'Placeholder 4' },
  { src: null, alt: 'Placeholder 5' },
  { src: null, alt: 'Placeholder 6' },
];

const HeroSection = () => {
  const [current, setCurrent] = useState(0);

  const prev = useCallback(() => {
    setCurrent((i) => (i === 0 ? slides.length - 1 : i - 1));
  }, []);

  const next = useCallback(() => {
    setCurrent((i) => (i === slides.length - 1 ? 0 : i + 1));
  }, []);

  return (
    <div className="relative min-h-[85vh] flex items-center overflow-hidden">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
            index === current ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
        >
          {slide.src ? (
            <Image
              className="absolute inset-0 w-full h-full object-cover"
              src={slide.src}
              alt={slide.alt}
              fill
              priority={index === 0}
            />
          ) : (
            <div className="absolute inset-0 bg-gray-700 flex items-center justify-center">
              <span className="text-white/30 text-sm">{slide.alt}</span>
            </div>
          )}
        </div>
      ))}

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Arrows */}
      <button
        onClick={prev}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full flex items-center justify-center text-white/40 hover:text-white/80 hover:bg-white/10 transition duration-300"
        aria-label="Previous slide"
      >
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        onClick={next}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full flex items-center justify-center text-white/40 hover:text-white/80 hover:bg-white/10 transition duration-300"
        aria-label="Next slide"
      >
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-2 h-2 rounded-full transition duration-300 ${
              index === current ? 'bg-white/80 w-6' : 'bg-white/30 hover:bg-white/50'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Text overlay */}
      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-2xl">
          <h1 className="font-heading text-white text-4xl sm:text-5xl md:text-7xl font-bold leading-tight">
            Welcome to Erin's Farm
          </h1>
          <p className="mt-4 text-white/80 text-lg md:text-xl max-w-xl leading-relaxed">
            We rescue &amp; provide sanctuary for animals in need and educate through their stories, in order to change the world of tomorrow.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
