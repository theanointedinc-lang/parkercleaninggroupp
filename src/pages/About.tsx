import React, { useEffect } from 'react';
import { 
  ShieldCheck, 
  CheckCircle2, 
  HeartHandshake, 
  Eye, 
  Repeat, 
  Clock, 
  Building2 
} from 'lucide-react';
import { PageHero } from '../components/PageHero';
import { SectionHeading } from '../components/SectionHeading';
import { CTASection } from '../components/CTASection';
import { PrimaryButton } from '../components/Buttons';
import { INDUSTRIES } from '../data/content';

export const About: React.FC = () => {
  useEffect(() => {
    document.title = "About Us | Parker Cleaning Group — Commercial Cleaning Yorkshire";
    window.scrollTo(0, 0);
  }, []);

  const coreValues = [
    {
      title: "Professionalism",
      description: "We bring high standards of presentation, discretion, and communication to every workplace we service.",
      icon: <Building2 className="w-6 h-6 text-blue-600" />,
    },
    {
      title: "Reliability",
      description: "Consistent, dependable cleaning attendances you can rely on without having to chase or second-guess.",
      icon: <Clock className="w-6 h-6 text-blue-600" />,
    },
    {
      title: "Attention to Detail",
      description: "Focusing on high-touch touchpoints, immaculate surfaces, and the small hygiene details that matter.",
      icon: <Eye className="w-6 h-6 text-blue-600" />,
    },
    {
      title: "Consistency",
      description: "Maintaining identical high standards week in, week out through clear specifications and regular oversight.",
      icon: <Repeat className="w-6 h-6 text-blue-600" />,
    },
    {
      title: "Client-Focused Service",
      description: "Adapting our cleaning arrangements around your operational shifts, staff access, and security requirements.",
      icon: <HeartHandshake className="w-6 h-6 text-blue-600" />,
    },
  ];

  const approachSteps = [
    {
      num: "01",
      title: "Understanding Each Client's Premises",
      desc: "Every workplace has its own layout, flooring types, hygiene sensitive zones, and staff traffic patterns. We begin by listening to your specific operational environment.",
    },
    {
      num: "02",
      title: "Identifying Specific Cleaning Requirements",
      desc: "We pinpoint your hygiene priorities, required attendance frequencies, special focus areas, and preferred cleaning windows.",
    },
    {
      num: "03",
      title: "Agreeing Suitable Cleaning Arrangements",
      desc: "We establish clear, transparent service agreements detailing tasks, schedules, and key points of contact.",
    },
    {
      num: "04",
      title: "Maintaining Professional Standards",
      desc: "Our cleaning personnel are equipped with professional commercial equipment, clear task checklists, and supervision to maintain quality.",
    },
    {
      num: "05",
      title: "Fitting Business Operations Seamlessly",
      desc: "Cleaning occurs smoothly in the background, whether early mornings, evenings, or weekends, without disrupting your staff or clients.",
    },
  ];

  return (
    <div>
      {/* Section 1: Hero */}
      <PageHero
        badge="About Parker Cleaning Group"
        title="A Professional Approach to Commercial Cleaning"
        subtitle="Helping businesses across Yorkshire maintain cleaner, more welcoming, and professionally presented environments."
        heroImage="/images/about-hero.jpg"
        primaryCtaText="Speak to Our Team"
        primaryCtaLink="/contact"
        secondaryCtaText="View Our Services"
        secondaryCtaLink="/services"
      />

      {/* Section 2: Who We Are */}
      <section className="py-20 sm:py-24 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-bold tracking-wider uppercase border border-blue-100">
                <span className="w-2 h-2 rounded-full bg-blue-600"></span>
                Who We Are
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight font-heading">
                Exclusively Commercial Cleaning, Yorkshire.
              </h2>

              <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                Parker Cleaning Group is a dedicated commercial cleaning provider serving businesses, commercial premises, and institutional facilities across Yorkshire.
              </p>

              <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                Unlike domestic cleaners who take on occasional commercial jobs, we are engineered exclusively for the commercial and B2B sector. We understand the high stakes of commercial presentation: welcoming prestigious clients, upholding hygiene standards for staff, and complying with workplace health and safety protocols.
              </p>

              <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                Our commitment is simple: to provide reliable, professional, and consistent commercial cleaning solutions that allow Yorkshire organisations to focus entirely on running their businesses.
              </p>

              <div className="pt-2">
                <PrimaryButton to="/contact" className="py-3.5 px-6">
                  Discuss Your Commercial Cleaning Needs
                </PrimaryButton>
              </div>
            </div>

            <div className="lg:col-span-5 relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl border border-slate-200 aspect-4/3 relative group">
                <img
                  src="/images/services-hero.jpg"
                  alt="Commercial cleaning in modern boardroom"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-5 left-5 right-5 text-white">
                  <span className="text-xs font-bold uppercase tracking-wider text-blue-400 block mb-1">
                    Attention to Detail
                  </span>
                  <p className="font-heading font-bold text-base leading-snug">
                    Maintaining high commercial standards across executive workplaces.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Our Approach */}
      <section className="py-20 sm:py-24 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Structured Process"
            title="Our Structured Cleaning Approach"
            description="How we establish and maintain consistent, reliable cleaning arrangements for Yorkshire commercial premises."
          />

          <div className="max-w-4xl mx-auto space-y-6">
            {approachSteps.map((step, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-slate-200/80 p-6 sm:p-8 shadow-xs flex flex-col sm:flex-row items-start gap-6 hover:shadow-md transition-shadow"
              >
                <div className="w-14 h-14 rounded-2xl bg-blue-50 text-blue-700 font-extrabold text-xl flex items-center justify-center shrink-0 border border-blue-100 font-heading">
                  {step.num}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-slate-900 font-heading">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-slate-600 text-sm sm:text-base leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: Our Values */}
      <section className="py-20 sm:py-24 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Core Principles"
            title="The Values That Guide Our Commercial Work"
            description="Our service delivery is anchored by five fundamental commitments to every commercial client."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreValues.map((val, idx) => (
              <div
                key={idx}
                className="rounded-2xl border border-slate-200/90 bg-white p-8 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors">
                    <div className="group-hover:brightness-0 group-hover:invert transition-all">
                      {val.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors font-heading">
                    {val.title}
                  </h3>
                  <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
                    {val.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-1.5 text-xs font-semibold text-blue-600">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Parker Cleaning Group Standard</span>
                </div>
              </div>
            ))}

            {/* B2B Assurance Card */}
            <div className="rounded-2xl bg-gradient-to-br from-slate-900 to-blue-950 text-white p-8 shadow-lg flex flex-col justify-between border border-blue-900">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-blue-400 block mb-2">
                  Commercial Guarantee
                </span>
                <h3 className="text-2xl font-bold font-heading">
                  Tailored to Yorkshire Businesses
                </h3>
                <p className="mt-3 text-slate-300 text-sm leading-relaxed">
                  Every arrangement is backed by our full commercial insurance and customized service schedule.
                </p>
              </div>

              <div className="mt-8">
                <PrimaryButton to="/contact" className="w-full text-center py-3.5">
                  Request a Quote
                </PrimaryButton>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Who We Work With */}
      <section className="py-20 sm:py-24 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Clients & Premises"
            title="Commercial Facilities We Partner With"
            description="We deliver dependable cleaning across a wide variety of business environments throughout Yorkshire."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {INDUSTRIES.slice(0, 4).map((ind) => (
              <div key={ind.id} className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs flex flex-col justify-between">
                <div>
                  <h3 className="font-bold text-slate-900 text-lg font-heading">{ind.name}</h3>
                  <p className="mt-2 text-xs text-slate-600 leading-relaxed">{ind.description}</p>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-100 text-xs font-semibold text-blue-600">
                  Yorkshire Commercial Coverage
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-6">
            {INDUSTRIES.slice(4, 7).map((ind) => (
              <div key={ind.id} className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs flex flex-col justify-between">
                <div>
                  <h3 className="font-bold text-slate-900 text-lg font-heading">{ind.name}</h3>
                  <p className="mt-2 text-xs text-slate-600 leading-relaxed">{ind.description}</p>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-100 text-xs font-semibold text-blue-600">
                  Yorkshire Commercial Coverage
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 6: Fully Insured */}
      <section className="py-16 bg-white border-b border-slate-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl border-2 border-emerald-500/20 bg-emerald-50/50 p-8 sm:p-10 flex flex-col sm:flex-row items-center gap-6">
            <div className="w-16 h-16 rounded-2xl bg-emerald-600 text-white flex items-center justify-center shrink-0 shadow-md">
              <ShieldCheck className="w-8 h-8" />
            </div>
            <div className="flex-1 text-center sm:text-left">
              <h3 className="text-2xl font-bold text-slate-900 font-heading">
                Fully Insured Commercial Cleaning Provider
              </h3>
              <p className="mt-2 text-sm sm:text-base text-slate-600 leading-relaxed">
                As stated in our business brief, Parker Cleaning Group is fully insured for commercial premises. We take full responsibility for our operations, giving facility managers, business owners, and commercial landlords total peace of mind.
              </p>
            </div>
            <PrimaryButton to="/contact" className="shrink-0 py-3 px-6 text-sm">
              Request Quotation
            </PrimaryButton>
          </div>
        </div>
      </section>

      {/* Section 7: CTA */}
      <CTASection
        headline="Looking for a Commercial Cleaning Partner?"
        supportingText="Speak to our team today about your commercial premises, cleaning frequency, and quotation."
        primaryButtonText="Speak to Our Team"
        primaryButtonLink="/contact"
        secondaryButtonText="Explore Our Services"
        secondaryButtonLink="/services"
      />
    </div>
  );
};
