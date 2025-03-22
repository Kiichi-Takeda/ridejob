import Link from "next/link";
import { Menu } from "lucide-react";
import { Container } from "@/components/ui/Container";

export default function Header() {
  return (
    <header className="py-4 border-b bg-white">
      <Container className="w-full flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 300 80"
            className="h-10 w-auto"
          >
            <defs>
              <linearGradient id="blueGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#4285F4" />
                <stop offset="100%" stopColor="#3b7deb" />
              </linearGradient>
            </defs>
            <text
              x="20"
              y="55"
              fontFamily="Arial, sans-serif"
              fontWeight="bold"
              fontSize="42"
              fill="url(#blueGradient)"
            >
              RIDE
            </text>
            <text
              x="130"
              y="55"
              fontFamily="Arial, sans-serif"
              fontWeight="bold"
              fontSize="42"
              fill="#333"
            >
              JOB
            </text>
            <g transform="translate(225, 30) scale(0.9)">
              <rect x="0" y="0" width="40" height="25" rx="5" fill="#ffdd00" />
              <rect x="15" y="-8" width="10" height="8" rx="2" fill="#ffdd00" />
              <circle cx="10" cy="25" r="6" fill="#333" />
              <circle cx="30" cy="25" r="6" fill="#333" />
              <rect x="0" y="10" width="40" height="5" fill="#333" stroke="#ffdd00" strokeWidth="1" />
            </g>
            <line x1="20" y1="65" x2="260" y2="65" stroke="#ddd" strokeWidth="4" strokeDasharray="10,5" />
          </svg>
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a className="text-sm font-medium text-gray-900 hover:text-black transition-colors" href="/">ホーム</a>
          <a className="text-sm font-medium text-gray-900 hover:text-black transition-colors" href="/companies">企業向け</a>
          <a className="text-sm font-medium text-gray-900 hover:text-black transition-colors" href="/drivers">ドライバー向け</a>
          <a className="text-sm font-medium text-gray-900 hover:text-black transition-colors" href="/blog">ブログ</a>
          <a className="text-sm font-medium text-gray-900 hover:text-black transition-colors" href="/about">会社概要</a>
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

        {/* Mobile Menu Button */}
        <button className="md:hidden" aria-label="Toggle Menu">
          <Menu className="h-6 w-6" />
        </button>
      </Container>
    </header>
  );
}
