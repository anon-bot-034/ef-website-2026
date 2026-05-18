'use client';

import { useState, useRef, useEffect, memo } from 'react';
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
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);
  const [desktopDropdownOpen, setDesktopDropdownOpen] = useState(false);
  const dropdownTimeout = useRef(null);

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/what-we-do', label: 'What We Do' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' },
    {
      label: 'How to Help',
      children: [
        { href: '/how-to-help/donate', label: 'Donate' },
        // TODO: Re-enable when adoption form + animal photos are finalized
        // { href: '/how-to-help/adopt-sponsor', label: 'Adopt/Sponsor an Animal' },
        // TODO: Re-enable when barn raising campaign is ready to launch
        // { href: '/how-to-help/barn-raising', label: 'Barn Raising' },
      ],
    },
  ];

  useEffect(() => {
    return () => {
      if (dropdownTimeout.current) clearTimeout(dropdownTimeout.current);
    };
  }, []);

  function handleDropdownEnter() {
    if (dropdownTimeout.current) clearTimeout(dropdownTimeout.current);
    setDesktopDropdownOpen(true);
  }

  function handleDropdownLeave() {
    dropdownTimeout.current = setTimeout(() => {
      setDesktopDropdownOpen(false);
    }, 150);
  }

  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      {/* Floating social bar */}
      <div className={`fixed left-4 top-1/2 -translate-y-1/2 z-[100] flex flex-col gap-3 transition-opacity duration-200 ${mobileNavOpen ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
        <a
          href="https://www.facebook.com/Erinsfarm1/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook"
          className="w-10 h-10 rounded-full shadow-lg flex items-center justify-center transition hover:scale-110"
          style={{ backgroundColor: '#1877F2' }}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M22 12.0251C22 6.49123 17.52 2 12 2C6.48 2 2 6.49123 2 12.0251C2 16.8772 5.44 20.9173 10 21.8496V15.0326H8V12.0251H10V9.5188C10 7.58396 11.57 6.01003 13.5 6.01003H16V9.01754H14C13.45 9.01754 13 9.46867 13 10.0201V12.0251H16V15.0326H13V22C18.05 21.4987 22 17.2281 22 12.0251Z" fill="white"/>
          </svg>
        </a>
        <a
          href="https://www.instagram.com/erinsfarm/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          className="w-10 h-10 rounded-full shadow-lg flex items-center justify-center transition hover:scale-110"
          style={{ background: 'radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%)' }}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.8 2H16.2C19.4 2 22 4.6 22 7.8V16.2C22 17.7383 21.3889 19.2135 20.3012 20.3012C19.2135 21.3889 17.7383 22 16.2 22H7.8C4.6 22 2 19.4 2 16.2V7.8C2 6.26174 2.61107 4.78649 3.69878 3.69878C4.78649 2.61107 6.26174 2 7.8 2ZM7.6 4C6.64522 4 5.72955 4.37928 5.05442 5.05442C4.37928 5.72955 4 6.64522 4 7.6V16.4C4 18.39 5.61 20 7.6 20H16.4C17.3548 20 18.2705 19.6207 18.9456 18.9456C19.6207 18.2705 20 17.3548 20 16.4V7.6C20 5.61 18.39 4 16.4 4H7.6ZM17.25 5.5C17.5815 5.5 17.8995 5.6317 18.1339 5.86612C18.3683 6.10054 18.5 6.41848 18.5 6.75C18.5 7.08152 18.3683 7.39946 18.1339 7.63388C17.8995 7.8683 17.5815 8 17.25 8C16.9185 8 16.6005 7.8683 16.3661 7.63388C16.1317 7.39946 16 7.08152 16 6.75C16 6.41848 16.1317 6.10054 16.3661 5.86612C16.6005 5.6317 16.9185 5.5 17.25 5.5ZM12 7C13.3261 7 14.5979 7.52678 15.5355 8.46447C16.4732 9.40215 17 10.6739 17 12C17 13.3261 16.4732 14.5979 15.5355 15.5355C14.5979 16.4732 13.3261 17 12 17C10.6739 17 9.40215 16.4732 8.46447 15.5355C7.52678 14.5979 7 13.3261 7 12C7 10.6739 7.52678 9.40215 8.46447 8.46447C9.40215 7.52678 10.6739 7 12 7ZM12 9C11.2044 9 10.4413 9.31607 9.87868 9.87868C9.31607 10.4413 9 11.2044 9 12C9 12.7956 9.31607 13.5587 9.87868 14.1213C10.4413 14.6839 11.2044 15 12 15C12.7956 15 13.5587 14.6839 14.1213 14.1213C14.6839 13.5587 15 12.7956 15 12C15 11.2044 14.6839 10.4413 14.1213 9.87868C13.5587 9.31607 12.7956 9 12 9Z" fill="white"/>
          </svg>
        </a>
      </div>
      <div className="flex justify-center px-4 py-5">
        <nav className="flex items-center gap-10 bg-black/30 backdrop-blur-md rounded-full px-8 py-3">
          <Link href="/">
            <Image src="/images/erins-farm-logo.png" alt="" width={160} height={53} />
          </Link>
          <div className="hidden lg:flex items-center gap-8">
            {navItems.map((item) =>
              item.children ? (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={handleDropdownEnter}
                  onMouseLeave={handleDropdownLeave}
                >
                  <button
                    className="text-white text-base font-medium hover:text-white/80 transition duration-200 flex items-center gap-1"
                    onClick={() => setDesktopDropdownOpen((v) => !v)}
                    type="button"
                  >
                    {item.label}
                    <svg
                      className={`w-4 h-4 transition-transform duration-200 ${desktopDropdownOpen ? 'rotate-180' : ''}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {desktopDropdownOpen && (
                    <div className="absolute top-full right-0 mt-3 w-64 bg-black/40 backdrop-blur-xl rounded-2xl py-2 shadow-xl border border-white/10">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block px-5 py-3 text-white text-sm font-medium hover:bg-white/10 transition duration-200"
                          onClick={() => setDesktopDropdownOpen(false)}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.href}
                  className="text-white text-base font-medium hover:text-white/80 transition duration-200"
                  href={item.href}
                >
                  {item.label}
                </Link>
              )
            )}
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
            {navItems.map((item) =>
              item.children ? (
                <li key={item.label}>
                  <button
                    className="text-base font-medium flex items-center gap-1 w-full text-left"
                    onClick={() => setMobileDropdownOpen((v) => !v)}
                    type="button"
                  >
                    {item.label}
                    <svg
                      className={`w-4 h-4 transition-transform duration-200 ${mobileDropdownOpen ? 'rotate-180' : ''}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {mobileDropdownOpen && (
                    <ul className="mt-4 ml-4 flex flex-col gap-6">
                      {item.children.map((child) => (
                        <li key={child.href}>
                          <Link
                            className="text-sm font-medium text-gray-700 hover:text-gray-900"
                            href={child.href}
                            onClick={() => setMobileNavOpen(false)}
                          >
                            {child.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ) : (
                <li key={item.href}>
                  <Link className="text-base font-medium" href={item.href} onClick={() => setMobileNavOpen(false)}>{item.label}</Link>
                </li>
              )
            )}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default memo(Header);
