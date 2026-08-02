import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Globe, Send } from 'lucide-react';
import { useInView } from '@/hooks/use-in-view';

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'Haqenterprises777@gmail.com',
    href: 'mailto:Haqenterprises777@gmail.com',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+92 328 4865157',
    href: 'tel:+923284865157',
  },
  {
    icon: Phone,
    label: 'WhatsApp',
    value: '+92 322 4758424',
    href: 'tel:+923224758424',
  },
  {
    icon: Globe,
    label: 'Website',
    value: 'www.haqenterprises.online',
    href: 'https://www.haqenterprises.online',
  },
];

export default function Contact() {
  const [ref, inView] = useInView({ threshold: 0.1 });
  const [form, setForm] = useState({ name: '', email: '', company: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section id="contact" ref={ref} className="bg-[#0f0f0f] py-24">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-center mb-14"
        >
          <p className="text-[#c9a84c] text-xs font-semibold tracking-widest uppercase mb-3">
            Get In Touch
          </p>
          <h2 className="text-4xl lg:text-5xl font-bold text-white tracking-tight mb-4">
            Let's Create Extraordinary<br />
            <span className="text-white/50">Experiences Together</span>
          </h2>
          <p className="text-white/45 text-base max-w-lg mx-auto">
            Ready to elevate your brand? Contact us today and let's bring your vision to life.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="lg:col-span-2 space-y-4"
          >
            {contactInfo.map((item) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith('http') ? '_blank' : undefined}
                  rel="noreferrer"
                  className="flex items-center gap-4 bg-white/5 border border-white/8 rounded-xl p-4 hover:bg-white/8 hover:border-[#c9a84c]/30 transition-all duration-200 group"
                >
                  <div className="w-9 h-9 rounded-lg bg-[#c9a84c]/15 flex items-center justify-center flex-shrink-0">
                    <Icon size={16} className="text-[#c9a84c]" />
                  </div>
                  <div>
                    <p className="text-white/45 text-xs mb-0.5">{item.label}</p>
                    <p className="text-white text-sm font-medium group-hover:text-[#c9a84c] transition-colors">{item.value}</p>
                  </div>
                </a>
              );
            })}

            <div className="mt-4 bg-white/5 border border-white/8 rounded-xl p-5">
              <p className="text-white/45 text-xs mb-2">Our Promise</p>
              <p className="text-white/75 text-sm leading-relaxed">
                "Let us bring your ideas to life through quality, precision, and innovation."
              </p>
              <p className="text-[#c9a84c] text-xs mt-2 font-medium">— Talha Azeem, Founder & CEO</p>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
            className="lg:col-span-3"
          >
            {sent ? (
              <div className="h-full flex flex-col items-center justify-center bg-white/5 border border-white/8 rounded-2xl p-10 text-center">
                <div className="w-14 h-14 rounded-full bg-[#c9a84c]/20 flex items-center justify-center mb-5">
                  <Send size={24} className="text-[#c9a84c]" />
                </div>
                <h3 className="text-white font-bold text-xl mb-2">Message Sent!</h3>
                <p className="text-white/55 text-sm">We'll get back to you shortly. Thank you for trusting Haq Enterprises.</p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-white/5 border border-white/8 rounded-2xl p-7 lg:p-8 space-y-4"
              >
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-white/55 text-xs mb-1.5">Full Name</label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="Your name"
                      className="w-full bg-white/8 border border-white/10 rounded-lg px-4 py-2.5 text-white text-sm placeholder:text-white/25 focus:outline-none focus:border-[#c9a84c]/50 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-white/55 text-xs mb-1.5">Email</label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="your@email.com"
                      className="w-full bg-white/8 border border-white/10 rounded-lg px-4 py-2.5 text-white text-sm placeholder:text-white/25 focus:outline-none focus:border-[#c9a84c]/50 transition-colors"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-white/55 text-xs mb-1.5">Company</label>
                  <input
                    type="text"
                    value={form.company}
                    onChange={(e) => setForm({ ...form, company: e.target.value })}
                    placeholder="Your company (optional)"
                    className="w-full bg-white/8 border border-white/10 rounded-lg px-4 py-2.5 text-white text-sm placeholder:text-white/25 focus:outline-none focus:border-[#c9a84c]/50 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-white/55 text-xs mb-1.5">Message</label>
                  <textarea
                    required
                    rows={4}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Tell us about your project..."
                    className="w-full bg-white/8 border border-white/10 rounded-lg px-4 py-2.5 text-white text-sm placeholder:text-white/25 focus:outline-none focus:border-[#c9a84c]/50 transition-colors resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-3 rounded-lg bg-[#c9a84c] text-white text-sm font-semibold hover:bg-[#b8963e] transition-colors duration-200 flex items-center justify-center gap-2"
                >
                  <Send size={15} />
                  Send Message
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
