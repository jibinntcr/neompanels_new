'use client';

import { createContext, useContext, useEffect, useRef, useState, useCallback } from 'react';
import { usePathname } from 'next/navigation';
import { translateTextToHindi, HI_PLACEHOLDERS } from '@/lib/translations-hi';

const LanguageContext = createContext({
  lang: 'en',
  setLang: () => {},
  toggleLang: () => {},
  detectedRegion: null
});

const NORTH_HINDI_STATE_NAMES = [
  'delhi',
  'national capital territory of delhi',
  'new delhi',
  'uttar pradesh',
  'haryana',
  'rajasthan',
  'madhya pradesh',
  'bihar',
  'jharkhand',
  'uttarakhand',
  'uttaranchal',
  'himachal pradesh',
  'chhattisgarh',
  'chandigarh',
  'punjab',
  'jammu and kashmir',
  'jammu & kashmir'
];

function readCookie(name) {
  if (typeof document === 'undefined') return null;
  const match = document.cookie.match(new RegExp('(?:^|; )' + name + '=([^;]*)'));
  return match ? decodeURIComponent(match[1]) : null;
}

function writeCookie(name, value, days = 365) {
  if (typeof document === 'undefined') return;
  const maxAge = days * 24 * 60 * 60;
  document.cookie = `${name}=${encodeURIComponent(value)}; path=/; max-age=${maxAge}; SameSite=Lax`;
}

