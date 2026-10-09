import React from "react";
import { AchievementItem as AchievementType } from "@/types";
import { Link } from "@/components/ui/Link";

interface AchievementItemProps {
  item: AchievementType;
}

export function AchievementItem({ item }: AchievementItemProps) {
  return (
    <article className="mb-6">
      <h3 className="text-[1.1rem] font-semibold text-[var(--text-heading)] mb-0.5">
        {item.link ? (
          <Link href={item.link} isExternal>
            {item.title}
          </Link>
        ) : (
          item.title
        )}
      </h3>

      <div className="text-[0.92rem] text-[var(--text-muted)] mb-1.5">
        {item.award && (
          <span className="font-medium text-[var(--text-heading)]">
            {item.award}
          </span>
        )}
        {item.award && item.eventOrIssuer && <span> &ndash; </span>}
        <span>{item.eventOrIssuer}</span>
        <span className="text-[var(--text-subtle)]"> ({item.year})</span>
      </div>

      {item.description && (
        <p className="text-[0.95rem] leading-[1.65] text-[var(--text-primary)]">
          {item.description}
        </p>
      )}
    </article>
  );
}
