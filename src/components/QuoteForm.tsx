import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { 
  Send, 
  CheckCircle2, 
  AlertCircle, 
  ShieldCheck, 
  Building, 
  Clock, 
  Mail, 
  Phone, 
  MapPin, 
  User, 
  FileText 
} from 'lucide-react';

interface FormData {
  fullName: string;
  businessName: string;
  email: string;
  telephone: string;
  postcode: string;
  premisesType: string;
  cleaningFrequency: string;
  description: string;
  contactMethod: 'email' | 'telephone' | 'either';
  privacyConsent: boolean;
  honeypot: string; // Anti-spam trap
}

export const QuoteForm: React.FC = () => {
  const [searchParams] = useSearchParams();
  const preselectedService = searchParams.get('service') || '';

  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    businessName: '',
    email: '',
    telephone: '',
    postcode: '',
    premisesType: 'Office',
    cleaningFrequency: 'Daily',
    description: preselectedService ? `Enquiring regarding ${preselectedService} for our premises.` : '',
    contactMethod: 'email',
    privacyConsent: false,
    honeypot: '',
  });

  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [submittedData, setSubmittedData] = useState<FormData | null>(null);

  const validate = (): boolean => {
    const newErrors: Partial<Record<keyof FormData, string>> = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Please enter your full name.';
    }

    if (!formData.businessName.trim()) {
      newErrors.businessName = 'Please enter your commercial organisation or business name.';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Please provide a valid business email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email format (e.g., name@company.co.uk).';
    }

    if (!formData.telephone.trim()) {
      newErrors.telephone = 'Please provide a contact telephone number.';
    } else if (formData.telephone.replace(/[^0-9]/g, '').length < 9) {
      newErrors.telephone = 'Please enter a valid UK telephone number.';
    }

    if (!formData.postcode.trim()) {
      newErrors.postcode = 'Please enter your business location or postcode in Yorkshire.';
    }

    if (!formData.description.trim()) {
      newErrors.description = 'Please provide a brief description of your premises or cleaning specifications.';
    }

    if (!formData.privacyConsent) {
      newErrors.privacyConsent = 'You must confirm consent to our privacy policy for commercial quotation processing.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;

    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));

    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Spam honeypot check
    if (formData.honeypot) {
      console.warn('Spam submission intercepted.');
      return;
    }

    if (!validate()) {
      const firstError = document.querySelector('[aria-invalid="true"]');
      if (firstError) {
        (firstError as HTMLElement).focus();
      }
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Simulate genuinely processed dispatch with validation verification
      await new Promise((resolve) => setTimeout(resolve, 1200));

      setSubmittedData({ ...formData });
      setSubmitStatus('success');
      
      // Reset form
      setFormData({
        fullName: '',
        businessName: '',
        email: '',
        telephone: '',
        postcode: '',
        premisesType: 'Office',
        cleaningFrequency: 'Daily',
        description: '',
        contactMethod: 'email',
        privacyConsent: false,
        honeypot: '',
      });
    } catch {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white rounded-2xl border border-slate-200/90 shadow-xl overflow-hidden">
      {/* Form Header */}
      <div className="bg-gradient-to-r from-slate-900 to-blue-950 p-6 sm:p-8 text-white border-b border-blue-900/50">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-800/50 border border-blue-400/30 text-blue-200 text-xs font-semibold mb-3">
          <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
          <span>No Obligation Commercial Quote</span>
        </div>
        <h3 className="text-2xl sm:text-3xl font-bold font-heading">
          Request a Commercial Cleaning Quote
        </h3>
        <p className="mt-2 text-slate-300 text-sm sm:text-base leading-relaxed">
          Provide your commercial facility details below. Our Yorkshire team will evaluate your premises specifications and prepare a tailored proposal.
        </p>
      </div>

      {/* Success Notification Banner */}
      {submitStatus === 'success' && submittedData && (
        <div className="p-6 sm:p-8 bg-emerald-50 border-b border-emerald-200 animate-in fade-in duration-300">
          <div className="flex items-start gap-4">
            <div className="p-2 rounded-xl bg-emerald-600 text-white shrink-0 mt-1">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-lg font-bold text-emerald-950 font-heading">
                Quotation Request Received Successfully
              </h4>
              <p className="mt-1 text-sm text-emerald-800 leading-relaxed">
                Thank you, <strong>{submittedData.fullName}</strong>. Your enquiry for <strong>{submittedData.businessName}</strong> ({submittedData.premisesType} in {submittedData.postcode}) has been logged. Our commercial team will review your requirements and reach out via your preferred method ({submittedData.contactMethod}).
              </p>

              {/* Developer Environment Note */}
              <div className="mt-4 p-3.5 rounded-lg bg-emerald-100/70 border border-emerald-300/80 text-xs text-emerald-900">
                <p className="font-semibold flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-600"></span>
                  Commercial Delivery Configuration Notice:
                </p>
                <p className="mt-1 text-emerald-800">
                  Form submission and data validation passed. In production, this form connects to Parker Cleaning Group&apos;s verified commercial inbox or webhook endpoint once configured.
                </p>
              </div>

              <button
                type="button"
                onClick={() => setSubmitStatus('idle')}
                className="mt-4 text-xs font-bold text-emerald-800 hover:text-emerald-950 underline underline-offset-4"
              >
                Submit another commercial enquiry
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Failure Feedback */}
      {submitStatus === 'error' && (
        <div className="p-5 bg-rose-50 border-b border-rose-200 text-rose-900 flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />
          <div className="text-sm">
            <strong className="block font-semibold">Submission failed.</strong>
            <span>Unable to transmit enquiry at this moment. Please check your internet connection or email us directly.</span>
          </div>
        </div>
      )}

      {/* Main Form Body */}
      <form onSubmit={handleSubmit} noValidate className="p-6 sm:p-8 lg:p-10 space-y-6">
        {/* Anti-spam trap (hidden from humans) */}
        <div className="hidden" aria-hidden="true">
          <label htmlFor="honeypot">Leave blank</label>
          <input
            id="honeypot"
            type="text"
            name="honeypot"
            value={formData.honeypot}
            onChange={handleChange}
            tabIndex={-1}
            autoComplete="off"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* 1. Full Name */}
          <div>
            <label htmlFor="fullName" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
              Full Name <span className="text-rose-500">*</span>
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                <User className="w-4 h-4" />
              </div>
              <input
                id="fullName"
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="e.g. Sarah Jenkins"
                aria-invalid={!!errors.fullName}
                className={`w-full pl-10 pr-4 py-3 rounded-xl border text-sm text-slate-900 transition-colors focus:outline-none focus:ring-2 ${
                  errors.fullName
                    ? 'border-rose-400 bg-rose-50/40 focus:ring-rose-400'
                    : 'border-slate-300 focus:border-blue-600 focus:ring-blue-500/20'
                }`}
              />
            </div>
            {errors.fullName && <p className="mt-1.5 text-xs text-rose-600">{errors.fullName}</p>}
          </div>

          {/* 2. Business Name */}
          <div>
            <label htmlFor="businessName" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
              Business / Organisation Name <span className="text-rose-500">*</span>
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                <Building className="w-4 h-4" />
              </div>
              <input
                id="businessName"
                type="text"
                name="businessName"
                value={formData.businessName}
                onChange={handleChange}
                placeholder="e.g. Apex Legal LLP"
                aria-invalid={!!errors.businessName}
                className={`w-full pl-10 pr-4 py-3 rounded-xl border text-sm text-slate-900 transition-colors focus:outline-none focus:ring-2 ${
                  errors.businessName
                    ? 'border-rose-400 bg-rose-50/40 focus:ring-rose-400'
                    : 'border-slate-300 focus:border-blue-600 focus:ring-blue-500/20'
                }`}
              />
            </div>
            {errors.businessName && <p className="mt-1.5 text-xs text-rose-600">{errors.businessName}</p>}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* 3. Email Address */}
          <div>
            <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
              Commercial Email Address <span className="text-rose-500">*</span>
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                <Mail className="w-4 h-4" />
              </div>
              <input
                id="email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="sarah.jenkins@company.co.uk"
                aria-invalid={!!errors.email}
                className={`w-full pl-10 pr-4 py-3 rounded-xl border text-sm text-slate-900 transition-colors focus:outline-none focus:ring-2 ${
                  errors.email
                    ? 'border-rose-400 bg-rose-50/40 focus:ring-rose-400'
                    : 'border-slate-300 focus:border-blue-600 focus:ring-blue-500/20'
                }`}
              />
            </div>
            {errors.email && <p className="mt-1.5 text-xs text-rose-600">{errors.email}</p>}
          </div>

          {/* 4. Telephone Number */}
          <div>
            <label htmlFor="telephone" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
              Telephone Number <span className="text-rose-500">*</span>
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                <Phone className="w-4 h-4" />
              </div>
              <input
                id="telephone"
                type="tel"
                name="telephone"
                value={formData.telephone}
                onChange={handleChange}
                placeholder="0113 ... or 07..."
                aria-invalid={!!errors.telephone}
                className={`w-full pl-10 pr-4 py-3 rounded-xl border text-sm text-slate-900 transition-colors focus:outline-none focus:ring-2 ${
                  errors.telephone
                    ? 'border-rose-400 bg-rose-50/40 focus:ring-rose-400'
                    : 'border-slate-300 focus:border-blue-600 focus:ring-blue-500/20'
                }`}
              />
            </div>
            {errors.telephone && <p className="mt-1.5 text-xs text-rose-600">{errors.telephone}</p>}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {/* 5. Business Location / Postcode */}
          <div>
            <label htmlFor="postcode" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
              Premises Location / Postcode <span className="text-rose-500">*</span>
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                <MapPin className="w-4 h-4" />
              </div>
              <input
                id="postcode"
                type="text"
                name="postcode"
                value={formData.postcode}
                onChange={handleChange}
                placeholder="e.g. LS1 4DY, Yorkshire"
                aria-invalid={!!errors.postcode}
                className={`w-full pl-10 pr-4 py-3 rounded-xl border text-sm text-slate-900 transition-colors focus:outline-none focus:ring-2 ${
                  errors.postcode
                    ? 'border-rose-400 bg-rose-50/40 focus:ring-rose-400'
                    : 'border-slate-300 focus:border-blue-600 focus:ring-blue-500/20'
                }`}
              />
            </div>
            {errors.postcode && <p className="mt-1.5 text-xs text-rose-600">{errors.postcode}</p>}
          </div>

          {/* 6. Type of Commercial Premises */}
          <div>
            <label htmlFor="premisesType" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
              Premises Type
            </label>
            <div className="relative">
              <select
                id="premisesType"
                name="premisesType"
                value={formData.premisesType}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm text-slate-900 bg-white focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-500/20"
              >
                <option value="Office">Office / Professional Services</option>
                <option value="Retail / Commercial Premises">Retail / Commercial Premises</option>
                <option value="Warehouse / Industrial Unit">Warehouse / Industrial Unit</option>
                <option value="School / Educational Facility">School / Educational Facility</option>
                <option value="Healthcare / Care Facility">Healthcare / Care Facility</option>
                <option value="Hospitality / Leisure">Hospitality / Leisure</option>
                <option value="Other Commercial Premises">Other Commercial Premises</option>
              </select>
            </div>
          </div>

          {/* 7. Cleaning Frequency */}
          <div>
            <label htmlFor="cleaningFrequency" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
              Cleaning Frequency
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                <Clock className="w-4 h-4" />
              </div>
              <select
                id="cleaningFrequency"
                name="cleaningFrequency"
                value={formData.cleaningFrequency}
                onChange={handleChange}
                className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-300 text-sm text-slate-900 bg-white focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-500/20"
              >
                <option value="Daily">Daily Cleaning</option>
                <option value="Weekly">Weekly Cleaning</option>
                <option value="Deep / Intensive">Deep / Intensive Clean</option>
                <option value="One-Off">One-Off Cleaning</option>
                <option value="Periodic">Periodic Scheduled Clean</option>
                <option value="Not Sure Yet">Not Sure Yet / Advise Me</option>
              </select>
            </div>
          </div>
        </div>

        {/* 8. Description of Cleaning Requirements */}
        <div>
          <label htmlFor="description" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
            Description of Cleaning Requirements <span className="text-rose-500">*</span>
          </label>
          <div className="relative">
            <div className="absolute top-3.5 left-3.5 pointer-events-none text-slate-400">
              <FileText className="w-4 h-4" />
            </div>
            <textarea
              id="description"
              name="description"
              rows={4}
              value={formData.description}
              onChange={handleChange}
              placeholder="Please describe your facility (approx. square footage, number of floors, washrooms, key priorities, and preferred cleaning times e.g. before 8 AM or after 6 PM)."
              aria-invalid={!!errors.description}
              className={`w-full pl-10 pr-4 py-3 rounded-xl border text-sm text-slate-900 transition-colors focus:outline-none focus:ring-2 ${
                errors.description
                  ? 'border-rose-400 bg-rose-50/40 focus:ring-rose-400'
                  : 'border-slate-300 focus:border-blue-600 focus:ring-blue-500/20'
              }`}
            />
          </div>
          {errors.description && <p className="mt-1.5 text-xs text-rose-600">{errors.description}</p>}
        </div>

        {/* 9. Preferred Contact Method */}
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
            Preferred Contact Method
          </label>
          <div className="grid grid-cols-3 gap-3">
            {[
              { id: 'email', label: 'Email' },
              { id: 'telephone', label: 'Telephone' },
              { id: 'either', label: 'Either' },
            ].map((option) => (
              <label
                key={option.id}
                className={`flex items-center justify-center gap-2 p-3 rounded-xl border text-xs sm:text-sm font-semibold cursor-pointer transition-all ${
                  formData.contactMethod === option.id
                    ? 'border-blue-600 bg-blue-50 text-blue-800'
                    : 'border-slate-200 hover:bg-slate-50 text-slate-700'
                }`}
              >
                <input
                  type="radio"
                  name="contactMethod"
                  value={option.id}
                  checked={formData.contactMethod === option.id}
                  onChange={handleChange}
                  className="sr-only"
                />
                <span>{option.label}</span>
              </label>
            ))}
          </div>
        </div>

        {/* 10. Privacy Consent */}
        <div>
          <label className="flex items-start gap-3 cursor-pointer">
            <input
              type="checkbox"
              name="privacyConsent"
              checked={formData.privacyConsent}
              onChange={handleChange}
              aria-invalid={!!errors.privacyConsent}
              className="mt-1 w-4 h-4 rounded text-blue-600 focus:ring-blue-500 border-slate-300 cursor-pointer"
            />
            <span className="text-xs text-slate-600 leading-relaxed">
              I consent to Parker Cleaning Group processing our business information solely to evaluate our commercial cleaning requirements and issue a tailored quotation. <span className="text-rose-500">*</span>
            </span>
          </label>
          {errors.privacyConsent && (
            <p className="mt-1.5 text-xs text-rose-600">{errors.privacyConsent}</p>
          )}
        </div>

        {/* Submit Button */}
        <div className="pt-2">
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-base transition-all shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer"
          >
            {isSubmitting ? (
              <>
                <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                <span>Processing Commercial Quotation...</span>
              </>
            ) : (
              <>
                <span>Request Free Commercial Cleaning Quote</span>
                <Send className="w-4 h-4 ml-1" />
              </>
            )}
          </button>
        </div>

        {/* Commercial Assurance */}
        <div className="pt-2 text-center text-xs text-slate-500">
          Strictly commercial enquiries. Fully insured commercial service. Responses tailored to your premises.
        </div>
      </form>
    </div>
  );
};
