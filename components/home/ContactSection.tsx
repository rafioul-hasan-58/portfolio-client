import React from "react";
import { siteConfig } from "@/data/site";
import { socialLinks } from "@/data/socials";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Link } from "@/components/ui/Link";

export function ContactSection() {
  return (
    <section className="mb-10">
      <SectionTitle level={2} id="contact">
        Contact
      </SectionTitle>

      <ul className="list-disc pl-6 space-y-1.5 text-[0.98rem] leading-[1.7] text-[var(--text-primary)]">
        {siteConfig.location && (
          <li>
            <strong className="text-[var(--text-heading)] font-semibold">Location:</strong>{" "}
            {siteConfig.location}
          </li>
        )}

        {siteConfig.email && (
          <li>
            <strong className="text-[var(--text-heading)] font-semibold">Email:</strong>{" "}
            <Link href={`mailto:${siteConfig.email}`}>{siteConfig.email}</Link>
          </li>
        )}

        {socialLinks.map((social) => (
          <li key={social.platform}>
            <strong className="text-[var(--text-heading)] font-semibold">{social.platform}:</strong>{" "}
            <Link href={social.url} isExternal>
              {social.username || social.label || social.platform}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
