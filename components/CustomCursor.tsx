"use client";

import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

type CursorType = "default" | "button" | "project";

export default function CustomCursor() {
  const [cursorType, setCursorType] = useState<CursorType>("default");
  const [cursorText, setCursorText] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  // Snappy spring interpolation values
  const springConfig = { damping: 35, stiffness: 280, mass: 0.35 };
  const cursorRingX = useSpring(cursorX, springConfig);
  const cursorRingY = useSpring(cursorY, springConfig);

  useEffect(() => {
    // Check OS-level reduced motion setting
    if (typeof window !== "undefined") {
      const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
      setPrefersReducedMotion(mediaQuery.matches);
      
      const handleQueryChange = (e: MediaQueryListEvent) => {
        setPrefersReducedMotion(e.matches);
      };
      mediaQuery.addEventListener("change", handleQueryChange);
      return () => mediaQuery.removeEventListener("change", handleQueryChange);
    }
  }, []);

  useEffect(() => {
    if (prefersReducedMotion) return;

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener("mousemove", moveCursor, { passive: true });
    document.addEventListener("mouseleave", handleMouseLeave);

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      
      // Check for project cards or images specifically tagged for custom cursors
      const closestProject = target.closest("[data-cursor-project='true']");
      if (closestProject) {
        setCursorType("project");
        setCursorText("View Project");
        return;
      }

      // Check for standard interactive elements (buttons, links)
      const closestLink = target.closest("a, button, [role='button'], [data-hover]");
      if (closestLink) {
        setCursorType("button");
        setCursorText("");
        return;
      }

      // Clear cursor type back to default
      setCursorType("default");
      setCursorText("");
    };

    window.addEventListener("mouseover", handleMouseOver, { passive: true });

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      document.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, [cursorX, cursorY, isVisible, prefersReducedMotion]);

  // If system requests reduced motion or device is mobile/touch, skip rendering
  if (prefersReducedMotion || typeof window === "undefined") return null;
  if (!isVisible) return null;

  return (
    <>
      {/* Central Interactive Dot */}
      <motion.div
        className="cursor-follower hidden md:block will-change-transform"
        style={{
          left: cursorX,
          top: cursorY,
        }}
        animate={{
          scale: cursorType === "project" ? 0 : cursorType === "button" ? 0.5 : 1,
          opacity: cursorType === "project" ? 0 : 1,
        }}
        transition={{ type: "tween", duration: 0.15 }}
      />
      {/* Outer Lagging Spring Ring */}
      <motion.div
        className="cursor-follower-ring hidden md:flex items-center justify-center text-[9px] font-sans font-bold text-accent-blue tracking-wider pointer-events-none will-change-transform"
        style={{
          left: cursorRingX,
          top: cursorRingY,
        }}
        animate={{
          width: cursorType === "project" ? 80 : cursorType === "button" ? 16 : 30,
          height: cursorType === "project" ? 80 : cursorType === "button" ? 16 : 30,
          backgroundColor:
            cursorType === "project" ? "rgba(0, 82, 255, 0.06)" : "rgba(0, 82, 255, 0)",
          borderColor:
            cursorType === "project"
              ? "var(--accent-blue)"
              : cursorType === "button"
              ? "var(--accent-blue)"
              : "rgba(0, 82, 255, 0.3)",
        }}
        transition={{ type: "tween", duration: 0.2 }}
      >
        {cursorType === "project" && cursorText && (
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.2 }}
            className="uppercase text-center px-1 text-[8px] font-sans text-accent-blue font-bold leading-none select-none"
          >
            {cursorText}
          </motion.span>
        )}
      </motion.div>
    </>
  );
}
