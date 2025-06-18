'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <header className="border-b">
          <nav className="flex items-center justify-between px-4 sm:px-8 py-4">
            <h1 className="text-2xl font-bold">SKINCARE</h1>

            {/* Hamburger button */}
            <button
              className="sm:hidden text-xl"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              ☰
            </button>

            {/* Full menu for sm and up */}
            <div className="hidden sm:flex gap-5">
              <Link href="/products">All Products</Link>
              <Link href="/serum">Serum</Link>
              <Link href="/sunscreen">Sunscreen</Link>
              <Link href="/bundle">Bundle</Link>
            </div>

            <div className="hidden sm:flex gap-4">
              <Link href="/cart">Cart</Link>
              <Link href="/faq">FAQ</Link>
            </div>
          </nav>

          {/* Mobile dropdown menu */}
          {menuOpen && (
            <div className="flex flex-col sm:hidden px-4 pb-4 gap-3 text-sm">
              <Link href="/products">All Products</Link>
              <Link href="/serum">Serum</Link>
              <Link href="/sunscreen">Sunscreen</Link>
              <Link href="/bundle">Bundle</Link>
              <Link href="/cart">Cart</Link>
              <Link href="/faq">FAQ</Link>
            </div>
          )}
        </header>

        <main>{children}</main>
      </body>
    </html>
  );
}
