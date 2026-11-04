'use client';

import { useState, useEffect, useCallback } from 'react';

const CODE_POOL = ['NP74K', 'SW82M', 'MR93P', 'B2B64', 'PLY49', 'NM58X', 'IND73', 'QC26V'];

export default function SecurityCaptcha({
  idPrefix = 'neom-captcha',
  onVerifyChange,
  resetSignal = 0
}) {
  const [expectedCode, setExpectedCode] = useState('NP74K');
  const [userInput, setUserInput] = useState('');

  const generateNewCode = useCallback(() => {
    const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
    let next = '';
    for (let i = 0; i < 5; i++) {
      next += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    setExpectedCode(next);
    setUserInput('');
    if (onVerifyChange) {
      onVerifyChange(false, { expected: next, answer: '' });
    }
  }, [onVerifyChange]);

  useEffect(() => {
    const randomPick = CODE_POOL[Math.floor(Math.random() * CODE_POOL.length)] || 'NP74K';
    setExpectedCode(randomPick);
    setUserInput('');
    if (onVerifyChange) {
      onVerifyChange(false, { expected: randomPick, answer: '' });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [resetSignal]);

  const handleInputChange = (e) => {
    const val = e.target.value.toUpperCase();
    setUserInput(val);
    const isMatched = val.trim().toUpperCase() === expectedCode.toUpperCase();
    if (onVerifyChange) {
      onVerifyChange(isMatched, { expected: expectedCode, answer: val.trim() });
    }
  };

  const isVerified =
    userInput.trim().length > 0 &&
    userInput.trim().toUpperCase() === expectedCode.toUpperCase();

  return (
    <div className="security-captcha-box" role="group" aria-labelledby={`${idPrefix}-label`}>
      <div className="security-captcha-header">
        <label
          id={`${idPrefix}-label`}
          htmlFor={`${idPrefix}-input`}
          className="form-label"
          style={{ marginBottom: 0 }}
        >
          Security Verification (CAPTCHA) <span className="required-marker">*</span>
        </label>
        <span className={`captcha-status-pill ${isVerified ? 'captcha-status-pill--ok' : ''}`}>
          {isVerified ? '✓ Code Verified' : 'Required'}
        </span>
      </div>

      <p className="field-hint" style={{ marginTop: '0.25rem', marginBottom: '0.75rem' }}>
        Type the 5-character security code shown below to verify you are a human visitor.
      </p>

      <div className="security-captcha-row">
        <div
          className="security-captcha-plate"
          aria-label={`Security code: ${expectedCode.split('').join(' ')}`}
        >
          <span className="security-captcha-chars" aria-hidden="true">
            {expectedCode.split('').map((ch, idx) => (
              <span
                key={idx}
                className={`security-captcha-char security-captcha-char--${idx % 2 === 0 ? 'even' : 'odd'}`}
              >
                {ch}
              </span>
            ))}
          </span>
        </div>

        <button
          type="button"
          className="security-captcha-refresh"
          onClick={generateNewCode}
          title="Generate a new security code"
          aria-label="Generate a new security code"
        >
          ↻ New Code
        </button>

        <div className="security-captcha-input-wrap">
          <input
            id={`${idPrefix}-input`}
            type="text"
            name="captchaAnswer"
            className="form-control security-captcha-input"
            placeholder="Type 5-character code here"
            value={userInput}
            onChange={handleInputChange}
            maxLength={8}
            autoComplete="off"
            required
          />
          <input type="hidden" name="captchaExpected" value={expectedCode} />
        </div>
      </div>
    </div>
  );
}
