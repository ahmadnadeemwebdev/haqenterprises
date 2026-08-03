import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from '@/hooks/use-in-view';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';

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

const products = [
  {
    src: '/images/gift-package.jpg',
    title: 'Corporate Branding Gift Package',
    subtitle: 'Thermos · Notebook · Keychain · Pen',
  },
  {
    src: '/images/product-2_2-branded.jpg',
    title: 'Executive Premium Gift Set',
    subtitle: 'Bottle · Wallet · Gold Pen · Earbuds',
  },
  {
    src: '/images/product-3_2-branded.jpg',
    title: 'Luxury Packaging Collection',
    subtitle: 'Power Bank · USB Hub · Notebook · Mug',
  },
  {
    src: '/images/product-4_2-branded.jpg',
    title: 'Corporate Event Apparel Set',
    subtitle: 'Polo · Cap · Tote Bag · Umbrella',
  },
  {
    src: '/images/product-5_2-branded.jpg',
    title: 'Premium Desk Accessories Kit',
    subtitle: 'Wireless Pad · Planner · Organizer · Pencil',
  },
];

export default function Giveaways() {
  const [ref, inView] = useInView({ threshold: 0.1 });
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  const go = (dir: number) => {
    setDirection(dir);
    setCurrent((prev) => (prev + dir + products.length) % products.length);
  };

  return (
    <section id="giveaways" ref={ref} className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Content */}
          <div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, ease: 'easeOut' }}
            >
              <p className="text-[#1d1d1f]/50 text-xs font-semibold tracking-widest uppercase mb-3">
                Customised Giveaways
              </p>
              <h2 className="text-4xl lg:text-5xl font-bold text-[#1d1d1f] tracking-tight mb-5">
                Something Special<br />
                <span className="text-[#1d1d1f]/40">for Every Brand</span>
              </h2>
              <p className="text-[#1d1d1f]/55 text-base leading-relaxed mb-8">
                From branded office supplies to luxury gift sets — we create personalised giveaways that leave a lasting impression on your clients, team, and partners.
              </p>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#1d1d1f] text-white text-sm font-semibold hover:bg-[#3a3a3c] transition-colors duration-300"
              >
                Request a Custom Quote
                <ArrowRight size={15} />
              </a>
            </motion.div>

            {/* Product Carousel */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.15, ease: 'easeOut' }}
              className="mt-10 rounded-2xl overflow-hidden shadow-xl bg-[#0f0f0f]"
            >
              {/* Image area with sliding animation */}
              <div className="relative overflow-hidden" style={{ aspectRatio: '4/3' }}>
                <AnimatePresence mode="wait" custom={direction}>
                  <motion.img
                    key={current}
                    custom={direction}
                    variants={{
                      enter: (d: number) => ({ x: d > 0 ? '100%' : '-100%', opacity: 0 }),
                      center: { x: 0, opacity: 1 },
                      exit: (d: number) => ({ x: d > 0 ? '-100%' : '100%', opacity: 0 }),
                    }}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
                    src={products[current].src}
                    alt={products[current].title}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </AnimatePresence>

                {/* Dot indicators */}
                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
                  {products.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => { setDirection(i > current ? 1 : -1); setCurrent(i); }}
                      className={`rounded-full transition-all duration-300 ${i === current ? 'bg-white w-5 h-1.5' : 'bg-white/40 w-1.5 h-1.5'}`}
                    />
                  ))}
                </div>
              </div>

              {/* Caption + nav row */}
              <div className="px-5 py-3.5 flex items-center justify-between">
                <div>
                  <p className="text-white text-sm font-semibold">{products[current].title}</p>
                  <p className="text-white/45 text-xs mt-0.5">{products[current].subtitle}</p>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => go(-1)}
                    className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors duration-200"
                    aria-label="Previous product"
                  >
                    <ChevronLeft size={15} className="text-white" />
                  </button>
                  <button
                    onClick={() => go(1)}
                    className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors duration-200"
                    aria-label="Next product"
                  >
                    <ChevronRight size={15} className="text-white" />
                  </button>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right: Tag cloud */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="flex flex-wrap gap-3"
          >
            {categories.map((cat, i) => (
              <motion.span
                key={cat.label}
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
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
