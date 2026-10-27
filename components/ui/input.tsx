"use client";

import React from "react";
import { cn } from "./utils";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, label, error, ...props }, ref) => {
    return (
      <div className="w-full space-y-1.5">
        {label && (
          <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-600 dark:text-zinc-400">
            {label}
          </label>
        )}
        <input
          type={type}
          className={cn(
            "flex h-10 w-full rounded-lg border border-[#292929] bg-[#171717] px-3 py-2 text-sm text-[#F7F4EE] placeholder:text-zinc-500 focus:border-[#FF6B00] focus:outline-none focus:ring-2 focus:ring-[#FF6B00]/25 disabled:cursor-not-allowed disabled:opacity-50 transition-all",
            error && "border-red-500 focus:border-red-500 focus:ring-red-500/20 dark:border-red-500",
            className
          )}
          ref={ref}
          {...props}
        />
        {error && <p className="text-xs text-red-600 dark:text-red-400">{error}</p>}
      </div>
    );
  }
);

Input.displayName = "Input";