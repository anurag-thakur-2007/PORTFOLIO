"use client";

import React from "react";
import { Code, BarChart2, CheckCircle, Zap } from "lucide-react";
import { GithubIcon } from "@/components/Icons";
import { BentoCard } from "@/components/Card";
import Reveal from "@/animations/Reveal";
import TextReveal from "@/animations/TextReveal";
import { PROFILE_DATA } from "@/data/config";

export default function Coding() {
  // Mock contribution graph coordinates (7 rows x 20 columns)
  const rows = 7;
  const cols = 22;
  const contributionGrid = Array.from({ length: rows * cols }, () => {
    // Random contribution weight colors (0 to 3)
    const weights = [
      "bg-neutral-soft dark:bg-neutral-soft", 
      "bg-emerald-500/10 dark:bg-emerald-500/10", 
      "bg-emerald-500/30 dark:bg-emerald-500/30", 
      "bg-emerald-500 dark:bg-emerald-500"
    ];
    return weights[Math.floor(Math.random() * 4)];
  });

  const repos = [
    { name: "infosys-legal-rag", stars: 12, fork: 4, lang: "Python" },
    { name: "gramtwin-dashboard", stars: 8, fork: 2, lang: "TypeScript" },
    { name: "ridebasket-matching", stars: 6, fork: 1, lang: "JavaScript" },
  ];

  return (
    <section
      id="coding"
      className="relative w-full py-32 px-6 md:px-12 bg-neutral-soft/20 border-t border-b border-neutral-border/50"
    >
      <div className="max-w-7xl mx-auto w-full flex flex-col gap-16">
        
        {/* Section Heading */}
        <div className="flex flex-col gap-3">
          <span className="text-[10px] font-sans font-bold uppercase tracking-[0.25em] text-accent-blue">
            05 / Coding Dashboard
          </span>
          <TextReveal
            text="Algorithmic Profiles."
            as="h2"
            type="words"
            className="text-3xl md:text-5xl font-display font-extrabold tracking-tight text-foreground"
          />
        </div>

        {/* Dashboard Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* GitHub Contributions Graph Bento */}
          <div className="lg:col-span-8">
            <Reveal variant="zoom-in" duration={0.8}>
              <BentoCard className="p-6 h-full flex flex-col justify-between gap-6 text-left">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <GithubIcon className="h-5 w-5 text-accent-blue" />
                    <h3 className="font-display font-bold text-lg text-foreground">
                      GitHub Activity Pipeline
                    </h3>
                  </div>
                  <p className="text-xs text-foreground/50 font-sans">
                    Autonomous repository check-ins, multi-agent builds, and CI pipelines.
                  </p>
                </div>

                {/* Pixel Grid Contribution Graph */}
                <div className="flex flex-col gap-1">
                  <div className="grid grid-flow-col grid-rows-7 gap-[3px] overflow-x-auto py-1 max-w-full">
                    {contributionGrid.map((bg, idx) => (
                      <div
                        key={idx}
                        className={`w-[10px] h-[10px] rounded-[2px] transition-colors hover:scale-110 duration-200 ${bg}`}
                      />
                    ))}
                  </div>
                  <div className="flex items-center justify-between text-[8px] uppercase tracking-wider text-foreground/45 font-sans pt-1">
                    <span>Less</span>
                    <div className="flex gap-[3px]">
                      <div className="w-[8px] h-[8px] rounded-[1px] bg-neutral-soft" />
                      <div className="w-[8px] h-[8px] rounded-[1px] bg-emerald-500/10" />
                      <div className="w-[8px] h-[8px] rounded-[1px] bg-emerald-500/30" />
                      <div className="w-[8px] h-[8px] rounded-[1px] bg-emerald-500" />
                    </div>
                    <span>More</span>
                  </div>
                </div>

                {/* Repos list & Language Usage */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-4 pt-4 border-t border-neutral-border/40">
                  {/* Lang Usage */}
                  <div className="md:col-span-5 space-y-3 font-sans text-xs">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-foreground/45">
                      Language Distribution
                    </span>
                    <div className="space-y-2.5">
                      {/* Python */}
                      <div className="space-y-1">
                        <div className="flex items-center justify-between">
                          <span>Python (AI & Backend)</span>
                          <span className="text-foreground/50">45%</span>
                        </div>
                        <div className="w-full h-1 bg-neutral-soft rounded-full overflow-hidden">
                          <div className="h-full bg-accent-blue w-[45%]" />
                        </div>
                      </div>
                      {/* TypeScript */}
                      <div className="space-y-1">
                        <div className="flex items-center justify-between">
                          <span>TypeScript (React & Node)</span>
                          <span className="text-foreground/50">35%</span>
                        </div>
                        <div className="w-full h-1 bg-neutral-soft rounded-full overflow-hidden">
                          <div className="h-full bg-accent-blue w-[35%]" />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Active Repos */}
                  <div className="md:col-span-7 space-y-3 font-sans text-xs">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-foreground/45">
                      Active Repository Nodes
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                      {repos.map((r) => (
                        <div key={r.name} className="p-2 bg-neutral-soft border border-neutral-border rounded-lg space-y-1.5">
                          <span className="font-mono text-[9px] font-semibold block text-foreground truncate">{r.name}</span>
                          <div className="flex items-center justify-between text-[8px] text-foreground/45">
                            <span>{r.lang}</span>
                            <span>★ {r.stars}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </BentoCard>
            </Reveal>
          </div>

          {/* LeetCode & Codeforces Bento */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            
            {/* LeetCode */}
            <Reveal variant="zoom-in" duration={0.8} delay={0.15}>
              <a
                href={PROFILE_DATA.socials.leetcode}
                target="_blank"
                rel="noopener noreferrer"
                className="block hover:no-underline select-none cursor-none"
              >
                <BentoCard className="p-5 flex flex-col justify-between h-48 text-left hover:border-accent-blue/30 transition-colors">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Code className="h-4.5 w-4.5 text-accent-blue" />
                      <h3 className="font-display font-bold text-sm tracking-tight text-foreground">
                        LeetCode Profile
                      </h3>
                    </div>
                    <span className="text-[9px] font-sans font-bold uppercase px-2 py-0.5 rounded-full bg-neutral-soft border border-neutral-border text-foreground/50">
                      View Profile
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-4 items-center pt-2">
                    <div className="space-y-1">
                      <span className="text-3xl font-display font-extrabold tracking-tight text-accent-blue">
                        {PROFILE_DATA.leetcodeCount}
                      </span>
                      <span className="block text-[9px] uppercase tracking-wider font-semibold font-sans text-foreground/45">
                        Problems Solved
                      </span>
                    </div>
                    <div className="space-y-1">
                      <span className="text-xl font-display font-bold tracking-tight text-foreground">
                        Top 12%
                      </span>
                      <span className="block text-[9px] uppercase tracking-wider font-semibold font-sans text-foreground/45">
                        Global Rank
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-1.5 text-[9px] text-foreground/50 font-sans pt-2.5 border-t border-neutral-border/40">
                    <CheckCircle className="h-3.5 w-3.5 text-emerald-500 shrink-0" />
                    <span>Top problem-solving speed percentile metrics.</span>
                  </div>
                </BentoCard>
              </a>
            </Reveal>

            {/* Codeforces */}
            <Reveal variant="zoom-in" duration={0.8} delay={0.25}>
              <a
                href={PROFILE_DATA.socials.codeforces}
                target="_blank"
                rel="noopener noreferrer"
                className="block hover:no-underline select-none cursor-none"
              >
                <BentoCard className="p-5 flex flex-col justify-between h-48 text-left hover:border-accent-blue/30 transition-colors">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <BarChart2 className="h-4.5 w-4.5 text-accent-blue" />
                      <h3 className="font-display font-bold text-sm tracking-tight text-foreground">
                        Codeforces Profile
                      </h3>
                    </div>
                    <span className="text-[9px] font-sans font-bold uppercase px-2 py-0.5 rounded-full bg-neutral-soft border border-neutral-border text-foreground/50">
                      View Profile
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-4 items-center pt-2">
                    <div className="space-y-1">
                      <span className="text-3xl font-display font-extrabold tracking-tight text-accent-blue">
                        {PROFILE_DATA.codeforcesRating}
                      </span>
                      <span className="block text-[9px] uppercase tracking-wider font-semibold font-sans text-foreground/45">
                        Contest Rating
                      </span>
                    </div>
                    <div className="space-y-1">
                      <span className="text-xl font-display font-bold tracking-tight text-foreground">
                        {PROFILE_DATA.codeforcesDivision}
                      </span>
                      <span className="block text-[9px] uppercase tracking-wider font-semibold font-sans text-foreground/45">
                        Division Class
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-1.5 text-[9px] text-foreground/50 font-sans pt-2.5 border-t border-neutral-border/40">
                    <Zap className="h-3.5 w-3.5 text-yellow-500 shrink-0" />
                    <span>Active participant in Codeforces division rounds.</span>
                  </div>
                </BentoCard>
              </a>
            </Reveal>

          </div>

        </div>

      </div>
    </section>
  );
}
