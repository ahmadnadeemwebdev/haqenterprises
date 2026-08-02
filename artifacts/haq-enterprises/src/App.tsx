import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import Stats from '@/components/sections/Stats';
import CEO from '@/components/sections/CEO';
import VisionMission from '@/components/sections/VisionMission';
import Values from '@/components/sections/Values';
import WhyUs from '@/components/sections/WhyUs';
import Solutions from '@/components/sections/Solutions';
import Portfolio from '@/components/sections/Portfolio';
import Giveaways from '@/components/sections/Giveaways';
import Process from '@/components/sections/Process';
import Clients from '@/components/sections/Clients';
import Contact from '@/components/sections/Contact';

export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans antialiased">
      <Header />
      <main>
        <Hero />
        <Stats />
        <CEO />
        <VisionMission />
        <Values />
        <WhyUs />
        <Solutions />
        <Portfolio />
        <Giveaways />
        <Process />
        <Clients />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
