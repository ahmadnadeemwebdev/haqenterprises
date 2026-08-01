export function Footer() {
  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#1d1d1f] pt-16 pb-8">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">

          {/* Brand */}
          <div className="md:col-span-1">
            <a
              href="#"
              onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
              className="text-xl font-bold tracking-[0.1em] text-white block mb-4 hover:text-white/80 transition-colors"
            >
              HAQ ENTERPRISES
            </a>
            <p className="text-white/40 text-sm leading-relaxed max-w-xs font-light">
              Precision Printing & Modern Packaging Solutions for world-class brands.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-semibold tracking-[0.14em] text-white/40 uppercase mb-5">Quick Links</h4>
            <ul className="space-y-3">
              {['About', 'Core Values', 'Giveaways', 'Clients'].map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      let href = link.toLowerCase().replace(' ', '-');
                      if (href === 'about' || href === 'core-values') href = 'values';
                      scrollTo(`#${href}`);
                    }}
                    className="text-white/50 hover:text-white transition-colors text-sm"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs font-semibold tracking-[0.14em] text-white/40 uppercase mb-5">Contact</h4>
            <ul className="space-y-3 text-sm text-white/50">
              <li>Qatar</li>
              <li>
                <a href="https://www.haqenterprises.online" target="_blank" rel="noreferrer"
                  className="hover:text-white transition-colors">
                  www.haqenterprises.online
                </a>
              </li>
              <li>
                <a href="mailto:contact@haqenterprises.online"
                  className="hover:text-white transition-colors">
                  contact@haqenterprises.online
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/25 text-xs">
            © {new Date().getFullYear()} Haq Enterprises. All rights reserved.
          </p>
          <p className="text-white/20 text-xs tracking-widest uppercase">
            Printing · Packaging · Branding
          </p>
        </div>
      </div>
    </footer>
  );
}
