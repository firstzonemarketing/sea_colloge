import React, { useEffect, useMemo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { AlertCircle, CheckCircle2, Loader2, ShieldAlert, Send } from 'lucide-react';
import { INSTITUTIONS } from '../../data/institutions';
import { PROGRAMMES } from '../../data/programmes';
import { SITE_CONFIG } from '../../config/siteConfig';
import {
  EnquiryFormPayload,
  EnquiryValidationErrors,
  getProgrammeOptionsByInstitution,
  submitAdmissionEnquiry,
  validateEnquiryPayload,
} from '../../services/enquiryService';

interface AdmissionEnquiryFormProps {
  defaultInstitutionId?: string;
  defaultProgrammeSlug?: string;
  compact?: boolean;
}

export const AdmissionEnquiryForm: React.FC<AdmissionEnquiryFormProps> = ({
  defaultInstitutionId,
  defaultProgrammeSlug,
  compact = false,
}) => {
  const [searchParams] = useSearchParams();

  // Resolve preselected programme & institution from query params or props
  const resolvedInitialState = useMemo(() => {
    const paramProgramme = searchParams.get('programme') || defaultProgrammeSlug || '';
    const paramInstitution = searchParams.get('institution') || defaultInstitutionId || '';

    if (paramProgramme) {
      const matchedProg = PROGRAMMES.find((p) => p.slug === paramProgramme);
      if (matchedProg) {
        return {
          institutionId: matchedProg.institutionId,
          programmeSlug: matchedProg.slug,
        };
      }
    }

    if (paramInstitution) {
      const options = getProgrammeOptionsByInstitution(paramInstitution);
      return {
        institutionId: paramInstitution,
        programmeSlug: options[0]?.slug || '',
      };
    }

    return {
      institutionId: 'engineering-technology',
      programmeSlug: 'be-computer-science-engineering',
    };
  }, [searchParams, defaultInstitutionId, defaultProgrammeSlug]);

  const [formData, setFormData] = useState<EnquiryFormPayload>({
    fullName: '',
    email: '',
    phone: '',
    institutionId: resolvedInitialState.institutionId,
    programmeSlug: resolvedInitialState.programmeSlug,
    academicYear: SITE_CONFIG.activeAcademicYear,
    message: '',
    consent: false,
  });

  const [errors, setErrors] = useState<EnquiryValidationErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState<string | null>(null);

  // Sync if URL query params change
  useEffect(() => {
    setFormData((prev) => ({
      ...prev,
      institutionId: resolvedInitialState.institutionId,
      programmeSlug: resolvedInitialState.programmeSlug,
    }));
  }, [resolvedInitialState.institutionId, resolvedInitialState.programmeSlug]);

  // Dynamic programme options dependent on selected institution
  const availableProgrammes = useMemo(() => {
    return getProgrammeOptionsByInstitution(formData.institutionId);
  }, [formData.institutionId]);

  const handleInstitutionChange = (newInstId: string) => {
    const nextProgs = getProgrammeOptionsByInstitution(newInstId);
    setFormData((prev) => ({
      ...prev,
      institutionId: newInstId,
      programmeSlug: nextProgs[0]?.slug || '',
    }));
    setErrors((prev) => ({ ...prev, institutionId: undefined, programmeSlug: undefined }));
    setSubmissionStatus(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmissionStatus(null);

    const validationErrors = validateEnquiryPayload(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setIsSubmitting(true);

    try {
      const res = await submitAdmissionEnquiry(formData);
      setSubmissionStatus(res.statusMessage);
    } catch (err) {
      setErrors({
        fullName: err instanceof Error ? err.message : 'Validation failed.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white rounded-lg border border-slate-200 shadow-sm overflow-hidden">
      {/* Header Banner Clearly Identifying Demo Enquiry Form */}
      <div className="bg-navy text-white px-6 py-5 border-b border-white/10 flex flex-wrap items-center justify-between gap-3">
        <div>
          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded text-[11px] font-bold uppercase tracking-wider bg-crimson text-white mb-1.5">
            <ShieldAlert className="w-3.5 h-3.5" aria-hidden="true" />
            <span>Demo Enquiry Form</span>
          </span>
          <h3 className="text-lg sm:text-xl font-extrabold text-white">
            Admission &amp; Programme Enquiry ({SITE_CONFIG.activeAcademicYear})
          </h3>
        </div>
        <span className="text-xs text-white/80">
          Prototype Validation Mode • No personal data stored
        </span>
      </div>

      <form
        onSubmit={handleSubmit}
        noValidate
        aria-label="Demo Enquiry Form"
        className={`p-6 ${compact ? 'sm:p-6' : 'sm:p-8'} space-y-5`}
      >
        {/* Success / Demo Notice Banner */}
        {submissionStatus && (
          <div
            role="status"
            aria-live="polite"
            className="p-4 rounded-lg bg-emerald-50 border border-emerald-300 text-emerald-950 flex items-start gap-3"
          >
            <CheckCircle2 className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5" aria-hidden="true" />
            <div>
              <p className="font-bold text-sm">{submissionStatus}</p>
              <p className="text-xs text-emerald-800 mt-1">
                This form operates as a frontend prototype validation demo. No email has been dispatched and no personal details have been saved to local storage or external servers.
              </p>
            </div>
          </div>
        )}

        {/* Full Name */}
        <div>
          <label
            htmlFor="enquiry-full-name"
            className="block text-sm font-bold text-navy mb-1.5"
          >
            Full Name <span className="text-crimson">*</span>
          </label>
          <input
            id="enquiry-full-name"
            name="fullName"
            type="text"
            autoComplete="name"
            value={formData.fullName}
            onChange={(e) => {
              setFormData((prev) => ({ ...prev, fullName: e.target.value }));
              if (errors.fullName) setErrors((prev) => ({ ...prev, fullName: undefined }));
            }}
            aria-invalid={!!errors.fullName}
            aria-describedby={errors.fullName ? 'error-full-name' : undefined}
            placeholder="Enter applicant's full name"
            className="w-full px-3.5 py-2.5 min-h-[44px] text-base bg-white border border-slate-300 rounded text-ink focus:border-navy focus:outline-none"
          />
          {errors.fullName && (
            <p id="error-full-name" role="alert" className="mt-1.5 text-xs font-semibold text-crimson flex items-center gap-1">
              <AlertCircle className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
              <span>{errors.fullName}</span>
            </p>
          )}
        </div>

        {/* Email & Phone (Single column on mobile, 2 columns on tablet+) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label
              htmlFor="enquiry-email"
              className="block text-sm font-bold text-navy mb-1.5"
            >
              Email Address <span className="text-crimson">*</span>
            </label>
            <input
              id="enquiry-email"
              name="email"
              type="email"
              autoComplete="email"
              value={formData.email}
              onChange={(e) => {
                setFormData((prev) => ({ ...prev, email: e.target.value }));
                if (errors.email) setErrors((prev) => ({ ...prev, email: undefined }));
              }}
              aria-invalid={!!errors.email}
              aria-describedby={errors.email ? 'error-email' : undefined}
              placeholder="applicant@example.com"
              className="w-full px-3.5 py-2.5 min-h-[44px] text-base bg-white border border-slate-300 rounded text-ink focus:border-navy focus:outline-none"
            />
            {errors.email && (
              <p id="error-email" role="alert" className="mt-1.5 text-xs font-semibold text-crimson flex items-center gap-1">
                <AlertCircle className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                <span>{errors.email}</span>
              </p>
            )}
          </div>

          <div>
            <label
              htmlFor="enquiry-phone"
              className="block text-sm font-bold text-navy mb-1.5"
            >
              Phone Number <span className="text-crimson">*</span>
            </label>
            <input
              id="enquiry-phone"
              name="phone"
              type="tel"
              inputMode="tel"
              autoComplete="tel"
              value={formData.phone}
              onChange={(e) => {
                setFormData((prev) => ({ ...prev, phone: e.target.value }));
                if (errors.phone) setErrors((prev) => ({ ...prev, phone: undefined }));
              }}
              aria-invalid={!!errors.phone}
              aria-describedby={errors.phone ? 'error-phone' : undefined}
              placeholder="+91 98765 43210"
              className="w-full px-3.5 py-2.5 min-h-[44px] text-base bg-white border border-slate-300 rounded text-ink focus:border-navy focus:outline-none"
            />
            {errors.phone && (
              <p id="error-phone" role="alert" className="mt-1.5 text-xs font-semibold text-crimson flex items-center gap-1">
                <AlertCircle className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                <span>{errors.phone}</span>
              </p>
            )}
          </div>
        </div>

        {/* Institution Selection */}
        <div>
          <label
            htmlFor="enquiry-institution"
            className="block text-sm font-bold text-navy mb-1.5"
          >
            Select Institution <span className="text-crimson">*</span>
          </label>
          <select
            id="enquiry-institution"
            name="institutionId"
            value={formData.institutionId}
            onChange={(e) => handleInstitutionChange(e.target.value)}
            aria-invalid={!!errors.institutionId}
            className="w-full px-3.5 py-2.5 min-h-[44px] text-base bg-white border border-slate-300 rounded text-ink focus:border-navy focus:outline-none"
          >
            <option value="">-- Choose an S.E.A. Institution --</option>
            {INSTITUTIONS.map((inst) => (
              <option key={inst.id} value={inst.id}>
                {inst.name}
              </option>
            ))}
          </select>
          {errors.institutionId && (
            <p role="alert" className="mt-1.5 text-xs font-semibold text-crimson flex items-center gap-1">
              <AlertCircle className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
              <span>{errors.institutionId}</span>
            </p>
          )}
        </div>

        {/* Dynamic Programme Selection & Academic Year */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          <div className="sm:col-span-2">
            <label
              htmlFor="enquiry-programme"
              className="block text-sm font-bold text-navy mb-1.5"
            >
              Select Programme <span className="text-crimson">*</span>
            </label>
            <select
              id="enquiry-programme"
              name="programmeSlug"
              value={formData.programmeSlug}
              onChange={(e) => {
                setFormData((prev) => ({ ...prev, programmeSlug: e.target.value }));
                if (errors.programmeSlug) setErrors((prev) => ({ ...prev, programmeSlug: undefined }));
              }}
              aria-invalid={!!errors.programmeSlug}
              className="w-full px-3.5 py-2.5 min-h-[44px] text-base bg-white border border-slate-300 rounded text-ink focus:border-navy focus:outline-none"
            >
              <option value="">-- Select Programme --</option>
              {availableProgrammes.map((prog) => (
                <option key={prog.slug} value={prog.slug}>
                  {prog.name}
                </option>
              ))}
            </select>
            {errors.programmeSlug && (
              <p role="alert" className="mt-1.5 text-xs font-semibold text-crimson flex items-center gap-1">
                <AlertCircle className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                <span>{errors.programmeSlug}</span>
              </p>
            )}
          </div>

          <div>
            <label
              htmlFor="enquiry-academic-year"
              className="block text-sm font-bold text-navy mb-1.5"
            >
              Academic Year <span className="text-crimson">*</span>
            </label>
            <select
              id="enquiry-academic-year"
              name="academicYear"
              value={formData.academicYear}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, academicYear: e.target.value }))
              }
              className="w-full px-3.5 py-2.5 min-h-[44px] text-base bg-white border border-slate-300 rounded text-ink focus:border-navy focus:outline-none"
            >
              <option value="2026–2027">2026–2027</option>
              <option value="2027–2028">2027–2028</option>
            </select>
          </div>
        </div>

        {/* Message */}
        <div>
          <label
            htmlFor="enquiry-message"
            className="block text-sm font-bold text-navy mb-1.5"
          >
            Enquiry Message / Questions <span className="text-crimson">*</span>
          </label>
          <textarea
            id="enquiry-message"
            name="message"
            rows={3}
            value={formData.message}
            onChange={(e) => {
              setFormData((prev) => ({ ...prev, message: e.target.value }));
              if (errors.message) setErrors((prev) => ({ ...prev, message: undefined }));
            }}
            aria-invalid={!!errors.message}
            aria-describedby={errors.message ? 'error-message' : undefined}
            placeholder="Share your qualifying exam details (e.g. II PUC / KCET / Degree) and questions regarding eligibility, hostel, or fee structure..."
            className="w-full px-3.5 py-2.5 text-base bg-white border border-slate-300 rounded text-ink focus:border-navy focus:outline-none"
          />
          {errors.message && (
            <p id="error-message" role="alert" className="mt-1.5 text-xs font-semibold text-crimson flex items-center gap-1">
              <AlertCircle className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
              <span>{errors.message}</span>
            </p>
          )}
        </div>

        {/* Consent Checkbox */}
        <div>
          <label className="flex items-start gap-3 cursor-pointer select-none">
            <input
              id="enquiry-consent"
              name="consent"
              type="checkbox"
              checked={formData.consent}
              onChange={(e) => {
                setFormData((prev) => ({ ...prev, consent: e.target.checked }));
                if (errors.consent) setErrors((prev) => ({ ...prev, consent: undefined }));
              }}
              aria-invalid={!!errors.consent}
              className="mt-1 w-4 h-4 rounded border-slate-300 text-navy focus:ring-crimson"
            />
            <span className="text-xs sm:text-sm text-ink-muted leading-relaxed">
              I understand this is a <strong className="text-navy">Demo Enquiry Form</strong> for S.E.A. Group of Institutions and consent to validate my enquiry details on screen without submitting personal data to an external server. <span className="text-crimson">*</span>
            </span>
          </label>
          {errors.consent && (
            <p role="alert" className="mt-1.5 text-xs font-semibold text-crimson flex items-center gap-1">
              <AlertCircle className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
              <span>{errors.consent}</span>
            </p>
          )}
        </div>

        {/* Submit Button */}
        <div className="pt-2">
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full sm:w-auto btn-primary disabled:opacity-60"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" aria-hidden="true" />
                <span>Validating Demo Enquiry...</span>
              </>
            ) : (
              <>
                <Send className="w-4 h-4" aria-hidden="true" />
                <span>Validate Demo Enquiry</span>
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  );
};
