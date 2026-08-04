import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

// Navbar links use anchor semantics for accessibility and
// smooth scroll behavior while the JS handler applies the fixed offset.
const navLinks = [
  { label: 'About', section: '#about' },
  { label: 'Services', section: '#services' },
  { label: 'Events', section: '#events' },
  { label: 'Blog', section: '#blog' },
  { label: 'Giveaways', section: '#giveaways' },
  { label: 'Clients', section: '#clients' },
  { label: 'Contact', section: '#contact' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const [activeSection, setActiveSection] = useState('#home');

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  const SCROLL_OFFSET = 88; // Fixed navbar height + visual spacing.

  useEffect(() => {
    let sectionEntries: Array<{ section: string; element: HTMLElement }> = [];
    let retryTimeout: number | null = null;

    const updateSectionEntries = () => {
      sectionEntries = navLinks
        .map((link) => {
          const element = document.querySelector(link.section) as HTMLElement | null;
          return element ? { section: link.section, element } : null;
        })
        .filter((entry): entry is { section: string; element: HTMLElement } => Boolean(entry));
    };

    const updateActiveSection = () => {
      if (sectionEntries.length === 0) {
        return;
      }

      const scrollPosition = window.scrollY + SCROLL_OFFSET + 1;
      let currentSection = '#home';

      sectionEntries.forEach(({ section, element }) => {
        const elementTop = element.offsetTop;
        if (elementTop <= scrollPosition) {
          currentSection = section;
        }
      });

      setActiveSection(currentSection);
      if (window.location.hash !== currentSection) {
        window.history.replaceState(null, '', currentSection);
      }
    };

    const initialize = () => {
      updateSectionEntries();

      if (sectionEntries.length === 0) {
        retryTimeout = window.setTimeout(initialize, 250);
        return;
      }

      updateActiveSection();
      window.addEventListener('scroll', updateActiveSection, { passive: true });
      window.addEventListener('resize', updateSectionEntries);
    };

    initialize();

    return () => {
      if (retryTimeout !== null) {
        window.clearTimeout(retryTimeout);
      }
      window.removeEventListener('scroll', updateActiveSection);
      window.removeEventListener('resize', updateSectionEntries);
    };
  }, []);

  const scrollToSection = (section: string) => {
    const target = document.querySelector(section) as HTMLElement | null;
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      console.warn(`[Header] Cannot scroll to missing section: ${section}`);
    }
  };

  const handleNavClick = (event: React.MouseEvent<HTMLAnchorElement>, section: string) => {
    event.preventDefault();
    setActiveSection(section);
    setMenuOpen(false);
    window.history.replaceState(null, '', section);
    scrollToSection(section);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
        scrolled
          ? 'bg-white/65 backdrop-blur-2xl shadow-sm border-b border-black/8'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Real HAQ Enterprises Logo */}
        <a
          href="#home"
          onClick={(event) => handleNavClick(event, '#home')}
          className="flex items-center gap-3 shrink-0 select-none"
        >
          <img
            src="/images/haq-logo-transparent.png"
            alt="Haq Enterprises"
            className={`h-20 md:h-24 w-auto object-contain transition-all duration-300 ${
              scrolled ? '' : 'filter invert brightness-200'
            }`}
            width={320}
            height={120}
            loading="eager"
            decoding="async"
            fetchPriority="high"
          />
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => {
            const isActive = activeSection === link.section;
            return (
              <a
                key={link.section}
                href={link.section}
                onClick={(event) => handleNavClick(event, link.section)}
                aria-current={isActive ? 'page' : undefined}
                className={`group relative text-sm transition-colors duration-200 px-3 py-2 rounded-full ${
                  scrolled
                    ? `text-[#1d1d1f] hover:text-[#1d1d1f]/80 hover:bg-black/5 hover:backdrop-blur-sm ${isActive ? 'font-semibold' : ''}`
                    : `text-white/90 hover:text-white hover:bg-white/10 hover:backdrop-blur-sm ${isActive ? 'font-semibold' : ''}`
                }`}
              >
                <span className="relative z-10">{link.label}</span>
                <span className={`absolute left-1/2 transform -translate-x-1/2 -bottom-1 w-10 h-0.5 bg-current origin-left transition-transform duration-300 ${isActive ? 'scale-x-100' : 'scale-x-0'} group-hover:scale-x-100`} />
              </a>
            );
          })}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className={`md:hidden p-2 rounded-md transition-colors ${scrolled ? 'text-[#1d1d1f]' : 'text-white'}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white/85 backdrop-blur-2xl border-t border-black/5 shadow-lg" id="mobile-menu">
          <nav className="max-w-7xl mx-auto px-6 py-4 flex flex-col gap-1" aria-label="Mobile navigation">
            {navLinks.map((link) => {
            const isActive = activeSection === link.section;
            return (
              <a
                key={link.section}
                href={link.section}
                onClick={(event) => handleNavClick(event, link.section)}
                aria-current={isActive ? 'page' : undefined}
                className={`w-full text-left py-2.5 text-sm transition-colors duration-200 ${
                  isActive ? 'font-semibold text-[#1d1d1f]' : 'text-[#1d1d1f] hover:text-[#1d1d1f]/60'
                }`}
              >
                {link.label}
              </a>
            );
          })}
          </nav>
        </div>
      )}
    </header>
  );
}
