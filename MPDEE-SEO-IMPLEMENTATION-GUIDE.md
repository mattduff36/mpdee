# MPDEE Multi-Repo SEO Implementation Guide

## 🎯 Overview
This guide outlines how to implement the unified SEO strategy across all MPDEE repositories to maximize cross-site authority and tracking.

## 📁 Completed (Parent Site - mpdee.co.uk)
- ✅ Hub positioning with discovery-focused metadata
- ✅ Cross-domain analytics tracking
- ✅ Enhanced structured data
- ✅ Service referral tracking
- ✅ Shared utility foundation

## 🔄 Next Steps for Specialized Sites

### 1. Copy Shared Utilities
Copy these files to each specialized site:
```
src/shared/
├── types.ts          # Brand constants and interfaces
├── analytics.ts      # Tracking utilities
└── seo-utils.ts      # SEO metadata generation
```

### 2. Update Each Site's Layout

#### For mpdee-creative:
```typescript
// src/app/layout.tsx
import { generateMPDEEMetadata } from '@/shared/seo-utils';

export const metadata = generateMPDEEMetadata({
  title: 'MPDEE Creative - Professional Audio Production Services',
  description: 'Professional audio production services specializing in radio commercial production, audio imaging, and event recording.',
  keywords: ['radio commercials', 'audio production', 'radio commercial production', 'audio imaging', 'event recording'],
  canonicalUrl: '/',
  service: 'creative',
});
```

#### For mpdee-development:
```typescript
export const metadata = generateMPDEEMetadata({
  title: 'MPDEE Development - Professional Web Design & Development',
  description: 'Professional web design and development services. Custom websites, applications, and digital solutions.',
  keywords: ['web design', 'web development', 'custom applications', 'e-commerce', 'digital platforms'],
  canonicalUrl: '/',
  service: 'development',
});
```

#### For mpdee-support:
```typescript
export const metadata = generateMPDEEMetadata({
  title: 'MPDEE Support - Professional IT Support Services',
  description: 'Professional IT support services for businesses and consumers. Remote helpdesk, on-site support, and technical solutions.',
  keywords: ['IT support', 'technical support', 'remote helpdesk', 'computer repair', 'business IT'],
  canonicalUrl: '/',
  service: 'support',
});
```

### 3. Add Cross-Domain Analytics

Add to each site's layout:
```typescript
// In <head> or before closing </body>
<Script id="google-analytics-cross-domain" strategy="afterInteractive">
  {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-FNQX2LJQQE', {
      linker: {
        domains: ['mpdee.co.uk', 'creative.mpdee.co.uk', 'development.mpdee.co.uk', 'support.mpdee.co.uk']
      },
      custom_map: {
        'custom_parameter_1': 'service_conversion'
      }
    });
    
    // Track conversions
    function trackConversion(action) {
      gtag('event', 'conversion', {
        'send_to': 'G-FNQX2LJQQE/' + action,
        'service_type': '${service}',
        'source_site': 'specialized'
      });
    }
    
    window.trackConversion = trackConversion;
  `}
</Script>
```

### 4. Update Structured Data

Create service-specific structured data:
```typescript
// src/components/StructuredData.tsx
import { generateStructuredData } from '@/shared/seo-utils';

export default function StructuredData() {
  const structuredData = generateStructuredData('service', {
    name: 'MPDEE Creative', // or Development/Support
    description: 'Professional audio production services...',
    serviceType: 'Audio Production', // or Web Development/IT Support
    url: 'https://creative.mpdee.co.uk', // respective URL
  });

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData),
      }}
    />
  );
}
```

### 5. Add Internal Linking Strategy

#### Hub Referral Links
Add these to relevant pages on specialized sites:
```typescript
// Link back to hub
<Link href="https://mpdee.co.uk" className="text-blue-600 hover:text-blue-800">
  Explore all MPDEE services
</Link>

// Cross-service referrals
<Link href="https://development.mpdee.co.uk" className="text-blue-600">
  Need a website for your audio business? Check out MPDEE Development
</Link>
```

#### Track Internal Links
```typescript
onClick={() => {
  if (window.trackConversion) {
    window.trackConversion('cross_service_referral');
  }
}}
```

### 6. Update Contact Forms

Add service tracking to contact forms:
```typescript
// On form submission
const handleSubmit = (formData) => {
  // Track lead
  if (window.trackConversion) {
    window.trackConversion('contact_form_submit');
  }
  
  // Redirect to hub confirmation page
  window.location.href = 'https://mpdee.co.uk/contact-received';
};
```

### 7. Sitemap Updates

Update each site's sitemap to reference others:
```xml
<!-- Add to each specialized site's sitemap -->
<url>
  <loc>https://mpdee.co.uk/</loc>
  <lastmod>2025-01-26</lastmod>
  <changefreq>monthly</changefreq>
  <priority>0.8</priority>
</url>
```

## 📊 Analytics Goals Setup

### Google Analytics Events to Track:
1. **service_referral** - Hub to specialized site
2. **cross_service_referral** - Between specialized sites
3. **contact_form_submit** - Lead generation
4. **hub_return** - Specialized site to hub

### Conversion Goals:
1. **Contact Form Completions** (Primary)
2. **Cross-Service Navigation** (Secondary)
3. **Service Discovery** (Hub engagement)
4. **Return Visits** (Brand loyalty)

## 🔍 SEO Monitoring Checklist

### Monthly Reviews:
- [ ] Cross-domain tracking working correctly
- [ ] Service referral rates from hub
- [ ] Keyword rankings for each service
- [ ] Internal link performance
- [ ] Contact form conversion rates

### Quarterly Reviews:
- [ ] Domain authority growth
- [ ] Cross-site user journeys
- [ ] Content syndication opportunities
- [ ] Technical SEO health across all sites

## 🚀 Implementation Priority

### Week 1 (High Priority):
1. Copy shared utilities to all sites
2. Update metadata using shared functions
3. Implement cross-domain analytics

### Week 2 (Medium Priority):
1. Add structured data to all sites
2. Update contact form tracking
3. Implement internal linking strategy

### Week 3 (Enhancement):
1. Create cross-service content
2. Optimize conversion tracking
3. Set up monitoring dashboards

## 📈 Expected Results

### SEO Benefits:
- **Unified Brand Authority**: Consistent MPDEE presence
- **Cross-Site Link Equity**: Internal links boost all sites
- **Better User Journeys**: Clear service discovery paths
- **Improved Conversions**: Targeted tracking and optimization

### Analytics Benefits:
- **Complete Customer Journey**: Track from discovery to conversion
- **Service Performance**: Compare effectiveness of each service
- **Cross-Selling Opportunities**: Identify multi-service customers
- **ROI Measurement**: True attribution across the ecosystem

## 🛠️ Technical Notes

### Domain Configuration:
- Ensure all subdomains have proper DNS configuration
- Set up SSL certificates for all domains
- Configure proper redirects (301) for any URL changes

### Performance Monitoring:
- Monitor Core Web Vitals across all sites
- Track loading performance of shared scripts
- Optimize images and assets for each service

### Security Considerations:
- Validate all cross-domain tracking scripts
- Ensure GDPR compliance for analytics
- Implement proper CSP headers

---

**Next Step**: Begin implementation with mpdee-creative site, then replicate to development and support sites.
