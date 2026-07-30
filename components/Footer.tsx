"use client";

import React from "react";
import { Mail, ArrowUp } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/Icons";
import { cn } from "@/lib/utils";
import { NAV_ITEMS } from "./Navbar";
import { PROFILE_DATA } from "@/data/config";
import Magnetic from "./Magnetic";
import Button from "./Button";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleBackToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    document.getElementById("home")?.scrollIntoView({ behavior: "smooth" });
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    document.getElementById(href.replace("#", ""))?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="w-full bg-neutral-soft/30 border-t border-neutral-border py-12 px-6 md:px-12 font-sans text-xs">
      <div className="max-w-7xl mx-auto w-full flex flex-col md:flex-row items-center justify-between gap-8">
        
        {/* Left Side: Copyright & details */}
        <div className="flex flex-col items-center md:items-start gap-2 text-center md:text-left text-foreground/45">
          <span className="font-semibold tracking-wider uppercase text-[10px] text-foreground/60">
            Anurag Thakur
          </span>
          <span>
            &copy; {currentYear} Personal Portfolio. Built with Next.js & AI Systems.
          </span>
        </div>

        {/* Center: Quick Links */}
        <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-foreground/60">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className="hover:text-accent-blue font-semibold uppercase tracking-widest text-[9px] transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Right Side: Back to top & Socials */}
        <div className="flex items-center gap-6">
          {/* Social Icons */}
          <div className="flex items-center gap-3">
            <a
              href={PROFILE_DATA.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 text-foreground/45 hover:text-accent-blue transition-colors"
              aria-label="GitHub Profile"
            >
              <GithubIcon className="h-4.5 w-4.5" />
            </a>
            <a
              href={PROFILE_DATA.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 text-foreground/45 hover:text-accent-blue transition-colors"
              aria-label="LinkedIn Profile"
            >
              <LinkedinIcon className="h-4.5 w-4.5" />
            </a>
            <a
              href={`mailto:${PROFILE_DATA.email}`}
              className="p-1.5 text-foreground/45 hover:text-accent-blue transition-colors"
              aria-label="Send Email"
            >
              <Mail className="h-4.5 w-4.5" />
            </a>
          </div>

          {/* Magnetic Back to top button */}
          <Magnetic range={40} strength={0.35}>
            <a
              href="#home"
              onClick={handleBackToTop}
              className="flex items-center justify-center h-10 w-10 rounded-full border border-neutral-border bg-neutral-card text-foreground/60 hover:text-accent-blue hover:border-accent-blue/30 shadow-premium hover:shadow-glow transition-all"
              aria-label="Scroll Back to Top"
            >
              <ArrowUp className="h-4.5 w-4.5" />
            </a>
          </Magnetic>
        </div>

      </div>
    </footer>
  );
}
