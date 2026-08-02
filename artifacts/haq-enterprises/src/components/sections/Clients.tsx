import { useRef, useEffect } from 'react';

const clients = [
  { name: 'Huawei', logo: '/images/logos/huawei.png' },
  { name: 'Jazz', logo: '/images/logos/jazz.jpeg' },
  { name: 'KIA', logo: '/images/logos/kia.png' },
  { name: 'OKX', logo: '/images/logos/okx.png' },
  { name: 'TRICON', logo: '/images/logos/tricon.jpeg' },
  { name: 'FBR Pakistan', logo: '/images/logos/fbr.jpeg' },
  { name: 'Trina Solar', logo: '/images/logos/trinasolar.jpeg' },
  { name: 'Innolytix', logo: '/images/logos/innolytix.png' },
  { name: 'COMSATS University', logo: '/images/logos/comsats.jpeg' },
  { name: 'Lahore College for Women University', logo: '/images/logos/lcwu.jpeg' },
  { name: 'AWAN Distribution', logo: '/images/logos/awan.png' },
];

// Double for seamless loop
const doubled = [...clients, ...clients];

export default function Clients() {
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    let pos = 0;
    let raf: number;

    const tick = () => {
      pos += 0.5;
      const half = track.scrollWidth / 2;
      if (pos >= half) pos = 0;
      track.style.transform = `translateX(-${pos}px)`;
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <section id="clients" className="bg-[#f5f5f7] py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-10 text-center">
        <p className="text-[#c9a84c] text-xs font-semibold tracking-widest uppercase mb-3">
          Our Clients
        </p>
        <h2 className="text-4xl lg:text-5xl font-bold text-[#1d1d1f] tracking-tight mb-3">
          Trusted by Leading Brands
        </h2>
        <p className="text-[#1d1d1f]/50 text-base">
          From global tech giants to national institutions — brands that trust Haq Enterprises.
        </p>
      </div>

      {/* Ticker */}
      <div className="relative">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#f5f5f7] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#f5f5f7] to-transparent z-10 pointer-events-none" />

        <div className="overflow-hidden">
          <div ref={trackRef} className="flex items-center gap-10 will-change-transform" style={{ width: 'max-content' }}>
            {doubled.map((client, i) => (
              <div
                key={i}
                className="flex-shrink-0 w-32 h-16 bg-white rounded-xl border border-black/6 flex items-center justify-center px-4 shadow-sm"
              >
                <img
                  src={client.logo}
                  alt={client.name}
                  className="max-h-9 max-w-full object-contain grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
