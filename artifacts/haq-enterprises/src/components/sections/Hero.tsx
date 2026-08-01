import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle } from 'lucide-react';

export function Hero() {
  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-[100dvh] flex items-end overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=1920&q=80"
          alt="Premium packaging production"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/15"/>
      </div>

      <div className="relative z-10 w-full pb-20 md:pb-28">
        <div className="container mx-auto px-6 max-w-7xl">

          {/* Badges */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-wrap gap-3 mb-6"
          >
            {["ISO Quality Standards", "Eco-Friendly Production", "Qatar Based"].map((badge) => (
              <span key={badge} className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-xs font-medium text-white/80">
                <CheckCircle className="w-3 h-3 text-white/60" />
                {badge}
              </span>
            ))}
          </motion.div>

          {/* Eyebrow */}
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="text-sm font-semibold tracking-[0.18em] uppercase text-white/50 mb-4"
          >
            Haq Enterprises · Printing & Packaging · Qatar
          </motion.p>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.12 }}
            className="text-5xl md:text-7xl lg:text-[88px] font-bold text-white tracking-tight leading-[1.02] max-w-5xl mb-6"
          >
            Precision Printing.<br />
            <span className="text-white/65">Modern Packaging.</span>
          </motion.h1>

          {/* Sub */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.22 }}
            className="text-lg md:text-xl text-white/55 max-w-2xl mb-10 leading-relaxed font-light"
          >
            A full-service printing and packaging studio serving Qatar's most demanding brands. From corporate stationery and luxury gift boxes to large-format display and branded uniforms — all under one roof, delivered on time.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.32 }}
            className="flex flex-col sm:flex-row gap-3"
          >
            <Button
              size="lg"
              className="bg-white text-[#1d1d1f] hover:bg-white/92 rounded-full h-14 px-10 text-base font-semibold shadow-lg"
              onClick={() => scrollTo('#giveaways')}
            >
              View All Services
              <ArrowRight className="w-5 h-5 ml-1"/>
            </Button>
            <Button
              size="lg"
              variant="glass"
              className="border-white/30 text-white hover:bg-white/10 h-14 px-10 text-base"
              onClick={() => scrollTo('#contact')}
            >
              Request a Quote
            </Button>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.55, duration: 0.8 }}
          className="container mx-auto px-6 max-w-7xl mt-16 pt-8 border-t border-white/15"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { value: "200+", label: "Projects Delivered" },
              { value: "50+",  label: "Corporate Clients" },
              { value: "5+",   label: "Years Experience" },
              { value: "100%", label: "Quality Guaranteed" },
            ].map((s, i) => (
              <div key={i}>
                <div className="text-2xl md:text-3xl font-bold text-white tracking-tight">{s.value}</div>
                <div className="text-sm text-white/45 mt-0.5 tracking-wide">{s.label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
