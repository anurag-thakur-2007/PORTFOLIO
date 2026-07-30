"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { AlertTriangle, Home } from "lucide-react";
import Button from "@/components/Button";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-background select-none bg-mesh relative overflow-hidden">
      {/* Visual background gradient glow */}
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-accent-blue/5 blur-[120px] pointer-events-none" />

      <div className="relative flex flex-col items-center justify-center text-center gap-6 max-w-md z-10 font-sans">
        {/* Warning Icon Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="p-4 bg-accent-blue/10 border border-accent-blue/20 rounded-3xl"
        >
          <AlertTriangle className="h-10 w-10 text-accent-blue" />
        </motion.div>

        {/* 404 Large Header */}
        <div className="space-y-2">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.6 }}
            className="text-7xl font-display font-extrabold tracking-tight text-foreground"
          >
            404
          </motion.h1>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.6 }}
            className="text-lg font-display font-bold uppercase tracking-wider text-accent-blue"
          >
            Route Not Registered
          </motion.h2>
        </div>

        {/* Narrative Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.6 }}
          className="text-sm text-foreground/60 leading-relaxed"
        >
          The requested coordinate endpoint does not resolve to an active portfolio node. Verify the URI query or navigate back to index host.
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45, duration: 0.6 }}
          className="pt-2"
        >
          <Button
            href="/"
            variant="primary"
            size="md"
            magnetic
            icon={<Home className="h-4 w-4" />}
          >
            Return to Core Node
          </Button>
        </motion.div>
      </div>

      {/* Decorative ASCII Matrix Borders */}
      <div className="absolute bottom-6 left-6 font-mono text-[9px] text-foreground/20 hidden md:block">
        [COORD_ERROR] 404_INDEX_MISSING
      </div>
      <div className="absolute bottom-6 right-6 font-mono text-[9px] text-foreground/20 hidden md:block">
        [NODE_STABILITY] PENDING_REDIRECTION
      </div>
    </div>
  );
}
