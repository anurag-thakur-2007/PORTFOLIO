"use client";

import React from "react";
import { skillCategories } from "@/data/skills";
import { BentoCard } from "@/components/Card";
import Reveal from "@/animations/Reveal";
import TextReveal from "@/animations/TextReveal";

export default function Skills() {
  const getLevelColor = (level: "expert" | "advanced" | "proficient") => {
    switch (level) {
      case "expert":
        return "bg-accent-blue";
      case "advanced":
        return "bg-foreground/50";
      case "proficient":
        return "bg-foreground/20 border border-foreground/30";
      default:
        return "bg-foreground/30";
    }
  };

  return (
    <section id="skills" className="relative w-full py-32 px-6 md:px-12 bg-background">
      <div className="max-w-7xl mx-auto w-full flex flex-col gap-16">
        
        {/* Section Title */}
        <div className="flex flex-col gap-3">
          <span className="text-[10px] font-sans font-bold uppercase tracking-[0.25em] text-accent-blue">
            04 / Technical Stack
          </span>
          <TextReveal
            text="Skills Capabilities."
            as="h2"
            type="words"
            className="text-3xl md:text-5xl font-display font-extrabold tracking-tight text-foreground"
          />
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((cat, idx) => (
            <Reveal
              key={cat.id}
              variant="zoom-in"
              delay={idx * 0.06}
              duration={0.6}
            >
              <BentoCard className="p-6 h-full flex flex-col gap-5 justify-between">
                {/* Category Header */}
                <div className="border-b border-neutral-border pb-3 text-left">
                  <h3 className="font-display font-bold text-base tracking-tight text-foreground">
                    {cat.title}
                  </h3>
                </div>

                {/* Skills List */}
                <div className="flex flex-col gap-3.5 flex-1 pt-1 text-left">
                  {cat.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="flex items-center justify-between text-xs font-sans text-foreground/80 group-hover:translate-x-0.5 transition-transform"
                    >
                      <span className="font-medium">{skill.name}</span>
                      
                      {/* Expertise Pill Label */}
                      <div className="flex items-center gap-1.5 shrink-0">
                        <span className="text-[9px] uppercase tracking-wider font-semibold text-foreground/45">
                          {skill.level}
                        </span>
                        <span
                          className={`h-1.5 w-1.5 rounded-full ${getLevelColor(skill.level)}`}
                          aria-hidden="true"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </BentoCard>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
}
