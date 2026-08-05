import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { useState, useEffect } from 'react';

const services = [
  {
    title: 'Event Management',
    description: 'Complete event planning and seamless execution from start to finish. From intimate corporate gatherings to large-scale productions.',
    srcJpg: '/images/NBL08757.jpg',
    srcWebp: '/images/NBL08757.jpg',
    tag: 'Core Service',
  },
  {
    title: 'Conferences',
    description: 'Professional conference solutions designed for impactful business engagement. End-to-end production, AV, branding, and logistics.',
    srcJpg: '/images/event-2.jpg',
    srcWebp: '/images/event-2.webp',
    tag: 'Core Service',
  },
  {
    title: 'Exhibitions',
    description: 'Creative exhibition solutions that maximize brand visibility and audience engagement at trade shows and expos.',
    srcJpg: '/images/event-3.jpg',
    srcWebp: '/images/event-3.webp',
    tag: 'Popular',
  },
  {
    title: 'Product Launches',
    description: 'Strategic launch events that create excitement, media attention, and lasting impact for your brand\'s new offerings.',
    srcJpg: '/images/event-4.jpg',
    srcWebp: '/images/event-4.webp',
    tag: 'Popular',
  },
];

function useInViewLocal(options = { threshold: 0.1 }) {
  const [ref, setRef] = useState<HTMLElement | null>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    if (!ref) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsInView(true);
        observer.disconnect();
      }
    }, options as IntersectionObserverInit);

    observer.observe(ref);

    return () => {
      if (ref) observer.unobserve(ref);
    };
  }, [ref, options.threshold]);

  return [setRef, isInView] as const;
}

export default function Solutions() {
  const [ref, inView] = useInViewLocal({ threshold: 0.1 });

  return (
    <section id="services" ref={ref} className="bg-[#f5f5f7] py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <p className="text-[#1d1d1f]/60 text-xs font-semibold tracking-widest uppercase mb-3">
            What We Do
          </p>
          <h2 className="text-4xl lg:text-5xl font-bold text-[#1d1d1f] tracking-tight mb-4">
            Our Services
          </h2>
          <p className="text-[#1d1d1f]/55 text-base max-w-xl mx-auto">
            End-to-end printing, packaging, event management, and branded giveaway solutions designed to help businesses in Pakistan stand out and perform with confidence.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-5">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: i * 0.09, ease: 'easeOut' }}
              className="group relative rounded-2xl overflow-hidden aspect-[4/3] cursor-pointer"
            >
              <picture>
                <source srcSet={(service as any).srcWebp} type="image/webp" />
                <img
                  src={(service as any).srcJpg}
                  alt={service.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-102"
                  width={800}
                  height={600}
                  loading="lazy"
                />
              </picture>
              <div className="absolute inset-0 bg-linear-to-t from-black/85 via-black/30 to-transparent" />

              {/* Tag */}
              <div className="absolute top-4 left-4">
                <span className="text-xs font-semibold text-white/85 bg-black/40 backdrop-blur-sm border border-white/20 rounded-full px-3 py-1">
                  {service.tag}
                </span>
              </div>

              {/* Arrow */}
              <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <ArrowUpRight size={15} className="text-white" />
              </div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-white font-bold text-xl mb-2 tracking-tight">
                  {service.title}
                </h3>
                <p className="text-white/70 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
