"use client";

import React, { forwardRef } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import Magnetic from "@/components/Magnetic";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost" | "link";
  size?: "sm" | "md" | "lg";
  magnetic?: boolean;
  href?: string;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
}

const Button = forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(
  (
    {
      className,
      children,
      variant = "primary",
      size = "md",
      magnetic = false,
      href,
      icon,
      iconPosition = "right",
      disabled,
      type = "button",
      ...props
    },
    ref
  ) => {
    // Styling base and variants
    const baseStyles =
      "inline-flex items-center justify-center font-sans font-medium transition-all duration-200 outline-none select-none active:scale-[0.98] disabled:opacity-50 disabled:pointer-events-none focus-visible:outline-2 focus-visible:outline-accent-blue focus-visible:outline-offset-4";

    const variants = {
      primary:
        "bg-accent-blue text-white shadow-premium hover:bg-accent-blue-hover hover:shadow-glow",
      secondary:
        "bg-neutral-soft text-foreground border border-neutral-border hover:bg-neutral-border hover:border-neutral-border dark:hover:bg-neutral-soft/80",
      ghost:
        "bg-transparent text-foreground hover:bg-neutral-soft",
      link:
        "bg-transparent text-foreground hover:text-accent-blue p-0 relative after:content-[''] after:absolute after:width-full after:scale-x-0 after:height-[1.5px] after:bottom-[-2px] after:left-0 after:bg-accent-blue after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left",
    };

    const sizes = {
      sm: "h-9 px-4 text-xs rounded-lg gap-1.5",
      md: "h-11 px-6 text-sm rounded-xl gap-2",
      lg: "h-13 px-8 text-base rounded-2xl gap-2.5",
    };

    const buttonClass = cn(
      baseStyles,
      variants[variant],
      variant !== "link" && sizes[size],
      className
    );

    // Inner content of button (handles text + optional icon)
    const renderContent = () => (
      <>
        {icon && iconPosition === "left" && (
          <span className="flex items-center justify-center shrink-0">{icon}</span>
        )}
        <span>{children}</span>
        {icon && iconPosition === "right" && (
          <span className="flex items-center justify-center shrink-0">{icon}</span>
        )}
      </>
    );

    const buttonElement = href ? (
      href.startsWith("/") || href.startsWith("#") ? (
        <Link
          href={href}
          className={buttonClass}
          ref={ref as React.Ref<HTMLAnchorElement>}
          {...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
        >
          {renderContent()}
        </Link>
      ) : (
        <a
          href={href}
          className={buttonClass}
          target="_blank"
          rel="noopener noreferrer"
          ref={ref as React.Ref<HTMLAnchorElement>}
          {...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
        >
          {renderContent()}
        </a>
      )
    ) : (
      <button
        type={type}
        className={buttonClass}
        disabled={disabled}
        ref={ref as React.Ref<HTMLButtonElement>}
        {...props}
      >
        {renderContent()}
      </button>
    );

    if (magnetic && !disabled) {
      return (
        <Magnetic range={50} strength={0.35}>
          {buttonElement}
        </Magnetic>
      );
    }

    return buttonElement;
  }
);

Button.displayName = "Button";

export default Button;
