import { motion } from 'framer-motion';
import { Shield, Sparkles, Zap, Award, HeartHandshake, Users } from 'lucide-react';
import { useInView } from '@/hooks/use-in-view';

const values = [
  {
    icon: Shield,
    title: 'Integrity',
    description: 'Delivering premium-quality printing and packaging with precision and consistency in every project.',
  },
  {
    icon: Sparkles,
    title: 'Creativity',
    description: 'Transforming ideas into unique and unforgettable brand experiences that leave lasting impressions.',
  },
  {
    icon: Zap,
    title: 'Innovation',
    description: 'Embracing fresh ideas and advanced technology to create impactful, modern solutions.',
  },
  {
    icon: Award,
    title: 'Excellence',
    description: 'Delivering outstanding quality with precision in every event and every single project.',
  },
  {
    icon: HeartHandshake,
    title: 'Client Commitment',
    description: 'Understanding every client\'s vision deeply and consistently exceeding their expectations.',
  },
  {
    icon: Users,
    title: 'Teamwork',
    description: 'Collaborating with passion and expertise to ensure seamless execution from start to finish.',
  },
];

export default function Values() {
  const [ref, inView] = useInView({ threshold: 0.1 });

  return (
    <section ref={ref} className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <p className="text-[#1d1d1f]/60 text-xs font-semibold tracking-widest uppercase mb-3">
            The Foundation
          </p>
          <h2 className="text-4xl lg:text-5xl font-bold text-[#1d1d1f] tracking-tight mb-4">
            Our Core Values
          </h2>
          <p className="text-[#1d1d1f]/55 text-base max-w-xl mx-auto">
            The principles that guide every project, every partnership, and every promise we make.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {values.map((value, i) => {
            const Icon = value.icon;
            return (
              <motion.div
                key={value.title}
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ duration: 0.55, delay: i * 0.07, ease: 'easeOut' }}
                className="group bg-[#f5f5f7] hover:bg-[#1d1d1f] rounded-2xl p-7 transition-colors duration-300"
              >
                <div className="w-10 h-10 rounded-xl bg-[#1d1d1f]/8 group-hover:bg-white/10 flex items-center justify-center mb-5 transition-colors duration-300">
                  <Icon size={20} className="text-[#1d1d1f]/60 group-hover:text-white/70 transition-colors duration-300" />
                </div>
                <h3 className="text-[#1d1d1f] group-hover:text-white font-bold text-lg mb-2 transition-colors duration-300">
                  {value.title}
                </h3>
                <p className="text-[#1d1d1f]/55 group-hover:text-white/60 text-sm leading-relaxed transition-colors duration-300">
                  {value.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
