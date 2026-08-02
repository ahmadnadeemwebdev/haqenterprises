import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const services = ['Printing', 'Packaging', 'Corporate Events', 'Custom Giveaways'];

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex flex-col lg:flex-row overflow-hidden">
      {/* Left — dark charcoal panel */}
      <div className="relative flex flex-col justify-center lg:w-[52%] bg-[#1d1d1f] px-8 sm:px-12 lg:px-16 py-28 lg:py-0 overflow-hidden">
        {/* Decorative background shapes (matching PDF wave shapes) */}
        <svg
          className="absolute -top-20 -left-20 w-72 h-72 opacity-[0.06]"
          viewBox="0 0 288 288" fill="none"
        >
          <path d="M0 144 Q72 0 144 144 Q216 288 288 144" stroke="white" strokeWidth="60" fill="none" strokeLinecap="round"/>
        </svg>
        <svg
          className="absolute -bottom-20 -right-10 w-60 h-60 opacity-[0.06]"
          viewBox="0 0 240 240" fill="none"
        >
          <path d="M240 120 Q168 0 96 120 Q24 240 0 120" stroke="white" strokeWidth="50" fill="none" strokeLinecap="round"/>
        </svg>

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease: [0.25, 0.1, 0.25, 1] }}
          className="relative z-10 max-w-lg"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/15 rounded-full px-4 py-1.5 mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-white" />
            <span className="text-white/80 text-xs font-medium tracking-wide">5+ Years of Trusted Excellence</span>
          </div>

          <h1 className="text-5xl sm:text-6xl font-extrabold text-white leading-[1.05] tracking-tight mb-6">
            Building Solutions,<br />
            <span className="text-white/50">Delivering Trust.</span>
          </h1>

          <p className="text-white/60 text-base sm:text-lg leading-relaxed mb-8">
            Pakistan's premier printing, packaging, and corporate events company. From luxury branded gift sets to large-scale conferences — we bring your vision to life.
          </p>

          {/* Service tags */}
          <div className="flex flex-wrap gap-2 mb-10">
            {services.map((s) => (
              <span key={s} className="text-xs font-medium text-white/60 border border-white/15 rounded-full px-3.5 py-1.5">
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
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white/10 border border-white/20 text-white text-sm font-semibold hover:bg-white/15 transition-colors duration-200"
            >
              Get a Quote
            </a>
          </div>
        </motion.div>
      </div>

      {/* Right — product showcase */}
      <div className="relative lg:w-[48%] bg-[#f0eeea] flex flex-col justify-center items-center px-8 py-16 lg:py-0 overflow-hidden min-h-[420px]">
        {/* Decorative PDF-style shapes */}
        <svg className="absolute top-0 right-0 w-48 h-48 opacity-10" viewBox="0 0 192 192" fill="none">
          <path d="M192 0 L192 96 Q96 96 96 192 L0 192 L0 0 Z" fill="#1d1d1f"/>
        </svg>
        <svg className="absolute bottom-0 left-0 w-36 h-36 opacity-10" viewBox="0 0 144 144" fill="none">
          <path d="M0 144 L0 48 Q48 48 48 0 L144 0 L144 144 Z" fill="#1d1d1f"/>
        </svg>

        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
          className="relative z-10 w-full max-w-md"
        >
          {/* Main product image */}
          <div className="rounded-2xl overflow-hidden shadow-2xl">
            <img
              src="/images/gift-package.jpg"
              alt="Corporate Branding Gift Package by Haq Enterprises"
              className="w-full object-cover"
            />
          </div>

          {/* Floating label card */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="absolute -bottom-5 -left-4 bg-[#1d1d1f] text-white rounded-xl px-5 py-3 shadow-xl"
          >
            <p className="text-xs font-semibold text-white/60 mb-0.5">Corporate Branding</p>
            <p className="text-sm font-bold">Gift Package</p>
          </motion.div>

          {/* Stats pill */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="absolute -top-4 -right-4 bg-white rounded-xl px-4 py-3 shadow-xl border border-black/5"
          >
            <p className="text-xs text-[#1d1d1f]/50 mb-0.5">Trusted by</p>
            <p className="text-sm font-extrabold text-[#1d1d1f]">50+ Brands</p>
          </motion.div>
        </motion.div>

        {/* Bottom event preview strip */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.85 }}
          className="relative z-10 w-full max-w-md mt-8 grid grid-cols-3 gap-2"
        >
          {['/images/event-1.jpg', '/images/event-2.jpg', '/images/event-3.jpg'].map((src, i) => (
            <div key={i} className="rounded-xl overflow-hidden aspect-video">
              <img src={src} alt="" className="w-full h-full object-cover" />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
