import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background-dark text-text-light flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl font-bold mb-4">404</h1>
        <h2 className="text-2xl font-semibold mb-4">Page Not Found</h2>
        <p className="text-text-muted mb-8">
          The page you&apos;re looking for doesn&apos;t exist.
        </p>
        <Link
          href="/"
          className="bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-dark transition-colors"
        >
          Go Home
        </Link>
      </div>
    </div>
  );
}
