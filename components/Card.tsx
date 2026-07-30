"use client";

import React, { useRef, useState } from "react";
import { cn } from "@/lib/utils";

// --- Card Container Interface ---
export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
}

export function Card({ children, className, ...props }: CardProps) {
  return (
    <div
      className={cn(
        "rounded-3xl border border-neutral-border bg-neutral-card p-6 shadow-premium transition-all duration-300",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

// --- Bento Card Interface (With Interactive Border Glow) ---
export interface BentoCardProps extends CardProps {
  glowColor?: string; // custom radial glow (default to blue)
  glowRadius?: number; // custom glow radius size in px
}

export function BentoCard({
  children,
  className,
  glowColor = "rgba(0, 82, 255, 0.15)",
  glowRadius = 350,
  ...props
}: BentoCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setCoords({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={cn(
        "relative rounded-3xl overflow-hidden border border-neutral-border bg-neutral-card transition-all duration-400 ease-apple hover:-translate-y-1 hover:border-accent-blue/20 hover:shadow-premium-hover",
        className
      )}
      style={
        {
          "--mouse-x": `${coords.x}px`,
          "--mouse-y": `${coords.y}px`,
        } as React.CSSProperties
      }
      {...props}
    >
      {/* Background Radial Glow Border Effect */}
      <div
        className="absolute inset-0 pointer-events-none transition-opacity duration-500 ease-apple z-0"
        style={{
          opacity: isHovered ? 1 : 0,
          background: `radial-gradient(circle ${glowRadius}px at var(--mouse-x, 0px) var(--mouse-y, 0px), ${glowColor} 0%, transparent 80%)`,
        }}
      />
      
      {/* Card Content Wrapper */}
      <div className="relative z-10 w-full h-full flex flex-col">
        {children}
      </div>
    </div>
  );
}

// --- Project Card Interface ---
export interface ProjectCardProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  tagline: string;
  tech: string[];
  role: string;
  year: string;
  metrics?: { label: string; value: string }[];
  href?: string;
  github?: string;
}

export function ProjectCard({
  title,
  tagline,
  tech,
  role,
  year,
  metrics,
  href,
  github,
  className,
  ...props
}: ProjectCardProps) {
  return (
    <BentoCard
      className={cn("p-6 md:p-8 flex flex-col justify-between h-full group", className)}
      {...props}
    >
      <div className="space-y-4">
        {/* Header (Role, Year) */}
        <div className="flex items-center justify-between text-xs text-foreground/50 font-sans tracking-wide uppercase">
          <span>{role}</span>
          <span>{year}</span>
        </div>

        {/* Title & Tagline */}
        <div className="space-y-2">
          <h3 className="font-display text-2xl font-bold tracking-tight group-hover:text-accent-blue transition-colors duration-300">
            {title}
          </h3>
          <p className="text-sm text-foreground/75 font-sans leading-relaxed">
            {tagline}
          </p>
        </div>

        {/* Tech Stack Tags */}
        <div className="flex flex-wrap gap-1.5 pt-2">
          {tech.map((t, idx) => (
            <span
              key={idx}
              className="text-[10px] md:text-xs font-sans px-2.5 py-1 rounded-full bg-neutral-soft border border-neutral-border text-foreground/80"
            >
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* Metrics & Actions */}
      <div className="mt-8 space-y-6 pt-6 border-t border-neutral-border/50">
        {metrics && metrics.length > 0 && (
          <div className="grid grid-cols-3 gap-4">
            {metrics.map((metric, idx) => (
              <div key={idx} className="space-y-1">
                <div className="text-xl md:text-2xl font-display font-bold tracking-tight text-accent-blue">
                  {metric.value}
                </div>
                <div className="text-[10px] md:text-xs text-foreground/50 font-sans tracking-wide uppercase">
                  {metric.label}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Action Links */}
        <div className="flex items-center gap-4 text-xs font-sans font-semibold tracking-wide uppercase pt-2">
          {href && (
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent-blue hover:text-accent-blue-hover hover:underline transition-all"
            >
              Live Demo &rarr;
            </a>
          )}
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/70 hover:text-foreground hover:underline transition-all"
            >
              GitHub Code
            </a>
          )}
        </div>
      </div>
    </BentoCard>
  );
}
