import { motion } from 'framer-motion';
import { useInView } from '@/hooks/use-in-view';
import { ArrowRight } from 'lucide-react';

const categories = [
  { label: 'Branded Office Supplies', size: 'lg' },
  { label: 'Event Specific Giveaways', size: 'md' },
  { label: 'Desk Gadgets', size: 'sm' },
  { label: 'Custom Apparel', size: 'lg' },
  { label: 'Health & Wellness', size: 'md' },
  { label: 'Tech Gadgets & Accessories', size: 'lg' },
  { label: 'Personalized Calendars & Planners', size: 'md' },
  { label: 'Eco-Friendly Products', size: 'md' },
  { label: 'Travel Accessories', size: 'sm' },
  { label: 'Drinkware', size: 'sm' },
  { label: 'Fitness Related Items', size: 'md' },
  { label: 'Portable Accessories', size: 'sm' },
  { label: 'Custom Bags', size: 'sm' },
  { label: 'Gift Cards', size: 'sm' },
  { label: 'Subscription Services', size: 'md' },
  { label: 'Experience Based Giveaways', size: 'lg' },
  { label: 'Luxury & High-End Gifts', size: 'lg' },
  { label: 'Branded Kits', size: 'md' },
  { label: 'Seasonal Gifts', size: 'sm' },
];

const sizeClass: Record<string, string> = {
  sm: 'text-xs px-4 py-2',
  md: 'text-sm px-5 py-2.5',
  lg: 'text-base px-6 py-3',
};

export default function Giveaways() {
  const [ref, inView] = useInView({ threshold: 0.1 });

  return (
    <section id="giveaways" ref={ref} className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, ease: 'easeOut' }}
            >
              <p className="text-[#c9a84c] text-xs font-semibold tracking-widest uppercase mb-3">
                Customised Giveaways
              </p>
              <h2 className="text-4xl lg:text-5xl font-bold text-[#1d1d1f] tracking-tight mb-5">
                Something Special<br />
                <span className="text-[#1d1d1f]/50">for Every Brand</span>
              </h2>
              <p className="text-[#1d1d1f]/55 text-base leading-relaxed mb-8">
                From branded office supplies to luxury gift sets — we create personalised giveaways that leave a lasting impression on your clients, team, and partners.
              </p>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#1d1d1f] text-white text-sm font-semibold hover:bg-[#c9a84c] transition-colors duration-300"
              >
                Request a Custom Quote
                <ArrowRight size={15} />
              </a>
            </motion.div>

            {/* Gift package image */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15, ease: 'easeOut' }}
              className="mt-10 rounded-2xl overflow-hidden shadow-xl"
            >
              <img
                src="/images/gift-package.jpg"
                alt="Corporate Branding Gift Package"
                className="w-full object-cover"
              />
              <div className="bg-[#0f0f0f] px-5 py-3 flex items-center justify-between">
                <div>
                  <p className="text-white text-sm font-semibold">Corporate Branding Gift Package</p>
                  <p className="text-white/45 text-xs">Building Solutions, Delivering Trust.</p>
                </div>
                <div className="w-6 h-6 rounded-full bg-[#c9a84c] flex items-center justify-center flex-shrink-0">
                  <ArrowRight size={11} className="text-white" />
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right: Tag cloud */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-wrap gap-3"
          >
            {categories.map((cat, i) => (
              <motion.span
                key={cat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.05 + i * 0.04 }}
                className={`${sizeClass[cat.size]} font-medium text-[#1d1d1f] bg-[#f5f5f7] border border-black/8 rounded-full cursor-default hover:bg-[#1d1d1f] hover:text-white hover:border-[#1d1d1f] transition-colors duration-200`}
              >
                {cat.label}
              </motion.span>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
