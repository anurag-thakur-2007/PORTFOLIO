"use client";

import React, { useRef } from "react";
import Image, { ImageProps } from "next/image";
import { motion, useInView } from "framer-motion";
import { cn } from "@/lib/utils";

export interface ImageRevealProps extends Omit<ImageProps, "src"> {
  src: string;
  alt: string;
  className?: string;
  imageClassName?: string;
  aspectRatio?: "video" | "square" | "portrait" | "auto" | string;
  overlayColor?: string; // Curtain color (defaults to neutral-soft)
  direction?: "left" | "right" | "top" | "bottom";
  delay?: number;
  duration?: number;
}

export default function ImageReveal({
  src,
  alt,
  className,
  imageClassName,
  aspectRatio = "auto",
  overlayColor = "var(--neutral-soft)",
  direction = "right",
  delay = 0.1,
  duration = 0.8,
  width,
  height,
  fill,
  priority,
  ...props
}: ImageRevealProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.2 });

  // Map reveal direction to CSS translation configurations
  const getCurtainVariants = () => {
    switch (direction) {
      case "left":
        return {
          hidden: { scaleX: 1, originX: 1 },
          visible: { scaleX: 0, originX: 1 },
        };
      case "right":
        return {
          hidden: { scaleX: 1, originX: 0 },
          visible: { scaleX: 0, originX: 0 },
        };
      case "top":
        return {
          hidden: { scaleY: 1, originY: 1 },
          visible: { scaleY: 0, originY: 1 },
        };
      case "bottom":
        return {
          hidden: { scaleY: 1, originY: 0 },
          visible: { scaleY: 0, originY: 0 },
        };
      default:
        return {
          hidden: { scaleX: 1, originX: 0 },
          visible: { scaleX: 0, originX: 0 },
        };
    }
  };

  const imageVariants = {
    hidden: { scale: 1.15, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: duration + 0.2,
        delay: delay + 0.1,
        ease: [0.16, 1, 0.3, 1] as [number, number, number, number], // easeOutExpo
      },
    },
  };

  const curtainVariants = {
    hidden: getCurtainVariants().hidden,
    visible: {
      ...getCurtainVariants().visible,
      transition: {
        duration: duration,
        delay: delay,
        ease: [0.85, 0, 0.15, 1] as [number, number, number, number], // easeInOutApple
      },
    },
  };

  const aspectStyles = {
    video: "aspect-video",
    square: "aspect-square",
    portrait: "aspect-[3/4]",
    auto: "",
  };

  const matchedAspect = aspectStyles[aspectRatio as keyof typeof aspectStyles] || aspectRatio;

  return (
    <div
      ref={containerRef}
      className={cn(
        "relative overflow-hidden rounded-2xl bg-neutral-soft",
        matchedAspect,
        className
      )}
    >
      {/* Zooming Image element */}
      <motion.div
        variants={imageVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="w-full h-full relative"
      >
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          fill={fill}
          priority={priority}
          className={cn("w-full h-full object-cover", imageClassName)}
          {...props}
        />
      </motion.div>

      {/* Slide-away Curtain Overlay */}
      <motion.div
        variants={curtainVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        style={{ backgroundColor: overlayColor }}
        className="absolute inset-0 z-20 pointer-events-none w-full h-full"
      />
    </div>
  );
}
