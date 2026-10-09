import React from "react";
import NextLink from "next/link";
import { cn } from "@/lib/utils";

interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  children: React.ReactNode;
  isExternal?: boolean;
  className?: string;
}

export function Link({
  href,
  children,
  isExternal,
  className,
  ...props
}: LinkProps) {
  const isExt = isExternal || href.startsWith("http") || href.startsWith("mailto:");

  if (isExt) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={cn("text-[var(--link-color)] hover:underline", className)}
        {...props}
      >
        {children}
      </a>
    );
  }

  return (
    <NextLink
      href={href}
      className={cn("text-[var(--link-color)] hover:underline", className)}
      {...props}
    >
      {children}
    </NextLink>
  );
}
