import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { ExperienceItem } from "@/components/sections/ExperienceItem";
import { experienceData } from "@/data/experience";

export const metadata: Metadata = {
  title: "Experience",
  description: "Professional work history, research experience, and engineering roles.",
};

export default function ExperiencePage() {
  return (
    <Container className="py-8">
      <article>
        <SectionTitle level={1}>Experience</SectionTitle>

        <div className="mt-4">
          {experienceData.map((item) => (
            <ExperienceItem key={item.id} item={item} />
          ))}
        </div>
      </article>
    </Container>
  );
}
