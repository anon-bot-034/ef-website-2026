'use client';

import { useState, memo } from 'react';
import Link from 'next/link';
import Image from 'next/image';

/**
 * Header component with responsive navigation and mobile menu
 * @param {Object} props - Component props
 * @param {'home'|'other'} [props.variant='home'] - Header style variant that affects border styling
 * @returns {JSX.Element} Header component with navigation and mobile menu
 */
const Header = ({ variant = 'home' }) => {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/what-we-do', label: 'What We Do' },
    { href: '/about', label: 'About' },
    // { href: '/pricing', label: 'Pricing' },
    // { href: '/the-animals', label: 'The Animals' },
    // { href: '/blog', label: 'Blog' },
    { href: '/contact', label: 'Contact' }
  ];

  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      <div className="flex justify-center px-4 py-5">
        <nav className="flex items-center gap-10 bg-black/30 backdrop-blur-md rounded-full px-8 py-3">
          <Link href="/">
            <Image src="/images/erins-farm-logo.png" alt="" width={160} height={53} />
          </Link>
          <div className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                className="text-white text-base font-medium hover:text-white/80 transition duration-200"
                href={item.href}
              >
                {item.label}
              </Link>
            ))}
          </div>
          <button
            className="lg:hidden"
            onClick={() => setMobileNavOpen(!mobileNavOpen)}
          >
            <svg width="40" height="40" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="56" height="56" rx="28" fill="white" fillOpacity="0.2"></rect>
              <path d="M37 32H19M37 24H19" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
            </svg>
          </button>
        </nav>
      </div>

      {/* Mobile Navigation */}
      <div className={`${mobileNavOpen ? 'block' : 'hidden'} fixed inset-0 z-[9999]`}>
        <div
          className="fixed inset-0 bg-black opacity-20 z-[9998]"
          onClick={() => setMobileNavOpen(false)}
        ></div>
        <nav className="relative z-[9999] w-5/6 max-w-xs h-full bg-white overflow-y-auto p-8 shadow-xl">
          <div className="flex items-center justify-between">
            <Link className="inline-block" href="/">
              <Image src="/images/erins-farm-logo.png" alt="" width={160} height={53} />
            </Link>
            <button onClick={() => setMobileNavOpen(false)}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6 18L18 6M6 6L18 18" stroke="#111827" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
              </svg>
            </button>
          </div>
          <ul className="flex flex-col gap-12 py-12 my-12">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link className="text-base font-medium" href={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default memo(Header);
