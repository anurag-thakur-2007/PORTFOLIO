"use client";

import { useState, useEffect } from "react";

export interface WindowSize {
  width: number | undefined;
  height: number | undefined;
}

export default function useWindowSize() {
  const [windowSize, setWindowSize] = useState<WindowSize>({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    if (typeof window === "undefined") return;

    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    // Register listener
    window.addEventListener("resize", handleResize);
    
    // Call handler immediately on mount
    handleResize();

    // Clean up
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowSize;
}
export { useWindowSize };
