import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import { useInView } from '@/hooks/use-in-view';

const testimonials = [
  {
    quote:
      "Haq Enterprises transformed our annual conference experience. The branded merchandise and packaging they delivered were of exceptional quality — our guests were genuinely impressed. Delivery was on time and the team was incredibly professional.",
    name: "Sarah Al-Mahmoud",
    title: "Head of Corporate Communications",
    company: "Ooredoo Qatar",
    initials: "SM",
    color: "#E30613",
  },
  {
    quote:
      "We've been working with Haq Enterprises for 3 years across multiple projects. Their attention to detail, eco-friendly packaging solutions, and ability to handle large orders without compromising quality makes them our go-to printing partner.",
    name: "James Whitfield",
    title: "Senior Procurement Manager",
    company: "ExxonMobil Qatar",
    initials: "JW",
    color: "#003087",
  },
  {
    quote:
      "The corporate gift boxes they created for our end-of-year client gifting programme exceeded every expectation. Premium materials, flawless print quality, and a design team that actually understood our brand guidelines.",
    name: "Fatima Al-Naimi",
    title: "Brand & Marketing Director",
    company: "KPMG Qatar",
    initials: "FN",
    color: "#00338D",
  },
];

export function TestimonialsSection() {
  const [ref, inView] = useInView({ threshold: 0.1 });

  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="container mx-auto px-6 max-w-7xl">

        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="section-label mb-3">Client Voices</p>
          <h2 className="text-4xl md:text-5xl font-bold text-[#1d1d1f] leading-tight tracking-tight">
            What Our Clients Say
          </h2>
          <p className="text-[#6e6e73] mt-4 font-light text-lg">
            Trusted by leading organisations across Qatar and the Gulf.
          </p>
        </div>

        <div ref={ref as any} className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: i * 0.1 }}
              className="bg-[#f5f5f7] hover:bg-white rounded-2xl p-8 flex flex-col card-shadow transition-colors duration-300"
            >
              <Quote className="w-8 h-8 text-[#d2d2d7] mb-5 flex-shrink-0" />
              <p className="text-[#424245] text-sm leading-relaxed font-light flex-grow mb-8 italic">
                "{t.quote}"
              </p>
              <div className="flex items-center gap-4">
                <div
                  className="w-11 h-11 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0"
                  style={{ backgroundColor: t.color }}
                >
                  {t.initials}
                </div>
                <div>
                  <div className="text-sm font-semibold text-[#1d1d1f]">{t.name}</div>
                  <div className="text-xs text-[#6e6e73]">{t.title}</div>
                  <div className="text-xs font-medium text-[#6e6e73]">{t.company}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
