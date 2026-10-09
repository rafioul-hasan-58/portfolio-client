import React from "react";
import { cn } from "@/lib/utils";

interface TagProps {
  children: React.ReactNode;
  className?: string;
}

export function Tag({ children, className }: TagProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center px-2 py-0.5 rounded text-xs font-normal bg-[var(--tag-bg)] text-[var(--tag-text)] border border-[var(--border-color)]",
        className
      )}
    >
      {children}
    </span>
  );
}
