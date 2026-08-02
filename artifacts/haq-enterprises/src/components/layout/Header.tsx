import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Events', href: '#events' },
  { label: 'Giveaways', href: '#giveaways' },
  { label: 'Clients', href: '#clients' },
  { label: 'Contact', href: '#contact' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-black/5'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2.5 flex-shrink-0 select-none">
          {/* HAQ logo mark */}
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="32" height="32" rx="6" fill={scrolled ? '#1d1d1f' : 'rgba(255,255,255,0.15)'} />
            {/* Stylised H */}
            <rect x="7" y="8" width="4" height="16" fill={scrolled ? 'white' : 'white'} />
            <rect x="7" y="14" width="10" height="4" fill={scrolled ? 'white' : 'white'} />
            <rect x="13" y="8" width="4" height="16" fill={scrolled ? 'white' : 'white'} />
            {/* AQ arc hint */}
            <path d="M19 14 Q24 11 24 16 Q24 21 19 18" stroke={scrolled ? 'white' : 'white'} strokeWidth="2.5" fill="none" strokeLinecap="round"/>
          </svg>
          <span className={`font-bold text-sm tracking-widest uppercase transition-colors duration-300 ${scrolled ? 'text-[#1d1d1f]' : 'text-white'}`}>
            HAQ <span className={scrolled ? 'text-[#1d1d1f]/50' : 'text-white/60'}>Enterprises</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors duration-200 ${
                scrolled
                  ? 'text-[#1d1d1f] hover:text-[#1d1d1f]/60'
                  : 'text-white/90 hover:text-white'
              }`}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="ml-2 px-5 py-2 rounded-full text-sm font-semibold bg-[#1d1d1f] text-white hover:bg-[#3a3a3c] transition-colors duration-200"
          >
            Get a Quote
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className={`md:hidden p-2 rounded-md transition-colors ${scrolled ? 'text-[#1d1d1f]' : 'text-white'}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-black/5 shadow-lg">
          <nav className="max-w-7xl mx-auto px-6 py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="py-2.5 text-sm font-medium text-[#1d1d1f] hover:text-[#1d1d1f]/60 transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="mt-2 py-2.5 px-5 rounded-full text-sm font-semibold bg-[#1d1d1f] text-white text-center hover:bg-[#3a3a3c] transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              Get a Quote
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
