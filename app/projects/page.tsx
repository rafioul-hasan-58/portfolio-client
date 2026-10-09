import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { ProjectCard } from "@/components/sections/ProjectCard";
import { projectsData } from "@/data/projects";

export const metadata: Metadata = {
  title: "Projects",
  description: "Featured engineering projects, open-source software, and developer tools.",
};

export default function ProjectsPage() {
  return (
    <Container className="py-8">
      <article>
        <SectionTitle level={1}>Projects</SectionTitle>

        <div className="mt-4">
          {projectsData.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </article>
    </Container>
  );
}
