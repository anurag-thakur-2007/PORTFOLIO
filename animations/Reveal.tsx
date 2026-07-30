"use client";

import React, { useRef } from "react";
import { motion, useInView, Variant } from "framer-motion";

export interface RevealProps {
  children: React.ReactNode;
  variant?: "fade-up" | "fade-down" | "fade-left" | "fade-right" | "zoom-in" | "zoom-out" | "none";
  duration?: number;
  delay?: number;
  threshold?: number;
  className?: string;
  as?: "div" | "span" | "section" | "article" | "li" | "ul";
  staggerChildren?: number;
  triggerOnce?: boolean;
}

export default function Reveal({
  children,
  variant = "fade-up",
  duration = 0.8,
  delay = 0,
  threshold = 0.15,
  className = "",
  as = "div",
  staggerChildren = 0,
  triggerOnce = true,
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: triggerOnce, amount: threshold });

  const getVariants = () => {
    const defaultEase: [number, number, number, number] = [0.16, 1, 0.3, 1]; // Apple easeOutExpo

    const motionVariants: Record<string, { hidden: Variant; visible: Variant }> = {
      "fade-up": {
        hidden: { opacity: 0, y: 30 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration, delay, ease: defaultEase, staggerChildren },
        },
      },
      "fade-down": {
        hidden: { opacity: 0, y: -30 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration, delay, ease: defaultEase, staggerChildren },
        },
      },
      "fade-left": {
        hidden: { opacity: 0, x: 30 },
        visible: {
          opacity: 1,
          x: 0,
          transition: { duration, delay, ease: defaultEase, staggerChildren },
        },
      },
      "fade-right": {
        hidden: { opacity: 0, x: -30 },
        visible: {
          opacity: 1,
          x: 0,
          transition: { duration, delay, ease: defaultEase, staggerChildren },
        },
      },
      "zoom-in": {
        hidden: { opacity: 0, scale: 0.92 },
        visible: {
          opacity: 1,
          scale: 1,
          transition: { duration, delay, ease: defaultEase, staggerChildren },
        },
      },
      "zoom-out": {
        hidden: { opacity: 0, scale: 1.08 },
        visible: {
          opacity: 1,
          scale: 1,
          transition: { duration, delay, ease: defaultEase, staggerChildren },
        },
      },
      "none": {
        hidden: {},
        visible: {
          transition: { staggerChildren, delayChildren: delay },
        },
      },
    };

    return motionVariants[variant] || motionVariants["fade-up"];
  };

  const MotionComponent = motion[as] as any;

  return (
    <MotionComponent
      ref={ref}
      className={className}
      variants={getVariants()}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      {children}
    </MotionComponent>
  );
}
