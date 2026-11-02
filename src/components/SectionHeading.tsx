import React from 'react';

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  dark?: boolean;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  eyebrow,
  title,
  description,
  align = 'center',
  dark = false,
}) => {
  const isCentered = align === 'center';

  return (
    <div className={`max-w-3xl mb-12 sm:mb-16 ${isCentered ? 'mx-auto text-center' : 'text-left'}`}>
      {eyebrow && (
        <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase mb-3.5 ${
          dark 
            ? 'bg-blue-900/60 text-blue-200 border border-blue-700/50' 
            : 'bg-blue-50 text-blue-700 border border-blue-100'
        }`}>
          <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse"></span>
          {eyebrow}
        </div>
      )}
      <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight ${
        dark ? 'text-white' : 'text-slate-900'
      }`}>
        {title}
      </h2>
      {description && (
        <p className={`mt-4 text-base sm:text-lg lg:text-xl font-normal leading-relaxed ${
          dark ? 'text-slate-300' : 'text-slate-600'
        }`}>
          {description}
        </p>
      )}
    </div>
  );
};
