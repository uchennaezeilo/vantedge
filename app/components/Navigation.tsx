'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full border-b border-zinc-200 dark:border-zinc-800 bg-white dark:bg-black p-4">
      <div className="max-w-5xl mx-auto flex justify-between items-center">
        <Link href="/" className="font-bold text-xl">
          Vantedge
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden sm:flex gap-4 text-sm font-medium text-zinc-600 dark:text-zinc-400">
          <Link href="/articles" className="hover:text-black dark:hover:text-white">
            Articles
          </Link>
          <Link href="/products" className="hover:text-black dark:hover:text-white">
            Products
          </Link>
          <a href="#" className="hover:text-black dark:hover:text-white">
            Reviews
          </a>
          <a href="#" className="hover:text-black dark:hover:text-white">
            Deals
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="sm:hidden p-2"
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
            />
          </svg>
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="sm:hidden mt-4 py-4 border-t border-zinc-200 dark:border-zinc-800">
          <nav className="flex flex-col gap-2 text-sm font-medium text-zinc-600 dark:text-zinc-400">
            <Link
              href="/articles"
              className="px-4 py-2 hover:text-black dark:hover:text-white hover:bg-zinc-50 dark:hover:bg-zinc-900 rounded"
              onClick={() => setIsOpen(false)}
            >
              Articles
            </Link>
            <Link
              href="/products"
              className="px-4 py-2 hover:text-black dark:hover:text-white hover:bg-zinc-50 dark:hover:bg-zinc-900 rounded"
              onClick={() => setIsOpen(false)}
            >
              Products
            </Link>
            <a
              href="#"
              className="px-4 py-2 hover:text-black dark:hover:text-white hover:bg-zinc-50 dark:hover:bg-zinc-900 rounded"
            >
              Reviews
            </a>
            <a
              href="#"
              className="px-4 py-2 hover:text-black dark:hover:text-white hover:bg-zinc-50 dark:hover:bg-zinc-900 rounded"
            >
              Deals
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
