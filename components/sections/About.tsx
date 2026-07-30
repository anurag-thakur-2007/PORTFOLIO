"use client";

import React from "react";
import { BentoCard } from "@/components/Card";
import Reveal from "@/animations/Reveal";
import TextReveal from "@/animations/TextReveal";
import { PROFILE_DATA } from "@/data/config";

export default function About() {
  const stats = [
    { label: "VIT Bhopal CGPA", value: PROFILE_DATA.cgpa, desc: "Computer Science Engineering" },
    { label: "LeetCode Solved", value: PROFILE_DATA.leetcodeCount, desc: "Verified problems solved" },
    { label: "Systems Built", value: "10+", desc: "AI pipelines & geospatial models" },
    { label: "Industry Experience", value: "Nov '25", desc: "Active AI Research Intern" },
    { label: "Event Attendees", value: "500+", desc: "Managed in college tech teams" },
    { label: "Certifications", value: "15+", desc: "Oracle GenAI, NPTEL, and QA" },
  ];

  return (
    <section
      id="about"
      className="relative w-full py-32 px-6 md:px-12 bg-neutral-soft/30 border-t border-b border-neutral-border/50"
    >
      <div className="max-w-7xl mx-auto w-full flex flex-col gap-16">
        
        {/* Section Title */}
        <div className="flex flex-col gap-3">
          <span className="text-[10px] font-sans font-bold uppercase tracking-[0.25em] text-accent-blue">
            01 / Story & Philosophy
          </span>
          <TextReveal
            text="Engineering Products, Not Academic Projects."
            as="h2"
            type="words"
            className="text-3xl md:text-5xl font-display font-extrabold tracking-tight text-foreground"
          />
        </div>

        {/* Narrative & Stats Dashboard Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Narrative Text */}
          <div className="lg:col-span-6 flex flex-col gap-6 text-foreground/80 font-sans text-sm md:text-base leading-relaxed">
            <Reveal variant="fade-up" delay={0.1}>
              <p>
                My entry into software engineering didn't start with textbooks; it began with a curiosity about how massive systems coordinate behind the scenes. As a Computer Science student at VIT Bhopal, I quickly realized that writing code that merely runs is simple—but engineering software that scales, adapts, and survives production workloads is an art.
              </p>
            </Reveal>

            <Reveal variant="fade-up" delay={0.2}>
              <p>
                I focus my engineering energy on the intersection of **Backend Scalability** and **AI Orchestration**. During my time as an AI Intern at Infosys Springboard, I designed multi-agent architectures that process compliance checks asynchronously, utilizing agent frameworks like LangGraph to turn simple API calls into resilient cognitive systems.
              </p>
            </Reveal>

            <Reveal variant="fade-up" delay={0.3}>
              <p>
                My core development philosophy centers around modularity, accessibility, and high performance. I believe the difference between a student portfolio and a production engineer is the commitment to quality: clean architectural separations, semantic code, comprehensive validation, and a focus on UX micro-interactions.
              </p>
            </Reveal>
          </div>

          {/* Bento Stats Dashboard Grid */}
          <div className="lg:col-span-6 grid grid-cols-2 md:grid-cols-3 gap-4">
            {stats.map((stat, idx) => (
              <Reveal
                key={idx}
                variant="zoom-in"
                delay={idx * 0.08}
                duration={0.6}
              >
                <BentoCard className="p-5 flex flex-col justify-between h-36">
                  <div>
                    <span className="text-2xl md:text-3xl font-display font-extrabold tracking-tight text-accent-blue">
                      {stat.value}
                    </span>
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-[10px] font-sans font-bold uppercase tracking-wider text-foreground/85">
                      {stat.label}
                    </h4>
                    <p className="text-[9px] text-foreground/45 leading-tight font-sans">
                      {stat.desc}
                    </p>
                  </div>
                </BentoCard>
              </Reveal>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
