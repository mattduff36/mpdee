import { MPDEE_BRAND } from '@/shared/types';

export default function StructuredData() {
  // Base structured data for MPDEE organization
  const baseData = {
    '@context': 'https://schema.org',
    '@type': ['Organization', 'Service'] as const,
    name: MPDEE_BRAND.name,
    url: `https://${MPDEE_BRAND.domain}`,
    logo: `https://${MPDEE_BRAND.domain}/images/logo-trans.png`,
    description:
      'Choose from three specialized MPDEE services: Professional audio production, custom web development, or expert IT support.',
    serviceType: 'Professional Services Hub',
    contactPoint: [
      {
        '@type': 'ContactPoint',
        contactType: 'customer service',
        availableLanguage: ['English'],
        areaServed: 'GB',
      },
    ],
    areaServed: {
      '@type': 'Country',
      name: 'United Kingdom',
    },
    sameAs: [
      `https://${MPDEE_BRAND.services.creative.subdomain}`,
      `https://${MPDEE_BRAND.services.development.subdomain}`,
      `https://${MPDEE_BRAND.services.support.subdomain}`,
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData),
      }}
    />
  );
}
