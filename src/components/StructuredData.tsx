export default function StructuredData() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'MPDEE',
    description:
      'Professional audio production, web development, and IT support services across the UK.',
    url: 'https://mpdee.co.uk',
    logo: 'https://mpdee.co.uk/images/logo-trans.png',
    contactPoint: [
      {
        '@type': 'ContactPoint',
        contactType: 'customer service',
        availableLanguage: ['English'],
        areaServed: 'GB',
      },
    ],
    sameAs: [
      'https://creative.mpdee.co.uk',
      'https://development.mpdee.co.uk',
      'https://support.mpdee.co.uk',
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'MPDEE Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Audio Production Services',
            description:
              'Professional audio production including radio commercials, audio imaging, event recording, and sound design.',
            provider: {
              '@type': 'Organization',
              name: 'MPDEE Creative',
            },
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Web Development Services',
            description:
              'Custom web development, applications, e-commerce solutions, and digital platforms.',
            provider: {
              '@type': 'Organization',
              name: 'MPDEE Development',
            },
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'IT Support Services',
            description:
              'Remote support, on-site support, hardware services, and software solutions.',
            provider: {
              '@type': 'Organization',
              name: 'MPDEE Support',
            },
          },
        },
      ],
    },
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'GB',
      addressRegion: 'United Kingdom',
    },
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
