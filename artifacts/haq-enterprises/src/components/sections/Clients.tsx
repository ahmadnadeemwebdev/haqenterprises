import { motion } from 'framer-motion';
import { useInView } from '@/hooks/use-in-view';

/* ─── SVG LOGO COMPONENTS ───────────────────────────────────────── */
const OoredooLogo = () => (
  <svg viewBox="0 0 160 56" className="w-full h-full">
    <circle cx="18" cy="28" r="14" fill="#E30613"/>
    <circle cx="18" cy="28" r="7" fill="white"/>
    <text x="38" y="35" fontFamily="'Arial Black',Arial,sans-serif" fontWeight="900" fontSize="26" fill="#E30613">ooredoo</text>
  </svg>
)

const NakilatLogo = () => (
  <svg viewBox="0 0 160 56" className="w-full h-full">
    <text x="8" y="30" fontFamily="Arial,sans-serif" fontWeight="700" fontSize="20" fill="#003A5D" letterSpacing="3">NAKILAT</text>
    <text x="8" y="50" fontFamily="'Arial',sans-serif" fontWeight="400" fontSize="14" fill="#003A5D" letterSpacing="2">ناقلات</text>
  </svg>
)

const NorthOilLogo = () => (
  <svg viewBox="0 0 160 56" className="w-full h-full">
    <rect x="4" y="10" width="36" height="36" rx="4" fill="#004B87"/>
    <text x="12" y="35" fontFamily="'Arial Black',Arial,sans-serif" fontWeight="900" fontSize="20" fill="white">N</text>
    <text x="48" y="26" fontFamily="Arial,sans-serif" fontWeight="700" fontSize="13" fill="#004B87">NORTH OIL</text>
    <text x="48" y="43" fontFamily="Arial,sans-serif" fontWeight="400" fontSize="11" fill="#666">COMPANY</text>
  </svg>
)

const ExxonMobilLogo = () => (
  <svg viewBox="0 0 160 56" className="w-full h-full">
    <text x="4" y="34" fontFamily="'Arial Black',Arial,sans-serif" fontWeight="900" fontSize="27" fill="#003087">Exxon</text>
    <text x="94" y="34" fontFamily="'Arial Black',Arial,sans-serif" fontWeight="900" fontSize="27" fontStyle="italic" fill="#E0001A">Mobil</text>
  </svg>
)

const MannaiLogo = () => (
  <svg viewBox="0 0 160 56" className="w-full h-full">
    <text x="4" y="30" fontFamily="'Arial Black',Arial,sans-serif" fontWeight="900" fontSize="22" fill="#002D72" letterSpacing="1">MANNAI</text>
    <text x="4" y="48" fontFamily="Arial,sans-serif" fontWeight="400" fontSize="12" fill="#666" letterSpacing="2">CORPORATION</text>
  </svg>
)

const PwcLogo = () => (
  <svg viewBox="0 0 160 56" className="w-full h-full">
    <rect x="4" y="8" width="42" height="40" rx="0" fill="#D04A02"/>
    <text x="7" y="40" fontFamily="'Arial Black',Arial,sans-serif" fontWeight="900" fontSize="30" fill="white">PwC</text>
    <text x="54" y="28" fontFamily="Arial,sans-serif" fontWeight="400" fontSize="11" fill="#888">PricewaterhouseCoopers</text>
  </svg>
)

const QatarTourismLogo = () => (
  <svg viewBox="0 0 160 56" className="w-full h-full">
    <text x="4" y="28" fontFamily="'Arial Black',Arial,sans-serif" fontWeight="700" fontSize="18" fill="#8B1A4A">QATAR</text>
    <text x="4" y="48" fontFamily="Arial,sans-serif" fontWeight="400" fontSize="13" fill="#C19A00" letterSpacing="1">Tourism</text>
    <path d="M100 10 L110 28 L100 46" stroke="#8B1A4A" strokeWidth="3" fill="none"/>
  </svg>
)

