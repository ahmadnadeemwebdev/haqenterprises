import { motion } from 'framer-motion';
import { useInView } from '@/hooks/use-in-view';

export default function CEO() {
  const [ref, inView] = useInView({ threshold: 0.2 });

  return (
    <section id="about" className="relative overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <img
          src="/images/mission-bg.jpg"
          alt="Haq Enterprises Print Studio"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#0f0f0f]/88" />
      </div>

      <div
        ref={ref}
        className="relative z-10 max-w-7xl mx-auto px-6 py-24 lg:py-32"
      >
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: About text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            <p className="text-white/40 text-xs font-semibold tracking-widest uppercase mb-4">
              About Us
            </p>
            <h2 className="text-4xl lg:text-5xl font-bold text-white leading-tight tracking-tight mb-6">
              State-of-the-Art<br />
              <span className="text-white/55">Printing &amp; Packaging</span>
            </h2>
            <p className="text-white/65 text-base leading-relaxed mb-5">
              Haq Enterprises is a full-service printing and packaging company. With over 5 years of industry experience, we have earned a trusted reputation for delivering premium printing and packaging solutions.
            </p>
            <p className="text-white/65 text-base leading-relaxed">
              Driven by innovation, advanced technology, and skilled professionals, we provide creative, high-quality, and reliable solutions tailored to meet the unique needs of every client.
            </p>
          </motion.div>

          {/* Right: CEO quote */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15, ease: 'easeOut' }}
            className="relative"
          >
            {/* Decorative quote mark */}
            <div className="absolute -top-6 -left-4 text-[120px] font-serif text-white/8 leading-none select-none pointer-events-none">
              "
            </div>
            <div className="relative bg-white/5 border border-white/10 rounded-2xl p-8 lg:p-10">
              <p className="text-white/40 text-xs font-semibold tracking-widest uppercase mb-5">
                Message From The Founder
              </p>
              <blockquote className="text-white/80 text-lg leading-relaxed italic mb-8">
                "At Haq Enterprises, we believe great events are built on vision, creativity, and flawless execution. Every project is an opportunity to create lasting memories and deliver experiences that truly inspire. Our commitment is simple — to exceed expectations, build trusted relationships, and bring every client's vision to life with passion and professionalism."
              </blockquote>

              {/* Attribution — left-aligned */}
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-white/10 border border-white/15 flex items-center justify-center flex-shrink-0">
                  <span className="text-white/70 font-bold text-sm">TA</span>
                </div>
                <div>
                  <p className="text-white font-semibold text-sm">Talha Azeem</p>
                  <p className="text-white/45 text-xs">Founder &amp; CEO, Haq Enterprises</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
