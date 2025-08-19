import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Thank You - MPDEE Contact Received',
  description:
    'Thank you for contacting MPDEE. We have received your message and will get back to you within 24 hours.',
  keywords:
    'MPDEE, contact, thank you, confirmation, creative, development, support',
};

export default function ContactReceivedPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-4">
      <div className="max-w-2xl mx-auto text-center">
        {/* Success Icon */}
        <div className="mb-8">
          <div className="w-24 h-24 mx-auto bg-green-500 rounded-full flex items-center justify-center mb-6">
            <svg
              className="w-12 h-12 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
        </div>

        {/* Main Content */}
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Thank You!
          </h1>

          <p className="text-xl text-gray-200 mb-8 leading-relaxed">
            We have successfully received your message and appreciate you
            reaching out to{' '}
            <span className="text-white font-semibold">MPDEE</span>.
          </p>

          <div className="bg-white/5 rounded-xl p-6 mb-8">
            <p className="text-gray-200 text-lg">
              Our team will review your inquiry and get back to you within 24
              hours.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/"
              className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              Return to Home
            </Link>

            <Link
              href="/#creative"
              className="bg-white/10 hover:bg-white/20 text-white font-semibold py-3 px-8 rounded-lg border border-white/20 transition-all duration-300"
            >
              View Our Services
            </Link>
          </div>
        </div>

        {/* Footer Note */}
        <div className="mt-8 text-center">
          <p className="text-gray-400 text-sm">
            You will also receive a confirmation email shortly.
          </p>
        </div>
      </div>
    </div>
  );
}
