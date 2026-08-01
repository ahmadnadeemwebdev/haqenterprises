import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from '@/components/ui/toaster';
import { TooltipProvider } from '@/components/ui/tooltip';

import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Hero } from '@/components/sections/Hero';
import { StatsSection } from '@/components/sections/Stats';
import { ValuesSection } from '@/components/sections/Values';
import { WhyUsSection } from '@/components/sections/WhyUs';
import { SolutionsSection } from '@/components/sections/Solutions';
import { ProcessSection } from '@/components/sections/Process';
import { ClientsSection } from '@/components/sections/Clients';
import { TestimonialsSection } from '@/components/sections/Testimonials';
import { ContactSection } from '@/components/sections/Contact';

const queryClient = new QueryClient();

function Home() {
  return (
    <main className="min-h-screen w-full bg-white text-[#1d1d1f]">
      <Header />
      <Hero />
      <StatsSection />
      <ValuesSection />
      <WhyUsSection />
      <SolutionsSection />
      <ProcessSection />
      <ClientsSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </main>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Home />
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
