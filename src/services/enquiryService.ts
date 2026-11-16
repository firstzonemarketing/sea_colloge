import { INSTITUTIONS } from '../data/institutions';
import { PROGRAMMES, ProgrammeItem } from '../data/programmes';

export interface EnquiryFormPayload {
  fullName: string;
  email: string;
  phone: string;
  institutionId: string;
  programmeSlug: string;
  academicYear: string;
  message: string;
  consent: boolean;
}

export interface EnquiryValidationErrors {
  fullName?: string;
  email?: string;
  phone?: string;
  institutionId?: string;
  programmeSlug?: string;
  academicYear?: string;
  message?: string;
  consent?: string;
}

export interface EnquirySubmissionResponse {
  ok: boolean;
  isDemo: boolean;
  statusMessage: string;
  timestampIso: string;
}

/**
 * Returns valid programme choices dynamically filtered by the selected institution ID.
 * For institutions whose tracks are school/vocational levels not listed as standalone degree slugs,
 * provides institution-specific level options so every one of the 12 institutions has valid choices.
 */
export function getProgrammeOptionsByInstitution(institutionId: string): { slug: string; name: string }[] {
  if (!institutionId) {
    return PROGRAMMES.map((p) => ({ slug: p.slug, name: p.name }));
  }

  const matched: ProgrammeItem[] = PROGRAMMES.filter((p) => p.institutionId === institutionId);
  if (matched.length > 0) {
    return matched.map((p) => ({ slug: p.slug, name: p.name }));
  }

  const inst = INSTITUTIONS.find((i) => i.id === institutionId);
  if (inst && inst.verifiedProgrammesOrLevels.length > 0) {
    return inst.verifiedProgrammesOrLevels.map((level, idx) => ({
      slug: `${inst.slug}-track-${idx + 1}`,
      name: level,
    }));
  }

  return PROGRAMMES.map((p) => ({ slug: p.slug, name: p.name }));
}

export function validateEnquiryPayload(payload: EnquiryFormPayload): EnquiryValidationErrors {
  const errors: EnquiryValidationErrors = {};

  if (!payload.fullName || payload.fullName.trim().length < 2) {
    errors.fullName = 'Please enter your full name (at least 2 characters).';
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!payload.email || !emailRegex.test(payload.email.trim())) {
    errors.email = 'Please enter a valid email address.';
  }

  const digitsOnly = (payload.phone || '').replace(/[^\d]/g, '');
  if (!payload.phone || digitsOnly.length < 10 || digitsOnly.length > 15) {
    errors.phone = 'Please enter a valid 10 to 15-digit phone number.';
  }

  if (!payload.institutionId) {
    errors.institutionId = 'Please select an institution.';
  }

  if (!payload.programmeSlug) {
    errors.programmeSlug = 'Please select a programme of interest.';
  }

  if (!payload.academicYear) {
    errors.academicYear = 'Please select the academic year.';
  }

  if (!payload.message || payload.message.trim().length < 10) {
    errors.message = 'Please enter a brief enquiry message (at least 10 characters).';
  }

  if (!payload.consent) {
    errors.consent = 'Please confirm your consent to validate this demo enquiry.';
  }

  return errors;
}

/**
 * Dedicated API Integration Service Layer.
 * Currently runs in explicit Demo Mode (when VITE_ENQUIRY_API_ENDPOINT is not configured).
 * Never stores personal applicant data in localStorage.
 */
export async function submitAdmissionEnquiry(
  payload: EnquiryFormPayload
): Promise<EnquirySubmissionResponse> {
  const errors = validateEnquiryPayload(payload);
  if (Object.keys(errors).length > 0) {
    throw new Error('Validation failed. Please check the highlighted fields.');
  }

  const configuredEndpoint = import.meta.env.VITE_ENQUIRY_API_ENDPOINT as string | undefined;

  if (configuredEndpoint) {
    const response = await fetch(configuredEndpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      throw new Error('Unable to reach the admissions server. Please try again or contact the office by phone.');
    }

    return {
      ok: true,
      isDemo: false,
      statusMessage: 'Your enquiry has been transmitted to the Admissions Desk.',
      timestampIso: new Date().toISOString(),
    };
  }

  // Simulated validation latency in Demo Mode (no network transmission, no localStorage persistence)
  await new Promise((resolve) => setTimeout(resolve, 450));

  return {
    ok: true,
    isDemo: true,
    statusMessage: 'Demo completed — no application has been submitted.',
    timestampIso: new Date().toISOString(),
  };
}
