import { useRef, useEffect, useState } from 'react';

const stats = [
  { value: 200, suffix: '+', label: 'Projects Delivered' },
  { value: 50, suffix: '+', label: 'Corporate Clients' },
  { value: 5, suffix: '+', label: 'Years Experience' },
  { value: 100, suffix: '%', label: 'Quality Guaranteed' },
];

function CountUp({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const duration = 1400;
          const steps = 50;
          const increment = target / steps;
          let current = 0;
          const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
              setCount(target);
              clearInterval(timer);
            } else {
              setCount(Math.floor(current));
            }
          }, duration / steps);
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return (
    <span ref={ref}>
      {count}{suffix}
    </span>
  );
}

export default function Stats() {
  return (
    <section className="bg-[#0f0f0f] py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col items-center justify-center rounded-3xl border border-white/10 bg-white/5 px-6 py-8 text-center">
              <div className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-1">
                <CountUp target={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-white/50 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
