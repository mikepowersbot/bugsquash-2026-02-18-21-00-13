"use client";

import Link from "next/link";
import { useState } from "react";

export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-8">
          <Link href="/" className="flex items-center space-x-2">
            <span className="font-bold text-xl">BugSquash</span>
          </Link>
          <div className="hidden md:flex md:gap-6">
            <Link
              href="/"
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              About
            </Link>
            <Link
              href="/features"
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              Features
            </Link>
            <Link
              href="/contact"
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              Contact
            </Link>
          </div>
        </div>
        <div className="hidden md:flex md:items-center md:gap-4">
          <Link
            href="/login"
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            Log in
          </Link>
          <Link
            href="/signup"
            className="rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Sign up
          </Link>
        </div>
        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-6 w-6"
          >
            {isMenuOpen ? (
              <path d="M18 6 6 18M6 6l12 12" />
            ) : (
              <path d="M3 12h18M3 6h18M3 18h18" />
            )}
          </svg>
        </button>
      </div>
      {isMenuOpen && (
        <div className="md:hidden border-t">
          <div className="space-y-1 px-4 py-3">
            <Link
              href="/"
              className="block rounded-md px-3 py-2 text-sm font-medium hover:bg-accent"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/about"
              className="block rounded-md px-3 py-2 text-sm font-medium hover:bg-accent"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="/features"
              className="block rounded-md px-3 py-2 text-sm font-medium hover:bg-accent"
              onClick={() => setIsMenuOpen(false)}
            >
              Features
            </Link>
            <Link
              href="/contact"
              className="block rounded-md px-3 py-2 text-sm font-medium hover:bg-accent"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <div className="border-t pt-3 mt-3">
              <Link
                href="/login"
                className="block rounded-md px-3 py-2 text-sm font-medium hover:bg-accent"
                onClick={() => setIsMenuOpen(false)}
              >
                Log in
              </Link>
              <Link
                href="/signup"
                className="mt-2 block rounded-md bg-primary px-3 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90"
                onClick={() => setIsMenuOpen(false)}
              >
                Sign up
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}