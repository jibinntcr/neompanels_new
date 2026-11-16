import './globals.css';
import './architectural-ui.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PublicLayoutChrome from '@/components/PublicLayoutChrome';
import ScrollRevealObserver from '@/components/ScrollRevealObserver';
import { getVerifiedContactDetails } from '@/lib/storage';
import {
  SITE_URL,
  SITE_NAME,
  DEFAULT_OG_IMAGE,
  CORE_SEO_KEYWORDS,
  getOrganizationJsonLd
} from '@/lib/seo';

export const viewport = {
  themeColor: '#103F2C',
  width: 'device-width',
  initialScale: 1
};

export const metadata = {
  metadataBase: new URL(SITE_URL),
  applicationName: SITE_NAME,
  title: {
    default: 'Indian Panel Manufacturing Company | NEOM Panels',
    template: '%s | NEOM Panels'
  },
  description:
    'NEOM Panels is an Indian panel manufacturing company and the company behind Starwoods and NEOM Packing Plywood.',
  keywords: CORE_SEO_KEYWORDS,
  authors: [{ name: 'NEOM Panels', url: SITE_URL }],
  creator: 'NEOM Panels',
  publisher: 'NEOM Panels',
  category: 'Panel Manufacturing & Product Brands',
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
    title: 'Indian Panel Manufacturing Company | NEOM Panels',
    description:
      'NEOM Panels is an Indian panel manufacturing company and the company behind Starwoods and NEOM Packing Plywood.',
    url: SITE_URL,
    siteName: SITE_NAME,
    locale: 'en_IN',
    type: 'website',
    images: [
      {
        url: DEFAULT_OG_IMAGE,
        width: 1400,
        height: 933,
        alt: 'NEOM Panels — A dependable name behind the materials.'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Indian Panel Manufacturing Company | NEOM Panels',
    description:
      'NEOM Panels is an Indian panel manufacturing company and the company behind Starwoods and NEOM Packing Plywood.',
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
          href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600&family=Manrope:wght@400;500;600;700;800&family=Plus+Jakarta+Sans:ital,wght@0,400;0,500;0,600;0,700;1,400&display=swap"
        />
      </head>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
        <a href="#main-content" className="skip-link visually-hidden">
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
      </body>
    </html>
  );
}
