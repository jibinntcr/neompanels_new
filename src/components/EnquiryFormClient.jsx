'use client';

import { useState, useEffect, useRef } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';

const normalizeBrandParam = (raw) => {
  if (!raw) return '';
  const lower = raw.trim().toLowerCase();
  if (lower === 'neom-packing-plywood' || lower === 'neom packing plywood' || lower === 'packing-plywood') {
    return 'NEOM Packing Plywood';
  }
  if (lower === 'starwoods' || lower === 'starwood') {
    return 'Starwoods';
  }
  if (
    lower === 'general' ||
    lower === 'general-neom-panels-enquiry' ||
    lower === 'general neom panels enquiry' ||
    lower === 'neom panels (corporate)'
  ) {
    return 'General NEOM Panels Enquiry';
  }
  if (lower === 'help-me-choose' || lower === 'help me choose') {
    return 'Help Me Choose';
  }
  return raw;
};

const normalizeCategoryParam = (raw) => {
  if (!raw) return '';
  const lower = raw.trim().toLowerCase();
  if (
    lower === 'industrial-packaging' ||
    lower === 'packing-plywood' ||
    lower === 'industrial packaging / packing plywood'
  ) {
    return 'Industrial Packaging / Packing Plywood';
  }
  return raw;
};

export default function EnquiryFormClient() {
  const searchParams = useSearchParams();

  const [step, setStep] = useState(1);
  const [backendLive, setBackendLive] = useState(true);

  // Step 1 fields
  const [brand, setBrand] = useState('');
  const [category, setCategory] = useState('');
  const [purchasingFrequency, setPurchasingFrequency] = useState('');
  const [procurementReference, setProcurementReference] = useState('');
  const [territory, setTerritory] = useState('');

  // Packaging-specific conditional fields
  const [packagingApplication, setPackagingApplication] = useState('');
  const [requiredThickness, setRequiredThickness] = useState('');
  const [sheetDimensions, setSheetDimensions] = useState('');
  const [purchaseFrequency, setPurchaseFrequency] = useState('');
  const [additionalSpecifications, setAdditionalSpecifications] = useState('');

  // Shared Step 1 fields
  const [requirementDescription, setRequirementDescription] = useState('');
  const [applicationProduct, setApplicationProduct] = useState('');
  const [quantity, setQuantity] = useState('');
  const [quantityUnit, setQuantityUnit] = useState('Sheets');
  const [destination, setDestination] = useState('');
  const [requestedDate, setRequestedDate] = useState('');
  const [honeypot, setHoneypot] = useState('');
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [fileError, setFileError] = useState('');

  // Step 2 fields
  const [name, setName] = useState('');
  const [buyerProfile, setBuyerProfile] = useState('Company or organisation buyer');
  const [organisation, setOrganisation] = useState('');
  const [preferredContactMethod, setPreferredContactMethod] = useState('Email');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [marketingConsent, setMarketingConsent] = useState(false);

  // Validation & Submission state
  const [step1Errors, setStep1Errors] = useState({});
  const [contactError, setContactError] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [serverErrors, setServerErrors] = useState([]);
  const [submissionFailed, setSubmissionFailed] = useState(false);
  const [successData, setSuccessData] = useState(null);

  const step1HeadingRef = useRef(null);
  const step2HeadingRef = useRef(null);
  const errorBannerRef = useRef(null);
  const successHeadingRef = useRef(null);

  const isPackagingFlow =
    category === 'Industrial Packaging / Packing Plywood' || brand === 'NEOM Packing Plywood';

  useEffect(() => {
    fetch('/api/health', { headers: { Accept: 'application/json' } })
      .then((r) => (r.ok ? r.json() : Promise.reject(new Error('offline'))))
      .then((d) => setBackendLive(Boolean(d && d.ok && d.mode === 'live')))
      .catch(() => setBackendLive(false));
  }, []);

  useEffect(() => {
    const paramCat = searchParams.get('category');
    const paramBrand = searchParams.get('brand');
    const paramApp = searchParams.get('application');
    const paramDoc = searchParams.get('document');

    const resolvedBrand = normalizeBrandParam(paramBrand);
    const resolvedCat = normalizeCategoryParam(paramCat);

    if (resolvedBrand) {
      setBrand(resolvedBrand);
      if (resolvedBrand === 'NEOM Packing Plywood' && !resolvedCat) {
        setCategory('Industrial Packaging / Packing Plywood');
      }
    }
    if (resolvedCat) {
      setCategory(resolvedCat);
      if (resolvedCat === 'Industrial Packaging / Packing Plywood' && !resolvedBrand) {
        setBrand('NEOM Packing Plywood');
      }
    }
    if (paramApp) {
      setApplicationProduct(paramApp);
      if (
        resolvedBrand === 'NEOM Packing Plywood' ||
        resolvedCat === 'Industrial Packaging / Packing Plywood'
      ) {
        setPackagingApplication(paramApp);
      }
    }
    if (paramDoc) {
      setRequirementDescription((prev) =>
        prev
          ? prev
          : `Requesting document: ${paramDoc}.\nIntended application and product scope: `
      );
    }
  }, [searchParams]);

  const handleFileChange = (e) => {
    setFileError('');
    const incoming = Array.from(e.target.files || []);
    const allowedExts = ['.pdf', '.jpg', '.jpeg', '.png'];
    const maxBytes = 10 * 1024 * 1024;
    const errs = [];
    const updated = [...selectedFiles];

    for (const file of incoming) {
      if (updated.length >= 3) {
        errs.push('Maximum 3 files allowed per enquiry.');
        break;
      }
      const lower = file.name.toLowerCase();
      if (!allowedExts.some((ext) => lower.endsWith(ext))) {
        errs.push(`"${file.name}" is not supported. Please attach PDF, JPG, or PNG files only.`);
        continue;
      }
      if (file.size > maxBytes) {
        errs.push(`"${file.name}" exceeds the 10MB per-file size limit.`);
        continue;
      }
      updated.push(file);
    }

    e.target.value = '';
    setSelectedFiles(updated);
    if (errs.length > 0) {
      setFileError(errs.join(' '));
    }
  };

  const removeFile = (index) => {
    setSelectedFiles((prev) => prev.filter((_, i) => i !== index));
  };

  const validateStep1 = () => {
    const errs = {};
    if (!category) {
      errs.category = 'Please select an enquiry category.';
    }
    if (category === 'Manufacturing & recurring supply' && !purchasingFrequency) {
      errs.purchasingFrequency = 'Please select an indicative purchasing frequency.';
    }
    if (category === 'Distribution partnership' && !territory.trim()) {
      errs.territory = 'Please enter the territory or region for your distribution proposal.';
    }
    if (!requirementDescription.trim() || requirementDescription.trim().length < 10) {
      errs.requirementDescription =
        'Please enter a description of your requirement (at least 10 characters).';
    }
    setStep1Errors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleContinueToStep2 = () => {
    setSubmissionFailed(false);
    setServerErrors([]);
    if (validateStep1()) {
      setStep(2);
      document.title = 'Step 2 of 2: Contact Details — Business Enquiry | NEOM Panels';
      setTimeout(() => step2HeadingRef.current?.focus(), 30);
    }
  };

  const handleBackToStep1 = () => {
    setSubmissionFailed(false);
    setServerErrors([]);
    setStep(1);
    document.title = 'Business Enquiry | NEOM Panels';
    setTimeout(() => step1HeadingRef.current?.focus(), 30);
  };

  const validateStep2 = () => {
    setContactError('');
    if (!name.trim() || name.trim().length < 2) {
      setContactError('Please enter your full name.');
      return false;
    }
    if (!organisation.trim() || organisation.trim().length < 2) {
      setContactError('Please enter your company, organisation or practice name.');
      return false;
    }

    const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email.trim());
    const phoneDigits = phone.replace(/\D/g, '');
    const phoneValid = phoneDigits.length >= 7 && phoneDigits.length <= 16;

    if (email.trim() && !emailValid) {
      setContactError('Please enter a valid email address.');
      return false;
    }
    if (phone.trim() && !phoneValid) {
      setContactError('Please enter a valid telephone number (7 to 16 digits).');
      return false;
    }
    if (!emailValid && !phoneValid) {
      setContactError(
        'Please provide at least one usable contact method (a valid email address or telephone number).'
      );
      return false;
    }
    if (preferredContactMethod === 'Email' && !emailValid) {
      setContactError(
        'You selected Email as your preferred contact method. Please enter a valid email address.'
      );
      return false;
    }
    if (preferredContactMethod === 'Phone' && !phoneValid) {
      setContactError(
        'You selected Phone as your preferred contact method. Please enter a valid telephone number.'
      );
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmissionFailed(false);
    setServerErrors([]);

    if (step === 1) {
      handleContinueToStep2();
      return;
    }

    if (!validateStep1()) {
      setStep(1);
      return;
    }
    if (!validateStep2()) {
      return;
    }

    setSubmitting(true);
    const formData = new FormData();
    formData.append('category', category);
    formData.append('requirementDescription', requirementDescription.trim());
    formData.append('brand', brand);
    formData.append(
      'applicationProduct',
      (applicationProduct || packagingApplication).trim()
    );
    formData.append('quantity', quantity.trim());
    formData.append('quantityUnit', quantityUnit);
    formData.append('destination', destination.trim());
    formData.append('requestedDate', requestedDate);
    formData.append('company_website_hp', honeypot);

    formData.append('purchasingFrequency', purchasingFrequency || purchaseFrequency);
    formData.append('procurementReference', procurementReference.trim());
    formData.append('territory', territory.trim());

    // Packaging-specific conditional payload fields
    formData.append('packagingApplication', packagingApplication.trim());
    formData.append('requiredThickness', requiredThickness.trim());
    formData.append('sheetDimensions', sheetDimensions.trim());
    formData.append('purchaseFrequency', purchaseFrequency || purchasingFrequency);
    formData.append('deliveryLocation', destination.trim());
    formData.append('requiredDeliveryDate', requestedDate);
    formData.append('additionalSpecifications', additionalSpecifications.trim());

    formData.append('name', name.trim());
    formData.append('buyerProfile', buyerProfile);
    formData.append('organisation', organisation.trim());
    formData.append('preferredContactMethod', preferredContactMethod);
    formData.append('email', email.trim());
    formData.append('phone', phone.trim());
    formData.append('marketingConsent', marketingConsent ? 'true' : 'false');

    for (const file of selectedFiles) {
      formData.append('attachments', file, file.name);
    }

    try {
      const res = await fetch('/api/enquiries', {
        method: 'POST',
        body: formData
      });
      const payload = await res.json();

      if (res.ok && payload?.ok && payload?.reference) {
        setSuccessData(payload);
        document.title = `Enquiry Received (${payload.reference}) | NEOM Panels`;
        setTimeout(() => successHeadingRef.current?.focus(), 30);
      } else {
        setSubmissionFailed(true);
        setServerErrors(Array.isArray(payload?.errors) ? payload.errors : []);
        setTimeout(() => errorBannerRef.current?.focus(), 30);
      }
    } catch (_) {
      setSubmissionFailed(true);
      setServerErrors([]);
      setTimeout(() => errorBannerRef.current?.focus(), 30);
    } finally {
      setSubmitting(false);
    }
  };

  const resetForm = () => {
    setSuccessData(null);
    setSubmissionFailed(false);
    setServerErrors([]);
    setStep(1);
    setCategory('');
    setPurchasingFrequency('');
    setProcurementReference('');
    setTerritory('');
    setPackagingApplication('');
    setRequiredThickness('');
    setSheetDimensions('');
    setPurchaseFrequency('');
    setAdditionalSpecifications('');
    setRequirementDescription('');
    setBrand('');
    setApplicationProduct('');
    setQuantity('');
    setQuantityUnit('Sheets');
    setDestination('');
    setRequestedDate('');
    setSelectedFiles([]);
    setName('');
    setOrganisation('');
    setEmail('');
    setPhone('');
    setMarketingConsent(false);
  };

  return (
    <div className="enquiry-form-container">
      {!backendLive ? (
        <div className="status-banner status-banner--warning" role="status">
          <strong>Non-live preview mode:</strong> The backend persistence service is not connected.
          Form validation and step transitions can be previewed, but submissions will never be
          simulated as successful without an active server connection.
        </div>
      ) : null}

      {submissionFailed ? (
        <div
          ref={errorBannerRef}
          id="enquiry-error-banner"
          className="status-banner status-banner--error"
          role="alert"
          tabIndex={-1}
        >
          <p style={{ fontWeight: 600, marginBottom: '0.5rem' }}>
            Your enquiry could not be submitted. Your entries are still here. Please try again or
            use our contact details.
          </p>
          {serverErrors.length > 0 ? (
            <ul style={{ margin: 0, paddingLeft: '1.25rem' }}>
              {serverErrors.map((err, i) => (
                <li key={i}>{err}</li>
              ))}
            </ul>
          ) : null}
        </div>
      ) : null}

      {successData ? (
        <div id="enquiry-success-panel" className="status-banner status-banner--success" role="status">
          <h2
            ref={successHeadingRef}
            id="enquiry-success-heading"
            tabIndex={-1}
            className="section-title"
            style={{ fontSize: '1.75rem', marginBottom: '0.75rem' }}
          >
            Your enquiry has been received.
          </h2>
          <p className="lead-text" style={{ marginBottom: '1rem' }}>
            Your reference is <strong id="generated-reference-code">{successData.reference}</strong>.
          </p>
          <p>
            Your requirement has been saved and routed to our{' '}
            <strong>{successData.routedDesk || 'Corporate Business Enquiries'}</strong> team. Please
            retain your reference number for follow-up correspondence.
          </p>
          <div className="btn-group" style={{ marginTop: 'var(--space-5)' }}>
            <button type="button" onClick={resetForm} className="btn btn--secondary">
              Submit Another Enquiry
            </button>
            <Link href="/resources" className="editorial-link">
              <span>Browse Resources &amp; Literature</span>
              <span className="link-arrow" aria-hidden="true">
                →
              </span>
            </Link>
          </div>
        </div>
      ) : (
        <form
          id="neom-enquiry-form"
          action="/api/enquiries"
          method="POST"
          encType="multipart/form-data"
          onSubmit={handleSubmit}
          noValidate
        >
          <div className="visually-hidden" aria-hidden="true">
            <label htmlFor="company_website_hp">Leave this field blank</label>
            <input
              type="text"
              id="company_website_hp"
              name="company_website_hp"
              tabIndex={-1}
              autoComplete="off"
              value={honeypot}
              onChange={(e) => setHoneypot(e.target.value)}
            />
          </div>

          <nav className="step-progress-nav" aria-label="Enquiry form progress">
            <ol className="step-progress-list" role="list">
              <li
                className={`step-indicator ${step > 1 ? 'is-completed' : ''}`}
                aria-current={step === 1 ? 'step' : undefined}
              >
                <span className="step-number">1</span>
                <span>Step 1: Requirement details</span>
              </li>
              <li
                className="step-indicator"
                aria-current={step === 2 ? 'step' : undefined}
              >
                <span className="step-number">2</span>
                <span>Step 2: Contact &amp; organisation</span>
              </li>
            </ol>
          </nav>

          {/* STEP 1 */}
          <fieldset id="enquiry-step-1" className="form-step" hidden={step !== 1}>
            <legend
              ref={step1HeadingRef}
              id="step-1-heading"
              tabIndex={-1}
              className="subsection-title"
              style={{ marginBottom: 'var(--space-5)' }}
            >
              Step 1 — Requirement details
            </legend>

            <div className="form-row-split">
              <div className="form-group">
                <label htmlFor="enquiry-brand" className="form-label">
                  Brand / product interest
                </label>
                <span id="brand-hint" className="field-hint">
                  Choose a specific NEOM Panels brand or general guidance.
                </span>
                <select
                  id="enquiry-brand"
                  name="brand"
                  className="form-control"
                  aria-describedby="brand-hint"
                  value={brand}
                  onChange={(e) => {
                    const nextBrand = e.target.value;
                    setBrand(nextBrand);
                    if (nextBrand === 'NEOM Packing Plywood' && !category) {
                      setCategory('Industrial Packaging / Packing Plywood');
                      setStep1Errors((prev) => ({ ...prev, category: undefined }));
                    }
                  }}
                >
                  <option value="">Select brand or product interest…</option>
                  <option value="Starwoods">Starwoods</option>
                  <option value="NEOM Packing Plywood">NEOM Packing Plywood</option>
                  <option value="General NEOM Panels Enquiry">General NEOM Panels Enquiry</option>
                  <option value="Help Me Choose">Help Me Choose</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="enquiry-category" className="form-label">
                  Enquiry category <span className="required-marker" aria-hidden="true">*</span>
                </label>
                <span id="category-hint" className="field-hint">
                  Select the option that best matches your commercial requirement.
                </span>
                <select
                  id="enquiry-category"
                  name="category"
                  className="form-control"
                  aria-describedby="category-hint"
                  aria-errormessage="category-error"
                  aria-invalid={step1Errors.category ? 'true' : undefined}
                  value={category}
                  onChange={(e) => {
                    const nextCat = e.target.value;
                    setCategory(nextCat);
                    if (nextCat === 'Industrial Packaging / Packing Plywood' && !brand) {
                      setBrand('NEOM Packing Plywood');
                    }
                    setStep1Errors((prev) => ({ ...prev, category: undefined }));
                  }}
                  required
                >
                  <option value="">Select an enquiry category…</option>
                  <option value="Industrial Packaging / Packing Plywood">
                    Industrial Packaging / Packing Plywood
                  </option>
                  <option value="Manufacturing & recurring supply">
                    Manufacturing &amp; recurring supply
                  </option>
                  <option value="Project requirement">Project requirement</option>
                  <option value="Institutional & public procurement">
                    Institutional &amp; public procurement
                  </option>
                  <option value="Product information">Product information</option>
                  <option value="Distribution partnership">Distribution partnership</option>
                  <option value="Supplier introduction">Supplier introduction</option>
                  <option value="Other business enquiry">Other business enquiry</option>
                </select>
                <span
                  id="category-error"
                  className={`error-msg ${step1Errors.category ? 'is-visible' : ''}`}
                >
                  {step1Errors.category || 'Please select an enquiry category.'}
                </span>
              </div>
            </div>

            {/* Conditional Block for Industrial Packaging / NEOM Packing Plywood */}
            {isPackagingFlow ? (
              <div
                id="cond-packaging"
                className="conditional-group"
                style={{ borderLeftColor: 'var(--color-oak)' }}
              >
                <div
                  style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '0.75rem',
                    marginBottom: 'var(--space-4)',
                    paddingBottom: 'var(--space-3)',
                    borderBottom: '1px solid var(--color-border)'
                  }}
                >
                  <div>
                    <span className="eyebrow" style={{ marginBottom: '0.15rem' }}>
                      PACKAGING SPECIFICATION PARAMETERS
                    </span>
                    <p style={{ margin: 0, fontWeight: 600, color: 'var(--color-forest)' }}>
                      NEOM Packing Plywood · Moisture Resistant (MR) Packaging Grade
                    </p>
                  </div>
                  <img
                    src="/assets/neom-packing-plywood-logo-compact.svg"
                    alt="NEOM Packing Plywood"
                    className="packing-logo-img--xs"
                    width="540"
                    height="112"
                  />
                </div>

                <div className="form-row-split">
                  <div className="form-group">
                    <label htmlFor="enquiry-packaging-application" className="form-label">
                      Packaging application
                    </label>
                    <span id="packaging-app-hint" className="field-hint">
                      What are you fabricating or packing?
                    </span>
                    <select
                      id="enquiry-packaging-application"
                      name="packagingApplication"
                      className="form-control"
                      aria-describedby="packaging-app-hint"
                      value={packagingApplication}
                      onChange={(e) => setPackagingApplication(e.target.value)}
                    >
                      <option value="">Select packaging application…</option>
                      <option value="Packing Cases">Packing Cases</option>
                      <option value="Crates and Enclosures">Crates and Enclosures</option>
                      <option value="Industrial Packaging Components (Dividers, Liners, Panels)">
                        Industrial Packaging Components (Dividers, Liners, Panels)
                      </option>
                      <option value="Recurring Packaging Supply">Recurring Packaging Supply</option>
                      <option value="Other Industrial Packaging Application">
                        Other Industrial Packaging Application
                      </option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="enquiry-purchase-frequency" className="form-label">
                      One-time or recurring purchase
                    </label>
                    <span id="purchase-freq-hint" className="field-hint">
                      Indicate whether this is a single order or repeat supply.
                    </span>
                    <select
                      id="enquiry-purchase-frequency"
                      name="purchaseFrequency"
                      className="form-control"
                      aria-describedby="purchase-freq-hint"
                      value={purchaseFrequency}
                      onChange={(e) => setPurchaseFrequency(e.target.value)}
                    >
                      <option value="">Select purchase schedule…</option>
                      <option value="One-time purchase">One-time purchase</option>
                      <option value="Recurring monthly / scheduled supply">
                        Recurring monthly / scheduled supply
                      </option>
                      <option value="Recurring quarterly supply">
                        Recurring quarterly supply
                      </option>
                      <option value="Initial batch with planned repeat supply">
                        Initial batch with planned repeat supply
                      </option>
                    </select>
                  </div>
                </div>

                <div className="form-row-split">
                  <div className="form-group">
                    <label htmlFor="enquiry-required-thickness" className="form-label">
                      Required thickness
                    </label>
                    <span id="thickness-hint" className="field-hint">
                      Nominal thickness(es) in mm.
                    </span>
                    <input
                      type="text"
                      id="enquiry-required-thickness"
                      name="requiredThickness"
                      className="form-control"
                      aria-describedby="thickness-hint"
                      placeholder="e.g. 9 mm, 12 mm, 16 mm"
                      value={requiredThickness}
                      onChange={(e) => setRequiredThickness(e.target.value)}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="enquiry-sheet-dimensions" className="form-label">
                      Sheet dimensions
                    </label>
                    <span id="dimensions-hint" className="field-hint">
                      Required length × width (ft or mm).
                    </span>
                    <input
                      type="text"
                      id="enquiry-sheet-dimensions"
                      name="sheetDimensions"
                      className="form-control"
                      aria-describedby="dimensions-hint"
                      placeholder="e.g. 8 ft × 4 ft (2440 × 1220 mm)"
                      value={sheetDimensions}
                      onChange={(e) => setSheetDimensions(e.target.value)}
                    />
                  </div>
                </div>

                <div className="form-group" style={{ marginBottom: 0 }}>
                  <label htmlFor="enquiry-additional-specs" className="form-label">
                    Additional specifications <span className="optional-marker">(Optional)</span>
                  </label>
                  <span id="additional-specs-hint" className="field-hint">
                    Share expected handling method, storage/transport moisture exposure, or special
                    packing notes.
                  </span>
                  <input
                    type="text"
                    id="enquiry-additional-specs"
                    name="additionalSpecifications"
                    className="form-control"
                    aria-describedby="additional-specs-hint"
                    placeholder="e.g. Forklift handling, covered warehouse storage, domestic dispatch"
                    value={additionalSpecifications}
                    onChange={(e) => setAdditionalSpecifications(e.target.value)}
                  />
                </div>
              </div>
            ) : null}

            {category === 'Manufacturing & recurring supply' ? (
              <div id="cond-frequency" className="conditional-group">
                <label htmlFor="enquiry-frequency" className="form-label">
                  Purchasing frequency <span className="required-marker" aria-hidden="true">*</span>
                </label>
                <span id="frequency-hint" className="field-hint">
                  Helps us understand your production call-off cadence.
                </span>
                <select
                  id="enquiry-frequency"
                  name="purchasingFrequency"
                  className="form-control"
                  aria-describedby="frequency-hint"
                  aria-errormessage="frequency-error"
                  aria-invalid={step1Errors.purchasingFrequency ? 'true' : undefined}
                  value={purchasingFrequency}
                  onChange={(e) => {
                    setPurchasingFrequency(e.target.value);
                    setStep1Errors((prev) => ({ ...prev, purchasingFrequency: undefined }));
                  }}
                  required
                >
                  <option value="">Select purchasing frequency…</option>
                  <option value="Monthly recurring supply">Monthly recurring supply</option>
                  <option value="Quarterly / scheduled call-off">
                    Quarterly / scheduled call-off
                  </option>
                  <option value="Single production batch">Single production batch</option>
                  <option value="Annual rate contract discussion">
                    Annual rate contract discussion
                  </option>
                </select>
                <span
                  id="frequency-error"
                  className={`error-msg ${step1Errors.purchasingFrequency ? 'is-visible' : ''}`}
                >
                  {step1Errors.purchasingFrequency ||
                    'Please select an indicative purchasing frequency.'}
                </span>
              </div>
            ) : null}

            {category === 'Institutional & public procurement' ? (
              <div id="cond-procurement" className="conditional-group">
                <label htmlFor="enquiry-procurement-ref" className="form-label">
                  Procurement or tender reference <span className="optional-marker">(Optional)</span>
                </label>
                <span id="procurement-hint" className="field-hint">
                  Include the department name, tender reference or specification clause if available.
                </span>
                <input
                  type="text"
                  id="enquiry-procurement-ref"
                  name="procurementReference"
                  className="form-control"
                  autoCorrect="off"
                  autoCapitalize="off"
                  spellCheck="false"
                  aria-describedby="procurement-hint"
                  value={procurementReference}
                  onChange={(e) => setProcurementReference(e.target.value)}
                />
              </div>
            ) : null}

            {category === 'Distribution partnership' ? (
              <div id="cond-territory" className="conditional-group">
                <label htmlFor="enquiry-territory" className="form-label">
                  Proposed territory or region{' '}
                  <span className="required-marker" aria-hidden="true">*</span>
                </label>
                <span id="territory-hint" className="field-hint">
                  Specify the city, district or state where your distribution network operates.
                </span>
                <input
                  type="text"
                  id="enquiry-territory"
                  name="territory"
                  className="form-control"
                  aria-describedby="territory-hint"
                  aria-errormessage="territory-error"
                  aria-invalid={step1Errors.territory ? 'true' : undefined}
                  value={territory}
                  onChange={(e) => {
                    setTerritory(e.target.value);
                    setStep1Errors((prev) => ({ ...prev, territory: undefined }));
                  }}
                  required
                />
                <span
                  id="territory-error"
                  className={`error-msg ${step1Errors.territory ? 'is-visible' : ''}`}
                >
                  {step1Errors.territory ||
                    'Please enter the territory or region for your distribution proposal.'}
                </span>
              </div>
            ) : null}

            <div className="form-group">
              <label htmlFor="enquiry-description" className="form-label">
                Requirement description <span className="required-marker" aria-hidden="true">*</span>
              </label>
              <span id="description-hint" className="field-hint">
                Describe what the panel or packing plywood will be used for, required thicknesses or
                dimensions, and any questions you have (minimum 10 characters).
              </span>
              <textarea
                id="enquiry-description"
                name="requirementDescription"
                className="form-control"
                minLength={10}
                maxLength={5000}
                aria-describedby="description-hint"
                aria-errormessage="description-error"
                aria-invalid={step1Errors.requirementDescription ? 'true' : undefined}
                value={requirementDescription}
                onChange={(e) => {
                  setRequirementDescription(e.target.value);
                  if (e.target.value.trim().length >= 10) {
                    setStep1Errors((prev) => ({ ...prev, requirementDescription: undefined }));
                  }
                }}
                required
              />
              <span
                id="description-error"
                className={`error-msg ${step1Errors.requirementDescription ? 'is-visible' : ''}`}
              >
                {step1Errors.requirementDescription ||
                  'Please enter a description of your requirement (at least 10 characters).'}
              </span>
            </div>

            {!isPackagingFlow ? (
              <div className="form-group">
                <label htmlFor="enquiry-application" className="form-label">
                  Application or product <span className="optional-marker">(Optional)</span>
                </label>
                <input
                  type="text"
                  id="enquiry-application"
                  name="applicationProduct"
                  className="form-control"
                  placeholder="e.g. Modular wardrobes, office fit-out, packing cases"
                  value={applicationProduct}
                  onChange={(e) => setApplicationProduct(e.target.value)}
                />
              </div>
            ) : null}

            <div className="form-row-split">
              <div className="form-group">
                <label htmlFor="enquiry-quantity" className="form-label">
                  Quantity <span className="optional-marker">(Optional)</span>
                </label>
                <input
                  type="text"
                  id="enquiry-quantity"
                  name="quantity"
                  className="form-control"
                  inputMode="numeric"
                  placeholder="e.g. 500"
                  value={quantity}
                  onChange={(e) => setQuantity(e.target.value)}
                />
              </div>

              <div className="form-group">
                <label htmlFor="enquiry-unit" className="form-label">
                  Quantity unit <span className="optional-marker">(Optional)</span>
                </label>
                <select
                  id="enquiry-unit"
                  name="quantityUnit"
                  className="form-control"
                  value={quantityUnit}
                  onChange={(e) => setQuantityUnit(e.target.value)}
                >
                  <option value="Sheets">Sheets</option>
                  <option value="Square metres (sq. m)">Square metres (sq. m)</option>
                  <option value="Square feet (sq. ft)">Square feet (sq. ft)</option>
                  <option value="Cubic metres (CBM)">Cubic metres (CBM)</option>
                  <option value="Truckload / Container">Truckload / Container</option>
                  <option value="To be determined">To be determined</option>
                </select>
              </div>
            </div>

            <div className="form-row-split">
              <div className="form-group">
                <label htmlFor="enquiry-destination" className="form-label">
                  Delivery location <span className="optional-marker">(Optional)</span>
                </label>
                <input
                  type="text"
                  id="enquiry-destination"
                  name="destination"
                  className="form-control"
                  placeholder="City and State"
                  value={destination}
                  onChange={(e) => setDestination(e.target.value)}
                />
              </div>

              <div className="form-group">
                <label htmlFor="enquiry-date" className="form-label">
                  Required delivery date <span className="optional-marker">(Optional)</span>
                </label>
                <input
                  type="date"
                  id="enquiry-date"
                  name="requestedDate"
                  className="form-control"
                  value={requestedDate}
                  onChange={(e) => setRequestedDate(e.target.value)}
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="enquiry-files" className="form-label">
                Supporting files <span className="optional-marker">(Optional)</span>
              </label>
              <span id="files-hint" className="field-hint">
                Attach a specification sheet, bill of quantities (BOQ), packing drawing or schedule.
                Accepted formats: PDF, JPG, PNG. Up to 10MB per file, maximum 3 files.
              </span>
              <div className="file-upload-box">
                <input
                  type="file"
                  id="enquiry-files"
                  name="attachments"
                  accept=".pdf,.jpg,.jpeg,.png,application/pdf,image/jpeg,image/png"
                  multiple
                  aria-describedby="files-hint"
                  onChange={handleFileChange}
                />
                <ul className="file-list" aria-live="polite">
                  {selectedFiles.map((f, idx) => (
                    <li key={idx} className="file-list-item">
                      <span>
                        {f.name} ({(f.size / 1024).toFixed(1)} KB)
                      </span>
                      <button
                        type="button"
                        className="file-remove-btn"
                        aria-label={`Remove attachment ${f.name}`}
                        onClick={() => removeFile(idx)}
                      >
                        Remove
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
              {fileError ? (
                <span className="error-msg is-visible" role="alert">
                  {fileError}
                </span>
              ) : null}
            </div>

            <div className="btn-group" style={{ marginTop: 'var(--space-5)' }}>
              <button
                type="button"
                id="btn-to-step-2"
                className="btn btn--primary"
                onClick={handleContinueToStep2}
              >
                Continue to Contact Details →
              </button>
            </div>
          </fieldset>

          {/* STEP 2 */}
          <fieldset id="enquiry-step-2" className="form-step" hidden={step !== 2}>
            <legend
              ref={step2HeadingRef}
              id="step-2-heading"
              tabIndex={-1}
              className="subsection-title"
              style={{ marginBottom: 'var(--space-5)' }}
            >
              Step 2 — Contact &amp; organisation details
            </legend>

            <div className="form-group">
              <label htmlFor="enquiry-name" className="form-label">
                Full name <span className="required-marker" aria-hidden="true">*</span>
              </label>
              <input
                type="text"
                id="enquiry-name"
                name="name"
                className="form-control"
                autoComplete="name"
                aria-errormessage="name-error"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
              <span id="name-error" className="error-msg">
                Please enter your full name.
              </span>
            </div>

            <div className="form-group">
              <label htmlFor="enquiry-buyer-profile" className="form-label">
                Your role or organisation type
              </label>
              <span id="buyer-profile-hint" className="field-hint">
                Packaging manufacturers, fabricators, companies, institutions and independent
                consultants are welcome to enquire directly.
              </span>
              <select
                id="enquiry-buyer-profile"
                name="buyerProfile"
                className="form-control"
                aria-describedby="buyer-profile-hint"
                value={buyerProfile}
                onChange={(e) => setBuyerProfile(e.target.value)}
              >
                <option value="Company or organisation buyer">
                  Company or organisation buyer (OEM, Packaging Fabricator, Manufacturer, Contractor,
                  Distributor)
                </option>
                <option value="Industrial packaging or packing-case manufacturer">
                  Industrial packaging or packing-case manufacturer
                </option>
                <option value="Independent architect or interior designer">
                  Independent architect or interior designer
                </option>
                <option value="Independent project or procurement consultant">
                  Independent project or procurement consultant
                </option>
                <option value="Institutional or public-sector representative">
                  Institutional or public-sector representative
                </option>
                <option value="Material or service supplier">Material or service supplier</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="enquiry-organisation" className="form-label">
                Company, organisation or practice{' '}
                <span className="required-marker" aria-hidden="true">*</span>
              </label>
              <span id="organisation-hint" className="field-hint">
                {buyerProfile.includes('Independent')
                  ? 'Enter your studio or practice name, or write "Independent Practice" if inquiring individually.'
                  : 'Registered company name, institution, or independent practice name.'}
              </span>
              <input
                type="text"
                id="enquiry-organisation"
                name="organisation"
                className="form-control"
                autoComplete="organization"
                aria-describedby="organisation-hint"
                aria-errormessage="organisation-error"
                value={organisation}
                onChange={(e) => setOrganisation(e.target.value)}
                required
              />
              <span id="organisation-error" className="error-msg">
                Please enter your company, organisation or practice name.
              </span>
            </div>

            <fieldset className="radio-fieldset">
              <legend className="radio-legend">
                Preferred contact method <span className="required-marker" aria-hidden="true">*</span>
              </legend>
              <span className="field-hint" style={{ marginBottom: '0.25rem' }}>
                Provide at least one usable contact method below (email address or telephone number).
              </span>
              <div className="radio-group">
                {['Email', 'Phone', 'Either Email or Phone'].map((method) => (
                  <label key={method} className="radio-option">
                    <input
                      type="radio"
                      name="preferredContactMethod"
                      value={method}
                      checked={preferredContactMethod === method}
                      onChange={() => setPreferredContactMethod(method)}
                    />
                    <span>{method}</span>
                  </label>
                ))}
              </div>
            </fieldset>

            <div className="form-row-split">
              <div className="form-group">
                <label htmlFor="enquiry-email" className="form-label">
                  Email address
                </label>
                <span id="email-hint" className="field-hint">
                  Format: name@company.com
                </span>
                <input
                  type="email"
                  id="enquiry-email"
                  name="email"
                  className="form-control"
                  autoComplete="email"
                  autoCorrect="off"
                  autoCapitalize="off"
                  spellCheck="false"
                  aria-describedby="email-hint"
                  aria-errormessage="email-error"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <span id="email-error" className="error-msg">
                  Please enter a valid email address.
                </span>
              </div>

              <div className="form-group">
                <label htmlFor="enquiry-phone" className="form-label">
                  Phone number
                </label>
                <span id="phone-hint" className="field-hint">
                  Include STD or country code if applicable.
                </span>
                <input
                  type="tel"
                  id="enquiry-phone"
                  name="phone"
                  className="form-control"
                  autoComplete="tel"
                  inputMode="tel"
                  aria-describedby="phone-hint"
                  aria-errormessage="phone-error"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
                <span id="phone-error" className="error-msg">
                  Please enter a valid telephone number.
                </span>
              </div>
            </div>

            {contactError ? (
              <div
                id="contact-method-error"
                className="error-msg is-visible"
                role="alert"
                style={{ marginBottom: 'var(--space-4)' }}
              >
                {contactError}
              </div>
            ) : null}

            <div
              className="form-group"
              style={{ borderTop: '1px solid var(--color-border)', paddingTop: 'var(--space-4)' }}
            >
              <label className="checkbox-option" htmlFor="enquiry-marketing-consent">
                <input
                  type="checkbox"
                  id="enquiry-marketing-consent"
                  name="marketingConsent"
                  value="true"
                  checked={marketingConsent}
                  onChange={(e) => setMarketingConsent(e.target.checked)}
                />
                <span>
                  <strong>Optional updates:</strong> I would like to receive occasional product
                  documentation updates and corporate announcements from NEOM Panels. (Optional — you
                  can submit your enquiry without selecting this.)
                </span>
              </label>
            </div>

            <div className="btn-group" style={{ marginTop: 'var(--space-5)' }}>
              <button
                type="button"
                id="btn-back-to-step-1"
                className="btn btn--secondary"
                onClick={handleBackToStep1}
              >
                ← Back to Step 1
              </button>
              <button
                type="submit"
                id="btn-submit-enquiry"
                className="btn btn--primary"
                disabled={submitting}
              >
                {submitting ? 'Submitting enquiry…' : 'Submit Enquiry'}
              </button>
            </div>
          </fieldset>
        </form>
      )}
    </div>
  );
}
