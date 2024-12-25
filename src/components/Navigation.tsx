'use client';

import Link from 'next/link';

export default function Navigation() {
  return (
    <nav className="fixed top-4 left-4 z-50">
      <Link 
        href="/" 
        className="px-6 py-3 bg-[#e6f3ff] text-gray-800 rounded-sm hover:bg-[#d9edff] transition-colors inline-flex items-center gap-2"
      >
        ← Back to Gallery
      </Link>
    </nav>
  );
} 