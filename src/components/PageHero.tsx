import React from 'react';
import { PrimaryButton, SecondaryButton } from './Buttons';
import { ShieldCheck, MapPin } from 'lucide-react';

interface PageHeroProps {
  badge?: string;
  title: string;
  subtitle: string;
  heroImage: string;
  primaryCtaText?: string;
  primaryCtaLink?: string;
  secondaryCtaText?: string;
  secondaryCtaLink?: string;
  showDualCta?: boolean;
}

export const PageHero: React.FC<PageHeroProps> = ({
  badge = 'Commercial Cleaning Specialists',
  title,
  subtitle,
  heroImage,
  primaryCtaText = 'Request a Free Quote',
  primaryCtaLink = '/contact',
  secondaryCtaText = 'Explore Our Services',
  secondaryCtaLink = '/services',
  showDualCta = true,
}) => {
  return (
    <section className="relative min-h-[520px] sm:min-h-[580px] lg:min-h-[640px] flex items-center justify-center overflow-hidden bg-slate-950">
      {/* Background Hero Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt={title}
          className="w-full h-full object-cover object-center filter brightness-[0.88] scale-105 animate-in fade-in zoom-in-95 duration-1000"
          loading="eager"
        />
        {/* Multi-layered corporate gradient overlays to ensure razor-sharp typography contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/80 to-slate-950/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/40" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 lg:py-32 w-full">
        <div className="max-w-3xl">
          {/* Eyebrow Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-900/60 border border-blue-400/40 text-blue-200 text-xs sm:text-sm font-semibold tracking-wide backdrop-blur-md mb-6 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></span>
            <span>{badge}</span>
            <span className="text-blue-400/70">•</span>
            <span className="flex items-center gap-1 text-blue-100">
              <MapPin className="w-3.5 h-3.5 text-blue-400" />
              Yorkshire, UK
            </span>
          </div>

          {/* Main H1 Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.12] mb-6 font-heading drop-shadow-sm">
            {title}
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg md:text-xl text-slate-200 leading-relaxed font-normal mb-8 sm:mb-10 max-w-2xl drop-shadow-xs">
            {subtitle}
          </p>

          {/* Call to Action Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <PrimaryButton to={primaryCtaLink} className="py-4 px-8 text-base shadow-lg shadow-blue-600/30">
              {primaryCtaText}
            </PrimaryButton>

            {showDualCta && (
              <SecondaryButton
                to={secondaryCtaLink}
                className="py-4 px-7 text-base bg-white/10 hover:bg-white/20 text-white border-white/30 backdrop-blur-md"
              >
                {secondaryCtaText}
              </SecondaryButton>
            )}
          </div>

          {/* Trust Highlights */}
          <div className="mt-10 pt-8 border-t border-white/15 flex flex-wrap items-center gap-6 text-xs sm:text-sm text-slate-300">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
              <span className="font-medium">Fully Insured Commercial Cleaning</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400 shrink-0"></span>
              <span className="font-medium">Tailored Commercial Cleaning Schedules</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400 shrink-0"></span>
              <span className="font-medium">Exclusively Commercial & B2B Premises</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
