import { useState, useEffect } from 'react';

export function useInView(options = { threshold: 0.1 }) {
  const [ref, setRef] = useState<HTMLElement | null>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    if (!ref) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsInView(true);
        observer.disconnect(); // Run once
      }
    }, options);

    observer.observe(ref);

    return () => {
      if (ref) observer.unobserve(ref);
    };
  }, [ref, options.threshold]);

  return [setRef, isInView] as const;
}