export function LanguageProvider({ children }) {
  const pathname = usePathname();
  const [lang, setLangState] = useState('en');
  const [detectedRegion, setDetectedRegion] = useState(null);
  const observerRef = useRef(null);
  const isApplyingRef = useRef(false);
  const langRef = useRef(lang);
  langRef.current = lang;

  const setLang = useCallback((nextLang) => {
    const normalized = nextLang === 'hi' ? 'hi' : 'en';
    setLangState(normalized);
    try {
      window.localStorage.setItem('neom_lang_manual', normalized);
    } catch {
      // ignore storage errors
    }
    writeCookie('neom_lang_manual', normalized, 365);
  }, []);

  const toggleLang = useCallback(() => {
    setLang(lang === 'hi' ? 'en' : 'hi');
  }, [lang, setLang]);

  // Initial language & North India region detection
  useEffect(() => {
    if (typeof window === 'undefined') return;

    // 1. Check URL query parameter (?lang=hi or ?lang=en)
    const params = new URLSearchParams(window.location.search);
    const queryLang = params.get('lang')?.toLowerCase();
    if (queryLang === 'hi' || queryLang === 'en') {
      setLang(queryLang);
      return;
    }

    // 2. Check saved manual user preference
    let manualPref = null;
    try {
      manualPref = window.localStorage.getItem('neom_lang_manual');
    } catch {
      // ignore
    }
    if (!manualPref) {
      manualPref = readCookie('neom_lang_manual');
    }

    const regionCookie = readCookie('neom_detected_region');
    if (regionCookie) {
      setDetectedRegion(regionCookie);
    }

    if (manualPref === 'hi' || manualPref === 'en') {
      setLangState(manualPref);
      return;
    }

    // 3. Check server-side Vercel Geo detection cookie (North India Hindi belt)
    const autoLangCookie = readCookie('neom_auto_lang');
    if (autoLangCookie === 'hi') {
      setLangState('hi');
      return;
    }

    // 4. Check browser language preference (hi / hi-IN)
    const browserLang = (navigator.language || '').toLowerCase();
    const browserLangs = (navigator.languages || []).map((l) => l.toLowerCase());
    if (browserLang.startsWith('hi') || browserLangs.some((l) => l.startsWith('hi'))) {
      setLangState('hi');
      return;
    }

    // 5. Client-side IP Geo fallback for North India Hindi-speaking states
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 3000);

    fetch('https://ipwho.is/', { signal: controller.signal })
      .then((res) => (res.ok ? res.json() : null))
      .then((data) => {
        clearTimeout(timeoutId);
        if (!data || data.success === false) return;
        const countryCode = (data.country_code || '').toUpperCase();
        const regionName = (data.region || '').trim();
        const regionLower = regionName.toLowerCase();

        if (
          countryCode === 'IN' &&
          NORTH_HINDI_STATE_NAMES.some((state) => regionLower.includes(state))
        ) {
          setDetectedRegion(regionName);
          writeCookie('neom_detected_region', regionName, 30);
          writeCookie('neom_auto_lang', 'hi', 30);
          // Only auto-switch if user still hasn't clicked manual toggle
          const currentManual = window.localStorage.getItem('neom_lang_manual');
          if (!currentManual) {
            setLangState('hi');
          }
        }
      })
      .catch(() => {
        clearTimeout(timeoutId);
      });

    return () => clearTimeout(timeoutId);
  }, [setLang]);

  // Apply reversible DOM translation whenever lang, pathname, or DOM updates
  useEffect(() => {
    if (typeof document === 'undefined') return;
    if (pathname?.startsWith('/admin')) return;

    const currentLang = langRef.current;
    document.documentElement.lang = currentLang === 'hi' ? 'hi' : 'en-IN';
    document.documentElement.setAttribute('data-lang', currentLang);

    const applyTranslationToDOM = () => {
      if (isApplyingRef.current) return;
      isApplyingRef.current = true;
      const activeLang = langRef.current;

      if (observerRef.current) {
        observerRef.current.disconnect();
      }

      try {
        const root = document.body;
        if (!root) return;

        // 1. Walk text nodes
        const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
          acceptNode(node) {
            const parent = node.parentElement;
            if (!parent) return NodeFilter.FILTER_REJECT;
            const tag = parent.tagName;
            if (
              tag === 'SCRIPT' ||
              tag === 'STYLE' ||
              tag === 'NOSCRIPT' ||
              tag === 'TEXTAREA' ||
              tag === 'CODE'
            ) {
              return NodeFilter.FILTER_REJECT;
            }
            if (parent.closest('[data-no-translate="true"]')) {
              return NodeFilter.FILTER_REJECT;
            }
            return NodeFilter.FILTER_ACCEPT;
          }
        });

        let currentNode = walker.nextNode();
        while (currentNode) {
          const currentVal = currentNode.nodeValue;
          if (currentVal && currentVal.trim().length > 1) {
            if (typeof currentNode.__neomOrigText !== 'string') {
              currentNode.__neomOrigText = currentVal;
            }
            const origText = currentNode.__neomOrigText;

            if (activeLang === 'hi') {
              const translated = translateTextToHindi(origText);
              if (translated !== currentVal) {
                currentNode.nodeValue = translated;
              }
            } else {
              if (currentVal !== origText) {
                currentNode.nodeValue = origText;
              }
            }
          }
          currentNode = walker.nextNode();
        }

        // 2. Translate input & textarea placeholders
        const inputs = root.querySelectorAll('input[placeholder], textarea[placeholder]');
        inputs.forEach((el) => {
          if (el.closest('[data-no-translate="true"]')) return;
          const currentPlaceholder = el.getAttribute('placeholder') || '';
          if (typeof el.__neomOrigPlaceholder !== 'string') {
            el.__neomOrigPlaceholder = currentPlaceholder;
          }
          const origPlaceholder = el.__neomOrigPlaceholder;
          if (activeLang === 'hi') {
            const hiPlaceholder =
              HI_PLACEHOLDERS[origPlaceholder] || translateTextToHindi(origPlaceholder);
            if (hiPlaceholder && hiPlaceholder !== currentPlaceholder) {
              el.setAttribute('placeholder', hiPlaceholder);
            }
          } else {
            if (currentPlaceholder !== origPlaceholder) {
              el.setAttribute('placeholder', origPlaceholder);
            }
          }
        });
      } finally {
        isApplyingRef.current = false;
        if (observerRef.current && document.body) {
          observerRef.current.observe(document.body, {
            childList: true,
            subtree: true
          });
        }
      }
    };

    const observer = new MutationObserver(() => {
      applyTranslationToDOM();
    });
    observerRef.current = observer;

    applyTranslationToDOM();
    const timer1 = setTimeout(applyTranslationToDOM, 120);
    const timer2 = setTimeout(applyTranslationToDOM, 450);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      observer.disconnect();
      if (observerRef.current === observer) {
        observerRef.current = null;
      }
    };
  }, [lang, pathname]);

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggleLang, detectedRegion }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
