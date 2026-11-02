import { MapPin, ExternalLink } from 'lucide-react';

interface GoogleMapProps {
  className?: string;
  variant?: 'footer' | 'page';
}

export const GoogleMap: React.FC<GoogleMapProps> = ({
  className = '',
  variant = 'page',
}) => {
  const isFooter = variant === 'footer';

  return (
    <div
      className={`relative w-full rounded-2xl overflow-hidden border-2 border-slate-300 shadow-md bg-slate-100 ${
        isFooter ? 'h-64 sm:h-72' : 'h-80 sm:h-96'
      } ${className}`}
    >
      {/* Live Interactive Google Map */}
      <iframe
        title="Parker Cleaning Group Yorkshire Commercial Service Area"
        src="https://maps.google.com/maps?q=Yorkshire%2C%20UK&t=&z=9&ie=UTF8&iwloc=&output=embed"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="w-full h-full block"
      />

      {/* Verified Status Floating Pill */}
      <div className="absolute top-3 left-3 max-w-xs pointer-events-none">
        <div className="bg-slate-950/90 backdrop-blur-md px-3.5 py-2.5 rounded-lg border border-slate-700 shadow-lg text-white pointer-events-auto flex items-center gap-2.5">
          <MapPin className="w-4 h-4 text-blue-400 shrink-0" />
          <div className="text-xs">
            <span className="font-bold text-white block">Yorkshire Regional Coverage</span>
            <span className="text-[11px] text-slate-300">Interactive: Pan &amp; Zoom</span>
          </div>
          <a
            href="https://maps.google.com/?q=Yorkshire,+UK"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-auto text-blue-400 hover:text-blue-300"
            title="Open in Google Maps"
          >
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </div>
  );
};
