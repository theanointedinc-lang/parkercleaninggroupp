import React from 'react';
import { 
  Briefcase, 
  Store, 
  Warehouse, 
  GraduationCap, 
  ShieldAlert, 
  Coffee, 
  Building2, 
  CheckCircle2 
} from 'lucide-react';
import type { IndustryItem } from '../data/content';

interface IndustryCardProps {
  industry: IndustryItem;
}

export const IndustryCard: React.FC<IndustryCardProps> = ({ industry }) => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'Briefcase':
        return <Briefcase className="w-6 h-6 text-blue-600" />;
      case 'Store':
        return <Store className="w-6 h-6 text-blue-600" />;
      case 'Warehouse':
        return <Warehouse className="w-6 h-6 text-blue-600" />;
      case 'GraduationCap':
        return <GraduationCap className="w-6 h-6 text-blue-600" />;
      case 'ShieldAlert':
        return <ShieldAlert className="w-6 h-6 text-blue-600" />;
      case 'Coffee':
        return <Coffee className="w-6 h-6 text-blue-600" />;
      default:
        return <Building2 className="w-6 h-6 text-blue-600" />;
    }
  };

  return (
    <div className="rounded-2xl border border-slate-200/80 bg-white p-6 sm:p-7 shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1">
      <div>
        <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center mb-5 group-hover:bg-blue-600 group-hover:text-white transition-colors">
          <div className="group-hover:brightness-0 group-hover:invert transition-all">
            {getIcon(industry.iconName)}
          </div>
        </div>

        <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors font-heading">
          {industry.name}
        </h3>

        <p className="mt-2.5 text-sm text-slate-600 leading-relaxed">
          {industry.description}
        </p>

        <div className="mt-5 pt-4 border-t border-slate-100">
          <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 block mb-2">
            Commercial Standards:
          </span>
          <ul className="space-y-1.5">
            {industry.highlights.map((item, idx) => (
              <li key={idx} className="flex items-center gap-2 text-xs text-slate-700">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-6 pt-3 text-[11px] font-semibold text-blue-600 flex items-center gap-1">
        <span>Yorkshire B2B Service</span>
      </div>
    </div>
  );
};
