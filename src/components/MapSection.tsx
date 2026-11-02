import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, ShieldCheck, ArrowRight, ExternalLink } from 'lucide-react';

export const MapSection: React.FC = () => {
  const yorkshireTowns = [
    "Leeds",
    "Bradford",
    "Wakefield",
    "Sheffield",
    "York",
    "Harrogate",
    "Huddersfield",
    "Halifax",
    "Barnsley",
    "Doncaster",
    "Rotherham"
  ];

  return (
    <section 
      aria-label="Regional Commercial Coverage Map"
      className="bg-slate-100 border-t border-slate-300/80 pt-14 pb-16 relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-xs font-bold tracking-wider uppercase border border-blue-200 mb-3 shadow-2xs">
              <MapPin className="w-3.5 h-3.5 text-blue-600" />
              <span>Interactive Service Area Map</span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 font-heading tracking-tight">
              Commercial Cleaning Service Coverage Across Yorkshire
            </h2>

            <p className="mt-2 text-sm sm:text-base text-slate-600 max-w-2xl leading-relaxed">
              Explore our operational coverage throughout Yorkshire. We deliver dedicated commercial cleaning to business parks, industrial estates, office buildings, and retail facilities.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-xs font-semibold text-slate-700 shadow-2xs">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>Fully Insured Regional Coverage</span>
            </span>

            <Link
              to="/contact"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold transition-all shadow-sm"
            >
              <span>Check Your Postcode</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        {/* Yorkshire Districts Pill Strip */}
        <div className="flex flex-wrap items-center gap-2 mb-6">
          <span className="text-xs font-bold text-slate-600 uppercase tracking-wider mr-1">
            Key Areas Served:
          </span>
          {yorkshireTowns.map((town) => (
            <span
              key={town}
              className="inline-block px-2.5 py-1 rounded-md bg-white border border-slate-200 text-xs font-medium text-slate-700 shadow-2xs"
            >
              {town}
            </span>
          ))}
          <span className="text-xs font-medium text-slate-500 italic pl-1">
            + all surrounding Yorkshire business districts
          </span>
        </div>

        {/* Interactive Google Map Container */}
        <div className="relative w-full h-[400px] sm:h-[480px] lg:h-[520px] rounded-2xl overflow-hidden border-2 border-slate-300 shadow-xl bg-slate-200">
          
          {/* Live, Fully Interactive Google Map Iframe */}
          <iframe
            title="Parker Cleaning Group Yorkshire Commercial Service Area Interactive Map"
            src="https://maps.google.com/maps?q=Yorkshire%2C%20UK&t=&z=9&ie=UTF8&iwloc=&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-full block"
          />

          {/* Floating Status Card in Top Corner */}
          <div className="absolute top-4 left-4 max-w-xs sm:max-w-sm pointer-events-none">
            <div className="bg-slate-950/90 backdrop-blur-md p-4 rounded-xl border border-slate-700/80 shadow-2xl text-white pointer-events-auto">
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-blue-600 text-white shrink-0 mt-0.5">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-sm text-white">
                    Yorkshire Operational Coverage
                  </h3>
                  <p className="text-xs text-slate-300 mt-0.5">
                    Interactive Map: Pan and zoom to view your business location.
                  </p>
                </div>
              </div>

              <div className="mt-3 pt-2.5 border-t border-slate-800 text-[11px] text-slate-400 flex items-center justify-between">
                <span>Pin: Registered HQ Location</span>
                <a
                  href="https://maps.google.com/?q=Yorkshire,+UK"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 flex items-center gap-1 font-semibold"
                >
                  <span>Open Full Map</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Verification & Regional Operational Notice */}
        <div className="mt-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-slate-600 bg-white/80 p-3.5 rounded-xl border border-slate-200">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-blue-600 shrink-0" />
            <span>
              <strong>Commercial Service Availability:</strong> Parker Cleaning Group arranges commercial cleaning schedules across the entire Yorkshire region.
            </span>
          </div>

          <Link
            to="/contact"
            className="text-blue-600 hover:text-blue-800 font-bold shrink-0 inline-flex items-center gap-1"
          >
            <span>Request a Tailored Quote</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

      </div>
    </section>
  );
};
