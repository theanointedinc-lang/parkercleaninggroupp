import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Building2, ArrowRight, Home as HomeIcon } from 'lucide-react';

export const NotFound: React.FC = () => {
  useEffect(() => {
    document.title = "Page Not Found | Parker Cleaning Group";
  }, []);

  return (
    <div className="min-h-[60vh] flex items-center justify-center py-20 px-4 bg-slate-50">
      <div className="max-w-md w-full bg-white rounded-2xl border border-slate-200 p-8 text-center shadow-lg">
        <div className="w-14 h-14 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mx-auto mb-4 border border-blue-100">
          <Building2 className="w-7 h-7" />
        </div>
        <span className="text-xs font-bold uppercase tracking-wider text-blue-600 block mb-1">
          Error 404
        </span>
        <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 font-heading">
          Page Not Found
        </h1>
        <p className="mt-3 text-sm text-slate-600 leading-relaxed">
          The page you are looking for does not exist or has been relocated. Explore our commercial cleaning services or return to the homepage.
        </p>

        <div className="mt-6 flex flex-col gap-2.5">
          <Link
            to="/"
            className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm transition-colors shadow-xs"
          >
            <HomeIcon className="w-4 h-4" />
            <span>Return to Homepage</span>
          </Link>
          <Link
            to="/services"
            className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl border border-slate-200 hover:bg-slate-50 text-slate-700 font-semibold text-sm transition-colors"
          >
            <span>View Commercial Services</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
};
