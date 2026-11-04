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
    // Pick a random code on client mount or when resetSignal changes
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
        <label id={`${idPrefix}-label`} htmlFor={`${idPrefix}-input`} className="form-label" style={{ marginBottom: 0 }}>
          Security Verification (Anti-Spam CAPTCHA) <span className="required-mark">*</span>
        </label>
        <span className={`captcha-status-pill ${isVerified ? 'is-verified' : ''}`}>
          {isVerified ? '✓ Verified' : 'Required'}
        </span>
      </div>

      <p className="form-hint" style={{ marginTop: '0.2rem', marginBottom: '0.65rem' }}>
        Please type the 5-character security code shown below to verify you are a human visitor.
      </p>

      <div className="security-captcha-row">
        <div className="security-captcha-plate" aria-label={`Security code: ${expectedCode.split('').join(' ')}`}>
          <svg
            viewBox="0 0 180 48"
            width="180"
            height="48"
            className="security-captcha-svg"
            aria-hidden="true"
          >
            <rect width="180" height="48" rx="4" fill="#EFF4EE" />
            <path
              d="M8 36 Q 55 12, 98 34 T 172 18"
              stroke="rgba(7, 59, 42, 0.22)"
              strokeWidth="1.5"
              fill="none"
            />
            <path
              d="M12 14 Q 65 38, 118 16 T 170 36"
              stroke="rgba(162, 123, 76, 0.28)"
              strokeWidth="1.5"
              fill="none"
            />
            {expectedCode.split('').map((ch, idx) => {
              const x = 26 + idx * 31;
              const y = idx % 2 === 0 ? 31 : 34;
              const rot = idx % 2 === 0 ? -6 : 5;
              return (
                <text
                  key={idx}
                  x={x}
                  y={y}
                  transform={`rotate(${rot} ${x} ${y})`}
                  fill={idx % 2 === 0 ? '#073B2A' : '#5E4323'}
                  fontFamily="Manrope, monospace, sans-serif"
                  fontSize="22"
                  fontWeight="700"
                  letterSpacing="2"
                >
                  {ch}
                </text>
              );
            })}
          </svg>

          <button
            type="button"
            className="security-captcha-refresh"
            onClick={generateNewCode}
            title="Generate a new security code"
            aria-label="Generate a new security code"
          >
            ↻ New Code
          </button>
        </div>

        <div className="security-captcha-input-wrap">
          <input
            id={`${idPrefix}-input`}
            type="text"
            name="captchaAnswer"
            className="form-input security-captcha-input"
            placeholder="Enter 5-character code"
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
