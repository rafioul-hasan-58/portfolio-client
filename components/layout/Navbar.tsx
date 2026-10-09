"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/data/site";
import { navigationLinks } from "@/data/navigation";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "./ThemeToggle";
import { MobileMenu } from "./MobileMenu";

export function Navbar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 w-full bg-[var(--bg-primary)]/90 backdrop-blur-sm border-b border-[var(--border-color)] transition-colors">
      <div className="relative max-w-[960px] mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Site Brand / Name on Left */}
        <Link
          href="/"
          className="text-[1.1rem] font-semibold text-[var(--text-heading)] hover:text-[var(--link-color)] transition-colors no-underline"
        >
          {siteConfig.name}
        </Link>

        {/* Desktop Navigation Links on Right */}
        <nav className="hidden md:flex items-center gap-6" aria-label="Main Navigation">
          {navigationLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-[0.9rem] transition-colors",
                  isActive
                    ? "text-[var(--link-color)] font-medium underline"
                    : "text-[var(--text-muted)] hover:text-[var(--link-color)] no-underline hover:underline"
                )}
              >
                {link.title}
              </Link>
            );
          })}

          <div className="pl-2 border-l border-[var(--border-color)]">
            <ThemeToggle />
          </div>
        </nav>

        {/* Mobile Menu on Small Screens */}
        <MobileMenu items={navigationLinks} />
      </div>
    </header>
  );
}
