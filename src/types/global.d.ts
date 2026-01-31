// Global type declarations for MPDEE website

declare global {
  interface Window {
    /**
     * Track service referral clicks for analytics
     * @param service - The service name being referred (creative, development, support)
     */
    trackServiceReferral?: (service: string) => void;

    /**
     * Google Analytics dataLayer interface
     */
    dataLayer?: unknown[];
  }
}

export {};
