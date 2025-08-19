import { generateStructuredData } from '@/shared/seo-utils';

export default function StructuredData() {
  const structuredData = {
    ...generateStructuredData('hub'),
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'MPDEE Service Portfolio',
      numberOfItems: 3,
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Audio Production Services',
            description:
              'Professional audio production including radio commercials, audio imaging, event recording, and sound design.',
            url: 'https://creative.mpdee.co.uk',
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
            url: 'https://development.mpdee.co.uk',
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
            url: 'https://support.mpdee.co.uk',
            provider: {
              '@type': 'Organization',
              name: 'MPDEE Support',
            },
          },
        },
      ],
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
