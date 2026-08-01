import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Send, Mail, Globe } from 'lucide-react';
import { useInView } from '@/hooks/use-in-view';
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';

export function ContactSection() {
  const [ref, inView] = useInView({ threshold: 0.15 });
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      toast({ title: "Message Sent", description: "We'll get back to you within 24 hours." });
      (e.target as HTMLFormElement).reset();
    }, 1000);
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-[#f5f5f7]">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">

          {/* Left */}
          <div ref={ref as any} className="flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ duration: 0.55 }}
            >
              <p className="section-label mb-3">Get In Touch</p>
              <h2 className="text-4xl md:text-5xl font-bold text-[#1d1d1f] leading-tight tracking-tight mb-5">
                Ready to Elevate<br />Your Brand?
              </h2>
              <p className="text-[#6e6e73] text-lg font-light leading-relaxed mb-10 max-w-sm">
                Full-scale packaging overhaul or premium corporate gifts — our team delivers, every time.
              </p>

              <div className="space-y-4">
                <a href="https://www.haqenterprises.online" target="_blank" rel="noreferrer"
                  className="flex items-center gap-4 group">
                  <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center shadow-sm flex-shrink-0 group-hover:shadow transition-shadow duration-300">
                    <Globe className="w-4 h-4 text-[#424245]" strokeWidth={1.5} />
                  </div>
                  <span className="text-[#424245] group-hover:text-[#1d1d1f] transition-colors text-sm font-medium">
                    www.haqenterprises.online
                  </span>
                </a>

                <a href="mailto:contact@haqenterprises.online"
                  className="flex items-center gap-4 group">
                  <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center shadow-sm flex-shrink-0 group-hover:shadow transition-shadow duration-300">
                    <Mail className="w-4 h-4 text-[#424245]" strokeWidth={1.5} />
                  </div>
                  <span className="text-[#424245] group-hover:text-[#1d1d1f] transition-colors text-sm font-medium">
                    contact@haqenterprises.online
                  </span>
                </a>
              </div>
            </motion.div>
          </div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="bg-white rounded-2xl p-8 md:p-10 shadow-lg"
          >
            <h3 className="text-xl font-bold text-[#1d1d1f] mb-7 tracking-tight">Request a Quote</h3>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label htmlFor="name" className="text-xs font-semibold text-[#6e6e73] uppercase tracking-wider">Full Name</label>
                  <Input id="name" required placeholder="John Doe"
                    className="bg-[#f5f5f7] border-transparent focus-visible:ring-[#1d1d1f]/20 focus-visible:border-[#d2d2d7] h-11 text-[#1d1d1f] placeholder:text-[#a1a1a6]" />
                </div>
                <div className="space-y-1.5">
                  <label htmlFor="email" className="text-xs font-semibold text-[#6e6e73] uppercase tracking-wider">Email</label>
                  <Input id="email" type="email" required placeholder="john@company.com"
                    className="bg-[#f5f5f7] border-transparent focus-visible:ring-[#1d1d1f]/20 focus-visible:border-[#d2d2d7] h-11 text-[#1d1d1f] placeholder:text-[#a1a1a6]" />
                </div>
              </div>

              <div className="space-y-1.5">
                <label htmlFor="company" className="text-xs font-semibold text-[#6e6e73] uppercase tracking-wider">Company</label>
                <Input id="company" required placeholder="Acme Corporation"
                  className="bg-[#f5f5f7] border-transparent focus-visible:ring-[#1d1d1f]/20 focus-visible:border-[#d2d2d7] h-11 text-[#1d1d1f] placeholder:text-[#a1a1a6]" />
              </div>

              <div className="space-y-1.5">
                <label htmlFor="message" className="text-xs font-semibold text-[#6e6e73] uppercase tracking-wider">Project Details</label>
                <Textarea id="message" required placeholder="Tell us about your printing or packaging needs..."
                  className="bg-[#f5f5f7] border-transparent focus-visible:ring-[#1d1d1f]/20 focus-visible:border-[#d2d2d7] min-h-[110px] resize-none text-[#1d1d1f] placeholder:text-[#a1a1a6]" />
              </div>

              <Button type="submit" variant="goldGlow" className="w-full h-12 text-sm mt-1" disabled={isSubmitting}>
                {isSubmitting ? "Sending..." : "Submit Request"}
                {!isSubmitting && <Send className="w-4 h-4 ml-1" />}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
