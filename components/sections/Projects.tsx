"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Cpu, Layers, AlertCircle, TrendingUp, ChevronRight } from "lucide-react";
import { GithubIcon } from "@/components/Icons";
import { cn } from "@/lib/utils";
import { featuredProjects, otherProjects } from "@/data/projects";
import { BentoCard } from "@/components/Card";
import Reveal from "@/animations/Reveal";
import TextReveal from "@/animations/TextReveal";
import Button from "@/components/Button";

type TabType = "details" | "architecture" | "challenges";

export default function Projects() {
  // Track active detail tabs for each featured project individually
  const [activeTabs, setActiveTabs] = useState<Record<string, TabType>>({
    "infosys-rag": "details",
    "ridebasket": "details",
    "health-buddy": "details",
  });

  const handleTabChange = (projectId: string, tab: TabType) => {
    setActiveTabs((prev) => ({ ...prev, [projectId]: tab }));
  };

  return (
    <section id="projects" className="relative w-full py-32 px-6 md:px-12 bg-neutral-soft/20 border-t border-b border-neutral-border/50">
      <div className="max-w-7xl mx-auto w-full flex flex-col gap-24">
        
        {/* Section Heading */}
        <div className="flex flex-col gap-3">
          <span className="text-[10px] font-sans font-bold uppercase tracking-[0.25em] text-accent-blue">
            03 / Showcase
          </span>
          <TextReveal
            text="Selected Production Works."
            as="h2"
            type="words"
            className="text-3xl md:text-5xl font-display font-extrabold tracking-tight text-foreground"
          />
        </div>

        {/* Featured Projects Stack */}
        <div className="flex flex-col gap-20">
          {featuredProjects.map((project, idx) => {
            const activeTab = activeTabs[project.id] || "details";
            
            return (
              <Reveal
                key={project.id}
                variant="fade-up"
                delay={0.15}
                duration={0.8}
                className="w-full"
              >
                {/* Product Layout Card */}
                <div data-cursor-project="true" className="bento-card p-6 md:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start min-h-[500px]">
                  
                  {/* Left Column: Visual summary, Metrics */}
                  <div className="lg:col-span-5 flex flex-col justify-between h-full gap-8">
                    <div className="space-y-4">
                      {/* Meta */}
                      <div className="flex items-center gap-3 text-xs font-sans text-foreground/50 tracking-wider uppercase font-semibold">
                        <span>{project.role}</span>
                        <span>&bull;</span>
                        <span>{project.year}</span>
                      </div>
                      
                      {/* Title & Tagline */}
                      <div className="space-y-2">
                        <h3 className="font-display text-2xl md:text-3xl font-extrabold tracking-tight text-foreground">
                          {project.title}
                        </h3>
                        <p className="text-sm font-sans text-foreground/75 leading-relaxed">
                          {project.tagline}
                        </p>
                      </div>

                      {/* Tech Stack */}
                      <div className="flex flex-wrap gap-1.5 pt-2">
                        {project.tech.map((t) => (
                          <span
                            key={t}
                            className="text-[10px] font-sans font-semibold tracking-wider uppercase px-2.5 py-1 rounded-full border border-neutral-border bg-neutral-soft text-foreground/60"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Metrics Grid */}
                    <div className="grid grid-cols-3 gap-4 pt-6 border-t border-neutral-border/50">
                      {project.metrics.map((metric, mIdx) => (
                        <div key={mIdx} className="space-y-1 text-left">
                          <span className="block text-2xl font-display font-extrabold tracking-tight text-accent-blue leading-none">
                            {metric.value}
                          </span>
                          <span className="block text-[9px] uppercase tracking-wider font-semibold font-sans text-foreground/45 leading-tight">
                            {metric.label}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Links */}
                    <div className="flex items-center gap-4 pt-4">
                      {project.github && (
                        <Button
                          href={project.github}
                          variant="secondary"
                          size="sm"
                          magnetic
                          icon={<GithubIcon className="h-4 w-4" />}
                        >
                          Codebase
                        </Button>
                      )}
                      {project.live && (
                        <Button
                          href={project.live}
                          variant="primary"
                          size="sm"
                          magnetic
                          icon={<ExternalLink className="h-4 w-4" />}
                        >
                          Live Demo
                        </Button>
                      )}
                    </div>
                  </div>

                  {/* Right Column: Tabbed Product Specifications */}
                  <div className="lg:col-span-7 flex flex-col h-full bg-neutral-soft/50 border border-neutral-border rounded-2xl p-6 min-h-[300px]">
                    {/* Tabs Header */}
                    <div className="flex items-center gap-4 border-b border-neutral-border/60 pb-3 mb-4 font-sans text-xs">
                      {(["details", "architecture", "challenges"] as TabType[]).map((tab) => (
                        <button
                          key={tab}
                          onClick={() => handleTabChange(project.id, tab)}
                          className={cn(
                            "pb-1 font-bold uppercase tracking-wider transition-all relative",
                            activeTab === tab ? "text-accent-blue" : "text-foreground/45 hover:text-foreground"
                          )}
                        >
                          {tab}
                          {activeTab === tab && (
                            <motion.span
                              layoutId={`tabIndicator-${project.id}`}
                              className="absolute bottom-0 left-0 w-full h-[1.5px] bg-accent-blue"
                            />
                          )}
                        </button>
                      ))}
                    </div>

                    {/* Tabs Content */}
                    <div className="flex-1 flex flex-col justify-between font-sans text-sm text-foreground/75 leading-relaxed text-left">
                      <AnimatePresence mode="wait">
                        <motion.div
                          key={activeTab}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          transition={{ duration: 0.2 }}
                          className="space-y-4"
                        >
                          {activeTab === "details" && (
                            <div className="space-y-4">
                              <div className="space-y-1">
                                <span className="text-[10px] uppercase font-sans font-bold tracking-widest text-foreground/45 flex items-center gap-1">
                                  <AlertCircle className="h-3.5 w-3.5 text-accent-blue" />
                                  The Problem
                                </span>
                                <p className="text-foreground/80">{project.problem}</p>
                              </div>
                              <div className="space-y-1">
                                <span className="text-[10px] uppercase font-sans font-bold tracking-widest text-foreground/45 flex items-center gap-1">
                                  <TrendingUp className="h-3.5 w-3.5 text-accent-blue" />
                                  The Solution
                                </span>
                                <p className="text-foreground/80">{project.solution}</p>
                              </div>
                            </div>
                          )}

                          {activeTab === "architecture" && (
                            <div className="space-y-3">
                              <span className="text-[10px] uppercase font-sans font-bold tracking-widest text-foreground/45 flex items-center gap-1">
                                <Cpu className="h-3.5 w-3.5 text-accent-blue" />
                                Core Architecture
                              </span>
                              <p className="text-foreground/80">{project.architecture}</p>
                              
                              {/* ASCII Flow Mockup */}
                              <div className="bg-neutral-card/60 p-4 border border-neutral-border rounded-xl font-mono text-[9px] text-foreground/50 overflow-x-auto whitespace-pre group-hover:scale-[1.02] transition-transform duration-normal ease-apple">
                                {project.id === "infosys-rag" ? (
                                  `User Query ──> Router Agent (LangGraph)\n                  │\n       ┌──────────┴──────────┐\n       ▼                     ▼\nLegal Agent          Compliance Agent\n(vector lookup)      (vector lookup)\n       │                     │\n       └──────────┬──────────┘\n                  ▼\n           Synthesizer Node ──> Response`
                                ) : project.id === "ridebasket" ? (
                                  `Browser Client ──(Axios Header)──> Auth Interceptor\n                                        │\n                                        ▼\n                                Express Router MVC\n                                        │\n                                        ▼\n                                MongoDB Cluster`
                                ) : (
                                  `NextJS App ──(Fetch API)──> FastAPI Endpoint\n                                     │\n                                     ▼\n                              LangChain Chain\n                                     │\n                                     ▼\n                             Gemini LLM Engine`
                                )}
                              </div>
                            </div>
                          )}

                          {activeTab === "challenges" && (
                            <div className="space-y-3">
                              <span className="text-[10px] uppercase font-sans font-bold tracking-widest text-foreground/45 flex items-center gap-1">
                                <Layers className="h-3.5 w-3.5 text-accent-blue" />
                                Engineering Challenges
                              </span>
                              <p className="text-foreground/80">
                                {project.id === "infosys-rag"
                                  ? "Managing LLM hallucinations during legal citation parsing while maintaining sub-second semantic retrieval across Pinecone namespaces. Solved via cross-encoder reranking algorithms."
                                  : project.id === "ridebasket"
                                  ? "Resolving concurrent fare-splitting requests and race conditions during rapid booking approvals. Solved via atomic transaction sequences in database endpoints."
                                  : "Optimizing multi-agent conversational state tracking and memory caches during complex triage loops. Solved by writing custom schema adapters."}
                              </p>
                            </div>
                          )}
                        </motion.div>
                      </AnimatePresence>
                    </div>
                  </div>

                </div>
              </Reveal>
            );
          })}
        </div>

        {/* Other Projects Grid */}
        <div className="flex flex-col gap-12 pt-16 border-t border-neutral-border/50">
          <div className="text-left space-y-1">
            <h3 className="font-display text-xl md:text-2xl font-bold tracking-tight text-foreground">
              Other Systems Built
            </h3>
            <p className="text-xs text-foreground/45 font-sans">
              A gallery of utility microservices, clones, and developmental experiments.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherProjects.map((other, idx) => (
              <Reveal
                key={other.id}
                variant="zoom-in"
                delay={idx * 0.05}
                duration={0.6}
              >
                <BentoCard data-cursor-project="true" className="p-6 flex flex-col justify-between h-56 text-left">
                  <div className="space-y-3">
                    <h4 className="font-display text-lg font-bold tracking-tight text-foreground group-hover:text-accent-blue transition-colors">
                      {other.title}
                    </h4>
                    <p className="text-xs text-foreground/60 leading-relaxed font-sans">
                      {other.description}
                    </p>
                  </div>

                  <div className="space-y-4 pt-4 border-t border-neutral-border/40">
                    {/* Tags */}
                    <div className="flex flex-wrap gap-1">
                      {other.tech.map((t) => (
                        <span
                          key={t}
                          className="text-[9px] font-sans px-2 py-0.5 rounded-full border border-neutral-border/70 bg-neutral-soft/50 text-foreground/50 font-medium"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    {/* Actions */}
                    <div className="flex items-center justify-between text-[10px] uppercase font-sans font-bold tracking-wider">
                      {other.github ? (
                        <a
                          href={other.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-foreground/50 hover:text-accent-blue flex items-center gap-1.5 transition-colors"
                        >
                          <GithubIcon className="h-3.5 w-3.5" />
                          Codebase
                        </a>
                      ) : (
                        <span />
                      )}
                      
                      {other.live && (
                        <a
                          href={other.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-accent-blue hover:text-accent-blue-hover flex items-center gap-1"
                        >
                          Demo
                          <ChevronRight className="h-3.5 w-3.5" />
                        </a>
                      )}
                    </div>
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
