"use client";

import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { AlertCircle, RefreshCw } from "lucide-react";
import Button from "@/components/Button";

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function ErrorBoundary({ error, reset }: ErrorProps) {
  useEffect(() => {
    // Log error logs to diagnostic monitors
    console.error("Application Segment Crash:", error);
  }, [error]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-background select-none bg-mesh relative overflow-hidden">
      {/* Background gradients */}
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-red-500/5 blur-[120px] pointer-events-none" />

      <div className="relative flex flex-col items-center justify-center text-center gap-6 max-w-md z-10 font-sans">
        {/* Warning Icon Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="p-4 bg-red-500/10 border border-red-500/20 rounded-3xl"
        >
          <AlertCircle className="h-10 w-10 text-red-500" />
        </motion.div>

        {/* Header */}
        <div className="space-y-2">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.6 }}
            className="text-3xl font-display font-extrabold tracking-tight text-foreground"
          >
            System Exception
          </motion.h1>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.6 }}
            className="text-xs font-mono uppercase tracking-wider text-red-500 font-bold"
          >
            [SEGMENT_FAULT] {error.digest || "CORE_CRASH"}
          </motion.h2>
        </div>

        {/* Narrative Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.6 }}
          className="text-sm text-foreground/60 leading-relaxed"
        >
          A structural pipeline process crashed during segment render. Reconnect the interface socket links to restore portfolio telemetry.
        </motion.p>

        {/* Diagnostic logs */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.45, duration: 0.6 }}
          className="w-full bg-neutral-card border border-neutral-border rounded-2xl p-4 text-left font-mono text-[10px] text-red-500/80 overflow-auto max-h-32 whitespace-pre-wrap select-text"
        >
          {error.message || "Unknown segment execution failure occurred."}
        </motion.div>

        {/* Action Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55, duration: 0.6 }}
          className="pt-2"
        >
          <Button
            onClick={() => reset()}
            variant="primary"
            size="md"
            magnetic
            icon={<RefreshCw className="h-4 w-4" />}
          >
            Reset Segment
          </Button>
        </motion.div>
      </div>

      {/* Decorative ASCII Matrix Borders */}
      <div className="absolute bottom-6 left-6 font-mono text-[9px] text-foreground/20 hidden md:block">
        [EXCEPTION] RENDER_GATEWAY_HALT
      </div>
      <div className="absolute bottom-6 right-6 font-mono text-[9px] text-foreground/20 hidden md:block">
        [RETRY_POLICY] BACKOFF_AND_REHYDRATE
      </div>
    </div>
  );
}
