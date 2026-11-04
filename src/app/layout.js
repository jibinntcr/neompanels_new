import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScrollRevealObserver from '@/components/ScrollRevealObserver';
import PageReloadLoader from '@/components/PageReloadLoader';

export const metadata = {
  metadataBase: new URL('https://neompanels-new.vercel.app'),
  title: {
    default: 'NEOM Panels | Indian Wood-Panel Manufacturing — Starwoods & NEOM Packing Plywood',
    template: '%s | NEOM Panels'
  },
  description:
    'NEOM Panels manufactures wood-panel products for furniture, interior projects and industrial packaging. Our brands, Starwoods and NEOM Packing Plywood, serve manufacturers, contractors, procurement teams and trade partners.',
  alternates: {
    canonical: '/'
  }
};

export default function RootLayout({ children }) {
  const orgJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'NEOM Panels',
    url: 'https://neompanels-new.vercel.app',
    slogan: 'ENGINEERED EXCELLENCE, DESIGNED FOR SPACES',
    description:
      'NEOM Panels manufactures wood-panel products for furniture, interior projects and industrial packaging. Home to Starwoods and NEOM Packing Plywood.',
    brand: [
      {
        '@type': 'Brand',
        name: 'Starwoods',
        description:
          'NEOM Panels product brand for furniture manufacturing, modular interiors and commercial fit-outs.'
      },
      {
        '@type': 'Brand',
        name: 'NEOM Packing Plywood',
        description:
          'Moisture-resistant packaging-grade plywood for packing cases, crates, dividers and protective enclosures.'
      }
    ]
  };

  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Manrope:wght@500;600;700&family=Source+Sans+3:wght@400;500;600&display=swap"
        />
      </head>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
        <PageReloadLoader />
        <a href="#main-heading" className="skip-link visually-hidden">
          Skip to main content
        </a>
        <Navbar />
        {children}
        <Footer />
        <ScrollRevealObserver />
      </body>
    </html>
  );
}
