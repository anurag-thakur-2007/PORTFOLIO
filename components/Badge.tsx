"use client";

import React from "react";
import { cn } from "@/lib/utils";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "filled" | "outline" | "neutral";
  interactive?: boolean;
}

export default function Badge({
  children,
  variant = "neutral",
  interactive = false,
  className,
  ...props
}: BadgeProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-sans font-medium text-xs rounded-full px-3 py-1 select-none transition-all duration-200 border";

  const variants = {
    filled:
      "bg-accent-blue border-accent-blue text-white",
    outline:
      "bg-transparent border-accent-blue/30 text-accent-blue dark:border-accent-blue/40",
    neutral:
      "bg-neutral-soft border-neutral-border text-foreground/80",
  };

  const interactiveStyles =
    "cursor-pointer active:scale-95 focus-visible:outline-2 focus-visible:outline-accent-blue focus-visible:outline-offset-2";

  return (
    <span
      className={cn(
        baseStyles,
        variants[variant],
        interactive && interactiveStyles,
        className
      )}
      tabIndex={interactive ? 0 : undefined}
      role={interactive ? "button" : undefined}
      {...props}
    >
      {children}
    </span>
  );
}
