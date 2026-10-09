import React from "react";
import { ExperienceItem as ExperienceType } from "@/types";
import { Link } from "@/components/ui/Link";
import { Tag } from "@/components/ui/Tag";

interface ExperienceItemProps {
  item: ExperienceType;
}

export function ExperienceItem({ item }: ExperienceItemProps) {
  return (
    <article className="mb-8">
      <h3 className="text-[1.2rem] font-semibold text-[var(--text-heading)] mb-0.5">
        {item.companyUrl ? (
          <Link href={item.companyUrl} isExternal>
            {item.company}
          </Link>
        ) : (
          item.company
        )}
      </h3>

      <h4 className="text-[1rem] font-medium text-[var(--text-muted)] mb-2">
        <span className="text-[var(--text-heading)]">{item.role}</span>
        <span className="text-[var(--text-subtle)] font-normal"> &ndash; {item.period}</span>
        {item.location && (
          <span className="text-[var(--text-subtle)] font-normal"> &bull; {item.location}</span>
        )}
      </h4>

      <p className="text-[0.98rem] leading-[1.7] text-[var(--text-primary)] mb-2">
        {item.summary}
      </p>

      {item.bulletPoints && item.bulletPoints.length > 0 && (
        <ul className="list-disc pl-5 space-y-1 text-[0.93rem] text-[var(--text-muted)] mb-3">
          {item.bulletPoints.map((bullet, idx) => (
            <li key={idx}>{bullet}</li>
          ))}
        </ul>
      )}

      {item.skills && item.skills.length > 0 && (
        <div className="flex flex-wrap gap-1.5 mt-2">
          {item.skills.map((skill) => (
            <Tag key={skill}>{skill}</Tag>
          ))}
        </div>
      )}
    </article>
  );
}
