"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NavItem } from "@/types";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "./ThemeToggle";

interface MobileMenuProps {
  items: NavItem[];
}

export function MobileMenu({ items }: MobileMenuProps) {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const toggle = () => setIsOpen(!isOpen);
  const close = () => setIsOpen(false);

  return (
    <div className="md:hidden flex items-center gap-2">
      <ThemeToggle />
      <button
        onClick={toggle}
        aria-label="Toggle Navigation Menu"
        aria-expanded={isOpen}
        className="p-2 text-[var(--text-muted)] hover:text-[var(--text-heading)] focus:outline-none focus:ring-1 focus:ring-[var(--link-color)] rounded"
      >
        {isOpen ? (
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        )}
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 right-0 bg-[var(--bg-primary)] border-b border-[var(--border-color)] shadow-md py-4 px-6 z-50 flex flex-col gap-3">
          {items.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={close}
                className={cn(
                  "text-base py-1.5 transition-colors",
                  isActive
                    ? "text-[var(--link-color)] font-medium underline"
                    : "text-[var(--text-muted)] hover:text-[var(--link-color)]"
                )}
              >
                {item.title}
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
}
