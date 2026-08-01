import { motion } from 'framer-motion';
import { useInView } from '@/hooks/use-in-view';
import { useEffect, useRef, useState } from 'react';

function CountUp({ target, suffix = '' }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const [ref, inView] = useInView({ threshold: 0.5 });

  useEffect(() => {
    if (inView && !started) {
      setStarted(true);
      const duration = 1800;
      const steps = 60;
      const increment = target / steps;
      let current = 0;
      const timer = setInterval(() => {
        current += increment;
        if (current >= target) { setCount(target); clearInterval(timer); }
        else setCount(Math.floor(current));
      }, duration / steps);
      return () => clearInterval(timer);
    }
  }, [inView, started, target]);

  return <span ref={ref as any}>{count}{suffix}</span>;
}

const stats = [
  { value: 200, suffix: '+', label: 'Projects Delivered', sub: 'Across Qatar & the GCC' },
  { value: 50,  suffix: '+', label: 'Corporate Clients',  sub: 'From SMEs to multinationals' },
  { value: 5,   suffix: '+', label: 'Years of Excellence', sub: 'In print & packaging' },
  { value: 100, suffix: '%', label: 'Quality Guaranteed', sub: 'Every order, every time' },
];

export function StatsSection() {
  const [ref, inView] = useInView({ threshold: 0.1 });

  return (
    <section className="py-20 bg-[#1d1d1f]">
      <div ref={ref as any} className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-white/10 rounded-2xl overflow-hidden">
          {stats.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-[#1d1d1f] flex flex-col items-center justify-center py-12 px-6 text-center"
            >
              <div className="text-5xl md:text-6xl font-bold text-white tracking-tight mb-2">
                <CountUp target={s.value} suffix={s.suffix} />
              </div>
              <div className="text-base font-semibold text-white/80 mb-1">{s.label}</div>
              <div className="text-sm text-white/40 font-light">{s.sub}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
