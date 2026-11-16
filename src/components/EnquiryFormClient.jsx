'use client';

import { useState, useEffect, useMemo } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import {
  ENQUIRY_BRANDS,
  PRIMARY_ENQUIRY_TYPES,
  STAKEHOLDER_ROLES,
  PRODUCT_FAMILIES,
  normalizeBrandParam,
  normalizeCategoryParam,
  normalizeFamilyParam,
  normalizeRoleParam,
  sanitizeQueryText
} from '@/lib/enquiry-config';

export default function EnquiryFormClient() {
  const searchParams = useSearchParams();

  // Read and allowlist-validate URL query parameters
  const rawBrand = searchParams?.get('brand') || '';
  const rawType = searchParams?.get('type') || searchParams?.get('category') || '';
  const rawFamily = searchParams?.get('family') || '';
  const rawVariant = searchParams?.get('variant') || '';
  const rawRole = searchParams?.get('role') || '';
  const rawDocument = searchParams?.get('document') || '';

  const safeVariant = sanitizeQueryText(rawVariant, 80);
  const safeDocument = sanitizeQueryText(rawDocument, 120);

  const resolvedBrand = normalizeBrandParam(rawBrand) || 'General NEOM Panels Enquiry';
  const resolvedType = normalizeCategoryParam(rawType) || 'Product Enquiry';
  const resolvedFamily =
    normalizeFamilyParam(rawFamily) ||
    normalizeFamilyParam(safeVariant) ||
    (resolvedBrand === 'NEOM Packing Plywood' ? 'Packaging-Grade Plywood (MR)' : '');
  const resolvedRole = normalizeRoleParam(rawRole) || '';

  const hasPrefilledContext = Boolean(
    normalizeBrandParam(rawBrand) ||
      normalizeCategoryParam(rawType) ||
      resolvedFamily ||
      resolvedRole ||
      safeVariant ||
      safeDocument
  );

  const enquiryTypeOptions = useMemo(() => {
    if (PRIMARY_ENQUIRY_TYPES.includes(resolvedType)) {
      return PRIMARY_ENQUIRY_TYPES;
    }
    return [...PRIMARY_ENQUIRY_TYPES, resolvedType];
  }, [resolvedType]);

  // Form State
  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  const [brand, setBrand] = useState(resolvedBrand);
  const [role, setRole] = useState(resolvedRole);
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [cityCountry, setCityCountry] = useState('');
  const [enquiryType, setEnquiryType] = useState(resolvedType);
  const [productFamily, setProductFamily] = useState(resolvedFamily);
  const [procurementReference, setProcurementReference] = useState('');
  const [requirement, setRequirement] = useState(() => {
    if (safeDocument) {
      return `Requesting product information: ${safeDocument}. Intended application: `;
    }
    if (safeVariant) {
      return `Interested in ${safeVariant}. Application and approximate quantity: `;
    }
    return '';
  });
  const [honeypot, setHoneypot] = useState('');

  // UI States
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(null);
  const [submitError, setSubmitError] = useState(null);

  useEffect(() => {
    setBrand(resolvedBrand);
  }, [resolvedBrand]);

  useEffect(() => {
    setEnquiryType(resolvedType);
  }, [resolvedType]);

  useEffect(() => {
    if (resolvedFamily) {
      setProductFamily(resolvedFamily);
    }
  }, [resolvedFamily]);

  useEffect(() => {
    if (resolvedRole) {
      setRole(resolvedRole);
    }
  }, [resolvedRole]);

  useEffect(() => {
    // Never overwrite text the visitor has already typed
    if (safeDocument) {
      setRequirement((prev) =>
        prev ? prev : `Requesting product information: ${safeDocument}. Intended application: `
      );
    } else if (safeVariant) {
      setRequirement((prev) =>
        prev ? prev : `Interested in ${safeVariant}. Application and approximate quantity: `
      );
    }
  }, [safeDocument, safeVariant]);

  const showInstitutionalReference =
    role === 'Government & Institutional Buyers' ||
    enquiryType === 'Institutional & public procurement';

  const validate = () => {
    const errs = {};
    if (!name.trim() || name.trim().length < 2) {
      errs.name = 'Please enter your full name (at least 2 characters).';
    }

    const hasEmail = Boolean(email.trim() && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim()));
    const hasPhone = Boolean(phone.trim() && phone.trim().replace(/\D/g, '').length >= 7);

    if (!email.trim() && !phone.trim()) {
      errs.contact =
        'Please provide at least one contact method: a valid email address or telephone number.';
    } else {
      if (email.trim() && !hasEmail) {
        errs.email = 'Please enter a valid email address format (e.g. name@company.com).';
      }
      if (phone.trim() && !hasPhone) {
        errs.phone = 'Please enter a valid telephone number (at least 7 digits).';
      }
    }

    if (!requirement.trim() || requirement.trim().length < 10) {
      errs.requirement = 'Please describe your requirement or question (at least 10 characters).';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitError(null);

    if (honeypot) {
      setSubmitSuccess({
        reference: 'NEOM-' + Math.floor(100000 + Math.random() * 900000),
        brand,
        message: 'Your enquiry has been received.'
      });
      return;
    }

    if (!validate()) {
      return;
    }

    setIsSubmitting(true);

    try {
      const payload = {
        name: name.trim(),
        organisation: company.trim() || 'Direct Business Enquiry',
        brand,
        role: role.trim() || 'Not specified',
        email: email.trim(),
        phone: phone.trim(),
        cityCountry: cityCountry.trim(),
        destination: cityCountry.trim(),
        category: enquiryType,
        enquiryType,
        productFamily: productFamily.trim(),
        procurementReference: procurementReference.trim(),
        requirementDescription: requirement.trim(),
        description: requirement.trim(),
        preferredContactMethod: email.trim() ? 'Email' : 'Phone'
      };

      const res = await fetch('/api/enquiries', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
      });

      const data = await res.json();

      if (res.ok && data.ok) {
        setSubmitSuccess({
          reference: data.reference || 'NEOM-REF',
          brand: data.brand || brand,
          message: 'Your enquiry has been recorded by NEOM Panels.'
        });
      } else {
        const errorList = data.errors || [
          data.message || 'Submission failed. Please check your entries.'
        ];
        setSubmitError(errorList.join(' '));
      }
    } catch (_) {
      setSubmitError(
        'A connection issue occurred while submitting. Please call +91 97454 50618 or email neompanels@gmail.com.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitSuccess) {
    return (
      <div className="enquiry-success-card" role="alert" aria-live="polite">
        <div className="success-icon-wrap" aria-hidden="true">
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#103F2C" strokeWidth="2.5">
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>
        <h2 className="success-title">Enquiry Received</h2>
        <p className="success-lead">
          Thank you, <strong>{name}</strong>. Your enquiry ({submitSuccess.brand}) has been
          recorded with the NEOM Panels team.
        </p>

        <div className="success-reference-box font-mono">
          <span className="ref-label">ENQUIRY REFERENCE</span>
          <span className="ref-code">{submitSuccess.reference}</span>
        </div>

        <p className="success-detail">
          Our team will review your details and reach out via your provided{' '}
          {email.trim() ? 'email address' : 'telephone number'}.
        </p>

        <div className="success-actions">
          <button
            type="button"
            className="btn btn-secondary"
            onClick={() => {
              setSubmitSuccess(null);
              setName('');
              setCompany('');
              setEmail('');
              setPhone('');
              setProcurementReference('');
              setRequirement('');
              setErrors({});
            }}
          >
            Submit Another Enquiry
          </button>
          <Link href="/brands" className="btn btn-primary">
            <span>Explore Our Brands</span>
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <form className="enquiry-form-clean" onSubmit={handleSubmit} noValidate>
      {submitError && (
        <div className="form-error-banner" role="alert">
          <span className="text-error font-bold">Submission notice:</span>
          <p style={{ margin: '0.25rem 0 0' }}>{submitError}</p>
        </div>
      )}

      {hasPrefilledContext && (
        <div className="contact-rule-notice" role="status" style={{ marginBottom: '1.25rem' }}>
          <span className="rule-dot" aria-hidden="true" />
          <span>
            Enquiry context preselected from your previous page. You can adjust any selection below
            without losing your typed notes.
          </span>
        </div>
      )}

      {/* Honeypot field */}
      <div style={{ display: 'none' }} aria-hidden="true">
        <label htmlFor="company_website_hp">Do not fill this field</label>
        <input
          type="text"
          id="company_website_hp"
          name="company_website_hp"
          value={honeypot}
          onChange={(e) => setHoneypot(e.target.value)}
          tabIndex="-1"
          autoComplete="off"
        />
      </div>

      {/* Brand (Optional) & Enquiry Type */}
      <div className="form-grid-two">
        <div className="form-field">
          <label htmlFor="enquiry-brand" className="field-label">
            Brand <span className="field-optional">(Optional)</span>
          </label>
          <select
            id="enquiry-brand"
            className="field-select"
            value={brand}
            onChange={(e) => setBrand(e.target.value)}
          >
            {ENQUIRY_BRANDS.map((b) => (
              <option key={b} value={b}>
                {b}
              </option>
            ))}
          </select>
        </div>

        <div className="form-field">
          <label htmlFor="enquiry-type" className="field-label">
            Enquiry Type
          </label>
          <select
            id="enquiry-type"
            className="field-select"
            value={enquiryType}
            onChange={(e) => setEnquiryType(e.target.value)}
          >
            {enquiryTypeOptions.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="form-grid-two">
        {/* Name (Required) */}
        <div className="form-field">
          <label htmlFor="enquiry-name" className="field-label">
            Full Name <span className="field-required">*</span>
          </label>
          <input
            type="text"
            id="enquiry-name"
            className={`field-input ${errors.name ? 'field-input--error' : ''}`}
            placeholder="Your full name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
              if (errors.name) setErrors({ ...errors, name: null });
            }}
            required
            aria-required="true"
            aria-invalid={Boolean(errors.name)}
          />
          {errors.name && <span className="field-error-msg">{errors.name}</span>}
        </div>

        {/* Company (Optional) */}
        <div className="form-field">
          <label htmlFor="enquiry-company" className="field-label">
            Company / Organisation <span className="field-optional">(Optional)</span>
          </label>
          <input
            type="text"
            id="enquiry-company"
            className="field-input"
            placeholder="Company, firm or workshop name"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
          />
        </div>
      </div>

      <div className="form-grid-two">
        {/* Customer / Business Group (Optional — 5 Confirmed Groups) */}
        <div className="form-field">
          <label htmlFor="enquiry-role" className="field-label">
            Customer / Business Group <span className="field-optional">(Optional)</span>
          </label>
          <select
            id="enquiry-role"
            className="field-select"
            value={role}
            onChange={(e) => setRole(e.target.value)}
          >
            <option value="">Select your business group...</option>
            {STAKEHOLDER_ROLES.map((r) => (
              <option key={r} value={r}>
                {r}
              </option>
            ))}
          </select>
        </div>

        {/* Product Context (Optional) */}
        <div className="form-field">
          <label htmlFor="enquiry-family" className="field-label">
            Product Context <span className="field-optional">(Optional)</span>
          </label>
          <select
            id="enquiry-family"
            className="field-select"
            value={productFamily}
            onChange={(e) => setProductFamily(e.target.value)}
          >
            <option value="">Not applicable / General corporate enquiry</option>
            {PRODUCT_FAMILIES.map((f) => (
              <option key={f} value={f}>
                {f}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Optional Procurement / Tender Reference for Government & Institutional Buyers */}
      {showInstitutionalReference && (
        <div className="form-field">
          <label htmlFor="enquiry-procurement-ref" className="field-label">
            Procurement / Tender Reference <span className="field-optional">(Optional)</span>
          </label>
          <input
            type="text"
            id="enquiry-procurement-ref"
            className="field-input"
            placeholder="Optional tender, inquiry or schedule reference number"
            value={procurementReference}
            onChange={(e) => setProcurementReference(e.target.value)}
          />
        </div>
      )}

      {/* Contact Method Notice */}
      <div className="contact-rule-notice">
        <span className="rule-dot" aria-hidden="true" />
        <span>Contact requirement: Please provide at least one valid email address or telephone number.</span>
      </div>

      {errors.contact && (
        <div className="field-error-banner" role="alert">
          {errors.contact}
        </div>
      )}

      <div className="form-grid-two">
        {/* Email */}
        <div className="form-field">
          <label htmlFor="enquiry-email" className="field-label">
            Email Address
          </label>
          <input
            type="email"
            id="enquiry-email"
            className={`field-input ${errors.email ? 'field-input--error' : ''}`}
            placeholder="name@company.com"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              if (errors.email || errors.contact) {
                setErrors({ ...errors, email: null, contact: null });
              }
            }}
          />
          {errors.email && <span className="field-error-msg">{errors.email}</span>}
        </div>

        {/* Phone */}
        <div className="form-field">
          <label htmlFor="enquiry-phone" className="field-label">
            Telephone Number
          </label>
          <input
            type="tel"
            id="enquiry-phone"
            className={`field-input ${errors.phone ? 'field-input--error' : ''}`}
            placeholder="+91 98765 43210"
            value={phone}
            onChange={(e) => {
              setPhone(e.target.value);
              if (errors.phone || errors.contact) {
                setErrors({ ...errors, phone: null, contact: null });
              }
            }}
          />
          {errors.phone && <span className="field-error-msg">{errors.phone}</span>}
        </div>
      </div>

      {/* City / Location (Optional) */}
      <div className="form-field">
        <label htmlFor="enquiry-city" className="field-label">
          City / Location <span className="field-optional">(Optional)</span>
        </label>
        <input
          type="text"
          id="enquiry-city"
          className="field-input"
          placeholder="e.g. Kochi, Bengaluru, Mumbai"
          value={cityCountry}
          onChange={(e) => setCityCountry(e.target.value)}
        />
      </div>

      {/* Requirement (Required) */}
      <div className="form-field">
        <label htmlFor="enquiry-requirement" className="field-label">
          Requirement <span className="field-required">*</span>
        </label>
        <textarea
          id="enquiry-requirement"
          rows="4"
          className={`field-textarea ${errors.requirement ? 'field-input--error' : ''}`}
          placeholder="Describe your requirement, intended application, nominal thickness, approximate quantity or question..."
          value={requirement}
          onChange={(e) => {
            setRequirement(e.target.value);
            if (errors.requirement) setErrors({ ...errors, requirement: null });
          }}
          required
          aria-required="true"
          aria-invalid={Boolean(errors.requirement)}
        />
        {errors.requirement && <span className="field-error-msg">{errors.requirement}</span>}
      </div>

      {/* Submit Button */}
      <div className="form-actions-row">
        <button
          type="submit"
          className="btn btn-primary form-submit-btn"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <span>Submitting Enquiry...</span>
          ) : (
            <span>Submit Enquiry</span>
          )}
        </button>

        <div className="form-privacy-note secondary-text">
          Submissions are reviewed by the NEOM Panels team in accordance with our{' '}
          <Link href="/privacy">Privacy Policy</Link>.
        </div>
      </div>
    </form>
  );
}
