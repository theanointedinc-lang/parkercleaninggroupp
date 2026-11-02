import React, { useEffect } from 'react';
import { 
  ShieldCheck, 
  Sparkles, 
  CheckCircle2, 
  MapPin, 
  Building, 
  Sliders, 
  Clock, 
  SlidersHorizontal 
} from 'lucide-react';
import { PageHero } from '../components/PageHero';
import { SectionHeading } from '../components/SectionHeading';
import { ServiceCard } from '../components/ServiceCard';
import { IndustryCard } from '../components/IndustryCard';
import { RealResultSection } from '../components/RealResultSection';
import { CTASection } from '../components/CTASection';
import { PrimaryButton, SecondaryButton } from '../components/Buttons';
import { SERVICES, INDUSTRIES, WHY_CHOOSE_US } from '../data/content';

export const Home: React.FC = () => {
  useEffect(() => {
    document.title = "Parker Cleaning Group | Commercial Cleaning Across Yorkshire";
    window.scrollTo(0, 0);
  }, []);

  const getWhyIcon = (iconName: string) => {
    switch (iconName) {
      case 'Building':
        return <Building className="w-6 h-6 text-blue-600" />;
      case 'Sliders':
        return <Sliders className="w-6 h-6 text-blue-600" />;
      case 'Clock':
        return <Clock className="w-6 h-6 text-blue-600" />;
      case 'CheckCircle2':
        return <CheckCircle2 className="w-6 h-6 text-blue-600" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-6 h-6 text-blue-600" />;
      default:
        return <Sparkles className="w-6 h-6 text-blue-600" />;
    }
  };

  return (
    <div>
      {/* Section 1: Hero */}
      <PageHero
        badge="Commercial Cleaning Yorkshire"
        title="Professional Commercial Cleaning Across Yorkshire"
        subtitle="Reliable, tailored commercial cleaning solutions designed to help Yorkshire businesses maintain clean, professional, and welcoming working environments."
        heroImage="/images/home-hero.jpg"
        primaryCtaText="Request a Free Quote"
        primaryCtaLink="/contact"
        secondaryCtaText="Explore Our Services"
        secondaryCtaLink="/services"
      />

      {/* Section 2: Introduction */}
      <section className="py-20 sm:py-24 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-bold tracking-wider uppercase border border-blue-100">
                <span className="w-2 h-2 rounded-full bg-blue-600"></span>
                About Parker Cleaning Group
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight font-heading">
                Dedicated Exclusively to Commercial &amp; Workplace Hygiene
              </h2>

              <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                Parker Cleaning Group provides dependable, high-standard commercial cleaning solutions for organisations throughout Yorkshire. We understand that a clean working environment is critical to workplace productivity, professional reputation, and employee health and safety.
              </p>

              <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                Whether you manage a corporate office, a retail showroom, a regional logistics centre, or an educational facility, our commercial cleaning services are carefully tailored around your premises layout and operating schedules.
              </p>

              <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-start gap-3 p-4 rounded-xl bg-slate-50 border border-slate-100">
                  <div className="p-2 rounded-lg bg-blue-100 text-blue-700 shrink-0">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm">Fully Insured Commercial Cleaning</h4>
                    <p className="text-xs text-slate-600 mt-0.5">Comprehensive insurance for total business peace of mind.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 rounded-xl bg-slate-50 border border-slate-100">
                  <div className="p-2 rounded-lg bg-blue-100 text-blue-700 shrink-0">
                    <SlidersHorizontal className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm">Tailored Schedules</h4>
                    <p className="text-xs text-slate-600 mt-0.5">Early morning, evening, or weekend cleaning shifts available.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-200 aspect-4/3 group">
                <img
                  src="/images/about-hero.jpg"
                  alt="Parker Cleaning Group professional commercial team"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-5 left-5 right-5 text-white">
                  <span className="text-xs font-bold uppercase tracking-wider text-blue-400 block mb-1">
                    Yorkshire Service
                  </span>
                  <p className="font-heading font-bold text-base sm:text-lg leading-snug">
                    Uniformed, dependable commercial cleaning professionals.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Why Choose Parker Cleaning Group? */}
      <section className="py-20 sm:py-24 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Commercial Excellence"
            title="Why Choose Parker Cleaning Group?"
            description="Our service model is engineered around reliability, commercial attention to detail, and flexible business arrangements."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {WHY_CHOOSE_US.map((point, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl border border-slate-200/80 p-8 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors">
                    <div className="group-hover:brightness-0 group-hover:invert transition-all">
                      {getWhyIcon(point.icon)}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors font-heading">
                    {point.title}
                  </h3>
                  <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
                    {point.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-1.5 text-xs font-semibold text-blue-600">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Commercial Standard</span>
                </div>
              </div>
            ))}

            {/* Quick Consultation Card */}
            <div className="bg-gradient-to-br from-slate-900 to-blue-950 rounded-2xl p-8 text-white shadow-lg flex flex-col justify-between border border-blue-900">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-blue-400 block mb-2">
                  Ready to Discuss?
                </span>
                <h3 className="text-2xl font-bold font-heading">
                  Request a Tailored Commercial Cleaning Proposal
                </h3>
                <p className="mt-3 text-sm text-slate-300 leading-relaxed">
                  Tell us about your facility size, cleaning frequency, and operational hours for a bespoke quote.
                </p>
              </div>

              <div className="mt-8">
                <PrimaryButton to="/contact" className="w-full text-center py-3.5">
                  Get a Free Quote
                </PrimaryButton>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Services Overview */}
      <section className="py-20 sm:py-24 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase mb-3.5 bg-blue-50 text-blue-700 border border-blue-100">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                Commercial Cleaning Services
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 font-heading">
                Comprehensive Cleaning Solutions
              </h2>
              <p className="mt-3 text-slate-600 text-base sm:text-lg max-w-2xl">
                Structured commercial cleaning arrangements tailored to your workplace frequency and premises specifications.
              </p>
            </div>

            <SecondaryButton to="/services" className="shrink-0 self-start md:self-end">
              View All Cleaning Specifications
            </SecondaryButton>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.slice(0, 3).map((service) => (
              <ServiceCard key={service.id} service={service} variant="grid" />
            ))}
          </div>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
            {SERVICES.slice(3, 5).map((service) => (
              <ServiceCard key={service.id} service={service} variant="grid" />
            ))}
          </div>
        </div>
      </section>

      {/* Section 5: Industries We Serve */}
      <section className="py-20 sm:py-24 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Commercial Sectors"
            title="Commercial Sectors We Support"
            description="Our cleaning operations adapt to the compliance, safety, and scheduling demands of diverse business environments."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {INDUSTRIES.map((ind) => (
              <IndustryCard key={ind.id} industry={ind} />
            ))}
          </div>
        </div>
      </section>

      {/* Real Commercial Result Section */}
      <RealResultSection variant="home" />

      {/* Section 6: Tailored Cleaning Solutions */}
      <section className="py-20 sm:py-24 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-slate-900 text-white overflow-hidden shadow-2xl border border-slate-800">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-8 sm:p-12 lg:p-16">
              <div className="lg:col-span-7 space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-900/80 border border-blue-400/40 text-blue-300 text-xs font-semibold">
                  <Sparkles className="w-3.5 h-3.5 text-blue-400" />
                  <span>Bespoke Commercial Specifications</span>
                </div>

                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight font-heading">
                  Tailored Cleaning Solutions Built Around Your Working Hours
                </h2>

                <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
                  No two commercial facilities are identical. Parker Cleaning Group collaborates closely with business owners, office managers, and facility directors to formulate cleaning schedules that seamlessly align with your operational shifts.
                </p>

                <ul className="space-y-3 pt-2">
                  {[
                    "Customized scope of works matching your exact floor plan",
                    "Early morning or after-hours cleaning to avoid workplace disruption",
                    "Fully insured, vetted, and supervised commercial cleaners",
                    "Regular quality reviews and clear communication",
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-sm sm:text-base text-slate-200">
                      <CheckCircle2 className="w-5 h-5 text-blue-400 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="pt-4 flex flex-col sm:flex-row gap-4">
                  <PrimaryButton to="/contact" className="py-3.5 px-7">
                    Request a Tailored Quote
                  </PrimaryButton>
                  <SecondaryButton
                    to="/about"
                    className="py-3.5 px-6 bg-slate-800 text-white border-slate-700 hover:bg-slate-700"
                  >
                    Our Commercial Approach
                  </SecondaryButton>
                </div>
              </div>

              <div className="lg:col-span-5">
                <div className="rounded-2xl overflow-hidden border border-slate-700 shadow-xl aspect-4/3 relative">
                  <img
                    src="/images/services-hero.jpg"
                    alt="Commercial cleaning in boardroom"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="text-xs font-bold uppercase tracking-wider text-blue-400 block">
                      Excellence in Detailing
                    </span>
                    <p className="text-sm font-semibold text-white">
                      High standards maintained on every commercial visit.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 7: Yorkshire Coverage */}
      <section className="py-20 sm:py-24 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-bold tracking-wider uppercase border border-blue-100">
                <MapPin className="w-3.5 h-3.5 text-blue-600" />
                Service Area
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight font-heading">
                Commercial Cleaning Services Across Yorkshire
              </h2>

              <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                Parker Cleaning Group proudly serves commercial customers throughout the Yorkshire region. We deliver dependable cleaning arrangements to business parks, industrial estates, commercial centres, and standalone business properties.
              </p>

              <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-3">
                <div className="flex items-center gap-2 text-sm font-bold text-slate-900">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>Regional Yorkshire Commercial Focus</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Our service arrangements are strictly commercial. Contact our team to confirm service availability for your specific premises location and operational requirements.
                </p>
              </div>

              <div>
                <PrimaryButton to="/contact" className="py-3.5 px-7">
                  Check Service For Your Premises
                </PrimaryButton>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative rounded-2xl overflow-hidden shadow-xl border border-slate-200 bg-slate-900 aspect-16/10">
                <img
                  src="/images/contact-hero.jpg"
                  alt="Yorkshire commercial business reception"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <div className="flex items-center gap-2 mb-1">
                    <MapPin className="w-4 h-4 text-blue-400" />
                    <span className="text-xs font-bold uppercase tracking-wider text-blue-400">
                      Yorkshire, United Kingdom
                    </span>
                  </div>
                  <h3 className="text-lg font-bold font-heading">
                    Commercial Cleaning Solutions for Yorkshire Businesses
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 8: Final CTA */}
      <CTASection
        headline="Let's Create a Cleaner, More Professional Workspace."
        supportingText="Tell us about your premises and cleaning requirements. Our team will help you explore a suitable commercial cleaning solution."
        primaryButtonText="Request Your Free Quote"
        primaryButtonLink="/contact"
        secondaryButtonText="Explore Our Services"
        secondaryButtonLink="/services"
      />
    </div>
  );
};
