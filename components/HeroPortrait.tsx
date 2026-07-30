"use client";

import React, { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { PROFILE_DATA } from "@/data/config";

export default function HeroPortrait() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Mouse coordinate values relative to center of portrait card
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Snappy spring interpolation configs
  const springConfig = { damping: 30, stiffness: 180, mass: 0.6 };
  const springX = useSpring(mouseX, springConfig);
  const springY = useSpring(mouseY, springConfig);

  // Map coordinate offsets to 3D rotation degrees (max 12deg tilt)
  const rotateX = useTransform(springY, [-180, 180], [12, -12]);
  const rotateY = useTransform(springX, [-180, 180], [-12, 12]);

  // Soft glow coordinate springs
  const glowX = useTransform(springX, [-180, 180], ["-20%", "20%"]);
  const glowY = useTransform(springY, [-180, 180], ["-20%", "20%"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = containerRef.current;
    if (!el) return;

    const rect = el.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    // Calculate position relative to center of card
    const x = e.clientX - rect.left - width / 2;
    const y = e.clientY - rect.top - height / 2;

    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    // Return smoothly to center on leave
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative flex items-center justify-center cursor-none p-4 select-none w-72 h-72 md:w-80 md:h-80"
    >
      {/* Floating Ambient Background Glow */}
      <motion.div
        style={{
          x: glowX,
          y: glowY,
        }}
        className="absolute inset-0 rounded-full bg-gradient-to-tr from-accent-blue/15 to-purple-500/10 blur-[40px] pointer-events-none"
      />

      {/* Main 3D Tilt Wrapper */}
      <motion.div
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        animate={{
          y: [0, -8, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 6,
          ease: "easeInOut",
        }}
        className="w-full h-full relative"
      >
        {/* Animated Gradient Border Overlay */}
        <div className="absolute inset-0 p-[2px] rounded-[30%_70%_70%_30%_/_30%_30%_70%_70%] bg-gradient-to-tr from-accent-blue via-blue-500 to-purple-500 opacity-60 blur-xs animate-[spin_8s_linear_infinite]" />

        {/* Inner Glass Box Container */}
        <div 
          className="absolute inset-0 bg-neutral-card/60 backdrop-blur-md border border-white/10 p-3 rounded-[30%_70%_70%_30%_/_30%_30%_70%_70%] shadow-premium flex items-center justify-center overflow-hidden"
          style={{ transform: "translateZ(20px)" }}
        >
          {/* Morphing Portrait Image Container */}
          <div className="relative w-full h-full overflow-hidden rounded-[30%_70%_70%_30%_/_30%_30%_70%_70%] animate-[morphBlob_12s_ease-in-out_infinite] bg-neutral-soft">
            <img
              src={PROFILE_DATA.photoUrl}
              alt={PROFILE_DATA.name}
              className="w-full h-full object-cover scale-105 pointer-events-none hover:scale-110 transition-transform duration-[1.5s] ease-[cubic-bezier(0.16,1,0.3,1)]"
              loading="eager"
            />
            {/* Interactive Lighting Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent mix-blend-multiply" />
            <div className="absolute inset-0 bg-gradient-to-tr from-accent-blue/10 via-transparent to-purple-500/10 pointer-events-none opacity-60" />
          </div>
        </div>
      </motion.div>

      {/* CSS Keyframes for morphing liquid blob */}
      <style jsx global>{`
        @keyframes morphBlob {
          0% {
            border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
          }
          33% {
            border-radius: 50% 50% 30% 70% / 50% 60% 40% 50%;
          }
          66% {
            border-radius: 60% 40% 60% 40% / 40% 50% 50% 60%;
          }
          100% {
            border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
          }
        }
      `}</style>
    </div>
  );
}
