"use client";

import React from "react";
import { Award, ShieldCheck, Trophy, Sparkles, BookOpen, Star } from "lucide-react";
import { BentoCard } from "@/components/Card";
import Reveal from "@/animations/Reveal";
import TextReveal from "@/animations/TextReveal";

export default function Achievements() {
  const achievements = [
    {
      title: "Oracle AI Foundations",
      subtitle: "OCI Certified Associate",
      desc: "Validated expertise in core generative AI mechanisms, large language model deployment strategies, and OCI vector architectures.",
      icon: <ShieldCheck className="h-5 w-5 text-accent-blue" />,
      year: "2025",
    },
    {
      title: "Smart India Hackathon",
      subtitle: "Internal Campus Finalist",
      desc: "Developed a distributed digital twin dashboard resolving geospatial scheduling bottlenecks for rural development authorities.",
      icon: <Trophy className="h-5 w-5 text-accent-blue" />,
      year: "2025",
    },
    {
      title: "NPTEL Credentials",
      subtitle: "Elite + Silver Honors",
      desc: "Earned silver academic badges in advanced modules covering Software Engineering standards and Java Enterprise compilation paradigms.",
      icon: <BookOpen className="h-5 w-5 text-accent-blue" />,
      year: "2025",
    },
    {
      title: "LeetCode Contest Badge",
      subtitle: "Top 12% Global Contestant",
      desc: "Consistently competed in biweekly algorithmic rounds, achieving a peak contest performance rating of 1580.",
      icon: <Star className="h-5 w-5 text-accent-blue" />,
      year: "2026",
    },
    {
      title: "Codeforces Division",
      subtitle: "Pupil Division Class",
      desc: "Solved 150+ complex dynamic programming, greedy, and graph-theoretic problems across various division contests.",
      icon: <Sparkles className="h-5 w-5 text-accent-blue" />,
      year: "2026",
    },
    {
      title: "Academic Scholarship",
      subtitle: "VIT Bhopal Merit Award",
      desc: "Awarded campus merit honors for maintaining academic excellence and securing a peak CGPA of 8.88.",
      icon: <Award className="h-5 w-5 text-accent-blue" />,
      year: "2025",
    },
  ];

  return (
    <section id="achievements" className="relative w-full py-32 px-6 md:px-12 bg-background">
      <div className="max-w-7xl mx-auto w-full flex flex-col gap-16">
        
        {/* Section Heading */}
        <div className="flex flex-col gap-3">
          <span className="text-[10px] font-sans font-bold uppercase tracking-[0.25em] text-accent-blue">
            06 / Certifications
          </span>
          <TextReveal
            text="Achievements & Honors."
            as="h2"
            type="words"
            className="text-3xl md:text-5xl font-display font-extrabold tracking-tight text-foreground"
          />
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((ach, idx) => (
            <Reveal
              key={idx}
              variant="zoom-in"
              delay={idx * 0.05}
              duration={0.6}
            >
              <BentoCard className="p-6 h-full flex flex-col justify-between gap-6 text-left">
                <div className="space-y-4">
                  {/* Icon & Year */}
                  <div className="flex items-center justify-between">
                    <div className="p-2.5 bg-neutral-soft border border-neutral-border rounded-xl">
                      {ach.icon}
                    </div>
                    <span className="text-[10px] font-sans font-bold tracking-wider text-foreground/45 uppercase bg-neutral-soft px-2.5 py-0.5 rounded-full border border-neutral-border">
                      {ach.year}
                    </span>
                  </div>

                  {/* Title details */}
                  <div className="space-y-1">
                    <h3 className="font-display font-bold text-base tracking-tight text-foreground">
                      {ach.title}
                    </h3>
                    <p className="text-xs font-sans font-semibold text-accent-blue">
                      {ach.subtitle}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="text-xs text-foreground/60 leading-relaxed font-sans">
                    {ach.desc}
                  </p>
                </div>
              </BentoCard>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
}
