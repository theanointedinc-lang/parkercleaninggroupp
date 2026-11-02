import React from 'react';
import { PrimaryButton, SecondaryButton } from './Buttons';
import { ShieldCheck, Sparkles, MapPin } from 'lucide-react';

interface CTASectionProps {
  headline?: string;
  supportingText?: string;
  primaryButtonText?: string;
  primaryButtonLink?: string;
  secondaryButtonText?: string;
  secondaryButtonLink?: string;
}

export const CTASection: React.FC<CTASectionProps> = ({
  headline = "Let's Create a Cleaner, More Professional Workspace.",
  supportingText = "Tell us about your premises and cleaning requirements. Our team will help you explore a suitable commercial cleaning solution tailored to your operational hours.",
  primaryButtonText = "Request Your Free Quote",
  primaryButtonLink = "/contact",
  secondaryButtonText = "Explore Our Services",
  secondaryButtonLink = "/services",
}) => {
  return (
    <section className="relative py-20 sm:py-24 overflow-hidden bg-slate-950 text-white">
      {/* Background Subtle Gradient Mesh */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute -top-40 -left-40 w-96 h-96 rounded-full bg-blue-600 blur-3xl"></div>
        <div className="absolute -bottom-40 -right-40 w-96 h-96 rounded-full bg-sky-500 blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-3xl mx-auto">
          {/* Eyebrow Pill */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-900/60 border border-blue-400/40 text-blue-200 text-xs sm:text-sm font-semibold tracking-wide mb-6">
            <Sparkles className="w-3.5 h-3.5 text-blue-400" />
            <span>Commercial Cleaning In Yorkshire</span>
            <span className="text-blue-400/60">•</span>
            <span className="flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5 text-blue-400" />
              Yorkshire Wide
            </span>
          </div>

          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight font-heading">
            {headline}
          </h2>

          {/* Subtext */}
          <p className="mt-5 text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
            {supportingText}
          </p>

          {/* Action Buttons */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <PrimaryButton to={primaryButtonLink} className="w-full sm:w-auto py-4 px-8 text-base shadow-xl">
              {primaryButtonText}
            </PrimaryButton>
            {secondaryButtonText && (
              <SecondaryButton
                to={secondaryButtonLink}
                className="w-full sm:w-auto py-4 px-7 text-base bg-white/10 hover:bg-white/20 text-white border-white/25"
              >
                {secondaryButtonText}
              </SecondaryButton>
            )}
          </div>

          {/* Verification Footnote */}
          <div className="mt-8 pt-6 border-t border-slate-800 flex items-center justify-center gap-2 text-xs text-slate-400">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>Parker Cleaning Group is fully insured and dedicated strictly to commercial business premises.</span>
          </div>
        </div>
      </div>
    </section>
  );
};
