"use client";

import React, { useEffect } from "react";
import { ReactLenis } from "lenis/react";

interface LenisProviderProps {
  children: React.ReactNode;
}

export default function LenisProvider({ children }: LenisProviderProps) {
  useEffect(() => {
    // Lenis instance can be configured or customized here
    // Lenis handles global scroll smoothly
  }, []);

  return (
    <ReactLenis
      root
      options={{
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Apple-like easeOutExpo
        orientation: "vertical",
        gestureOrientation: "vertical",
        smoothWheel: true,
        wheelMultiplier: 1.0,
        touchMultiplier: 2.0,
      }}
    >
      {children}
    </ReactLenis>
  );
}
