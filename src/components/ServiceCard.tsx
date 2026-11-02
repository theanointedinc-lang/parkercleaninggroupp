import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import type { ServiceItem } from '../data/content';

interface ServiceCardProps {
  service: ServiceItem;
  variant?: 'grid' | 'detailed';
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ service, variant = 'grid' }) => {
  const isDetailed = variant === 'detailed';

  if (isDetailed) {
    return (
      <div 
        id={service.id}
        className="scroll-mt-24 rounded-2xl border border-slate-200/80 bg-white overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col lg:flex-row group"
      >
        {/* Service Image */}
        <div className="lg:w-2/5 relative min-h-[260px] lg:min-h-full overflow-hidden bg-slate-900">
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent lg:hidden" />
          <div className="absolute bottom-4 left-4 lg:hidden">
            <span className="inline-block px-3 py-1 rounded-md bg-blue-600 text-white text-xs font-bold tracking-wide">
              Commercial Service
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 lg:p-10 lg:w-3/5 flex flex-col justify-between">
          <div>
            <div className="hidden lg:inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-blue-50 text-blue-700 text-xs font-bold tracking-wide uppercase mb-3 border border-blue-100">
              Commercial Cleaning Specification
            </div>
            
            <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors font-heading">
              {service.title}
            </h3>

            <p className="mt-3 text-slate-600 text-base leading-relaxed">
              {service.fullDesc}
            </p>

            {/* Key Service Features */}
            <div className="mt-6">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
                Key Arrangements & Focus:
              </h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-sm text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Ideal For */}
            <div className="mt-6 p-4 rounded-xl bg-slate-50 border border-slate-100 text-xs sm:text-sm text-slate-700">
              <strong className="text-slate-900 font-semibold">Suitable For: </strong>
              {service.idealFor}
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <span className="text-xs text-slate-500">
              Yorkshire Commercial Cleaning Plans
            </span>
            <Link
              to={`/contact?service=${encodeURIComponent(service.title)}`}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold transition-all shadow-sm hover:shadow"
            >
              <span>Quote for {service.title}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    );
  }

  // Grid / Overview Variant
  return (
    <div className="rounded-2xl border border-slate-200/90 bg-white overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col group hover:-translate-y-1">
      <div className="relative h-48 sm:h-52 overflow-hidden bg-slate-900">
        <img
          src={service.image}
          alt={service.title}
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
        <span className="absolute bottom-3 left-3 px-2.5 py-1 rounded bg-slate-900/80 backdrop-blur-md text-white text-[11px] font-semibold tracking-wide border border-white/20">
          Yorkshire Commercial
        </span>
      </div>

      <div className="p-6 flex-1 flex flex-col justify-between">
        <div>
          <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors font-heading">
            {service.title}
          </h3>
          <p className="mt-2.5 text-slate-600 text-sm leading-relaxed">
            {service.shortDesc}
          </p>

          <ul className="mt-4 space-y-1.5 border-t border-slate-100 pt-3">
            {service.features.slice(0, 3).map((feat, i) => (
              <li key={i} className="flex items-center gap-2 text-xs text-slate-600">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                <span>{feat}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
          <Link
            to="/services"
            className="text-xs font-bold text-slate-700 hover:text-blue-600 transition-colors flex items-center gap-1 group-hover:gap-1.5"
          >
            <span>Learn More</span>
            <ArrowRight className="w-3.5 h-3.5 text-blue-600" />
          </Link>
          <Link
            to={`/contact?service=${encodeURIComponent(service.title)}`}
            className="text-xs font-semibold px-3 py-1.5 rounded-md bg-blue-50 text-blue-700 hover:bg-blue-600 hover:text-white transition-colors"
          >
            Get Quote
          </Link>
        </div>
      </div>
    </div>
  );
};