const WorleyLogo = () => (
  <svg viewBox="0 0 160 56" className="w-full h-full">
    <text x="4" y="38" fontFamily="'Arial Black',Arial,sans-serif" fontWeight="900" fontSize="34" fill="#00539F" letterSpacing="-1">Worley</text>
  </svg>
)

const KpmgLogo = () => (
  <svg viewBox="0 0 160 56" className="w-full h-full">
    <rect x="4" y="8" width="12" height="12" fill="#0091DA"/>
    <rect x="20" y="8" width="12" height="12" fill="#00338D"/>
    <rect x="4" y="24" width="12" height="12" fill="#00338D"/>
    <rect x="20" y="24" width="12" height="12" fill="#00A3A1"/>
    <text x="44" y="36" fontFamily="'Arial Black',Arial,sans-serif" fontWeight="900" fontSize="30" fill="#00338D">KPMG</text>
  </svg>
)

const CiscoLogo = () => (
  <svg viewBox="0 0 160 56" className="w-full h-full">
    {[0,8,16,24,32].map((x, i) => (
      <rect key={i} x={x + 4} y={i % 2 === 0 ? 8 : 14} width="5" height={i % 2 === 0 ? 22 : 14} rx="2" fill="#049FD9"/>
    ))}
    <text x="48" y="36" fontFamily="'Arial Black',Arial,sans-serif" fontWeight="900" fontSize="26" fill="#049FD9">cisco</text>
  </svg>
)

const HpLogo = () => (
  <svg viewBox="0 0 160 56" className="w-full h-full">
    <circle cx="30" cy="28" r="24" fill="#0096D6"/>
    <text x="13" y="38" fontFamily="'Arial Black',Arial,sans-serif" fontWeight="900" fontSize="28" fill="white">hp</text>
    <text x="64" y="36" fontFamily="'Arial Black',Arial,sans-serif" fontWeight="700" fontSize="22" fill="#0096D6">Hewlett</text>
    <text x="64" y="52" fontFamily="Arial,sans-serif" fontWeight="400" fontSize="14" fill="#666">Packard</text>
  </svg>
)

const OpenTextLogo = () => (
  <svg viewBox="0 0 160 56" className="w-full h-full">
    <text x="4" y="36" fontFamily="'Arial Black',Arial,sans-serif" fontWeight="900" fontSize="28" fill="#F9A000">Open</text>
    <text x="80" y="36" fontFamily="'Arial Black',Arial,sans-serif" fontWeight="900" fontSize="28" fill="#333">Text</text>
  </svg>
)

const HbkuLogo = () => (
  <svg viewBox="0 0 160 56" className="w-full h-full">
    <rect x="4" y="8" width="38" height="38" rx="2" fill="#1B1F4A"/>
    <text x="10" y="37" fontFamily="'Arial Black',Arial,sans-serif" fontWeight="900" fontSize="22" fill="white">H</text>
    <text x="50" y="26" fontFamily="Arial,sans-serif" fontWeight="700" fontSize="13" fill="#1B1F4A">HAMAD BIN</text>
    <text x="50" y="42" fontFamily="Arial,sans-serif" fontWeight="700" fontSize="13" fill="#1B1F4A">KHALIFA UNIV.</text>
  </svg>
)

const SasolLogo = () => (
  <svg viewBox="0 0 160 56" className="w-full h-full">
    <text x="4" y="40" fontFamily="'Arial Black',Arial,sans-serif" fontWeight="900" fontSize="38" fill="#E31837" letterSpacing="-1">sasol</text>
    <circle cx="144" cy="16" r="8" fill="#E31837"/>
  </svg>
)

