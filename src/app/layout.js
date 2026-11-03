import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScrollRevealObserver from '@/components/ScrollRevealObserver';

export const metadata = {
  title: {
    default: 'NEOM Panels | Indian Wood-Panel Manufacturing — Starwoods & NEOM Packing Plywood',
    template: '%s | NEOM Panels'
  },
  description:
    'Indian wood-panel manufacturing. Home to Starwoods and NEOM Packing Plywood. With our own factory, we bring together panel solutions for furniture, interior projects and industrial packaging.'
};

export default function RootLayout({ children }) {
  const orgJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'NEOM Panels',
    slogan: 'ENGINEERED EXCELLENCE, DESIGNED FOR SPACES',
    description:
      'Indian wood-panel manufacturing. Home to Starwoods and NEOM Packing Plywood.',
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
          'Moisture-resistant packaging-grade plywood for business buyers sourcing material for packing cases, crates and related industrial packaging applications.'
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
        <a href="#main-content" className="skip-link visually-hidden">
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
