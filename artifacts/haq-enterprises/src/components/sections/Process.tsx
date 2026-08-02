import { motion } from 'framer-motion';
import { MessageSquare, Lightbulb, Wrench, Trophy } from 'lucide-react';
import { useInView } from '@/hooks/use-in-view';

const steps = [
  {
    icon: MessageSquare,
    step: '01',
    title: 'Consultation',
    description: 'We begin by understanding your vision, goals, and requirements through a detailed brief.',
  },
  {
    icon: Lightbulb,
    step: '02',
    title: 'Strategy & Design',
    description: 'Our creative team develops a tailored plan and design concepts that align with your brand.',
  },
  {
    icon: Wrench,
    step: '03',
    title: 'Production',
    description: 'We execute with precision — from printing and packaging to event setup and logistics.',
  },
  {
    icon: Trophy,
    step: '04',
    title: 'Delivery',
    description: 'On-time delivery with a quality check at every stage and your complete satisfaction guaranteed.',
  },
];

export default function Process() {
  const { ref, inView } = useInView({ threshold: 0.1 });

  return (
    <section ref={ref} className="bg-[#f5f5f7] py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <p className="text-[#c9a84c] text-xs font-semibold tracking-widest uppercase mb-3">
            How We Work
          </p>
          <h2 className="text-4xl lg:text-5xl font-bold text-[#1d1d1f] tracking-tight mb-4">
            Our Process
          </h2>
          <p className="text-[#1d1d1f]/55 text-base max-w-md mx-auto">
            A streamlined workflow ensuring quality and precision at every step.
          </p>
        </div>

        <div className="relative">
          {/* Connector line */}
          <div className="hidden lg:block absolute top-10 left-[calc(12.5%+1rem)] right-[calc(12.5%+1rem)] h-px bg-gradient-to-r from-transparent via-black/10 to-transparent" />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.55, delay: i * 0.1, ease: 'easeOut' }}
                  className="relative text-center"
                >
                  <div className="relative inline-flex flex-col items-center">
                    <div className="w-20 h-20 rounded-2xl bg-white border border-black/8 shadow-sm flex items-center justify-center mb-5 mx-auto">
                      <Icon size={26} className="text-[#c9a84c]" />
                    </div>
                    <span className="absolute -top-2 -right-2 text-[10px] font-bold text-[#c9a84c] bg-[#c9a84c]/10 rounded-full w-5 h-5 flex items-center justify-center">
                      {step.step}
                    </span>
                  </div>
                  <h3 className="font-bold text-[#1d1d1f] text-base mb-2">{step.title}</h3>
                  <p className="text-[#1d1d1f]/55 text-sm leading-relaxed">{step.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
