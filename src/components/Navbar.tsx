import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X, Sparkles, ShieldCheck, Phone } from 'lucide-react';
import { PrimaryButton } from './Buttons';
import { BUSINESS_INFO } from '../data/content';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Our Services', path: '/services' },
    { name: 'Contact Us', path: '/contact' },
  ];

  return (
    <>
      {/* Top Corporate Assurance Bar */}
      <div className="bg-slate-900 text-slate-300 text-xs py-2 px-4 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-1.5">
          <div className="flex items-center gap-2">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="font-medium text-slate-200">
              Commercial Cleaning Specialists Across Yorkshire
            </span>
            <span className="hidden md:inline text-slate-500">•</span>
            <span className="hidden md:inline-flex items-center gap-1 text-slate-300">
              <ShieldCheck className="w-3.5 h-3.5 text-blue-400" />
              Fully Insured
            </span>
          </div>

          <div className="flex items-center gap-3 sm:gap-4 text-[11px] sm:text-xs">
            <a
              href={BUSINESS_INFO.phoneTel}
              className="text-slate-200 hover:text-white font-semibold transition-colors flex items-center gap-1.5"
            >
              <Phone className="w-3.5 h-3.5 text-blue-400" />
              <span>{BUSINESS_INFO.phoneDisplay}</span>
            </a>
            <span className="text-slate-600">|</span>
            <Link
              to="/contact"
              className="text-blue-400 hover:text-blue-300 font-semibold transition-colors flex items-center gap-1"
            >
              <Sparkles className="w-3 h-3" />
              Request Quotation
            </Link>
          </div>
        </div>
      </div>

      {/* Main Sticky Navbar */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          scrolled
            ? 'bg-white/95 backdrop-blur-md shadow-md border-b border-slate-200 py-3'
            : 'bg-white border-b border-slate-100 py-4 sm:py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Brand Logo Lockup */}
            <Link to="/" className="inline-block group py-0.5" aria-label="Parker Cleaning Group Home">
              <img
                src="/logo-dark.png"
                alt="Parker Cleaning Group — Commercial Cleaning Yorkshire"
                className="h-10 sm:h-12 w-auto object-contain group-hover:opacity-95 transition-all"
              />
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex items-center gap-1 lg:gap-2" aria-label="Main Navigation">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  end={link.path === '/'}
                  className={({ isActive }) =>
                    `px-3.5 py-2 rounded-lg text-sm font-semibold transition-all duration-150 ${
                      isActive
                        ? 'text-blue-600 bg-blue-50/80 shadow-xs'
                        : 'text-slate-700 hover:text-slate-950 hover:bg-slate-100/70'
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
            </nav>

            {/* Desktop CTA Button & Direct Call */}
            <div className="hidden md:flex items-center gap-3">
              <a
                href={BUSINESS_INFO.phoneTel}
                className="hidden lg:inline-flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-semibold text-slate-700 hover:text-blue-600 hover:bg-slate-50 transition-colors"
                aria-label={`Call Parker Cleaning Group at ${BUSINESS_INFO.phoneDisplay}`}
              >
                <Phone className="w-4 h-4 text-blue-600" />
                <span>{BUSINESS_INFO.phoneDisplay}</span>
              </a>
              <PrimaryButton to="/contact" className="py-2.5 px-5 text-sm">
                Get a Free Quote
              </PrimaryButton>
            </div>

            {/* Mobile Hamburger Toggle */}
            <div className="flex items-center md:hidden">
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2.5 rounded-lg text-slate-700 hover:text-slate-900 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                aria-expanded={mobileMenuOpen}
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-6 space-y-2 shadow-xl animate-in slide-in-from-top-4 duration-200">
            <nav className="space-y-1">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  end={link.path === '/'}
                  className={({ isActive }) =>
                    `block px-4 py-3 rounded-lg text-base font-semibold transition-colors ${
                      isActive
                        ? 'text-blue-600 bg-blue-50 border-l-4 border-blue-600'
                        : 'text-slate-700 hover:text-slate-950 hover:bg-slate-100'
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
            </nav>

            <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
              <a
                href={BUSINESS_INFO.phoneTel}
                className="flex items-center justify-center gap-2 w-full py-3 rounded-lg bg-blue-50 text-blue-700 font-bold hover:bg-blue-100 transition-colors border border-blue-200"
              >
                <Phone className="w-4 h-4" />
                <span>Call {BUSINESS_INFO.phoneDisplay}</span>
              </a>
              <PrimaryButton to="/contact" className="w-full py-3.5 text-center">
                Get a Free Quote
              </PrimaryButton>
              <div className="p-3 rounded-lg bg-slate-50 border border-slate-100 text-center">
                <span className="text-xs text-slate-600 font-medium">
                  Yorkshire Regional Commercial Cleaning Services
                </span>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
