import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const services = ['Printing', 'Packaging', 'Corporate Events', 'Custom Giveaways'];

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Full-bleed studio background */}
      <div className="absolute inset-0">
        <img
          src="/images/hero-studio.jpg"
          alt="Haq Enterprises printing studio"
          className="w-full h-full object-cover object-center"
        />
        {/* Gradient overlay: deep dark on left, transparent on right */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0e0e0f]/95 via-[#0e0e0f]/70 to-[#0e0e0f]/30" />
        {/* Bottom vignette */}
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#0e0e0f]/60 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-32">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.9, ease: 'easeOut' }}
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1.5 mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
              <span className="text-white/85 text-xs font-medium tracking-wide">5+ Years of Trusted Excellence</span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white leading-[1.05] tracking-tight mb-6">
              Building<br />
              Solutions,<br />
              <span className="text-white/45">Delivering Trust.</span>
            </h1>

            <p className="text-white/65 text-base sm:text-lg leading-relaxed mb-8 max-w-xl">
              Pakistan's premier printing, packaging, and corporate events company. From luxury branded gift sets to large-scale conferences — we bring your vision to life.
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
          </motion.div>
        </div>

        {/* Floating stat cards — bottom right */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="absolute bottom-16 right-8 lg:right-16 flex gap-3"
        >
          {[
            { label: 'Projects Done', value: '200+' },
            { label: 'Happy Clients', value: '50+' },
          ].map((stat) => (
            <div
              key={stat.label}
              className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl px-5 py-4 text-white text-center"
            >
              <p className="text-2xl font-extrabold">{stat.value}</p>
              <p className="text-xs text-white/60 mt-0.5">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
