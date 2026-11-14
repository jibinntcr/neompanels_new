'use client';

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { STAKEHOLDER_ROLES, PRODUCT_FAMILIES } from '@/lib/enquiry-config';

const ENQUIRY_TYPES = [
  'Product Enquiry',
  'Project Supply',
  'Partnership',
  'Sample Request',
  'International Enquiry'
];

export default function EnquiryFormClient() {
  const searchParams = useSearchParams();

  // Read URL params for prefilling
  const initialFamily = searchParams?.get('family') || '';
  const initialVariant = searchParams?.get('variant') || '';
  const initialType = searchParams?.get('type') || searchParams?.get('category') || 'Product Enquiry';
  const initialRole = searchParams?.get('role') || '';
  const initialDocument = searchParams?.get('document') || '';

  // Form State
  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  const [role, setRole] = useState(initialRole);
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [cityCountry, setCityCountry] = useState('');
  const [enquiryType, setEnquiryType] = useState(
    ENQUIRY_TYPES.find((t) => t.toLowerCase() === initialType.toLowerCase().replace(/-/g, ' ')) ||
      'Product Enquiry'
  );
  const [productFamily, setProductFamily] = useState(
    PRODUCT_FAMILIES.find((f) => f.toLowerCase() === initialFamily.toLowerCase()) ||
      initialFamily ||
      ''
  );
  const [requirement, setRequirement] = useState(
    initialDocument
      ? `Requesting technical documentation: ${initialDocument}. Intended project application: `
      : initialVariant
      ? `Interested in ${initialVariant}. Please provide specifications, minimum order quantities, and availability: `
      : ''
  );
  const [honeypot, setHoneypot] = useState('');

  // UI States
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(null);
  const [submitError, setSubmitError] = useState(null);

  useEffect(() => {
    if (initialFamily && !productFamily) {
      setProductFamily(initialFamily);
    }
  }, [initialFamily]);

  const validate = () => {
    const errs = {};
    if (!name.trim() || name.trim().length < 2) {
      errs.name = 'Please enter your full name (at least 2 characters).';
    }

    const hasEmail = Boolean(email.trim() && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim()));
    const hasPhone = Boolean(phone.trim() && phone.trim().replace(/\D/g, '').length >= 7);

    if (!email.trim() && !phone.trim()) {
      errs.contact = 'Please provide at least one contact method: a valid email address or phone number.';
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

    // Spam honeypot
    if (honeypot) {
      setSubmitSuccess({
        reference: 'NEOM-' + Math.floor(100000 + Math.random() * 900000),
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
        organisation: company.trim() || 'Independent / Direct Specifier',
        role: role.trim() || 'Not specified',
        email: email.trim(),
        phone: phone.trim(),
        cityCountry: cityCountry.trim(),
        destination: cityCountry.trim(),
        category: enquiryType,
        enquiryType,
        productFamily: productFamily.trim(),
        requirementDescription: requirement.trim(),
        description: requirement.trim(),
        brand: 'NEOM Panels',
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
          message: 'Your requirement has been durably recorded by our specification desk.'
        });
      } else {
        const errorList = data.errors || [data.message || 'Submission failed. Please check your entries.'];
        setSubmitError(errorList.join(' '));
      }
    } catch (err) {
      setSubmitError(
        'A connection issue occurred while submitting. Please call our desk directly at +91 97454 50618 or email neompanels@gmail.com.'
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
        <h2 className="success-title">Requirement Successfully Received</h2>
        <p className="success-lead">
          Thank you, <strong>{name}</strong>. Your enquiry has been registered with the NEOM Panels specification team.
        </p>

        <div className="success-reference-box font-mono">
          <span className="ref-label">OFFICIAL ENQUIRY REFERENCE:</span>
          <span className="ref-code">{submitSuccess.reference}</span>
        </div>

        <p className="success-detail">
          A representative will review your requirement details and contact you via your provided {email.trim() ? 'email' : 'phone number'}.
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
              setRequirement('');
              setErrors({});
            }}
          >
            Submit Another Requirement
          </button>
          <Link href="/products" className="btn btn-primary">
            <span>Explore Materials Portfolio</span>
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
          <span className="font-mono text-error font-bold">SUBMISSION NOTICE:</span>
          <p>{submitError}</p>
        </div>
      )}

      {/* Honeypot field (hidden from screen) */}
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
            placeholder="e.g. Ar. Rajesh Menon"
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
            Company / Practice Name <span className="field-optional">(Optional)</span>
          </label>
          <input
            type="text"
            id="enquiry-company"
            className="field-input"
            placeholder="e.g. Studio Vista Architecture"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
          />
        </div>
      </div>

      <div className="form-grid-two">
        {/* Role (Optional, 8 deck groups) */}
        <div className="form-field">
          <label htmlFor="enquiry-role" className="field-label">
            Stakeholder Role <span className="field-optional">(Optional)</span>
          </label>
          <select
            id="enquiry-role"
            className="field-select"
            value={role}
            onChange={(e) => setRole(e.target.value)}
          >
            <option value="">Select your role...</option>
            {STAKEHOLDER_ROLES.map((r) => (
              <option key={r} value={r}>
                {r}
              </option>
            ))}
          </select>
        </div>

        {/* City / Country (Optional) */}
        <div className="form-field">
          <label htmlFor="enquiry-city" className="field-label">
            City / Country <span className="field-optional">(Optional)</span>
          </label>
          <input
            type="text"
            id="enquiry-city"
            className="field-input"
            placeholder="e.g. Kochi, Kerala / Dubai, UAE"
            value={cityCountry}
            onChange={(e) => setCityCountry(e.target.value)}
          />
        </div>
      </div>

      {/* Contact Method Notice (Email or phone required) */}
      <div className="contact-rule-notice font-mono">
        <span className="rule-dot" aria-hidden="true" />
        <span>CONTACT REQUIREMENT: Provide at least one valid method (email or phone).</span>
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
            placeholder="name@domain.com"
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
            Telephone / Mobile Number
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

      <div className="form-grid-two">
        {/* Enquiry Type */}
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
            {ENQUIRY_TYPES.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </div>

        {/* Product Family (Optional, prefilled) */}
        <div className="form-field">
          <label htmlFor="enquiry-family" className="field-label">
            Product Family <span className="field-optional">(Optional)</span>
          </label>
          <select
            id="enquiry-family"
            className="field-select"
            value={productFamily}
            onChange={(e) => setProductFamily(e.target.value)}
          >
            <option value="">Select product family if applicable...</option>
            {PRODUCT_FAMILIES.map((f) => (
              <option key={f} value={f}>
                {f}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Requirement (Required) */}
      <div className="form-field">
        <label htmlFor="enquiry-requirement" className="field-label">
          Requirement Details <span className="field-required">*</span>
        </label>
        <textarea
          id="enquiry-requirement"
          rows="4"
          className={`field-textarea ${errors.requirement ? 'field-input--error' : ''}`}
          placeholder="Please describe your application, required sheet quantities, target project location, or questions..."
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
            <span>Recording Requirement...</span>
          ) : (
            <>
              <span>Submit Requirement</span>
              <svg className="btn-icon-arrow" aria-hidden="true" viewBox="0 0 16 16" width="14" height="14">
                <path fill="currentColor" d="M8.22 2.97a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06l2.97-2.97H2.75a.75.75 0 0 1 0-1.5h8.44L8.22 4.03a.75.75 0 0 1 0-1.06Z" />
              </svg>
            </>
          )}
        </button>

        <div className="form-privacy-note secondary-text">
          Submissions are directly reviewed by NEOM Panels management. We do not distribute contact information to third parties.
        </div>
      </div>
    </form>
  );
}
