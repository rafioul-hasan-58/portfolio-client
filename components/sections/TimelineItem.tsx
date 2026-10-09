import React from "react";
import { EducationItem } from "@/types";
import { Link } from "@/components/ui/Link";

interface TimelineItemProps {
  item: EducationItem;
}

export function TimelineItem({ item }: TimelineItemProps) {
  return (
    <article className="mb-8">
      <h3 className="text-[1.15rem] font-semibold text-[var(--text-heading)] mb-1">
        {item.degree}
      </h3>

      <div className="text-[0.95rem] text-[var(--text-muted)] font-medium mb-2">
        {item.institutionUrl ? (
          <Link href={item.institutionUrl} isExternal>
            {item.institution}
          </Link>
        ) : (
          <span>{item.institution}</span>
        )}
        {item.location && <span> &bull; {item.location}</span>}
        <span className="text-[var(--text-subtle)] font-normal"> &ndash; {item.period}</span>
      </div>

      {item.grade && (
        <p className="text-[0.9rem] font-medium text-[var(--text-heading)] mb-1">
          {item.grade}
        </p>
      )}

      {item.description && (
        <p className="text-[0.98rem] leading-[1.7] text-[var(--text-primary)] mb-2">
          {item.description}
        </p>
      )}

      {item.highlights && item.highlights.length > 0 && (
        <ul className="list-disc pl-5 space-y-1 text-[0.93rem] text-[var(--text-muted)] mb-3">
          {item.highlights.map((highlight, idx) => (
            <li key={idx}>{highlight}</li>
          ))}
        </ul>
      )}

      {item.courses && item.courses.length > 0 && (
        <div className="mt-3">
          <p className="text-[0.95rem] font-semibold text-[var(--text-heading)] mb-1.5">
            Notable Courses:
          </p>
          <ul className="list-disc pl-5 space-y-1 text-[0.93rem] text-[var(--text-muted)]">
            {item.courses.map((course, idx) => (
              <li key={idx}>{course}</li>
            ))}
          </ul>
        </div>
      )}
    </article>
  );
}
