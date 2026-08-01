import { motion } from 'framer-motion';
import { MessageSquare, PenLine, Factory, Truck } from 'lucide-react';
import { useInView } from '@/hooks/use-in-view';

const steps = [
  {
    number: '01',
    icon: MessageSquare,
    title: 'Consultation & Brief',
    description:
      "We begin every project with a deep understanding of your brand, goals, and requirements. Our team listens carefully to craft a strategy perfectly aligned with your vision.",
    detail: ['Brand discovery session', 'Requirement scoping', 'Budget & timeline planning'],
  },
  {
    number: '02',
    icon: PenLine,
    title: 'Design & Sampling',
    description:
      'Our in-house design team creates mockups, prototypes, and physical samples for your approval. We refine until every detail is exactly right — no shortcuts.',
    detail: ['Custom artwork & mockups', 'Physical sample approval', 'Material selection'],
  },
  {
    number: '03',
    icon: Factory,
    title: 'Quality Production',
    description:
      'State-of-the-art machinery combined with rigorous quality checks at every stage ensures your order meets the highest international standards before it leaves our facility.',
    detail: ['ISO-standard production', 'Multi-stage QC checks', 'Eco-friendly options available'],
  },
  {
    number: '04',
    icon: Truck,
    title: 'Delivery & Support',
    description:
      'We deliver on time, every time. After delivery, our team remains available for post-project support, reorders, and any adjustments you may need.',
    detail: ['On-time Qatar-wide delivery', 'Real-time order tracking', 'Post-delivery support'],
  },
];

export function ProcessSection() {
  const [ref, inView] = useInView({ threshold: 0.1 });

  return (
    <section id="process" className="py-24 md:py-32 bg-[#f5f5f7]">
      <div className="container mx-auto px-6 max-w-7xl">

        <div className="text-center max-w-2xl mx-auto mb-20">
          <p className="section-label mb-3">Our Process</p>
          <h2 className="text-4xl md:text-5xl font-bold text-[#1d1d1f] leading-tight tracking-tight">
            How We Work
          </h2>
          <p className="text-[#6e6e73] mt-4 font-light text-lg leading-relaxed">
            A structured, transparent process — from your first call to the final delivery.
          </p>
        </div>

        <div ref={ref as any} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {/* Connector line */}
          <div className="hidden lg:block absolute top-10 left-[12.5%] right-[12.5%] h-px bg-[#d2d2d7] z-0" />

          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className="relative z-10 flex flex-col"
              >
                {/* Step icon circle */}
                <div className="flex items-center mb-6">
                  <div className="w-20 h-20 rounded-full bg-white card-shadow flex items-center justify-center relative border border-[#e8e8ed]">
                    <Icon className="w-7 h-7 text-[#1d1d1f]" strokeWidth={1.5} />
                    <span className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-[#1d1d1f] text-white text-[10px] font-bold flex items-center justify-center">
                      {step.number.replace('0', '')}
                    </span>
                  </div>
                </div>

                <h3 className="text-lg font-bold text-[#1d1d1f] mb-3 tracking-tight">{step.title}</h3>
                <p className="text-[#6e6e73] text-sm leading-relaxed font-light mb-4">{step.description}</p>
                <ul className="space-y-1.5">
                  {step.detail.map((d, j) => (
                    <li key={j} className="flex items-center gap-2 text-xs text-[#424245]">
                      <span className="w-1 h-1 rounded-full bg-[#1d1d1f] flex-shrink-0" />
                      {d}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
