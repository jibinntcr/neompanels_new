'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function ScrollRevealObserver() {
  const pathname = usePathname();

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (prefersReducedMotion.matches) {
      document.documentElement.classList.remove('js-motion-ready');
      return;
    }

    const revealElements = document.querySelectorAll('.reveal-once');
    if (!revealElements.length) return;

    document.documentElement.classList.add('js-motion-ready');

    if (!('IntersectionObserver' in window)) {
      revealElements.forEach((el) => el.classList.add('is-revealed'));
      return;
    }

    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-revealed');
            obs.unobserve(entry.target);
          }
        });
      },
      { rootMargin: '0px 0px -6% 0px', threshold: 0.08 }
    );

    revealElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [pathname]);

  // Accessible validation synchronization (:user-invalid <-> aria-invalid)
  useEffect(() => {
    const supportsUserInvalid =
      typeof CSS !== 'undefined' &&
      typeof CSS.supports === 'function' &&
      CSS.supports('selector(:user-invalid)');

    const dirtyState = new WeakMap();

    const syncAria = (input) => {
      if (!input || !input.matches || !input.matches('input, textarea, select')) return;
      if (supportsUserInvalid) {
        const isUserInvalid = input.matches(':user-invalid');
        if (isUserInvalid) {
          input.setAttribute('aria-invalid', 'true');
        } else {
          input.removeAttribute('aria-invalid');
        }
      } else if (typeof input.checkValidity === 'function') {
        const isValid = input.checkValidity();
        input.classList.toggle('user-invalid-fallback', !isValid);
        input.classList.toggle('user-valid-fallback', isValid);
        if (!isValid) {
          input.setAttribute('aria-invalid', 'true');
        } else {
          input.removeAttribute('aria-invalid');
        }
      }
    };

    const onBlur = (e) => {
      const input = e.target;
      if (!input || !input.matches || !input.matches('input, textarea, select')) return;
      const state = dirtyState.get(input) || { hasInteracted: false, hasBlurred: false };
      state.hasBlurred = true;
      dirtyState.set(input, state);
      if (supportsUserInvalid || state.hasInteracted) {
        syncAria(input);
      }
    };

    const onInput = (e) => {
      const input = e.target;
      if (!input || !input.matches || !input.matches('input, textarea, select')) return;
      const state = dirtyState.get(input) || { hasInteracted: false, hasBlurred: false };
      state.hasInteracted = true;
      dirtyState.set(input, state);
      if (input.hasAttribute('aria-invalid') || state.hasBlurred) {
        syncAria(input);
      }
    };

    document.addEventListener('blur', onBlur, true);
    document.addEventListener('input', onInput, true);

    return () => {
      document.removeEventListener('blur', onBlur, true);
      document.removeEventListener('input', onInput, true);
    };
  }, []);

  return null;
}
