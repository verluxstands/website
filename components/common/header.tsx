'use client';

import { useState } from 'react';
import { Menu, X, ChevronDown, Phone, Mail } from 'lucide-react';
import Link from "next/link"
import { contactInfo } from "@/lib/site-content"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: 'HOME', href: '/' },
    { label: 'ABOUT US', href: '/about' },
    { label: 'PORTFOLIO', href: '/portfolio' },
    { label: 'SERVICES', href: '/services' },
    { label: 'TRADE SHOWS', href: '/trade-shows' },
    // {
    //   label: 'GLOBAL PRESENCE',
    //   href: '/major-cities',
    // },
    { label: 'CONTACT US', href: '/contact' },
  ];

  return (
    <header className="sticky top-0 z-40 bg-primary text-white">
      <div className="max-w-full">
        <div className="flex items-center justify-start md:justify-center h-10 px-4 sm:px-6 lg:px-8">
          <nav className="hidden lg:flex items-center justify-center gap-1">
            {navItems.map((item) => (
              <div key={item.label} className="relative group">
                <Link
                  href={item.href}
                  className="px-4 py-2 text-sm font-bold scale-animation transition-colors whitespace-nowrap flex items-center gap-1 h-10"
                >
                  {item.label}
                </Link>

              </div>
            ))}
          </nav>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-white me-auto"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-8 h-8" />}
          </button>
          <div className="lg:hidden flex text-sm flex-col">
            <div className="flex items-center gap-2"><Mail size={15} /> {contactInfo.email}</div>
            <div className="flex items-center gap-2"><Phone size={15} />{contactInfo.phones[0]}</div>
          </div>
        </div>

        {isOpen && (
          <nav className="lg:hidden pb-4 space-y-2 px-4">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="block px-4 py-2 text-white hover:bg-white/10 rounded transition-colors font-medium"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}
