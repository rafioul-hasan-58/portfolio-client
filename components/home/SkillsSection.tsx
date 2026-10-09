import React from "react";
import { skillCategories } from "@/data/skills";
import { SectionTitle } from "@/components/ui/SectionTitle";

export function SkillsSection() {
  return (
    <section className="mb-10">
      <SectionTitle level={2} id="skills">
        Skills
      </SectionTitle>

      <div className="space-y-2.5 text-[0.98rem] leading-[1.7] text-[var(--text-primary)]">
        {skillCategories.map((item) => (
          <p key={item.category}>
            <strong className="text-[var(--text-heading)] font-semibold">
              {item.category}:
            </strong>{" "}
            {item.skills.join(", ")}
          </p>
        ))}
      </div>
    </section>
  );
}
