import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const photos = [
  { srcJpg: '/images/event-1.jpg', srcWebp: '/images/event-1.webp', caption: 'Huawei Data Center Carnival 2026', span: 'col-span-2 row-span-2' },
  { srcJpg: '/images/event-conf1.jpg', srcWebp: '/images/event-conf1.webp', caption: 'Conference Presentation', span: '' },
  { srcJpg: '/images/event-conf2.jpg', srcWebp: '/images/event-conf2.webp', caption: 'Event Branding & Signage', span: '' },
  { srcJpg: '/images/event-2.jpg', srcWebp: '/images/event-2.webp', caption: 'Sufi Beats & Digital Feats — Tech Evening 2026', span: 'col-span-2' },
  { srcJpg: '/images/event-3.jpg', srcWebp: '/images/event-3.webp', caption: 'Huawei EZY Policy & Partnership Summit', span: '' },
  { srcJpg: '/images/event-4.jpg', srcWebp: '/images/event-4.webp', caption: 'Huawei Sales Summit 2026', span: '' },
];

export default function Portfolio() {
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

  const [ref, inView] = useInViewLocal({ threshold: 0.1 });

  return (
    <section id="events" ref={ref} className="bg-[#0f0f0f] py-24">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-center mb-14"
        >
          <p className="text-white/45 text-xs font-semibold tracking-widest uppercase mb-3">
            Events Showcase
          </p>
          <h2 className="text-4xl lg:text-5xl font-bold text-white tracking-tight mb-4">
            Huawei &amp; EZY
          </h2>
          <p className="text-white/50 text-base max-w-xl mx-auto">
            Moments that define our journey — showcasing the corporate events we've delivered with passion and precision.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {photos.map((photo, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: i * 0.07, ease: 'easeOut' }}
              className="group relative rounded-xl overflow-hidden aspect-video bg-white/5"
            >
                <picture>
                  <source srcSet={photo.srcWebp} type="image/webp" />
                  <img
                    src={photo.srcJpg}
                    alt={photo.caption}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-102"
                    width={800}
                    height={600}
                    loading="lazy"
                    decoding="async"
                  />
                </picture>
              <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <p className="text-white text-xs font-medium">{photo.caption}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center text-white/30 text-sm mt-8"
        >
          Trusted by Huawei, EZY, KIA, Jazz, COMSATS University, and more leading organizations.
        </motion.p>
      </div>
    </section>
  );
}
