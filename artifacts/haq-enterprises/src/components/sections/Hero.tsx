import { ArrowRight } from 'lucide-react';

const services = ['Printing', 'Packaging', 'Corporate Events', 'Custom Giveaways'];

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Full-bleed studio background */}
      <div className="absolute inset-0">
        <img
          src="/images/hero-bg.png"
          alt="Haq Enterprises printing studio"
          className="w-full h-full object-cover object-center"
          width={1920}
          height={1080}
          loading="eager"
          decoding="async"
          fetchPriority="high"
        />
        {/* Gradient overlay: reduce opacity so background photo remains visible */}
        <div className="absolute inset-0 bg-linear-to-r from-[#0e0e0f]/60 via-[#0e0e0f]/45 to-[#0e0e0f]/15 pointer-events-none" />
        {/* Bottom vignette (subtler) */}
        <div className="absolute inset-x-0 bottom-0 h-40 bg-linear-to-t from-[#0e0e0f]/35 to-transparent pointer-events-none" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-32">
        <div className="max-w-2xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1.5 mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
            <span className="text-white/85 text-xs font-medium tracking-wide">Trusted Printing, Packaging & Corporate Events in Pakistan</span>
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white leading-[1.05] tracking-tight mb-6">
            Premium<br />
            Printing, Packaging<br />
            <span className="text-white/45">& Corporate Events.</span>
          </h1>

          <p className="text-white/65 text-base sm:text-lg leading-relaxed mb-8 max-w-xl">
            Haq Enterprises is a trusted printing company and packaging solutions provider in Pakistan, delivering premium corporate events, branded giveaways, and professional promotional products with flawless execution.
          </p>

          {/* Service tags */}
          <div className="flex flex-wrap gap-2 mb-10">
            {services.map((s) => (
              <span
                key={s}
                className="text-xs font-medium text-white/70 bg-white/10 backdrop-blur-sm border border-white/15 rounded-full px-3.5 py-1.5"
              >
                {s}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap gap-3">
            <a
              href="#services"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white text-[#1d1d1f] text-sm font-bold hover:bg-white/90 transition-colors duration-200"
            >
              Explore Services
              <ArrowRight size={15} />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/25 text-white text-sm font-semibold hover:bg-white/20 transition-colors duration-200"
            >
              Get a Quote
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
