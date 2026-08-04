import { Suspense, lazy } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';

const Stats = lazy(() => import('@/components/sections/Stats'));
const CEO = lazy(() => import('@/components/sections/CEO'));
const VisionMission = lazy(() => import('@/components/sections/VisionMission'));
const Values = lazy(() => import('@/components/sections/Values'));
const WhyUs = lazy(() => import('@/components/sections/WhyUs'));
const Solutions = lazy(() => import('@/components/sections/Solutions'));
const Portfolio = lazy(() => import('@/components/sections/Portfolio'));
const Blog = lazy(() => import('@/components/sections/Blog'));
const Giveaways = lazy(() => import('@/components/sections/Giveaways'));
const Process = lazy(() => import('@/components/sections/Process'));
const Clients = lazy(() => import('@/components/sections/Clients'));
const Contact = lazy(() => import('@/components/sections/Contact'));

export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans antialiased">
      <Header />
      <main>
        <Hero />
        <Suspense fallback={<div className="min-h-30" />}>
          <Stats />
        </Suspense>
        <Suspense fallback={<div className="min-h-55" />}>
          <CEO />
        </Suspense>
        <Suspense fallback={<div className="min-h-55" />}>
          <VisionMission />
        </Suspense>
        <Suspense fallback={<div className="min-h-55" />}>
          <Values />
        </Suspense>
        <Suspense fallback={<div className="min-h-55" />}>
          <WhyUs />
        </Suspense>
        <Suspense fallback={<div className="min-h-30" />}>
          <Solutions />
        </Suspense>
        <Suspense fallback={<div className="min-h-30" />}>
          <Portfolio />
        </Suspense>
        <Suspense fallback={<div className="min-h-30" />}>
          <Blog />
        </Suspense>
        <Suspense fallback={<div className="min-h-30" />}>
          <Giveaways />
        </Suspense>
        <Suspense fallback={<div className="min-h-30" />}>
          <Process />
        </Suspense>
        <Suspense fallback={<div className="min-h-30" />}>
          <Clients />
        </Suspense>
        <Suspense fallback={<div className="min-h-30" />}>
          <Contact />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}
