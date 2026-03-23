import { useState, useEffect } from "react";

export function useBreakpoint() {
  const [bp, setBp] = useState(() => {
    const w = typeof window !== "undefined" ? window.innerWidth : 1200;
    return { isMobile: w < 640, isTablet: w < 1024, isDesktop: w >= 1024, w };
  });

  useEffect(() => {
    const fn = () => {
      const w = window.innerWidth;
      setBp({ isMobile: w < 640, isTablet: w < 1024, isDesktop: w >= 1024, w });
    };
    window.addEventListener("resize", fn, { passive: true });
    return () => window.removeEventListener("resize", fn);
  }, []);

  return bp;
}
