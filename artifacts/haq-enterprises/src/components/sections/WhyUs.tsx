import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import { useInView } from '@/hooks/use-in-view';

const points = [
  'State-of-the-art printing technology and equipment',
  'End-to-end event management with seamless execution',
  'Customised solutions tailored to every client\'s needs',
  'Trusted by 50+ corporate clients across Pakistan',
  'ISO quality standards with 100% quality guarantee',
  'Eco-friendly production and sustainable practices',
];

export default function WhyUs() {
  const [ref, inView] = useInView({ threshold: 0.1 });

  return (
    <section ref={ref} className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.65, ease: 'easeOut' }}
          >
            <p className="text-[#1d1d1f]/60 text-xs font-semibold tracking-widest uppercase mb-3">
              Why Choose Us
            </p>
            <h2 className="text-4xl lg:text-5xl font-bold text-[#1d1d1f] tracking-tight mb-5">
              Quality You Can<br />
              <span className="text-[#1d1d1f]/50">Count On</span>
            </h2>
            <p className="text-[#1d1d1f]/55 text-base leading-relaxed mb-8">
              With over 5 years of industry experience and a commitment to excellence, we've built lasting partnerships with some of Pakistan's most demanding brands.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#1d1d1f] text-white text-sm font-semibold hover:bg-[#1d1d1f] transition-colors duration-300"
            >
              Work With Us
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.65, delay: 0.1, ease: 'easeOut' }}
            className="space-y-3"
          >
            {points.map((point, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 15 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.45, delay: 0.1 + i * 0.07 }}
                className="flex items-start gap-3 bg-[#f5f5f7] rounded-xl px-5 py-4"
              >
                <CheckCircle2 size={18} className="text-[#1d1d1f]/60 flex-shrink-0 mt-0.5" />
                <p className="text-[#1d1d1f] text-sm font-medium">{point}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
