import { motion } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';

function useInViewLocal(options = { threshold: 0.1 }) {
  const [ref, setRef] = useState<HTMLElement | null>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    if (!ref) return;

    const observer = new IntersectionObserver(([entry]) => {
      setIsInView(entry.isIntersecting);
    }, options as IntersectionObserverInit);

    observer.observe(ref);

    return () => {
      observer.disconnect();
    };
  }, [ref, options.threshold]);

  return [setRef, isInView] as const;
}

export default function Portfolio() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isMuted, setIsMuted] = useState(true);
  const [showOverlay, setShowOverlay] = useState(true);
  const [userPaused, setUserPaused] = useState(false);
  const [ref, inView] = useInViewLocal({ threshold: 0.1 });

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (inView) {
      video.muted = true;
      video.play().catch(() => {
        // Autoplay may be blocked if audio is unmuted; so keep muted during automatic playback.
      });
    } else {
      video.pause();
    }
  }, [inView]);

  return (
    <section id="events" ref={ref} className="bg-[#0f0f0f] py-24">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-center mb-14"
        >
          <p className="text-white/45 text-xs font-semibold tracking-widest uppercase mb-3">
         Showcase
          </p>
          <h2 className="text-4xl lg:text-5xl font-bold text-white tracking-tight mb-4">
             Recent Work
          </h2>
          <p className="text-white/50 text-base max-w-xl mx-auto">
            Moments that define our journey — showcasing the corporate events we've delivered with passion and precision.
          </p>
        </motion.div>

        {/* Video */}
        <div className="grid grid-cols-1 gap-3 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="relative rounded-xl overflow-hidden aspect-video bg-white/5 max-w-[900px] mx-auto"
            onClick={() => {
              if (!videoRef.current) return;

              if (videoRef.current.muted) {
                videoRef.current.muted = false;
                videoRef.current.volume = 1;
                setIsMuted(false);
                setShowOverlay(false);
              } else if (videoRef.current.paused) {
                videoRef.current.play();
                setUserPaused(false);
              } else {
                videoRef.current.pause();
                setUserPaused(true);
              }
            }}
          >
            <video
              ref={videoRef}
              src="/images/WhatsApp Video 2026-08-05 at 6.49.17 PM.mp4"
              className="w-full h-full object-cover"
              autoPlay
              muted={isMuted}
              loop
              playsInline
              preload="auto"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent opacity-100 transition-opacity duration-300" />
            {showOverlay && (
              <div className="absolute bottom-0 left-0 right-0 p-4 transition-transform duration-300">
                <p className="text-white text-xs font-medium">Click to unmute</p>
              </div>
            )}
          </motion.div>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center text-white/30 text-sm mt-8"
        >
          Trusted by Huawei, EZY, KIA, Jazz, COMSATS University, and more leading organizations.
        </motion.p>
      </div>
    </section>
  );
}
