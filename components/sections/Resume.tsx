"use client";

import React from "react";
import { Download, FileText, ExternalLink } from "lucide-react";
import { BentoCard } from "@/components/Card";
import Reveal from "@/animations/Reveal";
import TextReveal from "@/animations/TextReveal";
import Button from "@/components/Button";
import { PROFILE_DATA } from "@/data/config";

export default function Resume() {
  return (
    <section id="resume" className="relative w-full py-32 px-6 md:px-12 bg-neutral-soft/20 border-t border-b border-neutral-border/50">
      <div className="max-w-4xl mx-auto w-full flex flex-col gap-16">
        
        {/* Section Heading */}
        <div className="flex flex-col gap-3">
          <span className="text-[10px] font-sans font-bold uppercase tracking-[0.25em] text-accent-blue">
            07 / Credentials
          </span>
          <TextReveal
            text="Interactive Resume."
            as="h2"
            type="words"
            className="text-3xl md:text-5xl font-display font-extrabold tracking-tight text-foreground"
          />
        </div>

        {/* Resume Preview & Actions Container */}
        <Reveal variant="fade-up" duration={0.8}>
          <div className="space-y-6">
            
            {/* Actions Bar */}
            <div className="flex flex-wrap items-center justify-between gap-4 p-4 bg-neutral-card border border-neutral-border rounded-2xl">
              <div className="flex items-center gap-2 text-xs font-sans text-foreground/50">
                <FileText className="h-4.5 w-4.5 text-accent-blue shrink-0" />
                <span>anurag_thakur_resume.pdf</span>
              </div>
              
              <div className="flex items-center gap-3">
                <Button
                  href={PROFILE_DATA.resumeUrl}
                  variant="secondary"
                  size="sm"
                  magnetic
                  icon={<Download className="h-4 w-4" />}
                >
                  Download / Print
                </Button>
                
                <Button
                  href={PROFILE_DATA.resumeUrl}
                  variant="primary"
                  size="sm"
                  magnetic
                  icon={<ExternalLink className="h-4 w-4" />}
                >
                  Open Full
                </Button>
              </div>
            </div>

            {/* Styled Resume Mockup Preview Box */}
            <BentoCard className="p-6 md:p-10 select-none overflow-hidden h-[500px] relative text-left">
              {/* Overlay fade out effect at the bottom to invite downloading */}
              <div className="absolute bottom-0 inset-x-0 h-40 bg-gradient-to-t from-neutral-card via-neutral-card/85 to-transparent z-20 flex items-center justify-center">
                <Button href={PROFILE_DATA.resumeUrl} variant="primary" size="lg" magnetic>
                  View Full Interactive Document
                </Button>
              </div>

              {/* Styled mini resume hierarchy */}
              <div className="font-sans text-[11px] text-foreground/70 space-y-6 pointer-events-none opacity-40">
                {/* Header Mock */}
                <div className="space-y-1.5 border-b border-neutral-border pb-4">
                  <h3 className="text-xl font-display font-extrabold tracking-tight text-foreground">
                    {PROFILE_DATA.name}
                  </h3>
                  <div className="flex flex-wrap gap-4 text-foreground/50">
                    <span>{PROFILE_DATA.email}</span>
                    <span>&bull;</span>
                    <span>{PROFILE_DATA.phone}</span>
                    <span>&bull;</span>
                    <span>{PROFILE_DATA.location}</span>
                  </div>
                </div>

                {/* Education Mock */}
                <div className="space-y-2">
                  <h4 className="text-[10px] font-bold uppercase tracking-wider text-accent-blue">
                    Education
                  </h4>
                  <div className="flex justify-between">
                    <div>
                      <span className="font-bold text-foreground block">VIT Bhopal University</span>
                      <span>Bachelor of Technology in Computer Science & Engineering</span>
                    </div>
                    <div className="text-right">
                      <span className="block font-bold">Aug 2024 – May 2028</span>
                      <span>CGPA: {PROFILE_DATA.cgpa} / 10</span>
                    </div>
                  </div>
                </div>

                {/* Experience Mock */}
                <div className="space-y-2">
                  <h4 className="text-[10px] font-bold uppercase tracking-wider text-accent-blue">
                    Professional Experience
                  </h4>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <div>
                        <span className="font-bold text-foreground block">AI/ML Intern</span>
                        <span>Infosys Springboard (Remote)</span>
                      </div>
                      <span className="font-bold">Nov 2025 – Present</span>
                    </div>
                    <ul className="list-disc pl-4 space-y-1">
                      <li>Built a RAG-powered legal contract analyzer using LangChain and Pinecone, achieving 90% accuracy.</li>
                      <li>Designed multi-agent AI systems using LangGraph to automate compliance workflows.</li>
                      <li>Optimized model performance via quantization, achieving 3x throughput speedups.</li>
                    </ul>
                  </div>
                </div>
              </div>

            </BentoCard>

          </div>
        </Reveal>

      </div>
    </section>
  );
}
