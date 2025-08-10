import React from "react";
import { useNavigate } from "react-router";
import { motion } from "framer-motion";

// Eye-soothing 404 Page component
// - Tailwind CSS classes (dark mode friendly)
// - Two button types: Filled (primary) & Outline
// - Responsive & accessible
// - Uses a simple SVG illustration that adapts to light/dark

export default function NotFound404() {
  const navigate = useNavigate();

  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 px-6 py-12">
      <section className="max-w-6xl w-full grid gap-8 md:grid-cols-2 items-center">
        {/* Left: Illustration */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-center"
        >
          {/* Soft, friendly SVG illustration (keeps colors neutral for dark/light) */}
          <svg
            viewBox="0 0 600 420"
            className="w-full max-w-md h-auto"
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            aria-label="404 illustration"
          >
            <defs>
              <linearGradient id="g1" x1="0" x2="1" y1="0" y2="1">
                <stop offset="0%" stopColor="#60a5fa" stopOpacity="0.12" />
                <stop offset="100%" stopColor="#7c3aed" stopOpacity="0.08" />
              </linearGradient>
              <linearGradient id="g2" x1="0" x2="1" y1="0" y2="1">
                <stop offset="0%" stopColor="#111827" stopOpacity="0.06" />
                <stop offset="100%" stopColor="#9CA3AF" stopOpacity="0.04" />
              </linearGradient>
            </defs>

            <rect x="0" y="0" width="600" height="420" rx="20" fill="url(#g1)" />

            <g transform="translate(40,50)">
              <rect x="0" y="0" width="260" height="200" rx="12" fill="#fff" className="dark:fill-gray-800" opacity="0.9" />

              <circle cx="180" cy="120" r="48" fill="#fff" className="dark:fill-gray-700" opacity="0.95" stroke="#c7d2fe" strokeWidth="6" />

              <text x="16" y="44" fontFamily="Inter, Arial, Helvetica, sans-serif" fontSize="20" fill="#111827" className="dark:fill-gray-200">Oops — Page not found</text>

              <g transform="translate(16,70)">
                <rect x="0" y="0" width="220" height="12" rx="6" fill="#e6edf9" className="dark:fill-gray-700" />
                <rect x="0" y="26" width="160" height="12" rx="6" fill="#f3f4f6" className="dark:fill-gray-600" />
              </g>
            </g>

            <g transform="translate(340,40)">
              <text x="0" y="70" fontFamily="Inter, Arial, Helvetica, sans-serif" fontSize="120" fontWeight="700" fill="#0f172a" className="dark:fill-gray-100">404</text>
            </g>

            <rect x="20" y="300" width="560" height="80" rx="12" fill="url(#g2)" opacity="0.7" />
          </svg>
        </motion.div>

        {/* Right: Content */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.08 }}
          className="px-4 md:px-8"
        >
          <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">Page not found</p>

          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white leading-tight mb-4">
            Oops! We can't find that page.
          </h1>

          <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-xl">
            The page you're looking for might have been removed, had its name changed, or is temporarily unavailable. Try returning to the homepage or contact support if you think this is an error.
          </p>

          <div className="flex flex-wrap gap-3 items-center">
            {/* Filled (primary) button */}
            <button
              onClick={() => navigate('/')}
              className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-md px-4 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
            >
              Home
            </button>

            {/* Outline button */}
            <button
              onClick={() => navigate('/contact')}
              className="inline-flex items-center gap-2 border border-gray-300 dark:border-gray-600 text-gray-800 dark:text-gray-200 rounded-md px-4 py-2 bg-transparent hover:bg-gray-50 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-200"
            >
              Contact Support
            </button>

            {/* small helper link */}
            <a
              href="#"
              onClick={(e) => {e.preventDefault(); navigate(-1);}}
              className="text-sm text-gray-600 dark:text-gray-300 underline ml-1"
            >
              Go back
            </a>
          </div>

          {/* subtle footer note */}
          <p className="text-xs text-gray-500 dark:text-gray-400 mt-6">
            If you keep seeing this page, please clear your cache or reach out to support@modernhotel.com
          </p>
        </motion.div>
      </section>
    </main>
  );
}
