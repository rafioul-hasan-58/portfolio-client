import React from "react";
import Image from "next/image";
import { siteConfig } from "@/data/site";

export function Hero() {
  return (
    <section className="mb-10">
      <div className="text-center mb-8">
        <div className="inline-block relative w-[120px] h-[120px] rounded-full overflow-hidden mb-4 border border-[var(--border-color)] shadow-sm">
          <Image
            src={siteConfig.avatar}
            alt={siteConfig.name}
            width={120}
            height={120}
            priority
            className="w-full h-full object-cover object-top"
          />
        </div>
        <h1 className="text-2xl sm:text-[1.8rem] font-semibold text-[var(--text-heading)] mb-1">
          {siteConfig.name}
        </h1>
        <p className="text-base text-[var(--text-muted)] font-normal">
          {siteConfig.title}
          {siteConfig.company && ` at ${siteConfig.company}`}
        </p>
      </div>

      <div className="space-y-4 text-[1rem] leading-[1.7] text-[var(--text-primary)]">
        {siteConfig.bio.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
    </section>
  );
}
