"use client";

import React from "react";
import { cn } from "./utils";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "danger" | "success";
  size?: "sm" | "md" | "lg";
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", disabled, children, ...props }, ref) => {
    const variants = {
      primary: "bg-[#FF6B00] text-white hover:bg-[#FF852E] shadow-sm font-bold border border-[#FF6B00]/40 shadow-[#FF6B00]/20",
      secondary: "bg-[#292929] text-[#F7F4EE] hover:bg-[#383838] border border-zinc-750",
      outline: "border border-[#292929] bg-transparent hover:bg-[#292929] text-[#F7F4EE]",
      ghost: "hover:bg-[#292929] text-zinc-300 hover:text-[#F7F4EE]",
      danger: "bg-red-600 text-white hover:bg-red-700 shadow-sm",
      success: "bg-emerald-600 text-white hover:bg-emerald-700 shadow-sm",
    };

    const sizes = {
      sm: "h-8 px-3 text-xs rounded-lg",
      md: "h-10 px-4 text-sm font-medium rounded-xl",
      lg: "h-12 px-6 text-base font-semibold rounded-xl",
    };

    return (
      <button
        ref={ref}
        disabled={disabled}
        className={cn(
          "inline-flex items-center justify-center font-medium transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF6B00] disabled:opacity-50 disabled:cursor-not-allowed active:scale-[0.98]",
          variants[variant],
          sizes[size],
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";