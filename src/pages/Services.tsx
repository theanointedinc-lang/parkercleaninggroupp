import React, { useEffect } from 'react';
import { 
  Sparkles, 
  Clock, 
  Calendar, 
  Flame, 
  FileCheck, 
  Sliders 
} from 'lucide-react';
import { PageHero } from '../components/PageHero';
import { SectionHeading } from '../components/SectionHeading';
import { ServiceCard } from '../components/ServiceCard';
import { IndustryCard } from '../components/IndustryCard';
import { RealResultSection } from '../components/RealResultSection';
import { CTASection } from '../components/CTASection';
import { PrimaryButton } from '../components/Buttons';
import { SERVICES, INDUSTRIES, CLEANING_PROCESS } from '../data/content';

export const Services: React.FC = () => {
  useEffect(() => {
    document.title = "Our Services | Parker Cleaning Group — Commercial Cleaning Yorkshire";
    window.scrollTo(0, 0);
  }, []);

  const serviceBadges = [
    { label: "Daily Commercial", icon: <Clock className="w-4 h-4 text-blue-600" /> },
    { label: "Weekly Scheduled", icon: <Calendar className="w-4 h-4 text-blue-600" /> },
    { label: "Deep & Intensive", icon: <Flame className="w-4 h-4 text-blue-600" /> },
    { label: "One-Off & Periodic", icon: <FileCheck className="w-4 h-4 text-blue-600" /> },
    { label: "Bespoke Plans", icon: <Sliders className="w-4 h-4 text-blue-600" /> },
  ];

  return (
    <div>
      {/* Section 1: Hero */}
      <PageHero
        badge="Commercial Cleaning Services"
        title="Commercial Cleaning Solutions Designed Around Your Business"
        subtitle="From regular cleaning arrangements to intensive one-off requirements, Parker Cleaning Group provides tailored commercial cleaning solutions across Yorkshire."
        heroImage="/images/services-hero.jpg"
        primaryCtaText="Request a Free Quote"
        primaryCtaLink="/contact"
        secondaryCtaText="Explore Service Models"
        secondaryCtaLink="#service-models"
      />

      {/* Section 2: Service Introduction */}
      <section id="service-models" className="py-20 sm:py-24 bg-white border-b border-slate-100 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase bg-blue-50 text-blue-700 border border-blue-100">
              <Sparkles className="w-3.5 h-3.5 text-blue-600" />
              Tailored Commercial Delivery
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 font-heading tracking-tight">
              Flexible Arrangements For Every Commercial Environment
            </h2>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              We recognise that every Yorkshire workplace operates with distinct foot traffic, shift patterns, and hygiene sensitivities. Our cleaning packages are never one-size-fits-all; they are structured around your premises, working routines, and commercial priorities.
            </p>

            {/* Quick badge navigation */}
            <div className="pt-4 flex flex-wrap items-center justify-center gap-3">
              {serviceBadges.map((badge, idx) => (
                <span
                  key={idx}
                  className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-50 border border-slate-200 text-xs font-semibold text-slate-700"
                >
                  {badge.icon}
                  {badge.label}
                </span>
              ))}
            </div>
          </div>

          {/* Section 3: Main Services (Detailed Breakdown Cards) */}
          <div className="space-y-12">
            {SERVICES.map((service) => (
              <ServiceCard key={service.id} service={service} variant="detailed" />
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: Industries We Serve */}
      <section className="py-20 sm:py-24 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Specialist Sectors"
            title="Commercial Facilities We Support"
            description="Our service protocols adhere to the specific hygiene and operational requirements of diverse commercial environments."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {INDUSTRIES.map((ind) => (
              <IndustryCard key={ind.id} industry={ind} />
            ))}
          </div>
        </div>
      </section>

      {/* Real Commercial Result Section */}
      <RealResultSection variant="services" />

      {/* Section 5: Our Cleaning Process */}
      <section className="py-20 sm:py-24 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="How It Works"
            title="Our Straightforward Commercial Process"
            description="From initial enquiry to active service commencement, we make onboarding seamless and professional."
          />

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {CLEANING_PROCESS.map((proc, idx) => (
              <div
                key={idx}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs flex flex-col justify-between relative group hover:border-blue-300 hover:shadow-lg transition-all"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-700 font-extrabold text-lg flex items-center justify-center mb-4 border border-blue-100 font-heading group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    {proc.step}
                  </div>
                  <h3 className="text-base font-bold text-slate-900 font-heading mb-2">
                    {proc.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {proc.description}
                  </p>
                </div>

                <div className="mt-6 pt-3 border-t border-slate-100 flex items-center gap-1 text-[11px] font-semibold text-blue-600">
                  <span>Step {proc.step} of 05</span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <PrimaryButton to="/contact" className="py-4 px-8 text-base shadow-md">
              Start With Step 1: Request Your Quote
            </PrimaryButton>
          </div>
        </div>
      </section>

      {/* Section 6: Final CTA */}
      <CTASection
        headline="Let's Find the Right Cleaning Solution for Your Business."
        supportingText="Tell us about your premises and cleaning requirements. Our team will help you explore a suitable commercial cleaning solution."
        primaryButtonText="Request a Free Commercial Cleaning Quote"
        primaryButtonLink="/contact"
        secondaryButtonText="Learn About Our Team"
        secondaryButtonLink="/about"
      />
    </div>
  );
};
