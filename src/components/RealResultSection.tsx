import React from 'react';
import { 
  CheckCircle2, 
  Sparkles, 
  ShieldCheck, 
  Building2 
} from 'lucide-react';
import { PrimaryButton, SecondaryButton } from './Buttons';

interface RealResultSectionProps {
  variant?: 'home' | 'services';
  className?: string;
}

export const RealResultSection: React.FC<RealResultSectionProps> = ({
  variant = 'home',
  className = '',
}) => {
  const isServices = variant === 'services';

  return (
    <section className={`py-20 sm:py-24 bg-gradient-to-b from-white via-slate-50 to-white border-b border-slate-200 overflow-hidden ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 text-blue-700 text-xs font-bold tracking-wider uppercase border border-blue-200/80 mb-3.5 shadow-2xs">
            <Sparkles className="w-3.5 h-3.5 text-blue-600" />
            <span>Real Commercial Results</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight font-heading leading-tight">
            {isServices 
              ? "Tangible Quality: Real Results Across Yorkshire Workplaces"
              : "Real Results: Exceptional Standards for Yorkshire Businesses"}
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            See the Parker Cleaning Group standard in practice. From pristine executive boardrooms and streak-free architectural glass to deep commercial floor care, our uniformed teams ensure your workplace always makes an impeccable impression.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Real Result Photograph (6 cols) */}
          <div className="lg:col-span-6">
            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border border-slate-200/90 group bg-slate-900">
              
              {/* The Real Uploaded Boardroom Photograph */}
              <img
                src="/images/real-result-boardroom.jpg"
                alt="Real result of commercial cleaning in Yorkshire corporate boardroom"
                className="w-full h-auto max-h-[580px] object-cover object-center group-hover:scale-102 transition-transform duration-700 ease-out"
                loading="lazy"
              />

              {/* Subtle visual gradient on bottom */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent pointer-events-none" />

              {/* Top Badge: Verified Result */}
              <div className="absolute top-4 left-4 sm:top-5 sm:left-5">
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-950/80 backdrop-blur-md text-white text-xs font-bold tracking-wide border border-white/20 shadow-md">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                  Verified Commercial Premises
                </span>
              </div>

              {/* Bottom Caption Overlay */}
              <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 text-white">
                <div className="flex items-center gap-2 mb-1.5 text-blue-400 text-xs font-bold tracking-wider uppercase">
                  <Building2 className="w-3.5 h-3.5" />
                  <span>Executive Boardroom &amp; Conference Suite</span>
                </div>
                <h3 className="text-lg sm:text-xl font-bold font-heading text-white leading-snug">
                  Streak-Free Glass, Deep Wood Care &amp; Flawless Carpet Lines
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 mt-1 line-clamp-2">
                  Immaculate surfaces, anti-static dust removal, and acoustic partition clarity maintained on every commercial visit.
                </p>
              </div>
            </div>

            {/* Micro-proof strip */}
            <div className="mt-4 grid grid-cols-3 gap-3 text-center">
              <div className="p-3 rounded-xl bg-white border border-slate-200 shadow-2xs">
                <span className="block text-xs font-bold text-slate-900 font-heading">Streak-Free</span>
                <span className="text-[11px] text-slate-500">Glazed Partitions</span>
              </div>
              <div className="p-3 rounded-xl bg-white border border-slate-200 shadow-2xs">
                <span className="block text-xs font-bold text-slate-900 font-heading">Deep Treated</span>
                <span className="text-[11px] text-slate-500">Boardroom Furniture</span>
              </div>
              <div className="p-3 rounded-xl bg-white border border-slate-200 shadow-2xs">
                <span className="block text-xs font-bold text-slate-900 font-heading">Vacuumed</span>
                <span className="text-[11px] text-slate-500">Acoustic Carpeting</span>
              </div>
            </div>
          </div>

          {/* Right Column: Key Commercial Standards & Specification (6 cols) */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-blue-600 block mb-1.5">
                Quality In Action
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 font-heading">
                How We Deliver Pristine Corporate Spaces
              </h3>
              <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
                Whether hosting high-stakes client pitches or supporting daily workplace productivity, your meeting rooms and communal zones represent your brand. Our commercial cleaning standards are engineered for total consistency.
              </p>
            </div>

            {/* Checklist of deliverables shown in the photo */}
            <div className="space-y-3.5">
              {[
                {
                  title: "Acoustic Glass & Partition Clarity",
                  desc: "Zero smudges or smears on full-height boardroom glass and entrance doors."
                },
                {
                  title: "Wood & Hard Surface Sanitisation",
                  desc: "Careful application of professional cleaning agents that preserve table finishes while sanitising high-touch areas."
                },
                {
                  title: "Commercial Carpet Maintenance",
                  desc: "High-filtration vacuuming that captures fine particulate matter, extending carpet lifespan and freshening workplace air."
                },
                {
                  title: "Scheduled Disruption-Free Cleans",
                  desc: "Work scheduled before your working day begins, in the evening, or on weekends to never interrupt client operations."
                }
              ].map((point, index) => (
                <div 
                  key={index}
                  className="flex items-start gap-3.5 p-3.5 rounded-xl bg-white border border-slate-200/90 shadow-2xs hover:border-blue-300 transition-colors"
                >
                  <div className="p-1 rounded-md bg-emerald-50 text-emerald-600 shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">
                      {point.title}
                    </h4>
                    <p className="text-xs text-slate-600 mt-0.5 leading-relaxed">
                      {point.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Insurance & Trust Note */}
            <div className="flex items-center gap-3 p-4 rounded-xl bg-blue-50/80 border border-blue-100 text-blue-900 text-xs sm:text-sm">
              <ShieldCheck className="w-5 h-5 text-blue-600 shrink-0" />
              <div>
                <span className="font-bold block">Fully Insured Commercial Cleaning</span>
                <span className="text-xs text-blue-700">Dedicated, vetted commercial personnel operating across Yorkshire.</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row items-center gap-3.5">
              <PrimaryButton to="/contact" className="w-full sm:w-auto py-3 px-6 text-sm">
                Get a Quote for Your Facility
              </PrimaryButton>
              <SecondaryButton to="/services" className="w-full sm:w-auto py-3 px-6 text-sm">
                Explore All Services
              </SecondaryButton>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
