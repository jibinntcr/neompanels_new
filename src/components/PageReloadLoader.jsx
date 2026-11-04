'use client';

import { useState, useEffect } from 'react';

export default function PageReloadLoader() {
  const [phase, setPhase] = useState('active'); // 'active' | 'exiting' | 'done'

  useEffect(() => {
    const exitTimer = setTimeout(() => {
      setPhase('exiting');
    }, 520);

    const removeTimer = setTimeout(() => {
      setPhase('done');
    }, 880);

    return () => {
      clearTimeout(exitTimer);
      clearTimeout(removeTimer);
    };
  }, []);

  if (phase === 'done') {
    return null;
  }

  return (
    <div
      className={`neom-page-loader ${phase === 'exiting' ? 'is-exiting' : ''}`}
      aria-hidden="true"
    >
      <div className="neom-loader-backdrop-grid" />

      <div className="neom-loader-center">
        <div className="neom-loader-3d-ring">
          <div className="neom-loader-n-stage">
            <img
              src="/assets/neom-n-layer-1.png"
              alt=""
              className="neom-loader-n-piece neom-loader-n-piece--1"
              width="246"
              height="308"
            />
            <img
              src="/assets/neom-n-layer-2.png"
              alt=""
              className="neom-loader-n-piece neom-loader-n-piece--2"
              width="246"
              height="308"
            />
            <img
              src="/assets/neom-n-layer-3.png"
              alt=""
              className="neom-loader-n-piece neom-loader-n-piece--3"
              width="246"
              height="308"
            />
            <img
              src="/assets/neom-n-layer-4.png"
              alt=""
              className="neom-loader-n-piece neom-loader-n-piece--4"
              width="246"
              height="308"
            />
          </div>
        </div>

        <div className="neom-loader-wordmark">
          <img
            src="/assets/neom-wordmark-clean.png"
            alt=""
            className="neom-loader-wordmark-img"
            width="692"
            height="246"
          />
        </div>

        <div className="neom-loader-progress-track">
          <div className="neom-loader-progress-bar" />
        </div>
      </div>
    </div>
  );
}
