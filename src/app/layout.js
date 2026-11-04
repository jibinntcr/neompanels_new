import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PublicLayoutChrome from '@/components/PublicLayoutChrome';
import { LanguageProvider } from '@/components/LanguageProvider';
import ScrollRevealObserver from '@/components/ScrollRevealObserver';
import PageReloadLoader from '@/components/PageReloadLoader';
import { getVerifiedContactDetails } from '@/lib/storage';
import {
  SITE_URL,
  SITE_NAME,
  DEFAULT_OG_IMAGE,
  CORE_SEO_KEYWORDS,
  getOrganizationJsonLd
} from '@/lib/seo';

export const viewport = {
  themeColor: '#073B2A',
  width: 'device-width',
  initialScale: 1
};

export const metadata = {
  metadataBase: new URL(SITE_URL),
  applicationName: SITE_NAME,
  title: {
    default:
      'NEOM Panels | Indian Wood-Panel Manufacturer — Calibrated Furniture, Interior & Industrial Packaging Plywood',
    template: '%s | NEOM Panels'
  },
  description:
    'NEOM Panels manufactures wood-panel products in India for furniture OEMs, modular interiors, commercial fit-out projects and industrial packaging. Home to Starwoods and NEOM Packing Plywood.',
  keywords: CORE_SEO_KEYWORDS,
  authors: [{ name: 'NEOM Panels', url: SITE_URL }],
  creator: 'NEOM Panels',
  publisher: 'NEOM Panels',
  category: 'Wood-Panel Manufacturing & B2B Industrial Supply',
  formatDetection: {
    email: false,
    address: false,
    telephone: false
  },
  alternates: {
    canonical: '/'
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1
    }
  },
  openGraph: {
    title:
      'NEOM Panels | Indian Wood-Panel Manufacturer — Furniture, Interiors & Industrial Packaging',
    description:
      'NEOM Panels manufactures calibrated wood-panel substrates for furniture OEMs, modular kitchens, commercial interiors and MR industrial packaging plywood in India.',
    url: SITE_URL,
    siteName: SITE_NAME,
    locale: 'en_IN',
    type: 'website',
    images: [
      {
        url: DEFAULT_OG_IMAGE,
        width: 1400,
        height: 933,
        alt: 'NEOM Panels — Calibrated Wood-Panel Substrates and Architectural Joinery'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title:
      'NEOM Panels | Indian Wood-Panel Manufacturer — Furniture, Interiors & Industrial Packaging',
    description:
      'Direct factory wood-panel manufacturing in India for furniture OEMs, modular interiors, commercial projects and industrial packaging.',
    images: [DEFAULT_OG_IMAGE]
  }
};

export default function RootLayout({ children }) {
  const contact = getVerifiedContactDetails();
  const orgJsonLd = getOrganizationJsonLd(contact);

  return (
    <html lang="en-IN">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Manrope:wght@500;600;700&family=Noto+Sans+Devanagari:wght@400;500;600;700&family=Source+Sans+3:wght@400;500;600&display=swap"
        />
      </head>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
        <LanguageProvider>
          <PageReloadLoader />
          <a href="#main-heading" className="skip-link visually-hidden">
            Skip to main content
          </a>
          <PublicLayoutChrome>
            <Navbar />
          </PublicLayoutChrome>
          {children}
          <PublicLayoutChrome>
            <Footer />
          </PublicLayoutChrome>
          <ScrollRevealObserver />
        </LanguageProvider>
      </body>
    </html>
  );
}
