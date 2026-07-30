"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export interface LoaderProps {
  onComplete: () => void;
}

export default function Loader({ onComplete }: LoaderProps) {
  const [progress, setProgress] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  // Fast fake loading progress simulation (2 seconds total)
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsFinished(true);
            setTimeout(onComplete, 600); // Allow curtain transition to finish
          }, 400);
          return 100;
        }
        // Increment progress incrementally
        const increment = Math.floor(Math.random() * 15) + 5;
        return Math.min(100, prev + increment);
      });
    }, 120);

    return () => clearInterval(interval);
  }, [onComplete]);

  // Prevent scroll during load
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  const containerVariants = {
    exit: {
      opacity: 0,
      y: "-100%",
      transition: {
        duration: 0.8,
        ease: [0.85, 0, 0.15, 1] as [number, number, number, number], // easeInOutApple
      },
    },
  };

  const nameRevealVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.08,
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1] as [number, number, number, number], // easeOutExpo
      },
    }),
  };

  const name = "ANURAG THAKUR".split("");

  return (
    <AnimatePresence>
      {!isFinished && (
        <motion.div
          variants={containerVariants}
          exit="exit"
          className="fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-background select-none bg-mesh"
        >
          {/* Subtle grid pattern border overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background pointer-events-none" />
          
          <div className="relative flex flex-col items-center justify-center gap-6 z-10">
            {/* Title / Name */}
            <h1 className="font-display text-2xl md:text-3xl font-bold tracking-[0.25em] text-foreground flex items-center justify-center">
              {name.map((char, index) => (
                <motion.span
                  key={index}
                  custom={index}
                  variants={nameRevealVariants}
                  initial="hidden"
                  animate="visible"
                  className={char === " " ? "w-[0.3em]" : ""}
                >
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              ))}
            </h1>

            {/* Subtext */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="text-[10px] uppercase font-sans tracking-[0.3em] text-foreground/80"
            >
              Systems & AI Developer
            </motion.p>

            {/* Progress Container */}
            <div className="relative mt-8 w-48 md:w-64 h-[2px] bg-neutral-border rounded-full overflow-hidden">
              {/* Dynamic progress bar */}
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.1, ease: "linear" }}
                className="absolute left-0 top-0 h-full bg-accent-blue"
              />
            </div>
            
            {/* Progress Percentage */}
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.4 }}
              transition={{ delay: 0.8 }}
              className="text-[10px] font-sans font-semibold text-foreground tracking-widest mt-1"
            >
              {progress}%
            </motion.span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
