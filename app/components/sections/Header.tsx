"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Container } from "@/components/ui/Container";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="py-4 border-b bg-white">
      <Container className="w-full flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          {/* ...省略（ロゴSVGそのままでOK） */}
          <span className="text-xl font-bold text-primary">RIDE</span>
          <span className="ml-1 font-bold text-gray-900">JOB</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link href="/" className="text-sm font-medium text-gray-900 hover:text-black">ホーム</Link>
          <Link href="/companies" className="text-sm font-medium text-gray-900 hover:text-black">企業向け</Link>
          <Link href="/drivers" className="text-sm font-medium text-gray-900 hover:text-black">ドライバー向け</Link>
          <Link href="/blog" className="text-sm font-medium text-gray-900 hover:text-black">ブログ</Link>
          <Link href="/about" className="text-sm font-medium text-gray-900 hover:text-black">会社概要</Link>
        </nav>

        {/* CTA */}
        <div className="hidden md:flex items-center space-x-4">
          <Link
            href="/apply"
            className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium h-9 rounded-full px-6 shadow-md hover:shadow-lg transition-all bg-yellow-400 text-black hover:bg-yellow-300"
          >
            今すぐ応募
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </Container>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <nav className="flex flex-col px-6 py-4 space-y-4">
            <Link href="/" onClick={() => setIsOpen(false)}>ホーム</Link>
            <Link href="/companies" onClick={() => setIsOpen(false)}>企業向け</Link>
            <Link href="/drivers" onClick={() => setIsOpen(false)}>ドライバー向け</Link>
            <Link href="/blog" onClick={() => setIsOpen(false)}>ブログ</Link>
            <Link href="/about" onClick={() => setIsOpen(false)}>会社概要</Link>
            <Link
              href="/apply"
              className="mt-4 inline-block text-center bg-yellow-400 hover:bg-yellow-300 text-black font-medium py-2 px-4 rounded-full"
              onClick={() => setIsOpen(false)}
            >
              今すぐ応募
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}