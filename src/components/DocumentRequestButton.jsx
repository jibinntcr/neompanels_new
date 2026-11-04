'use client';

import { useState, useRef } from 'react';
import Link from 'next/link';
import SecurityCaptcha from '@/components/SecurityCaptcha';

export default function DocumentRequestButton({
  docTitle,
  docCategory,
  documentCode,
  documentTitle,
  label
}) {
  const resolvedTitle = documentTitle || docTitle || 'Technical & Corporate Documentation';
  const resolvedCategory = docCategory || documentCode || 'Documentation Review';
  const dialogId = `dialog-title-${String(resolvedTitle)
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')}`;

  const dialogRef = useRef(null);
  const [name, setName] = useState('');
  const [organisation, setOrganisation] = useState('');
  const [email, setEmail] = useState('');
  const [applicationScope, setApplicationScope] = useState('');
  const [captchaVerified, setCaptchaVerified] = useState(false);
  const [captchaData, setCaptchaData] = useState({ expected: 'NP74K', answer: '' });
  const [submitting, setSubmitting] = useState(false);
  const [reference, setReference] = useState(null);
  const [errorMsg, setErrorMsg] = useState('');

  const openModal = () => {
    setReference(null);
    setErrorMsg('');
    setSubmitting(false);
    if (dialogRef.current && typeof dialogRef.current.showModal === 'function') {
      dialogRef.current.showModal();
    }
  };

  const closeModal = () => {
    if (dialogRef.current && typeof dialogRef.current.close === 'function') {
      dialogRef.current.close();
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMsg('');
    if (!captchaVerified) {
      setErrorMsg('Please enter the 5-character security verification code shown below.');
      return;
    }
    setSubmitting(true);

    try {
      const res = await fetch('/api/document-requests', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          documentTitle: resolvedTitle,
          documentCategory: resolvedCategory,
          name,
          organisation,
          email,
          applicationScope,
          captchaExpected: captchaData.expected,
          captchaAnswer: captchaData.answer
        })
      });
      const data = await res.json();
      const refId = data?.referenceId || data?.reference;
      if (res.ok && refId) {
        setReference(refId);
      } else {
        setErrorMsg(
          (Array.isArray(data?.errors) && data.errors.join(' ')) ||
            data?.error ||
            'Your document request could not be submitted. Please check your entries.'
        );
      }
    } catch (_) {
      setErrorMsg('Unable to reach the document request service. Your entries are still here.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <button type="button" className="btn btn--secondary" onClick={openModal}>
        {label || 'Request Technical Documents'}
      </button>

      <dialog
        ref={dialogRef}
        className="corporate-dialog doc-modal"
        aria-labelledby={dialogId}
        onClick={(e) => {
          if (e.target === dialogRef.current) closeModal();
        }}
      >
        <div className="dialog-header">
          <div>
            <p className="eyebrow" style={{ marginBottom: '0.25rem' }}>
              TECHNICAL &amp; CORPORATE DOCUMENTATION
            </p>
            <h2 id={dialogId} className="subsection-title" style={{ marginBottom: 0 }}>
              {resolvedTitle}
            </h2>
          </div>
          <button
            type="button"
            onClick={closeModal}
            className="doc-modal__close"
            aria-label="Close dialog"
          >
            ✕
          </button>
        </div>

        <div className="doc-modal__body">
          {errorMsg ? (
            <div className="status-banner status-banner--error" role="alert">
              {errorMsg}
            </div>
          ) : null}

          {reference ? (
            <div className="status-banner status-banner--success" role="status">
              <h3 className="subsection-title" style={{ marginBottom: '0.5rem' }}>
                Your document request has been recorded.
              </h3>
              <p style={{ marginBottom: '1rem' }}>
                Reference ID: <strong>{reference}</strong>. Our team will review your requested
                scope and respond to your business email.
              </p>
              <button type="button" className="btn btn--primary" onClick={closeModal}>
                Done
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label className="form-label" htmlFor={`${dialogId}-doc`}>
                  Requested document
                </label>
                <input
                  id={`${dialogId}-doc`}
                  type="text"
                  className="form-control"
                  value={resolvedTitle}
                  readOnly
                />
              </div>

              <div className="form-row-split">
                <div className="form-group">
                  <label className="form-label" htmlFor={`${dialogId}-name`}>
                    Full name <span className="required-marker" aria-hidden="true">*</span>
                  </label>
                  <input
                    id={`${dialogId}-name`}
                    type="text"
                    className="form-control"
                    autoComplete="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor={`${dialogId}-org`}>
                    Company or organisation <span className="required-marker" aria-hidden="true">*</span>
                  </label>
                  <input
                    id={`${dialogId}-org`}
                    type="text"
                    className="form-control"
                    autoComplete="organization"
                    value={organisation}
                    onChange={(e) => setOrganisation(e.target.value)}
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor={`${dialogId}-email`}>
                  Business email <span className="required-marker" aria-hidden="true">*</span>
                </label>
                <span className="field-hint">Format: name@company.com</span>
                <input
                  id={`${dialogId}-email`}
                  type="email"
                  className="form-control"
                  autoComplete="email"
                  autoCorrect="off"
                  autoCapitalize="off"
                  spellCheck="false"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor={`${dialogId}-scope`}>
                  Intended application or product scope{' '}
                  <span className="required-marker" aria-hidden="true">*</span>
                </label>
                <span className="field-hint">
                  State the brand (Starwoods or NEOM Packing Plywood), thickness or application so
                  we can prepare the relevant specification details.
                </span>
                <textarea
                  id={`${dialogId}-scope`}
                  className="form-control"
                  style={{ minHeight: '5.5rem' }}
                  value={applicationScope}
                  onChange={(e) => setApplicationScope(e.target.value)}
                  required
                />
              </div>

              <div style={{ marginTop: '0.85rem' }}>
                <SecurityCaptcha
                  idPrefix={`${dialogId}-captcha`}
                  onVerifyChange={(valid, data) => {
                    setCaptchaVerified(valid);
                    setCaptchaData(data);
                    if (valid) setErrorMsg('');
                  }}
                />
              </div>

              <div className="btn-group" style={{ marginTop: '1rem' }}>
                <button type="submit" className="btn btn--primary" disabled={submitting}>
                  {submitting ? 'Submitting…' : 'Request Technical Documents'}
                </button>
                <Link
                  href={`/enquiry?category=product-info&document=${encodeURIComponent(
                    resolvedTitle
                  )}`}
                  className="editorial-link"
                  onClick={closeModal}
                >
                  <span>Open Full Enquiry Form</span>
                  <span className="link-arrow" aria-hidden="true">
                    →
                  </span>
                </Link>
              </div>
            </form>
          )}
        </div>
      </dialog>
    </>
  );
}
