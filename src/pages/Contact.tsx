import React, { useEffect } from 'react';
import { 
  MapPin, 
  Phone, 
  Clock, 
  ShieldCheck, 
  ExternalLink, 
  Sparkles, 
  Building2,
  PhoneCall
} from 'lucide-react';
import { PageHero } from '../components/PageHero';
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
        primaryCtaText="Call Us Now"
        primaryCtaLink={BUSINESS_INFO.phoneTel}
        secondaryCtaText="Explore Our Services"
        secondaryCtaLink="/services"
      />

      {/* Main Content Area */}
      <section className="py-20 sm:py-24 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Left Column: Business Details & Facebook */}
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

              {/* Contact Details Card */}
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

                {/* Telephone Details */}
                <div className="flex items-start gap-3.5 pt-2">
                  <div className="p-2 rounded-xl bg-blue-50 text-blue-600 shrink-0 mt-0.5">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-slate-500 uppercase tracking-wide block">
                      Telephone Enquiries
                    </span>
                    <a
                      href={BUSINESS_INFO.phoneTel}
                      className="text-sm font-semibold text-blue-700 hover:text-blue-900 block mt-0.5 hover:underline"
                      aria-label={`Call Parker Cleaning Group at ${BUSINESS_INFO.phoneDisplay}`}
                    >
                      {BUSINESS_INFO.phoneDisplay}
                    </a>
                    <p className="text-xs text-slate-500 mt-1">
                      Call us directly to discuss your commercial cleaning requirements.
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

              {/* Location Map Preview */}
              <div className="space-y-3">
                <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900 flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-blue-600" />
                  Yorkshire Regional Service Coverage
                </h3>
                <GoogleMap variant="page" />
              </div>
            </div>

            {/* Right Column: Call to Action */}
            <div className="lg:col-span-7">
              <div className="bg-white rounded-2xl border border-slate-200 shadow-xl overflow-hidden">
                {/* Card Header */}
                <div className="bg-gradient-to-r from-slate-900 to-blue-950 p-8 sm:p-10 text-white">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-800/50 border border-blue-400/30 text-blue-200 text-xs font-semibold mb-4">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                    <span>No Obligation — Free Quotation</span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold font-heading">
                    Speak Directly with Our Team
                  </h3>
                  <p className="mt-3 text-slate-300 text-sm sm:text-base leading-relaxed">
                    Call us to discuss your commercial facility, cleaning requirements, and to receive a tailored quotation from our Yorkshire commercial cleaning team.
                  </p>
                </div>

                {/* Call CTA */}
                <div className="p-8 sm:p-10 space-y-6">
                  <a
                    href={BUSINESS_INFO.phoneTel}
                    className="flex items-center justify-center gap-4 w-full py-6 px-8 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xl transition-all shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 group"
                    aria-label={`Call Parker Cleaning Group at ${BUSINESS_INFO.phoneDisplay}`}
                  >
                    <PhoneCall className="w-7 h-7 group-hover:scale-110 transition-transform" />
                    <span>{BUSINESS_INFO.phoneDisplay}</span>
                  </a>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                    <div className="text-center p-4 rounded-xl bg-slate-50 border border-slate-100">
                      <ShieldCheck className="w-6 h-6 text-emerald-600 mx-auto mb-2" />
                      <p className="text-xs font-semibold text-slate-700">Fully Insured</p>
                      <p className="text-xs text-slate-500 mt-0.5">Commercial coverage</p>
                    </div>
                    <div className="text-center p-4 rounded-xl bg-slate-50 border border-slate-100">
                      <MapPin className="w-6 h-6 text-blue-600 mx-auto mb-2" />
                      <p className="text-xs font-semibold text-slate-700">Yorkshire Wide</p>
                      <p className="text-xs text-slate-500 mt-0.5">All Yorkshire postcodes</p>
                    </div>
                    <div className="text-center p-4 rounded-xl bg-slate-50 border border-slate-100">
                      <Clock className="w-6 h-6 text-blue-600 mx-auto mb-2" />
                      <p className="text-xs font-semibold text-slate-700">Flexible Hours</p>
                      <p className="text-xs text-slate-500 mt-0.5">7 days a week</p>
                    </div>
                  </div>

                  <div className="pt-2 border-t border-slate-100 text-center text-xs text-slate-500 leading-relaxed">
                    Strictly commercial enquiries. Our team will assess your premises and provide a no-obligation tailored proposal.
                  </div>
                </div>
              </div>
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
            Ready to Discuss Your Premises?
          </h2>
          <p className="text-slate-600 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Our Yorkshire commercial cleaning team is ready to take your call and discuss a tailored cleaning solution for your business.
          </p>
          <a
            href={BUSINESS_INFO.phoneTel}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-base transition-all shadow-lg mt-2"
          >
            <PhoneCall className="w-5 h-5" />
            Call {BUSINESS_INFO.phoneDisplay}
          </a>
        </div>
      </section>
    </div>
  );
};
