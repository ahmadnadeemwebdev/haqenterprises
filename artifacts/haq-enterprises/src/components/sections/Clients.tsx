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

const tripled = [...clients, ...clients, ...clients];

export default function Clients() {
  const trackRef = useRef<HTMLDivElement>(null);
  const isPausedRef = useRef(false);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    let pos = 0;
    let raf: number;

    const tick = () => {
      if (!isPausedRef.current) {
        pos += 2.8; // faster leftward ticker motion
        const third = track.scrollWidth / 3;
        if (pos >= third) pos = 0;
        track.style.transform = `translateX(-${Math.round(pos)}px)`;
      }
      raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <section id="clients" className="bg-[#f5f5f7] py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-16 text-center">
        <p className="text-[#1d1d1f]/50 text-xs font-semibold tracking-widest uppercase mb-3">
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
        <div className="absolute left-0 top-0 bottom-0 w-40 bg-linear-to-r from-[#f5f5f7] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-40 bg-linear-to-l from-[#f5f5f7] to-transparent z-10 pointer-events-none" />

        <div className="overflow-hidden">
          <div
            ref={trackRef}
            className="flex items-center gap-5 will-change-transform"
            style={{ width: 'max-content' }}
            onMouseEnter={() => {
              isPausedRef.current = true;
            }}
            onMouseLeave={() => {
              isPausedRef.current = false;
            }}
          >
            {tripled.map((client, i) => (
              <div
                key={i}
                className="shrink-0 w-52 h-28 bg-white rounded-2xl border border-black/8 flex flex-col items-center justify-center gap-3 px-6 shadow-sm"
                style={{ imageRendering: 'auto' }}
              >
                <img
                  src={client.logo}
                  alt={client.name}
                  className="max-h-14 max-w-[160px] w-auto object-contain"
                  style={{ imageRendering: 'auto', filter: 'none' }}
                  width={160}
                  height={56}
                  loading="lazy"
                  decoding="async"
                />
                <span className="text-[11px] font-semibold text-[#1d1d1f]/45 text-center leading-tight">
                  {client.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
