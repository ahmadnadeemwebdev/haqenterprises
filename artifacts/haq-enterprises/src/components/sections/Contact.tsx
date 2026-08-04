import emailjs from '@emailjs/browser';
import { useState, type FormEvent } from 'react';
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

const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

export default function Contact() {
  const [ref, inView] = useInView({ threshold: 0.1 });
  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: '', company: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrorMessage('');

    if (!form.name.trim() || !form.email.trim() || !form.subject.trim() || !form.message.trim()) {
      setErrorMessage('Please fill in all required fields.');
      setStatus('error');
      return;
    }

    if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY) {
      setStatus('error');
      setErrorMessage('Email service is not configured. Please set VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID, and VITE_EMAILJS_PUBLIC_KEY.');
      // eslint-disable-next-line no-console
      console.error('EmailJS configuration missing:', {
        service: EMAILJS_SERVICE_ID,
        template: EMAILJS_TEMPLATE_ID,
        key: EMAILJS_PUBLIC_KEY,
      });
      return;
    }

    setStatus('sending');

    try {
      await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, {
        name: form.name,
        email: form.email,
        phone: form.phone,
        company: form.company,
        subject: form.subject,
        message: form.message,
      }, EMAILJS_PUBLIC_KEY);

      setStatus('success');
      setForm({ name: '', email: '', phone: '', subject: '', company: '', message: '' });
    } catch (error) {
      setStatus('error');
      const errorText = error instanceof Error ? error.message : JSON.stringify(error);
      setErrorMessage(`Something went wrong while sending the message. ${errorText}`);
      // eslint-disable-next-line no-console
      console.error('EmailJS error:', error);
    }
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
          <p className="text-white/45 text-xs font-semibold tracking-widest uppercase mb-3">
            Get In Touch
          </p>
          <h2 className="text-4xl lg:text-5xl font-bold text-white tracking-tight mb-4">
            Let’s Build Your Next<br />
            <span className="text-white/50">Event, Packaging, or Print Project</span>
          </h2>
          <p className="text-white/45 text-base max-w-lg mx-auto">
            From premium packaging and branded giveaways to corporate events and conference execution, Haq Enterprises is ready to support your business in Pakistan.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
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
                  className="flex items-center gap-4 bg-white/5 border border-white/8 rounded-xl p-4 hover:bg-white/8 hover:border-[#1d1d1f]/20 transition-all duration-200 group"
                >
                  <div className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center shrink-0">
                    <Icon size={16} className="text-white/70" />
                  </div>
                  <div>
                    <p className="text-white/45 text-xs mb-0.5">{item.label}</p>
                    <p className="text-white text-sm font-medium group-hover:text-white/80 transition-colors">{item.value}</p>
                  </div>
                </a>
              );
            })}

            <div className="mt-4 bg-white/5 border border-white/8 rounded-xl p-5">
              <p className="text-white/45 text-xs mb-2">Our Promise</p>
              <p className="text-white/75 text-sm leading-relaxed">
                “We deliver premium printing, packaging, and event experiences that help brands grow with confidence and professionalism.”
              </p>
              <p className="text-white/45 text-xs mt-2 font-medium">— Talha Azeem, Founder & CEO</p>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
            className="lg:col-span-3"
          >
            {status === 'success' ? (
              <div className="h-full flex flex-col items-center justify-center bg-white/5 border border-white/8 rounded-2xl p-10 text-center">
                <div className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center mb-5">
                  <Send size={24} className="text-white/60" />
                </div>
                <h3 className="text-white font-bold text-xl mb-2">Message Sent!</h3>
                <p className="text-white/55 text-sm">We'll get back to you shortly. Thank you for trusting Haq Enterprises.</p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-white/5 border border-white/8 rounded-2xl p-7 lg:p-8 space-y-4"
              >
                {status === 'error' && errorMessage ? (
                  <div className="rounded-xl border border-red-500/20 bg-red-500/10 p-4 text-sm text-red-100">
                    {errorMessage}
                  </div>
                ) : null}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-white/55 text-xs mb-1.5">Full Name</label>
                    <input
                      type="text"
                      required
                      name="name"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="Your name"
                      className="w-full bg-white/8 border border-white/10 rounded-lg px-4 py-2.5 text-white text-sm placeholder:text-white/25 focus:outline-none focus:border-[#1d1d1f]/30 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-white/55 text-xs mb-1.5">Email</label>
                    <input
                      type="email"
                      required
                      name="email"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="your@email.com"
                      className="w-full bg-white/8 border border-white/10 rounded-lg px-4 py-2.5 text-white text-sm placeholder:text-white/25 focus:outline-none focus:border-[#1d1d1f]/30 transition-colors"
                    />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-white/55 text-xs mb-1.5">Phone</label>
                    <input
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      placeholder="Your phone number"
                      className="w-full bg-white/8 border border-white/10 rounded-lg px-4 py-2.5 text-white text-sm placeholder:text-white/25 focus:outline-none focus:border-[#1d1d1f]/30 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-white/55 text-xs mb-1.5">Subject</label>
                    <input
                      type="text"
                      required
                      name="subject"
                      value={form.subject}
                      onChange={(e) => setForm({ ...form, subject: e.target.value })}
                      placeholder="Project subject"
                      className="w-full bg-white/8 border border-white/10 rounded-lg px-4 py-2.5 text-white text-sm placeholder:text-white/25 focus:outline-none focus:border-[#1d1d1f]/30 transition-colors"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-white/55 text-xs mb-1.5">Company</label>
                  <input
                    type="text"
                    name="company"
                    value={form.company ?? ''}
                    onChange={(e) => setForm({ ...form, company: e.target.value })}
                    placeholder="Your company (optional)"
                    className="w-full bg-white/8 border border-white/10 rounded-lg px-4 py-2.5 text-white text-sm placeholder:text-white/25 focus:outline-none focus:border-[#1d1d1f]/30 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-white/55 text-xs mb-1.5">Message</label>
                  <textarea
                    required
                    rows={4}
                    name="message"
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Tell us about your project..."
                    className="w-full bg-white/8 border border-white/10 rounded-lg px-4 py-2.5 text-white text-sm placeholder:text-white/25 focus:outline-none focus:border-[#1d1d1f]/30 transition-colors resize-none"
                  />
                </div>
                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="w-full py-3 rounded-lg bg-[#1d1d1f] text-white text-sm font-semibold hover:bg-[#3a3a3c] transition-colors duration-200 flex items-center justify-center gap-2 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  <Send size={15} />
                  {status === 'sending' ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
