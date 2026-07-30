"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { cn } from "@/lib/utils";

interface TextRevealProps {
  text: string;
  className?: string;
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span";
  delay?: number;
  stagger?: number;
  duration?: number;
  type?: "words" | "chars";
}

export default function TextReveal({
  text,
  className = "",
  as = "span",
  delay = 0,
  stagger = 0.03,
  duration = 0.8,
  type = "words",
}: TextRevealProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.15 });

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: stagger,
        delayChildren: delay,
      },
    },
  };

  const childVariants = {
    hidden: {
      opacity: 0,
      y: "110%",
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: duration,
        ease: [0.16, 1, 0.3, 1] as [number, number, number, number], // easeOutExpo
      },
    },
  };

  const textElements = type === "words" ? text.split(" ") : text.split("");

  const Element = as;

  return (
    <Element className={cn("inline-block", className)}>
      <motion.span
        ref={ref}
        className="inline-block"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {type === "words"
          ? textElements.map((word, idx) => (
              <span
                key={idx}
                className="inline-block overflow-hidden mr-[0.22em] py-[0.1em] align-top"
              >
                <motion.span className="inline-block" variants={childVariants}>
                  {word}
                </motion.span>
              </span>
            ))
          : textElements.map((char, idx) => (
              <span
                key={idx}
                className={cn(
                  "inline-block overflow-hidden py-[0.1em]",
                  char === " " ? "w-[0.25em]" : ""
                )}
              >
                <motion.span className="inline-block" variants={childVariants}>
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              </span>
            ))}
      </motion.span>
    </Element>
  );
}
