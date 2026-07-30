"use client";

import React, { forwardRef, useState } from "react";
import { cn } from "@/lib/utils";

// --- Input Component props ---
export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  helperText?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, type = "text", id, label, error, helperText, disabled, onFocus, onBlur, ...props }, ref) => {
    const [isFocused, setIsFocused] = useState(false);
    
    // Auto-generate ID if not provided to guarantee association
    const inputId = id || `input-${label ? label.toLowerCase().replace(/\s+/g, "-") : Math.random().toString(36).substr(2, 9)}`;
    const errorId = `${inputId}-error`;
    const helperId = `${inputId}-helper`;

    const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
      setIsFocused(true);
      if (onFocus) onFocus(e);
    };

    const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
      setIsFocused(false);
      if (onBlur) onBlur(e);
    };

    return (
      <div className="w-full flex flex-col gap-2 font-sans">
        {label && (
          <label
            htmlFor={inputId}
            className="text-xs font-semibold uppercase tracking-wider text-foreground/60 select-none"
          >
            {label}
          </label>
        )}
        <div className="relative">
          <input
            type={type}
            id={inputId}
            disabled={disabled}
            className={cn(
              "w-full h-12 px-4 rounded-xl border bg-neutral-soft border-neutral-border text-sm text-foreground transition-all duration-300 outline-none placeholder:text-foreground/30 focus:border-accent-blue focus:bg-neutral-card focus:shadow-glow disabled:opacity-50 disabled:pointer-events-none",
              error && "border-red-500 focus:border-red-500 focus:shadow-[0_0_15px_rgba(239,68,68,0.15)]",
              className
            )}
            ref={ref}
            onFocus={handleFocus}
            onBlur={handleBlur}
            aria-invalid={!!error}
            aria-describedby={cn(error && errorId, helperText && helperId) || undefined}
            {...props}
          />
        </div>
        {error ? (
          <span id={errorId} className="text-xs text-red-500 font-medium">
            {error}
          </span>
        ) : helperText ? (
          <span id={helperId} className="text-xs text-foreground/45">
            {helperText}
          </span>
        ) : null}
      </div>
    );
  }
);

Input.displayName = "Input";

// --- Textarea Component props ---
export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
  helperText?: string;
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, id, label, error, helperText, disabled, onFocus, onBlur, rows = 4, ...props }, ref) => {
    const [isFocused, setIsFocused] = useState(false);
    
    const textareaId = id || `textarea-${label ? label.toLowerCase().replace(/\s+/g, "-") : Math.random().toString(36).substr(2, 9)}`;
    const errorId = `${textareaId}-error`;
    const helperId = `${textareaId}-helper`;

    const handleFocus = (e: React.FocusEvent<HTMLTextAreaElement>) => {
      setIsFocused(true);
      if (onFocus) onFocus(e);
    };

    const handleBlur = (e: React.FocusEvent<HTMLTextAreaElement>) => {
      setIsFocused(false);
      if (onBlur) onBlur(e);
    };

    return (
      <div className="w-full flex flex-col gap-2 font-sans">
        {label && (
          <label
            htmlFor={textareaId}
            className="text-xs font-semibold uppercase tracking-wider text-foreground/60 select-none"
          >
            {label}
          </label>
        )}
        <div className="relative">
          <textarea
            id={textareaId}
            disabled={disabled}
            rows={rows}
            className={cn(
              "w-full py-3 px-4 rounded-xl border bg-neutral-soft border-neutral-border text-sm text-foreground transition-all duration-300 outline-none placeholder:text-foreground/30 focus:border-accent-blue focus:bg-neutral-card focus:shadow-glow disabled:opacity-50 disabled:pointer-events-none resize-none",
              error && "border-red-500 focus:border-red-500 focus:shadow-[0_0_15px_rgba(239,68,68,0.15)]",
              className
            )}
            ref={ref}
            onFocus={handleFocus}
            onBlur={handleBlur}
            aria-invalid={!!error}
            aria-describedby={cn(error && errorId, helperText && helperId) || undefined}
            {...props}
          />
        </div>
        {error ? (
          <span id={errorId} className="text-xs text-red-500 font-medium">
            {error}
          </span>
        ) : helperText ? (
          <span id={helperId} className="text-xs text-foreground/45">
            {helperText}
          </span>
        ) : null}
      </div>
    );
  }
);

Textarea.displayName = "Textarea";
