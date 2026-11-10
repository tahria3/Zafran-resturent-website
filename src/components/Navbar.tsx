import React, { useState, useEffect } from 'react';
import { ShoppingBag, Menu as MenuIcon, X } from 'lucide-react';

interface NavbarProps {
  lang: 'bn' | 'en';
  onToggleLang: () => void;
  cartCount: number;
  onOpenCart: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  lang,
  onToggleLang,
  cartCount,
  onOpenCart
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#menu', labelBn: 'খাবার মেনু', labelEn: 'Menu' },
    { href: '#specials', labelBn: 'শেফের বিশেষ পদ', labelEn: 'Chef Specials' },
    { href: '#story', labelBn: 'আমাদের ঐতিহ্য', labelEn: 'Our Story' },
    { href: '#contact', labelBn: 'সময় ও অবস্থান', labelEn: 'Hours & Location' }
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-[#0c0d10]/95 backdrop-blur-md border-b border-[#252833] py-3.5 shadow-2xl shadow-black/50'
          : 'bg-gradient-to-b from-[#0c0d10]/90 via-[#0c0d10]/60 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8">
          {/* Zone 1: Brand Wordmark */}
          <a href="#" className="flex items-center gap-3 shrink-0 group">
            <span className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#997334] to-[#e4be79] flex items-center justify-center text-black font-cinzel font-bold text-base shadow-lg shadow-[#c59d5f]/20">
              Z
            </span>
            <div className="flex flex-col">
              <span className="font-cinzel text-xl sm:text-2xl font-bold tracking-wider text-[#f1ede6] group-hover:text-[#c59d5f] transition-colors whitespace-nowrap">
                ZAFRAN
              </span>
              <span className="text-[10px] tracking-[0.25em] text-[#a59f93] uppercase font-sans -mt-1">
                {lang === 'bn' ? 'ফাইন ডাইনিং' : 'Fine Dining & Lounge'}
              </span>
            </div>
          </a>

          {/* Zone 2: 4 Navigation Menu Links (Single-line, unboxed) */}
          <nav className="hidden lg:flex items-center gap-8 text-sm font-medium">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[#cfc8bd] hover:text-[#e4be79] transition-colors whitespace-nowrap tracking-wide relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#c59d5f] hover:after:w-full after:transition-all after:duration-300"
              >
                {lang === 'bn' ? link.labelBn : link.labelEn}
              </a>
            ))}
          </nav>

          {/* Zone 3: 1 Primary Action Button + Utilities */}
          <div className="flex items-center gap-3 shrink-0">
            {/* Language Switch */}
            <button
              onClick={onToggleLang}
              className="px-2.5 py-1 text-xs font-medium text-[#a59f93] hover:text-[#eae7e1] border border-[#2f3342] rounded hover:border-[#c59d5f]/50 transition-colors whitespace-nowrap"
            >
              {lang === 'bn' ? 'English' : 'বাংলা'}
            </button>

            {/* Cart Button */}
            <button
              onClick={onOpenCart}
              aria-label="View Cart"
              className="relative p-2 text-[#cfc8bd] hover:text-[#c59d5f] transition-colors rounded-md hover:bg-[#1a1c24]"
            >
              <ShoppingBag className="w-5 h-5" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-[#c59d5f] text-black font-bold text-xs rounded-full flex items-center justify-center tabular-nums shadow-sm">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Exactly 1 Primary Action Button: Table Reservation */}
            <a
              href="#reservation"
              className="px-4 sm:px-5 py-2 text-xs sm:text-sm font-semibold tracking-wide text-black bg-gradient-to-r from-[#c59d5f] via-[#deb473] to-[#c59d5f] hover:brightness-110 rounded-md transition-all shadow-md shadow-[#c59d5f]/20 whitespace-nowrap shrink-0 cursor-pointer"
            >
              {lang === 'bn' ? 'টেবিল বুকিং' : 'Book a Table'}
            </a>

            {/* Mobile menu toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-[#cfc8bd] hover:text-white"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Nav Links Dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-4 pt-4 border-t border-[#252833] pb-4 flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-medium text-[#cfc8bd] hover:text-[#c59d5f] py-2 transition-colors"
              >
                {lang === 'bn' ? link.labelBn : link.labelEn}
              </a>
            ))}
          </div>
        )}
      </div>
    </header>
  );
};
