"use client";

import React, { useEffect, useState } from "react";
import { ReactLenis } from "lenis/react";

interface LenisProviderProps {
  children: React.ReactNode;
}

export default function LenisProvider({ children }: LenisProviderProps) {
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    // Check if the client device is a touch screen (mobile/tablet)
    if (typeof window !== "undefined") {
      const checkTouch = () => {
        return (
          "ontouchstart" in window ||
          navigator.maxTouchPoints > 0
        );
      };
      setIsTouchDevice(checkTouch());
    }
  }, []);

  // Return native scrolling for touch/mobile devices to bypass library conflicts
  if (isTouchDevice) {
    return <>{children}</>;
  }

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
