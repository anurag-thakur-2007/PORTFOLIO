"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import { cn } from "@/lib/utils";

export interface ParallaxProps {
  children: React.ReactNode;
  className?: string;
  offset?: number; // max translation range in px (default 50)
  direction?: "up" | "down";
  disabledOnMobile?: boolean;
}

export default function Parallax({
  children,
  className,
  offset = 60,
  direction = "up",
  disabledOnMobile = true,
}: ParallaxProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Track scroll position of the container within the viewport
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const range = direction === "up" ? [-offset, offset] : [offset, -offset];
  const y = useTransform(scrollYProgress, [0, 1], range);

  return (
    <div
      ref={containerRef}
      className={cn("relative overflow-hidden w-full h-full", className)}
    >
      <motion.div
        style={{ y: disabledOnMobile ? { xs: 0, md: y } : y } as any}
        className="w-full h-full"
      >
        {children}
      </motion.div>
    </div>
  );
}
