'use client';

import { useState, useEffect, useRef } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import {
  ENQUIRY_BRANDS,
  ENQUIRY_CATEGORIES,
  PACKAGING_APPLICATIONS,
  PURCHASE_SCHEDULES,
  normalizeBrandParam,
  normalizeCategoryParam,
  sanitizeQueryText,
  normalizePurchaseScheduleParam
} from '@/lib/enquiry-config';

export default function EnquiryFormClient() {
  const searchParams = useSearchParams();

  const resolveInitialParams = () => {
    const getParam = (key) => {
      const fromHook = searchParams?.get(key);
      if (fromHook !== null && fromHook !== undefined) return fromHook;
      if (typeof window !== 'undefined') {
        const sp = new URLSearchParams(window.location.search);
        return sp.get(key);
      }
      return null;
    };

    const paramBrand = getParam('brand');
    const paramCat = getParam('category');
    const paramApp = getParam('application');
    const paramDoc = getParam('document');
    const paramFreq = getParam('frequency');

    const resolvedBrand = normalizeBrandParam(paramBrand);
    const resolvedCat = normalizeCategoryParam(paramCat);
    const safeApp = sanitizeQueryText(paramApp, 100);
    const safeDoc = sanitizeQueryText(paramDoc, 140);
    const resolvedFreq = normalizePurchaseScheduleParam(paramFreq);

    const finalBrand =
      resolvedBrand ||
      (resolvedCat === 'Industrial Packaging / Packing Plywood' ? 'NEOM Packing Plywood' : '');
    const finalCat =
      resolvedCat ||
      (resolvedBrand === 'NEOM Packing Plywood'
        ? 'Industrial Packaging / Packing Plywood'
        : '');

    const matchingPackApp = safeApp
      ? PACKAGING_APPLICATIONS.find((opt) => opt.toLowerCase() === safeApp.toLowerCase()) || ''
      : '';

    return {
      brand: finalBrand,
      category: finalCat,
      applicationProduct: safeApp,
      packagingApplication: matchingPackApp,
      purchaseFrequency: resolvedFreq,
      purchasingFrequency: resolvedFreq
        ? resolvedFreq === 'One-time purchase'
          ? 'Single production batch'
          : 'Monthly recurring supply'
        : '',
      requirementDescription: safeDoc
        ? `Requesting technical document: ${safeDoc}. Intended application: `
        : ''
    };
  };

  const initial = resolveInitialParams();

  const [step, setStep] = useState(1);
  const [backendLive, setBackendLive] = useState(true);

  // Step 1 fields
  const [brand, setBrand] = useState(initial.brand);
  const [category, setCategory] = useState(initial.category);
  const [purchasingFrequency, setPurchasingFrequency] = useState(initial.purchasingFrequency);
  const [procurementReference, setProcurementReference] = useState('');
  const [territory, setTerritory] = useState('');

  // Packaging-specific fields
  const [packagingApplication, setPackagingApplication] = useState(initial.packagingApplication);
  const [requiredThickness, setRequiredThickness] = useState('');
  const [sheetDimensions, setSheetDimensions] = useState('');
  const [purchaseFrequency, setPurchaseFrequency] = useState(initial.purchaseFrequency);

  // Shared Step 1 fields
  const [requirementDescription, setRequirementDescription] = useState(
    initial.requirementDescription
  );
  const [applicationProduct, setApplicationProduct] = useState(initial.applicationProduct);
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
    const paramFreq = searchParams.get('frequency');

    const resolvedBrand = normalizeBrandParam(paramBrand);
    const resolvedCat = normalizeCategoryParam(paramCat);
    const safeApp = sanitizeQueryText(paramApp, 100);
    const safeDoc = sanitizeQueryText(paramDoc, 140);
    const resolvedFreq = normalizePurchaseScheduleParam(paramFreq);

    if (resolvedBrand) {
      setBrand(resolvedBrand);
      if (resolvedBrand === 'NEOM Packing Plywood' && !resolvedCat) {
        setCategory('Industrial Packaging / Packing Plywood');
      }
    } else if (paramBrand !== null) {
      setBrand('');
    }

    if (resolvedCat) {
      setCategory(resolvedCat);
      if (resolvedCat === 'Industrial Packaging / Packing Plywood' && !resolvedBrand) {
        setBrand('NEOM Packing Plywood');
      }
    } else if (paramCat !== null) {
      setCategory('');
    }

    if (resolvedFreq) {
      setPurchaseFrequency(resolvedFreq);
      setPurchasingFrequency(
        resolvedFreq === 'One-time purchase'
          ? 'Single production batch'
          : 'Monthly recurring supply'
      );
    }

    if (safeApp) {
      setApplicationProduct(safeApp);
      const matchingPackApp = PACKAGING_APPLICATIONS.find(
        (opt) => opt.toLowerCase() === safeApp.toLowerCase()
      );
      if (matchingPackApp) {
        setPackagingApplication(matchingPackApp);
      }
    }

    if (safeDoc) {
      setRequirementDescription((prev) =>
        prev
          ? prev
          : `Requesting technical document: ${safeDoc}. Intended application: `
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

  const buildEffectiveDescription = () => {
    const trimmed = requirementDescription.trim();
    if (trimmed.length >= 10) return trimmed;
    if (isPackagingFlow) {
      const parts = [];
      if (packagingApplication) parts.push(`Application: ${packagingApplication}`);
      if (requiredThickness.trim()) parts.push(`Thickness: ${requiredThickness.trim()}`);
      if (sheetDimensions.trim()) parts.push(`Dimensions: ${sheetDimensions.trim()}`);
      if (quantity.trim()) parts.push(`Quantity: ${quantity.trim()} ${quantityUnit}`);
      if (purchaseFrequency) parts.push(`Purchase: ${purchaseFrequency}`);
      if (destination.trim()) parts.push(`Delivery: ${destination.trim()}`);
      if (trimmed) parts.push(`Notes: ${trimmed}`);
      return parts.join(' · ');
    }
    return trimmed;
  };

  const validateStep1 = () => {
    const errs = {};
    if (!category) {
      errs.category = 'Please select an enquiry category.';
    }

    const effectiveDesc = buildEffectiveDescription();
    if (!effectiveDesc || effectiveDesc.length < 10) {
      errs.requirementDescription = isPackagingFlow
        ? 'Please select a packaging application or enter your requirement notes (at least 10 characters).'
        : 'Please enter a brief description of your requirement (at least 10 characters).';
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
    const effectiveDesc = buildEffectiveDescription();
    const formData = new FormData();
    formData.append('category', category);
    formData.append('requirementDescription', effectiveDesc);
    formData.append('brand', brand);
    formData.append(
      'applicationProduct',
      (isPackagingFlow ? packagingApplication : applicationProduct).trim()
    );
    formData.append('quantity', quantity.trim());
    formData.append('quantityUnit', quantityUnit);
    formData.append('destination', destination.trim());
    formData.append('requestedDate', requestedDate);
    formData.append('company_website_hp', honeypot);

    formData.append('purchasingFrequency', purchasingFrequency || purchaseFrequency);
    formData.append('procurementReference', procurementReference.trim());
    formData.append('territory', territory.trim());

    formData.append('packagingApplication', packagingApplication.trim());
    formData.append('requiredThickness', requiredThickness.trim());
    formData.append('sheetDimensions', sheetDimensions.trim());
    formData.append('purchaseFrequency', purchaseFrequency || purchasingFrequency);
    formData.append('deliveryLocation', destination.trim());
    formData.append('requiredDeliveryDate', requestedDate);
    formData.append('additionalRequirements', requirementDescription.trim());

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
          <strong>Offline mode:</strong> The backend persistence service is currently unreachable.
          Form validation and step navigation can be previewed, and your entries are preserved until
          the connection is restored.
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
            Your enquiry could not be submitted. Your entries are still here. Please review the
            highlighted details below and try again.
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
        <div
          id="enquiry-success-panel"
          className="status-banner status-banner--success"
          role="status"
        >
          <h2
            ref={successHeadingRef}
            id="enquiry-success-heading"
            tabIndex={-1}
            className="section-title"
            style={{ fontSize: '1.75rem', marginBottom: '0.75rem' }}
          >
            Your enquiry has been received.
          </h2>
          <p className="lead-text" style={{ marginBottom: '0.75rem' }}>
            Reference ID: <strong id="generated-reference-code">{successData.reference}</strong>
          </p>
          <p>
            Your requirement has been recorded under{' '}
            <strong>{successData.category || category}</strong>
            {successData.brand || brand ? ` (${successData.brand || brand})` : ''} for review by the
            NEOM Panels team. Please retain your reference ID for follow-up correspondence.
          </p>
          <div className="btn-group" style={{ marginTop: 'var(--space-5)' }}>
            <button type="button" onClick={resetForm} className="btn btn--secondary">
              Submit Another Enquiry
            </button>
            <Link href="/resources" className="editorial-link">
              <span>Browse Resources &amp; Buyer Guidance</span>
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
              style={{ marginBottom: '0.5rem' }}
            >
              Step 1 — Requirement details
            </legend>
            <p className="secondary-text" style={{ fontSize: '0.9375rem', marginBottom: 'var(--space-5)' }}>
              Share the specifications you have available. Technical fields are optional if your
              dimensions or quantities are not yet finalised.
            </p>

            <div className="form-row-split">
              <div className="form-group">
                <label htmlFor="enquiry-brand" className="form-label">
                  Brand / product interest <span className="optional-marker">(Optional)</span>
                </label>
                <span id="brand-hint" className="field-hint">
                  Choose a NEOM Panels brand or general guidance.
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
                  {ENQUIRY_BRANDS.map((b) => (
                    <option key={b} value={b}>
                      {b}
                    </option>
                  ))}
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="enquiry-category" className="form-label">
                  Enquiry category <span className="required-marker" aria-hidden="true">*</span>
                </label>
                <span id="category-hint" className="field-hint">
                  Select the option that best matches your requirement.
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
                  {ENQUIRY_CATEGORIES.map((c) => (
                    <option key={c} value={c}>
                      {c}
                    </option>
                  ))}
                </select>
                <span
                  id="category-error"
                  className={`error-msg ${step1Errors.category ? 'is-visible' : ''}`}
                >
                  {step1Errors.category || 'Please select an enquiry category.'}
                </span>
              </div>
            </div>

            {/* PACKING PLYWOOD SPECIFICATION FIELDS */}
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
                    <p
                      style={{
                        margin: 0,
                        fontWeight: 600,
                        color: 'var(--color-forest)',
                        fontSize: '1rem'
                      }}
                    >
                      NEOM Packing Plywood — Specification Details
                    </p>
                    <p className="secondary-text" style={{ margin: 0, fontSize: '0.875rem' }}>
                      Moisture-resistant (MR) packaging-grade plywood
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
                      Application <span className="optional-marker">(Optional)</span>
                    </label>
                    <span id="packaging-app-hint" className="field-hint">
                      Select the primary packaging application.
                    </span>
                    <select
                      id="enquiry-packaging-application"
                      name="packagingApplication"
                      className="form-control"
                      aria-describedby="packaging-app-hint"
                      value={packagingApplication}
                      onChange={(e) => {
                        setPackagingApplication(e.target.value);
                        if (e.target.value) {
                          setStep1Errors((prev) => ({
                            ...prev,
                            requirementDescription: undefined
                          }));
                        }
                      }}
                    >
                      <option value="">Select packaging application…</option>
                      {PACKAGING_APPLICATIONS.map((app) => (
                        <option key={app} value={app}>
                          {app}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="enquiry-purchase-frequency" className="form-label">
                      One-time or recurring purchase{' '}
                      <span className="optional-marker">(Optional)</span>
                    </label>
                    <span id="purchase-freq-hint" className="field-hint">
                      Single order or scheduled repeat supply.
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
                      {PURCHASE_SCHEDULES.map((sched) => (
                        <option key={sched} value={sched}>
                          {sched}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="form-row-split">
                  <div className="form-group" style={{ marginBottom: 0 }}>
                    <label htmlFor="enquiry-required-thickness" className="form-label">
                      Required thickness <span className="optional-marker">(Optional)</span>
                    </label>
                    <span id="thickness-hint" className="field-hint">
                      Nominal thickness(es) in mm, if known.
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

                  <div className="form-group" style={{ marginBottom: 0 }}>
                    <label htmlFor="enquiry-sheet-dimensions" className="form-label">
                      Sheet dimensions <span className="optional-marker">(Optional)</span>
                    </label>
                    <span id="dimensions-hint" className="field-hint">
                      Required length × width (mm or ft), if known.
                    </span>
                    <input
                      type="text"
                      id="enquiry-sheet-dimensions"
                      name="sheetDimensions"
                      className="form-control"
                      aria-describedby="dimensions-hint"
                      placeholder="e.g. 2440 × 1220 mm (8 ft × 4 ft)"
                      value={sheetDimensions}
                      onChange={(e) => setSheetDimensions(e.target.value)}
                    />
                  </div>
                </div>
              </div>
            ) : (
              <div className="form-row-split">
                <div className="form-group">
                  <label htmlFor="enquiry-application" className="form-label">
                    Application or product <span className="optional-marker">(Optional)</span>
                  </label>
                  <span id="app-product-hint" className="field-hint">
                    Furniture type, interior zone or panel use.
                  </span>
                  <input
                    type="text"
                    id="enquiry-application"
                    name="applicationProduct"
                    className="form-control"
                    aria-describedby="app-product-hint"
                    placeholder="e.g. Modular wardrobes, kitchen cabinetry, commercial joinery"
                    value={applicationProduct}
                    onChange={(e) => setApplicationProduct(e.target.value)}
                  />
                </div>

                {category === 'Manufacturing & recurring supply' ? (
                  <div className="form-group">
                    <label htmlFor="enquiry-frequency" className="form-label">
                      Purchasing frequency <span className="optional-marker">(Optional)</span>
                    </label>
                    <span id="frequency-hint" className="field-hint">
                      Indicative production call-off cadence.
                    </span>
                    <select
                      id="enquiry-frequency"
                      name="purchasingFrequency"
                      className="form-control"
                      aria-describedby="frequency-hint"
                      value={purchasingFrequency}
                      onChange={(e) => setPurchasingFrequency(e.target.value)}
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
                  </div>
                ) : category === 'Distribution partnership' ? (
                  <div className="form-group">
                    <label htmlFor="enquiry-territory" className="form-label">
                      Proposed territory or region{' '}
                      <span className="optional-marker">(Optional)</span>
                    </label>
                    <span id="territory-hint" className="field-hint">
                      City, district or state coverage.
                    </span>
                    <input
                      type="text"
                      id="enquiry-territory"
                      name="territory"
                      className="form-control"
                      aria-describedby="territory-hint"
                      placeholder="e.g. Kochi, Kerala"
                      value={territory}
                      onChange={(e) => setTerritory(e.target.value)}
                    />
                  </div>
                ) : category === 'Institutional & public procurement' ? (
                  <div className="form-group">
                    <label htmlFor="enquiry-procurement-ref" className="form-label">
                      Procurement or tender reference{' '}
                      <span className="optional-marker">(Optional)</span>
                    </label>
                    <span id="procurement-hint" className="field-hint">
                      Department name or tender reference, if applicable.
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
              </div>
            )}

            {/* QUANTITY & UNIT */}
            <div className="form-row-split">
              <div className="form-group">
                <label htmlFor="enquiry-quantity" className="form-label">
                  Quantity <span className="optional-marker">(Optional)</span>
                </label>
                <span id="quantity-hint" className="field-hint">
                  Estimated order volume, if known.
                </span>
                <input
                  type="text"
                  id="enquiry-quantity"
                  name="quantity"
                  className="form-control"
                  inputMode="numeric"
                  aria-describedby="quantity-hint"
                  placeholder="e.g. 500"
                  value={quantity}
                  onChange={(e) => setQuantity(e.target.value)}
                />
              </div>

              <div className="form-group">
                <label htmlFor="enquiry-unit" className="form-label">
                  Quantity unit <span className="optional-marker">(Optional)</span>
                </label>
                <span id="unit-hint" className="field-hint">
                  Unit of measure for your estimate.
                </span>
                <select
                  id="enquiry-unit"
                  name="quantityUnit"
                  className="form-control"
                  aria-describedby="unit-hint"
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

            {/* DELIVERY LOCATION & DATE */}
            <div className="form-row-split">
              <div className="form-group">
                <label htmlFor="enquiry-destination" className="form-label">
                  Delivery location <span className="optional-marker">(Optional)</span>
                </label>
                <span id="destination-hint" className="field-hint">
                  City and state for dispatch planning.
                </span>
                <input
                  type="text"
                  id="enquiry-destination"
                  name="destination"
                  className="form-control"
                  aria-describedby="destination-hint"
                  placeholder="City and State"
                  value={destination}
                  onChange={(e) => setDestination(e.target.value)}
                />
              </div>

              <div className="form-group">
                <label htmlFor="enquiry-date" className="form-label">
                  Required delivery date <span className="optional-marker">(Optional)</span>
                </label>
                <span id="date-hint" className="field-hint">
                  Target dispatch or site delivery date.
                </span>
                <input
                  type="date"
                  id="enquiry-date"
                  name="requestedDate"
                  className="form-control"
                  aria-describedby="date-hint"
                  value={requestedDate}
                  onChange={(e) => setRequestedDate(e.target.value)}
                />
              </div>
            </div>

            {/* ADDITIONAL REQUIREMENTS / REQUIREMENT DESCRIPTION (SINGLE TEXTAREA, NO DUPLICATE PROMPTS) */}
            <div className="form-group">
              <label htmlFor="enquiry-description" className="form-label">
                {isPackagingFlow ? (
                  <>
                    Additional requirements{' '}
                    {packagingApplication ? (
                      <span className="optional-marker">(Optional)</span>
                    ) : (
                      <span className="required-marker" aria-hidden="true">
                        *
                      </span>
                    )}
                  </>
                ) : (
                  <>
                    Requirement details{' '}
                    <span className="required-marker" aria-hidden="true">
                      *
                    </span>
                  </>
                )}
              </label>
              <span id="description-hint" className="field-hint">
                {isPackagingFlow
                  ? 'Share what is being packed, expected handling or storage conditions, or any questions for our team.'
                  : 'Briefly describe your requirement, thickness or dimension preferences, and any questions for our team (minimum 10 characters).'}
              </span>
              <textarea
                id="enquiry-description"
                name="requirementDescription"
                className="form-control"
                maxLength={5000}
                aria-describedby="description-hint"
                aria-errormessage="description-error"
                aria-invalid={step1Errors.requirementDescription ? 'true' : undefined}
                value={requirementDescription}
                onChange={(e) => {
                  setRequirementDescription(e.target.value);
                  if (e.target.value.trim().length >= 10 || packagingApplication) {
                    setStep1Errors((prev) => ({ ...prev, requirementDescription: undefined }));
                  }
                }}
              />
              <span
                id="description-error"
                className={`error-msg ${step1Errors.requirementDescription ? 'is-visible' : ''}`}
              >
                {step1Errors.requirementDescription ||
                  'Please enter a brief description of your requirement (at least 10 characters).'}
              </span>
            </div>

            {/* SUPPORTING FILES */}
            <div className="form-group">
              <label htmlFor="enquiry-files" className="form-label">
                Supporting files <span className="optional-marker">(Optional)</span>
              </label>
              <span id="files-hint" className="field-hint">
                Attach a specification sheet, bill of quantities (BOQ), packing drawing or schedule.
                Accepted formats: PDF, JPG, PNG. Maximum 10 MB per file, up to 3 files.
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
                {selectedFiles.length > 0 ? (
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
                ) : null}
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

            <div className="form-row-split">
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
                <label htmlFor="enquiry-organisation" className="form-label">
                  Company, organisation or practice{' '}
                  <span className="required-marker" aria-hidden="true">*</span>
                </label>
                <input
                  type="text"
                  id="enquiry-organisation"
                  name="organisation"
                  className="form-control"
                  autoComplete="organization"
                  aria-errormessage="organisation-error"
                  value={organisation}
                  onChange={(e) => setOrganisation(e.target.value)}
                  required
                />
                <span id="organisation-error" className="error-msg">
                  Please enter your company, organisation or practice name.
                </span>
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="enquiry-buyer-profile" className="form-label">
                Your role or organisation type <span className="optional-marker">(Optional)</span>
              </label>
              <select
                id="enquiry-buyer-profile"
                name="buyerProfile"
                className="form-control"
                value={buyerProfile}
                onChange={(e) => setBuyerProfile(e.target.value)}
              >
                <option value="Company or organisation buyer">
                  Company or organisation buyer (Manufacturer, Contractor, Procurement, Distributor)
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
                  Business email
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
                  documentation updates from NEOM Panels. (Optional)
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
