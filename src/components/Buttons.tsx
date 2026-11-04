import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface ButtonProps {
  children: React.ReactNode;
  to?: string;
  onClick?: () => void;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  showArrow?: boolean;
  disabled?: boolean;
}

export const PrimaryButton: React.FC<ButtonProps> = ({
  children,
  to,
  onClick,
  className = '',
  type = 'button',
  showArrow = true,
  disabled = false,
}) => {
  const baseClasses =
    'inline-flex items-center justify-center font-semibold text-sm sm:text-base px-6 py-3.5 rounded-lg transition-all duration-200 shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 active:scale-[0.99] disabled:opacity-60 disabled:cursor-not-allowed bg-blue-600 hover:bg-blue-700 text-white';

  if (to) {
    const isExternal = to.startsWith('http') || to.startsWith('tel:') || to.startsWith('mailto:');
    if (isExternal) {
      return (
        <a href={to} className={`${baseClasses} ${className}`}>
          <span>{children}</span>
          {showArrow && <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />}
        </a>
      );
    }
    return (
      <Link to={to} className={`${baseClasses} ${className}`}>
        <span>{children}</span>
        {showArrow && <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={`${baseClasses} ${className}`}>
      <span>{children}</span>
      {showArrow && <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />}
    </button>
  );
};

export const SecondaryButton: React.FC<ButtonProps> = ({
  children,
  to,
  onClick,
  className = '',
  type = 'button',
  showArrow = false,
  disabled = false,
}) => {
  const baseClasses =
    'inline-flex items-center justify-center font-semibold text-sm sm:text-base px-6 py-3.5 rounded-lg transition-all duration-200 border border-slate-300 hover:border-slate-400 bg-white hover:bg-slate-50 text-slate-800 shadow-xs focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 active:scale-[0.99] disabled:opacity-60 disabled:cursor-not-allowed';

  if (to) {
    return (
      <Link to={to} className={`${baseClasses} ${className}`}>
        <span>{children}</span>
        {showArrow && <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={`${baseClasses} ${className}`}>
      <span>{children}</span>
      {showArrow && <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />}
    </button>
  );
};
