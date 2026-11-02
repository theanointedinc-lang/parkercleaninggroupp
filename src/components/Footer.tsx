import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Mail, Phone, ShieldCheck, ExternalLink, ArrowRight } from 'lucide-react';
import { PolicyModal } from './PolicyModal';
import { BUSINESS_INFO, SERVICES } from '../data/content';

export const Footer: React.FC = () => {
  const [modalType, setModalType] = useState<'privacy' | 'cookie' | null>(null);
  const currentYear = new Date().getFullYear();

  return (
    <>
      <footer className="bg-slate-950 text-slate-300 pt-16 pb-12 border-t border-slate-800" aria-labelledby="footer-heading">
        <h2 id="footer-heading" className="sr-only">Footer</h2>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Main Footer Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-14 border-b border-slate-800">
            {/* Column 1: Company Profile (4 cols) */}
            <div className="lg:col-span-4 space-y-4">
              <Link to="/" className="inline-block group" aria-label="Parker Cleaning Group Home">
                <img
                  src="/logo-white.png"
                  alt="Parker Cleaning Group — Commercial Cleaning Yorkshire"
                  className="h-11 sm:h-12 w-auto object-contain group-hover:opacity-90 transition-opacity"
                />
              </Link>

              <p className="text-sm text-slate-400 leading-relaxed pt-2">
                Parker Cleaning Group provides professional, reliable, and tailored commercial cleaning services for workplaces, commercial facilities, and business premises throughout Yorkshire.
              </p>

              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-blue-950/70 border border-blue-800/80 text-blue-300 text-xs font-semibold">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Fully Insured Commercial Cleaning</span>
              </div>

              {/* Official Social Media */}
              <div className="pt-2">
                <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 block mb-2">
                  Connect With Us
                </span>
                <a
                  href={BUSINESS_INFO.facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-slate-900 hover:bg-blue-600 text-slate-200 hover:text-white transition-all duration-200 border border-slate-800 text-xs font-semibold"
                  aria-label="Visit Parker Cleaning Group on Facebook"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                  <span>Parker Cleaning Group on Facebook</span>
                  <ExternalLink className="w-3 h-3 ml-0.5 opacity-60" />
                </a>
              </div>
            </div>

            {/* Column 2: Navigation Links (2 cols) */}
            <div className="lg:col-span-2 space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-white block">
                Navigation
              </span>
              <ul className="space-y-2.5 text-sm">
                <li>
                  <Link to="/" className="text-slate-400 hover:text-blue-400 transition-colors flex items-center gap-1.5">
                    <ArrowRight className="w-3.5 h-3.5 opacity-50" />
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="text-slate-400 hover:text-blue-400 transition-colors flex items-center gap-1.5">
                    <ArrowRight className="w-3.5 h-3.5 opacity-50" />
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="/services" className="text-slate-400 hover:text-blue-400 transition-colors flex items-center gap-1.5">
                    <ArrowRight className="w-3.5 h-3.5 opacity-50" />
                    Our Services
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="text-slate-400 hover:text-blue-400 transition-colors flex items-center gap-1.5">
                    <ArrowRight className="w-3.5 h-3.5 opacity-50" />
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 3: Commercial Services (3 cols) */}
            <div className="lg:col-span-3 space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-white block">
                Commercial Services
              </span>
              <ul className="space-y-2 text-sm">
                {SERVICES.map((service) => (
                  <li key={service.id}>
                    <Link
                      to="/services"
                      className="text-slate-400 hover:text-blue-400 transition-colors block leading-snug"
                    >
                      {service.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 4: Contact & Yorkshire Operational Coverage (3 cols) */}
            <div className="lg:col-span-3 space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-white block">
                Commercial Enquiries
              </span>

              <div className="space-y-3 text-sm text-slate-400">
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-blue-400 shrink-0 mt-1" />
                  <div>
                    <span className="text-slate-200 font-semibold block">Yorkshire Coverage</span>
                    <span className="text-xs text-slate-400">Serving commercial premises across Yorkshire, UK</span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <Mail className="w-4 h-4 text-blue-400 shrink-0 mt-1" />
                  <div>
                    <span className="text-slate-200 font-semibold block">Commercial Quotations</span>
                    <Link to="/contact" className="text-xs text-blue-400 hover:underline">
                      Submit online quotation form
                    </Link>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <Phone className="w-4 h-4 text-blue-400 shrink-0 mt-1" />
                  <div>
                    <span className="text-slate-200 font-semibold block">Direct Contact</span>
                    <a
                      href={BUSINESS_INFO.phoneTel}
                      className="text-xs text-slate-400 hover:text-white hover:underline transition-colors block"
                      aria-label={`Call Parker Cleaning Group at ${BUSINESS_INFO.phoneDisplay}`}
                    >
                      {BUSINESS_INFO.phoneDisplay}
                    </a>
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center w-full px-4 py-2.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold transition-all shadow-md"
                >
                  Request a Free Quote
                </Link>
              </div>
            </div>
          </div>

          {/* Bottom Copyright & Legal Links */}
          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
            <p>
              © {currentYear} {BUSINESS_INFO.name}. All rights reserved. Commercial Cleaning, Yorkshire.
            </p>

            <div className="flex items-center gap-6">
              <button
                type="button"
                onClick={() => setModalType('privacy')}
                className="hover:text-slate-300 transition-colors underline-offset-4 hover:underline"
              >
                Privacy Policy
              </button>
              <button
                type="button"
                onClick={() => setModalType('cookie')}
                className="hover:text-slate-300 transition-colors underline-offset-4 hover:underline"
              >
                Cookie Policy
              </button>
            </div>
          </div>
        </div>
      </footer>

      {/* Policy Modal Dialog */}
      <PolicyModal type={modalType} onClose={() => setModalType(null)} />
    </>
  );
};
