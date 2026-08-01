import { motion } from 'framer-motion';
import { PenTool, Shirt, Laptop, Sprout, Gift, Award, Package, Printer, LayoutGrid } from 'lucide-react';
import { useInView } from '@/hooks/use-in-view';

const solutions = [
  {
    icon: Printer,
    title: "Commercial Printing",
    description: "Brochures, catalogues, annual reports, flyers, banners, and large-format prints. Every piece produced with precision and vibrant colour accuracy.",
    image: "https://images.unsplash.com/photo-1562016600-ece13e8ba570?w=800&q=80",
    tag: "Core Service",
  },
  {
    icon: Package,
    title: "Custom Packaging",
    description: "Luxury rigid boxes, folding cartons, mailer boxes, bags, and retail packaging. Custom die-cuts, embossing, foiling, and spot UV available.",
    image: "https://images.unsplash.com/photo-1605000797499-95a51c5269ae?w=800&q=80",
    tag: "Core Service",
  },
  {
    icon: PenTool,
    title: "Branded Stationery",
    description: "Custom notebooks, executive planners, desk calendars, letterheads, and premium writing instruments — all tailored to your brand guidelines.",
    image: "https://images.unsplash.com/photo-1583485088034-697b5a541b36?w=800&q=80",
    tag: "Popular",
  },
  {
    icon: Shirt,
    title: "Apparel & Uniforms",
    description: "Corporate wear, event t-shirts, custom tote bags, branded caps, and full uniform solutions for teams and events of any size.",
    image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=800&q=80",
    tag: "Popular",
  },
  {
    icon: Laptop,
    title: "Tech Accessories",
    description: "Branded power banks, wireless chargers, USB flash drives, mouse pads, and executive desk accessories with your logo.",
    image: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=800&q=80",
    tag: "Growing",
  },
  {
    icon: Sprout,
    title: "Eco-Friendly Products",
    description: "Sustainable drinkware, recycled tote bags, bamboo products, and green corporate kits. Show your clients you care about the planet.",
    image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&q=80",
    tag: "Trending",
  },
  {
    icon: Gift,
    title: "Corporate Gift Kits",
    description: "Fully curated, custom-assembled gift boxes for events, onboarding, Ramadan, year-end, and client appreciation. We handle sourcing, assembly, and delivery.",
    image: "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?w=800&q=80",
    tag: "Best Seller",
  },
  {
    icon: Award,
    title: "Luxury & High-End Gifts",
    description: "Crystal awards, engraved plaques, premium leather goods, and bespoke executive gift sets for VIP clients and milestone celebrations.",
    image: "https://images.unsplash.com/photo-1606214555818-f09b53e70afb?w=800&q=80",
    tag: "Premium",
  },
  {
    icon: LayoutGrid,
    title: "Event & Exhibition",
    description: "Roll-up banners, exhibition stands, event signage, backdrop prints, and branded event materials for trade shows, conferences, and product launches.",
    image: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&q=80",
    tag: "Popular",
  },
];

export function SolutionsSection() {
  const [ref, inView] = useInView({ threshold: 0.05 });

  return (
    <section id="giveaways" className="py-24 md:py-32 bg-[#f5f5f7]">
      <div className="container mx-auto px-6 max-w-7xl">

        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-xl">
            <p className="section-label mb-3">What We Deliver</p>
            <h2 className="text-4xl md:text-5xl font-bold text-[#1d1d1f] leading-tight tracking-tight">
              Products & Services
            </h2>
          </div>
          <p className="text-[#6e6e73] max-w-sm font-light leading-relaxed text-sm md:text-base">
            From a single business card to a full brand activation campaign — we handle it all with the same precision and care.
          </p>
        </div>

        <div ref={ref as any} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {solutions.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="group bg-white rounded-2xl overflow-hidden card-shadow flex flex-col"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={s.image}
                    alt={s.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm text-[#1d1d1f] text-[10px] font-bold tracking-wider uppercase px-2.5 py-1 rounded-full">
                    {s.tag}
                  </span>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-8 h-8 rounded-lg bg-[#f5f5f7] flex items-center justify-center flex-shrink-0">
                      <Icon className="w-4 h-4 text-[#1d1d1f]" strokeWidth={1.5}/>
                    </div>
                    <h3 className="text-base font-bold text-[#1d1d1f] tracking-tight">{s.title}</h3>
                  </div>
                  <p className="text-[#6e6e73] text-sm leading-relaxed font-light flex-grow">{s.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
