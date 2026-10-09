"use client";

import React, { useState, useEffect } from "react";
import { socialLinks } from "@/data/socials";
import { siteConfig } from "@/data/site";
import { Container } from "@/components/ui/Container";

export function Footer() {
  const [year, setYear] = useState<number>(2025);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="w-full border-t border-[var(--border-color)] py-8 mt-16 transition-colors">
      <Container className="text-center text-[0.85rem] text-[var(--text-subtle)]">
        <div className="flex flex-wrap justify-center gap-6 mb-3" aria-label="Social Profiles">
          {socialLinks.map((social) => (
            <a
              key={social.platform}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--text-muted)] hover:text-[var(--link-color)] transition-colors no-underline hover:underline"
            >
              {social.label || social.platform}
            </a>
          ))}
        </div>
        <p className="mt-2 text-xs text-[var(--text-subtle)]">
          &copy; {year} {siteConfig.name}. All rights reserved.
        </p>
      </Container>
    </footer>
  );
}
