import React, { useEffect } from 'react';
import { 
  MapPin, 
  Mail, 
  Phone, 
  Clock, 
  ShieldCheck, 
  ExternalLink, 
  AlertCircle, 
  Sparkles, 
  Building2 
} from 'lucide-react';
import { PageHero } from '../components/PageHero';
import { QuoteForm } from '../components/QuoteForm';
import { GoogleMap } from '../components/GoogleMap';
import { BUSINESS_INFO } from '../data/content';

export const Contact: React.FC = () => {
  useEffect(() => {
    document.title = "Contact Us | Parker Cleaning Group — Commercial Cleaning Yorkshire";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      {/* Section 1: Hero */}
      <PageHero
        badge="Direct Commercial Enquiries"
        title="Let's Talk About Your Commercial Cleaning Requirements"
        subtitle="Get in touch with Parker Cleaning Group to discuss your premises, cleaning requirements, and quotation."
        heroImage="/images/contact-hero.jpg"
        primaryCtaText="Complete Quotation Form"
        primaryCtaLink="#quote-form"
        secondaryCtaText="Explore Our Services"
        secondaryCtaLink="/services"
      />

      {/* Main Content Area */}
      <section className="py-20 sm:py-24 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Left Column: Business Details, Development Placeholders & Facebook (5 cols) */}
            <div className="lg:col-span-5 space-y-8">
              <div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase bg-blue-50 text-blue-700 border border-blue-100 mb-3">
                  <Building2 className="w-3.5 h-3.5 text-blue-600" />
                  Commercial Enquiries
                </div>
                <h2 className="text-3xl font-bold text-slate-900 font-heading">
                  Get in Touch with Our Yorkshire Team
                </h2>
                <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
                  We look forward to reviewing your commercial cleaning specifications and discussing how we can support your business premises.
                </p>
              </div>

              {/* Verified Information & Strict Development Placeholders */}
              <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-7 shadow-xs space-y-5">
                <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900 pb-3 border-b border-slate-100 flex items-center justify-between">
                  <span>Business Contact Directory</span>
                  <span className="text-[10px] font-semibold px-2 py-0.5 rounded bg-blue-50 text-blue-700">
                    Yorkshire Region
                  </span>
                </h3>

                {/* Service Region */}
                <div className="flex items-start gap-3.5">
                  <div className="p-2 rounded-xl bg-blue-50 text-blue-600 shrink-0 mt-0.5">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-slate-500 uppercase tracking-wide block">
                      Operational Region
                    </span>
                    <span className="text-sm font-semibold text-slate-900 block mt-0.5">
                      Yorkshire, United Kingdom
                    </span>
                    <p className="text-xs text-slate-500 mt-1">
                      Serving commercial facilities across North, West, and South Yorkshire.
                    </p>
                  </div>
                </div>

                {/* Registered Address Verification Status */}
                <div className="p-3.5 rounded-xl bg-amber-50/80 border border-amber-200 text-xs text-amber-900 space-y-1">
                  <div className="flex items-center gap-1.5 font-bold">
                    <AlertCircle className="w-4 h-4 text-amber-600 shrink-0" />
                    <span>Registered Business Address Verification:</span>
                  </div>
                  <p className="text-[11px] text-amber-800 leading-relaxed">
                    {BUSINESS_INFO.addressPlaceholder}
                  </p>
                </div>

                {/* Commercial Quotations */}
                <div className="flex items-start gap-3.5 pt-2">
                  <div className="p-2 rounded-xl bg-blue-50 text-blue-600 shrink-0 mt-0.5">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-slate-500 uppercase tracking-wide block">
                      Quotation Requests
                    </span>
                    <span className="text-sm font-semibold text-slate-900 block mt-0.5">
                      Submit Online Quotation Form
                    </span>
                    <p className="text-xs text-slate-500 mt-1">
                      Enquiries submitted below are processed for tailored proposals.
                    </p>
                  </div>
                </div>

                {/* Telephone Details */}
                <div className="flex items-start gap-3.5 pt-2">
                  <div className="p-2 rounded-xl bg-blue-50 text-blue-600 shrink-0 mt-0.5">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-slate-500 uppercase tracking-wide block">
                      Telephone Enquiries
                    </span>
                    <span className="text-sm font-semibold text-slate-900 block mt-0.5">
                      {BUSINESS_INFO.phoneDisplay}
                    </span>
                    <p className="text-xs text-slate-500 mt-1">
                      Request a telephone callback directly on the quotation form.
                    </p>
                  </div>
                </div>

                {/* Commercial Operations Window */}
                <div className="flex items-start gap-3.5 pt-2">
                  <div className="p-2 rounded-xl bg-blue-50 text-blue-600 shrink-0 mt-0.5">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-slate-500 uppercase tracking-wide block">
                      Cleaning Attendance Windows
                    </span>
                    <span className="text-sm font-semibold text-slate-900 block mt-0.5">
                      {BUSINESS_INFO.operatingHours}
                    </span>
                  </div>
                </div>
              </div>

              {/* Section 5: Official Facebook Page */}
              <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-7 shadow-xs">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-2">
                  Official Social Channel
                </span>
                <h3 className="text-lg font-bold text-slate-900 font-heading mb-2">
                  Follow Parker Cleaning Group
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                  Stay updated on our commercial cleaning operations, Yorkshire service announcements, and company developments on our official Facebook page.
                </p>

                <a
                  href={BUSINESS_INFO.facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-between w-full p-4 rounded-xl bg-slate-900 hover:bg-blue-600 text-white transition-all group font-semibold text-sm"
                  aria-label="Visit Parker Cleaning Group official Facebook page"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-blue-500 group-hover:bg-blue-700 text-white transition-colors">
                      <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                      </svg>
                    </div>
                    <span>Parker Cleaning Group on Facebook</span>
                  </div>
                  <ExternalLink className="w-4 h-4 opacity-75 group-hover:translate-x-0.5 transition-transform" />
                </a>
              </div>

              {/* Commercial Assurance Card */}
              <div className="rounded-2xl bg-gradient-to-br from-blue-900 to-slate-900 text-white p-6 shadow-md border border-blue-800 space-y-3">
                <div className="flex items-center gap-2 text-emerald-400 text-xs font-bold uppercase tracking-wider">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Fully Insured Provider</span>
                </div>
                <p className="text-xs text-slate-200 leading-relaxed">
                  We maintain full commercial insurance coverage. Your company property, keys, access systems, and office assets are safeguarded under strict commercial protocols.
                </p>
              </div>

              {/* Section 4: Location Map Preview */}
              <div className="space-y-3">
                <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900 flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-blue-600" />
                  Yorkshire Regional Service Coverage
                </h3>
                <GoogleMap variant="page" />
              </div>
            </div>

            {/* Right Column: Free Quote Form (7 cols) */}
            <div id="quote-form" className="lg:col-span-7 scroll-mt-24">
              <QuoteForm />
            </div>

          </div>
        </div>
      </section>

      {/* Section 6: Final CTA */}
      <section className="py-16 bg-white border-b border-slate-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-semibold uppercase">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Commercial Cleaning Yorkshire</span>
          </div>
          <h2 className="text-3xl font-bold text-slate-900 font-heading">
            Need a Quick Clarification on Your Premises?
          </h2>
          <p className="text-slate-600 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Submit your basic facility details above, and our Yorkshire commercial cleaning team will get back to you promptly with an itemised proposal.
          </p>
        </div>
      </section>
    </div>
  );
};