const GoogleCloudLogo = () => (
  <svg viewBox="0 0 160 56" className="w-full h-full">
    <text x="4" y="28" fontFamily="'Arial Black',Arial,sans-serif" fontWeight="700" fontSize="18" fill="#4285F4">G</text>
    <text x="17" y="28" fontFamily="'Arial Black',Arial,sans-serif" fontWeight="700" fontSize="18" fill="#EA4335">o</text>
    <text x="29" y="28" fontFamily="'Arial Black',Arial,sans-serif" fontWeight="700" fontSize="18" fill="#FBBC05">o</text>
    <text x="41" y="28" fontFamily="'Arial Black',Arial,sans-serif" fontWeight="700" fontSize="18" fill="#4285F4">g</text>
    <text x="52" y="28" fontFamily="'Arial Black',Arial,sans-serif" fontWeight="700" fontSize="18" fill="#34A853">l</text>
    <text x="59" y="28" fontFamily="'Arial Black',Arial,sans-serif" fontWeight="700" fontSize="18" fill="#EA4335">e</text>
    <text x="4" y="48" fontFamily="Arial,sans-serif" fontWeight="400" fontSize="14" fill="#5F6368" letterSpacing="1">Cloud</text>
  </svg>
)

const LOGOS = [
  { name: "Ooredoo",                 Component: OoredooLogo },
  { name: "Nakilat",                 Component: NakilatLogo },
  { name: "North Oil Company",       Component: NorthOilLogo },
  { name: "ExxonMobil",              Component: ExxonMobilLogo },
  { name: "Mannai Corporation",      Component: MannaiLogo },
  { name: "PwC",                     Component: PwcLogo },
  { name: "Qatar Tourism",           Component: QatarTourismLogo },
  { name: "Worley",                  Component: WorleyLogo },
  { name: "KPMG",                    Component: KpmgLogo },
  { name: "Cisco",                   Component: CiscoLogo },
  { name: "HP",                      Component: HpLogo },
  { name: "OpenText",                Component: OpenTextLogo },
  { name: "HBKU",                    Component: HbkuLogo },
  { name: "Sasol",                   Component: SasolLogo },
  { name: "Google Cloud",            Component: GoogleCloudLogo },
];

const ticker = [...LOGOS, ...LOGOS];

export function ClientsSection() {
  const [ref, inView] = useInView({ threshold: 0.1 });

  return (
    <section id="clients" className="py-24 bg-white overflow-hidden">
      <style>{`
        @keyframes ticker { from{transform:translateX(0)} to{transform:translateX(-50%)} }
        .ticker-track { display:flex; align-items:center; width:max-content; animation:ticker 38s linear infinite; }
        .ticker-track:hover { animation-play-state:paused; }
        .logo-item { filter:grayscale(100%) opacity(0.45); transition:filter .3s,opacity .3s; }
        .logo-item:hover { filter:grayscale(0%) opacity(1); }
      `}</style>

      <div ref={ref as any} className="container mx-auto px-6 max-w-7xl mb-14 text-center">
        <motion.p initial={{opacity:0,y:12}} animate={inView?{opacity:1,y:0}:{}} transition={{duration:.5}} className="section-label mb-3">
          Trusted Partners
        </motion.p>
        <motion.h2 initial={{opacity:0,y:16}} animate={inView?{opacity:1,y:0}:{}} transition={{duration:.55,delay:.07}} className="text-4xl md:text-5xl font-bold text-[#1d1d1f] tracking-tight leading-tight">
          Trusted by World-Class Brands
        </motion.h2>
        <motion.p initial={{opacity:0}} animate={inView?{opacity:1}:{}} transition={{duration:.5,delay:.14}} className="text-[#6e6e73] mt-4 font-light max-w-lg mx-auto">
          Qatar's leading corporations choose Haq Enterprises for their printing, packaging, and corporate gifting needs.
        </motion.p>
      </div>

      <motion.div initial={{opacity:0}} animate={inView?{opacity:1}:{}} transition={{duration:.7,delay:.2}} className="relative">
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-28 z-10 bg-gradient-to-r from-white to-transparent"/>
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-28 z-10 bg-gradient-to-l from-white to-transparent"/>
        <div className="overflow-hidden border-y border-[#f0f0f0]">
          <div className="ticker-track py-4">
            {ticker.map((logo, i) => {
              const { Component } = logo;
              return (
                <div key={i} title={logo.name} className="logo-item flex-shrink-0 flex items-center justify-center px-6" style={{width:180, height:72}}>
                  <Component/>
                </div>
              );
            })}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
