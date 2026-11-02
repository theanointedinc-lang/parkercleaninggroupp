import React from 'react';
import { X, Shield, Cookie } from 'lucide-react';

interface PolicyModalProps {
  type: 'privacy' | 'cookie' | null;
  onClose: () => void;
}

export const PolicyModal: React.FC<PolicyModalProps> = ({ type, onClose }) => {
  if (!type) return null;

  const isPrivacy = type === 'privacy';

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-slate-200 max-h-[85vh] flex flex-col overflow-hidden"
        role="dialog"
        aria-modal="true"
        aria-labelledby="policy-modal-title"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 bg-slate-50">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-lg bg-blue-100 text-blue-700">
              {isPrivacy ? <Shield className="w-5 h-5" /> : <Cookie className="w-5 h-5" />}
            </div>
            <div>
              <h3 id="policy-modal-title" className="text-lg font-bold text-slate-900">
                {isPrivacy ? 'Privacy Policy' : 'Cookie Policy'}
              </h3>
              <p className="text-xs text-slate-500">Parker Cleaning Group — Commercial Compliance</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-200 transition-colors"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto text-sm text-slate-600 space-y-4 leading-relaxed">
          {isPrivacy ? (
            <>
              <p className="font-semibold text-slate-800">
                Parker Cleaning Group is dedicated to safeguarding the privacy and commercial confidentiality of our clients and website visitors across Yorkshire.
              </p>
              <h4 className="font-bold text-slate-900 text-base mt-4">1. Commercial Information We Collect</h4>
              <p>
                When you submit an enquiry or quotation request via our website, we collect your business name, contact name, commercial email address, business telephone number, premises type, and facility cleaning specifications.
              </p>
              <h4 className="font-bold text-slate-900 text-base mt-4">2. How We Use Commercial Data</h4>
              <p>
                The information collected is used strictly to evaluate your commercial premises, calculate accurate cleaning proposals, arrange facility walk-throughs, and communicate directly regarding your commercial service arrangements. We never sell or share commercial data with third-party advertisers.
              </p>
              <h4 className="font-bold text-slate-900 text-base mt-4">3. Data Security & Retention</h4>
              <p>
                All data submitted through our quotation system is transmitted securely and retained only for legitimate commercial quoting and contractual purposes in accordance with UK GDPR.
              </p>
            </>
          ) : (
            <>
              <p className="font-semibold text-slate-800">
                Parker Cleaning Group uses essential and performance cookies to ensure the website functions reliably and securely for commercial visitors.
              </p>
              <h4 className="font-bold text-slate-900 text-base mt-4">1. Essential Cookies</h4>
              <p>
                These cookies are necessary for core security, session continuity, navigation integrity, and quotation form submission. They cannot be deactivated.
              </p>
              <h4 className="font-bold text-slate-900 text-base mt-4">2. Performance & Analytics</h4>
              <p>
                We may use anonymous operational analytics to measure page load speeds and visitor journeys, helping us refine our Yorkshire commercial customer experience without tracking personally identifiable individual records.
              </p>
            </>
          )}
        </div>

        {/* Footer */}
        <div className="px-6 py-3.5 bg-slate-50 border-t border-slate-200 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 text-sm font-semibold rounded-lg bg-blue-600 hover:bg-blue-700 text-white transition-colors"
          >
            I Understand
          </button>
        </div>
      </div>
    </div>
  );
};
