"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Calendar, MapPin, Award } from "lucide-react";
import { cn } from "@/lib/utils";
import { experiences } from "@/data/experience";
import Reveal from "@/animations/Reveal";
import TextReveal from "@/animations/TextReveal";

export default function Experience() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0); // Open first by default

  const toggleExpand = (idx: number) => {
    setExpandedIndex(expandedIndex === idx ? null : idx);
  };

  return (
    <section id="experience" className="relative w-full py-32 px-6 md:px-12 bg-background">
      <div className="max-w-4xl mx-auto w-full flex flex-col gap-16">
        
        {/* Section Heading */}
        <div className="flex flex-col gap-3">
          <span className="text-[10px] font-sans font-bold uppercase tracking-[0.25em] text-accent-blue">
            02 / Work & History
          </span>
          <TextReveal
            text="Professional Milestones."
            as="h2"
            type="words"
            className="text-3xl md:text-5xl font-display font-extrabold tracking-tight text-foreground"
          />
        </div>

        {/* Timeline Layout */}
        <div className="relative border-l border-neutral-border pl-6 md:pl-10 space-y-12">
          {experiences.map((exp, idx) => {
            const isExpanded = expandedIndex === idx;

            return (
              <Reveal
                key={exp.id}
                variant="fade-up"
                delay={idx * 0.1}
                duration={0.8}
                className="relative"
              >
                {/* Timeline Node Pulsing Indicator */}
                <div className="absolute -left-[31px] md:-left-[47px] top-1.5 flex items-center justify-center">
                  <span className="relative flex h-4.5 w-4.5">
                    {isExpanded && (
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-blue/30 opacity-75"></span>
                    )}
                    <span
                      className={cn(
                        "relative inline-flex rounded-full h-4.5 w-4.5 border transition-all duration-300",
                        isExpanded
                          ? "bg-accent-blue border-accent-blue"
                          : "bg-background border-neutral-border"
                      )}
                    />
                  </span>
                </div>

                {/* Card Container */}
                <div
                  onClick={() => toggleExpand(idx)}
                  className={cn(
                    "bento-card p-6 flex flex-col gap-4 cursor-pointer text-left select-none outline-none group border border-neutral-border hover:border-accent-blue/30 focus-visible:outline focus-visible:outline-accent-blue focus-visible:outline-offset-4",
                    isExpanded && "shadow-premium-hover border-accent-blue/20 bg-neutral-card"
                  )}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      toggleExpand(idx);
                    }
                  }}
                >
                  {/* Header Row */}
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="space-y-1">
                      <h3 className="font-display text-xl font-bold tracking-tight text-foreground group-hover:text-accent-blue transition-colors">
                        {exp.role}
                      </h3>
                      <p className="text-sm font-sans font-medium text-foreground/80 flex items-center gap-1.5">
                        <Award className="h-4.5 w-4.5 text-accent-blue shrink-0" />
                        {exp.company}
                      </p>
                    </div>

                    {/* Metadata indicators */}
                    <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-foreground/50 font-sans">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-3.5 w-3.5 text-foreground/40 shrink-0" />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="h-3.5 w-3.5 text-foreground/40 shrink-0" />
                        <span>{exp.location}</span>
                      </div>
                      <ChevronDown
                        className={cn(
                          "h-5 w-5 ml-1 transition-transform duration-300 text-foreground/40 hidden md:block shrink-0",
                          isExpanded && "rotate-180 text-accent-blue"
                        )}
                      />
                    </div>
                  </div>

                  {/* Skills/Tags Row */}
                  <div className="flex flex-wrap gap-1.5">
                    {exp.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] font-sans px-2 py-0.5 rounded-full border border-neutral-border bg-neutral-soft text-foreground/70"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Accordion Impact Details */}
                  <AnimatePresence initial={false}>
                    {isExpanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{
                          height: "auto",
                          opacity: 1,
                          transition: { height: { duration: 0.35, ease: [0.16, 1, 0.3, 1] }, opacity: { duration: 0.25 } },
                        }}
                        exit={{
                          height: 0,
                          opacity: 0,
                          transition: { height: { duration: 0.3, ease: [0.16, 1, 0.3, 1] }, opacity: { duration: 0.15 } },
                        }}
                        className="overflow-hidden border-t border-neutral-border/50 pt-4 mt-2"
                      >
                        <ul className="list-disc pl-4 space-y-2.5 text-sm text-foreground/75 font-sans leading-relaxed">
                          {exp.bullets.map((bullet, bIdx) => (
                            <li key={bIdx} className="marker:text-accent-blue pl-1">
                              {bullet}
                            </li>
                          ))}
                        </ul>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </Reveal>
            );
          })}
        </div>

      </div>
    </section>
  );
}
