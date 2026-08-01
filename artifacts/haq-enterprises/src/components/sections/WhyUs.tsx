import { motion } from 'framer-motion';
import { ShieldCheck, Zap, Recycle, Globe2, Palette, Headphones } from 'lucide-react';
import { useInView } from '@/hooks/use-in-view';

const reasons = [
  {
    icon: ShieldCheck,
    title: 'ISO-Standard Quality',
    description: 'Every order adheres to international quality standards. From substrate selection to final finishing, we never compromise.',
  },
  {
    icon: Zap,
    title: '48-Hour Rush Delivery',
    description: 'Tight deadlines? Our rush service handles high-priority orders without sacrificing quality — ready when you need it.',
  },
  {
    icon: Recycle,
    title: 'Eco-Friendly Options',
    description: 'FSC-certified paper, soy-based inks, biodegradable packaging materials — responsible printing for a sustainable future.',
  },
  {
    icon: Palette,
    title: 'In-House Design Team',
    description: 'Our dedicated designers work with your brand guidelines to produce artwork, mockups, and samples before production begins.',
  },
  {
    icon: Globe2,
    title: 'Pan-Qatar Delivery',
    description: 'We deliver anywhere in Qatar — Doha, Al Wakrah, Al Khor, Lusail, and all industrial zones. International shipping available.',
  },
  {
    icon: Headphones,
    title: 'Dedicated Account Manager',
    description: 'Every client gets a dedicated point of contact who knows your brand, your preferences, and ensures every project runs smoothly.',
  },
];

export function WhyUsSection() {
  const [ref, inView] = useInView({ threshold: 0.1 });

  return (
    <section className="py-24 md:py-32 bg-white border-t border-[#f0f0f0]">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Left: text */}
          <div>
            <p className="section-label mb-3">Why Choose Us</p>
            <h2 className="text-4xl md:text-5xl font-bold text-[#1d1d1f] leading-tight tracking-tight mb-6">
              The Complete Print & Pack Partner
            </h2>
            <p className="text-[#6e6e73] text-lg font-light leading-relaxed mb-8">
              Haq Enterprises is not just a printer — we are a full-service brand production partner. From concept to delivery, we handle every stage with precision, care, and a commitment to excellence that larger print houses simply cannot match.
            </p>
            <p className="text-[#6e6e73] text-lg font-light leading-relaxed">
              Based in Qatar and serving the GCC, we combine the agility of a boutique studio with the capacity and technology of a large-scale facility. Whether you need 50 custom gift boxes or 50,000 branded packaging units, we deliver with the same level of attention.
            </p>
          </div>

          {/* Right: feature grid */}
          <div ref={ref as any} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {reasons.map((r, i) => {
              const Icon = r.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 16 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.45, delay: i * 0.07 }}
                  className="bg-[#f5f5f7] hover:bg-white rounded-xl p-5 card-shadow transition-colors duration-300 group"
                >
                  <div className="w-9 h-9 rounded-lg bg-white flex items-center justify-center mb-3 shadow-sm group-hover:shadow transition-shadow duration-300">
                    <Icon className="w-4 h-4 text-[#1d1d1f]" strokeWidth={1.5} />
                  </div>
                  <h4 className="text-sm font-bold text-[#1d1d1f] mb-1">{r.title}</h4>
                  <p className="text-xs text-[#6e6e73] leading-relaxed font-light">{r.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
