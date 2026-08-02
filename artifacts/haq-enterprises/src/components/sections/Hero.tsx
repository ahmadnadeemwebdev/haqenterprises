import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative h-screen min-h-[640px] flex items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="/images/hero-bg.jpg"
          alt="Haq Enterprises Corporate Events"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/55 to-black/20" />
      </div>

      {/* Badges strip */}
      <div className="absolute top-20 left-0 right-0 flex justify-center gap-3 px-6 z-10">
        {['5+ Years Excellence', 'Corporate Events', 'Premium Packaging'].map((badge) => (
          <span
            key={badge}
            className="hidden sm:flex items-center gap-1.5 text-xs font-medium text-white/80 bg-white/10 backdrop-blur-sm border border-white/15 rounded-full px-3.5 py-1"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#c9a84c]" />
            {badge}
          </span>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full pt-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          className="max-w-2xl"
        >
          <p className="text-[#c9a84c] text-sm font-semibold tracking-widest uppercase mb-4">
            Haq Enterprises
          </p>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-[1.05] tracking-tight mb-6">
            Premium Printing,
            <br />
            <span className="text-white/70">Packaging &amp; Events</span>
          </h1>
          <p className="text-white/75 text-lg sm:text-xl leading-relaxed mb-8 max-w-lg">
            Pakistan's trusted printing, packaging, and corporate events partner. From luxury branded packaging to large-scale conferences — all under one roof.
          </p>

          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href="#services"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-white text-[#1d1d1f] text-sm font-semibold hover:bg-white/90 transition-colors duration-200"
            >
              Explore Services
              <ArrowRight size={15} />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-[#c9a84c] text-white text-sm font-semibold hover:bg-[#b8963e] transition-colors duration-200"
            >
              Get a Quote
            </a>
          </div>
        </motion.div>
      </div>

      {/* Bottom scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5"
      >
        <span className="text-white/40 text-xs tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-px h-8 bg-gradient-to-b from-white/40 to-transparent"
        />
      </motion.div>
    </section>
  );
}
