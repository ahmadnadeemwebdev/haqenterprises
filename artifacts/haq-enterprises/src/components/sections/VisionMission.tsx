import { motion } from 'framer-motion';
import { useInView } from '@/hooks/use-in-view';

const visionPillars = [
  'Innovative Excellence',
  'Client-Centric Approach',
  'Sustainable Future',
  'Technology-Driven Innovation',
];

const missionPillars = [
  'Quality Assurance',
  'Customer Commitment',
  'Operational Excellence',
  'Continuous Innovation',
];

export default function VisionMission() {
  const [ref, inView] = useInView({ threshold: 0.15 });

  return (
    <section ref={ref} className="bg-[#f5f5f7] py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <p className="text-[#1d1d1f]/60 text-xs font-semibold tracking-widest uppercase mb-3">
            Our Direction
          </p>
          <h2 className="text-4xl lg:text-5xl font-bold text-[#1d1d1f] tracking-tight">
            Vision &amp; Mission
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Vision */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.65, ease: 'easeOut' }}
            className="bg-[#1d1d1f] rounded-2xl p-8 lg:p-10 flex flex-col"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-white/70" />
              </div>
              <p className="text-white/45 text-xs font-semibold tracking-widest uppercase">The Vision</p>
            </div>
            <h3 className="text-2xl font-bold text-white mb-4 tracking-tight">
              Lead the Industry
            </h3>
            <p className="text-white/65 text-base leading-relaxed flex-1 mb-8">
              To lead the printing and packaging industry by delivering innovative, high-quality, and reliable solutions. We continuously invest in advanced technology, skilled professionals, and creative excellence to exceed customer expectations and build lasting partnerships.
            </p>
            <div className="flex flex-wrap gap-2">
              {visionPillars.map((pillar) => (
                <span
                  key={pillar}
                  className="text-xs font-medium text-white/70 bg-white/8 border border-white/10 rounded-full px-3.5 py-1.5"
                >
                  {pillar}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Mission */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.65, delay: 0.12, ease: 'easeOut' }}
            className="bg-white border border-black/8 rounded-2xl p-8 lg:p-10 flex flex-col"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 rounded-full bg-[#1d1d1f]/8 flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-[#1d1d1f]" />
              </div>
              <p className="text-[#1d1d1f]/60 text-xs font-semibold tracking-widest uppercase">The Mission</p>
            </div>
            <h3 className="text-2xl font-bold text-[#1d1d1f] mb-4 tracking-tight">
              Deliver Excellence
            </h3>
            <p className="text-[#1d1d1f]/60 text-base leading-relaxed flex-1 mb-8">
              To provide exceptional printing and packaging services through innovation, precision, and quality craftsmanship. We are committed to delivering cost-effective solutions that strengthen our clients' brands and ensure complete customer satisfaction.
            </p>
            <div className="flex flex-wrap gap-2">
              {missionPillars.map((pillar) => (
                <span
                  key={pillar}
                  className="text-xs font-medium text-[#1d1d1f]/60 bg-[#f5f5f7] border border-black/8 rounded-full px-3.5 py-1.5"
                >
                  {pillar}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
