import { motion } from 'framer-motion';
import { Printer, HeartHandshake, Leaf, Cpu, Eye, Medal } from 'lucide-react';
import { useInView } from '@/hooks/use-in-view';

const values = [
  {
    icon: Printer,
    title: "Innovative Excellence",
    description: "Creativity meets precision. We continuously invest in the latest printing technologies and creative talent to deliver results that genuinely stand out.",
  },
  {
    icon: HeartHandshake,
    title: "Client-Centric Approach",
    description: "Every client is a long-term partner. We dedicate a team to each account, ensuring your brand's specific requirements are deeply understood and always exceeded.",
  },
  {
    icon: Leaf,
    title: "Sustainable Future",
    description: "We actively choose FSC-certified materials, soy-based inks, and carbon-conscious production. Responsible printing is not optional — it's core to our identity.",
  },
  {
    icon: Cpu,
    title: "Technology-Driven",
    description: "From digital proofing to automated quality checks, our facility is equipped with state-of-the-art machinery that guarantees consistency and speed at scale.",
  },
  {
    icon: Eye,
    title: "Uncompromising Quality",
    description: "Every project goes through multiple quality control stages. We only release work that meets our exacting standards — no exceptions, no shortcuts.",
  },
  {
    icon: Medal,
    title: "On-Time, Every Time",
    description: "Deadlines matter. We plan every production run with buffer time and transparent milestones, so your order arrives when it was promised.",
  },
];

export function ValuesSection() {
  const [ref, inView] = useInView({ threshold: 0.1 });

  return (
    <section id="about" className="py-24 md:py-32 bg-white">
      <div className="container mx-auto px-6 max-w-7xl">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-end mb-16">
          <div>
            <p className="section-label mb-3">Our Foundation</p>
            <h2 className="text-4xl md:text-5xl font-bold text-[#1d1d1f] leading-tight tracking-tight">
              Vision & Core Values
            </h2>
          </div>
          <p className="text-[#6e6e73] text-lg font-light leading-relaxed max-w-lg">
            Founded in Qatar, Haq Enterprises was built on a simple belief: every brand deserves print and packaging that reflects its true quality. Six principles guide everything we do.
          </p>
        </div>

        <div ref={ref as any} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {values.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.07 }}
                className="group bg-[#f5f5f7] hover:bg-white rounded-2xl p-8 flex flex-col card-shadow transition-colors duration-300 cursor-default"
              >
                <div className="w-11 h-11 rounded-xl bg-white flex items-center justify-center mb-6 shadow-sm group-hover:shadow transition-shadow duration-300">
                  <Icon className="w-5 h-5 text-[#1d1d1f]" strokeWidth={1.5}/>
                </div>
                <h3 className="text-base font-bold text-[#1d1d1f] mb-2 tracking-tight">{item.title}</h3>
                <p className="text-[#6e6e73] text-sm leading-relaxed font-light flex-grow">{item.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
