import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScrollRevealObserver from '@/components/ScrollRevealObserver';

export const metadata = {
  title: {
    default: 'NEOM Panels | Indian Wood-Panel Manufacturer & Corporate Home of Starwoods',
    template: '%s | NEOM Panels'
  },
  description:
    'NEOM Panels is an Indian panel manufacturing business and the company behind Starwoods. With our own factory, we are building our business around material quality, lasting partnerships and a considered approach to resources.'
};

export default function RootLayout({ children }) {
  const orgJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'NEOM Panels',
    slogan: 'ENGINEERED EXCELLENCE, DESIGNED FOR SPACES',
    description:
      'NEOM Panels is an Indian panel manufacturing business and the company behind Starwoods.',
    brand: {
      '@type': 'Brand',
      name: 'Starwoods'
    }
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
