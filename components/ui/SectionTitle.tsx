import React from "react";
import { cn } from "@/lib/utils";

interface SectionTitleProps {
  level?: 1 | 2 | 3 | 4;
  children: React.ReactNode;
  className?: string;
  id?: string;
}

export function SectionTitle({
  level = 2,
  children,
  className,
  id
}: SectionTitleProps) {
  const Tag = `h${level}` as keyof React.JSX.IntrinsicElements;

  const styles = {
    1: "text-2xl sm:text-[1.8rem] font-semibold text-[var(--text-heading)] mb-6",
    2: "text-xl sm:text-[1.4rem] font-semibold text-[var(--text-heading)] mt-8 mb-3",
    3: "text-lg sm:text-[1.15rem] font-medium text-[var(--text-heading)] mt-6 mb-2",
    4: "text-base font-medium text-[var(--text-muted)] mt-2 mb-1"
  };

  return (
    <Tag id={id} className={cn(styles[level], className)}>
      {children}
    </Tag>
  );
}
