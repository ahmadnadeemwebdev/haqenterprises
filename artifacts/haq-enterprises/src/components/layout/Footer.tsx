const footerLinks = {
  Services: ['Event Management', 'Conferences', 'Exhibitions', 'Product Launches', 'Customised Giveaways'],
  Company: ['About Us', 'Our Clients', 'Corporate Events', 'Contact Us'],
};

export default function Footer() {
  return (
    <footer className="bg-[#0f0f0f] text-white">
      <div className="max-w-7xl mx-auto px-6 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <img
              src="/images/haq-logo.png"
              alt="Haq Enterprises"
              className="h-10 w-auto mb-4 brightness-0 invert"
            />
            <p className="text-white/60 text-sm leading-relaxed max-w-xs">
              A full-service printing, packaging, and corporate events company. Building solutions, delivering trust.
            </p>
            <div className="mt-5 space-y-1.5">
              <p className="text-white/60 text-sm">Haqenterprises777@gmail.com</p>
              <p className="text-white/60 text-sm">+92 328 4865157</p>
              <p className="text-white/60 text-sm">+92 322 4758424</p>
              <p className="text-white/60 text-sm">www.haqenterprises.online</p>
              <p className="text-white/60 text-sm">Pakistan</p>
            </div>
          </div>

          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-sm font-semibold text-white mb-4">{title}</h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-white/55 text-sm hover:text-[#1d1d1f]/60 transition-colors duration-200">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/40 text-xs">
            © {new Date().getFullYear()} Haq Enterprises. All rights reserved.
          </p>
          <p className="text-white/40 text-xs">www.haqenterprises.online</p>
        </div>
      </div>
    </footer>
  );
}
