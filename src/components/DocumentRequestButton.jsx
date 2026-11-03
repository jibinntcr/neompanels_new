'use client';

import { useState, useRef } from 'react';
import Link from 'next/link';

export default function DocumentRequestButton({
  docTitle,
  docCategory,
  documentCode,
  documentTitle,
  label
}) {
  const resolvedTitle = documentTitle || docTitle || 'Corporate Document';
  const resolvedCategory = documentCode || docCategory || 'Corporate';
  const dialogId = `dialog-title-${String(resolvedCategory).replace(/\s+/g, '-')}`;

  const dialogRef = useRef(null);
  const [name, setName] = useState('');
  const [organisation, setOrganisation] = useState('');
  const [email, setEmail] = useState('');
  const [applicationScope, setApplicationScope] = useState('');
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
    setSubmitting(true);

    try {
      const res = await fetch('/api/document-requests', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          documentCode: resolvedCategory,
          documentTitle: resolvedTitle,
          documentCategory: resolvedCategory,
          name,
          company: organisation,
          organisation,
          email,
          notes: applicationScope,
          applicationScope
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
        {label || 'Request a Document'}
      </button>

      <dialog
        ref={dialogRef}
        className="doc-modal"
        aria-labelledby={dialogId}
        onClick={(e) => {
          if (e.target === dialogRef.current) closeModal();
        }}
      >
        <div className="doc-modal__header">
          <div>
            <p className="eyebrow" style={{ marginBottom: '0.25rem' }}>
              DOCUMENT REQUEST · {resolvedCategory}
            </p>
            <h2 id={dialogId} className="h-card" style={{ marginBottom: 0 }}>
              {resolvedTitle}
            </h2>
          </div>
          <button type="button" onClick={closeModal} className="doc-modal__close" aria-label="Close modal">
            ✕
          </button>
        </div>

        <div className="doc-modal__body">
          {errorMsg ? (
            <div className="form-alert form-alert--error" role="alert">
              {errorMsg}
            </div>
          ) : null}

          {reference ? (
            <div className="form-alert form-alert--success" role="status">
              <h3 className="h-card" style={{ marginBottom: '8px' }}>
                Your document request has been recorded.
              </h3>
              <p style={{ marginBottom: '14px' }}>
                Your reference is <strong>{reference}</strong>. Our Product &amp; Corporate Desk will review the requested scope and respond to your business email.
              </p>
              <button type="button" className="btn btn--primary" onClick={closeModal}>
                Done
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="form-field" style={{ marginBottom: '14px' }}>
                <label className="form-label">Requested document</label>
                <input type="text" className="form-input" value={resolvedTitle} readOnly />
              </div>

              <div className="form-field" style={{ marginBottom: '14px' }}>
                <label className="form-label">
                  Full name <span className="req">*</span>
                </label>
                <input
                  type="text"
                  className="form-input"
                  autoComplete="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>

              <div className="form-field" style={{ marginBottom: '14px' }}>
                <label className="form-label">
                  Company, organisation or practice <span className="req">*</span>
                </label>
                <input
                  type="text"
                  className="form-input"
                  autoComplete="organization"
                  value={organisation}
                  onChange={(e) => setOrganisation(e.target.value)}
                  required
                />
              </div>

              <div className="form-field" style={{ marginBottom: '14px' }}>
                <label className="form-label">
                  Business email <span className="req">*</span>
                </label>
                <span className="form-hint">Format: name@company.com</span>
                <input
                  type="email"
                  className="form-input"
                  autoComplete="email"
                  autoCorrect="off"
                  autoCapitalize="off"
                  spellCheck="false"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <div className="form-field" style={{ marginBottom: '18px' }}>
                <label className="form-label">
                  Intended application or product scope <span className="req">*</span>
                </label>
                <span className="form-hint">
                  Helps us confirm the exact document version and scope for your requirement.
                </span>
                <textarea
                  className="form-textarea"
                  style={{ minHeight: '90px' }}
                  value={applicationScope}
                  onChange={(e) => setApplicationScope(e.target.value)}
                  required
                />
              </div>

              <div className="btn-row" style={{ marginTop: '12px' }}>
                <button type="submit" className="btn btn--primary" disabled={submitting}>
                  {submitting ? 'Recording request…' : 'Submit Document Request'}
                </button>
                <Link
                  href={`/enquiry?category=product-info&document=${encodeURIComponent(
                    resolvedTitle
                  )}`}
                  className="link-arrow"
                >
                  Open Full Enquiry Form
                </Link>
              </div>
            </form>
          )}
        </div>
      </dialog>
    </>
  );
}
