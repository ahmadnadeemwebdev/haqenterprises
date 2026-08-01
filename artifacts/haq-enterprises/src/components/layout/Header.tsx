import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About',      href: '#about' },
    { name: 'Services',   href: '#giveaways' },
    { name: 'Process',    href: '#process' },
    { name: 'Clients',    href: '#clients' },
  ];

  const scrollTo = (href: string) => {
    setMobileMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled
        ? 'bg-white/90 backdrop-blur-xl border-b border-black/[0.06] py-4 shadow-sm'
        : 'bg-transparent py-6'
    }`}>
      <div className="container mx-auto px-6 max-w-7xl flex items-center justify-between">
        <a
          href="#"
          onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
          className={`text-xl font-bold tracking-[0.1em] transition-colors duration-300 ${scrolled ? 'text-[#1d1d1f]' : 'text-white'}`}
        >
          HAQ ENTERPRISES
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => { e.preventDefault(); scrollTo(link.href); }}
              className={`text-sm font-medium transition-colors duration-300 ${
                scrolled ? 'text-[#424245] hover:text-[#1d1d1f]' : 'text-white/80 hover:text-white'
              }`}
            >
              {link.name}
            </a>
          ))}
          <Button variant="goldGlow" size="sm" className="px-5" onClick={() => scrollTo('#contact')}>
            Get a Quote
          </Button>
        </nav>

        <button
          className={`md:hidden p-2 transition-colors ${scrolled ? 'text-[#1d1d1f]' : 'text-white'}`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="w-5 h-5"/> : <Menu className="w-5 h-5"/>}
        </button>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="absolute top-full left-0 right-0 bg-white/95 backdrop-blur-xl border-b border-black/[0.06] shadow-lg md:hidden"
          >
            <div className="container mx-auto px-6 py-6 flex flex-col gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); scrollTo(link.href); }}
                  className="text-[#1d1d1f] text-lg font-medium py-3 border-b border-black/[0.06] hover:text-[#6e6e73] transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <Button variant="goldGlow" className="mt-4 w-full" onClick={() => scrollTo('#contact')}>
                Get a Quote
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
