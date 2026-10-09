import React from "react";
import { ProjectItem } from "@/types";
import { Link } from "@/components/ui/Link";

interface ProjectCardProps {
  project: ProjectItem;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const mainLink = project.liveUrl || project.githubUrl;

  return (
    <article className="mb-8">
      <h3 className="text-[1.2rem] font-semibold text-[var(--text-heading)] mb-1">
        {mainLink ? (
          <Link href={mainLink} isExternal>
            {project.title}
          </Link>
        ) : (
          project.title
        )}
      </h3>

      <div className="text-[0.93rem] text-[var(--text-muted)] mb-2 flex flex-wrap items-center gap-1.5">
        <strong className="text-[var(--text-heading)] font-semibold">
          {project.technologies.join(", ")}
        </strong>
        <span>&ndash;</span>
        <span>{project.year}</span>

        {project.githubUrl && (
          <>
            <span>&ndash;</span>
            <Link href={project.githubUrl} isExternal>
              GitHub
            </Link>
          </>
        )}

        {project.liveUrl && (
          <>
            <span>&ndash;</span>
            <Link href={project.liveUrl} isExternal>
              Live Demo
            </Link>
          </>
        )}
      </div>

      <p className="text-[0.98rem] leading-[1.7] text-[var(--text-primary)]">
        {project.description}
      </p>
    </article>
  );
}
