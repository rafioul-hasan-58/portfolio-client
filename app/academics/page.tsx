import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { TimelineItem } from "@/components/sections/TimelineItem";
import { AchievementItem } from "@/components/sections/AchievementItem";
import { educationData } from "@/data/education";
import { achievementsData } from "@/data/achievements";

export const metadata: Metadata = {
  title: "Academics",
  description: "Academic background, degrees, coursework, and competitive achievements.",
};

export default function AcademicsPage() {
  return (
    <Container className="py-8">
      <article>
        <SectionTitle level={1}>Academics</SectionTitle>

        {/* Education Section */}
        <section className="mb-12">
          <SectionTitle level={2} id="education">
            Education
          </SectionTitle>
          <div className="mt-4">
            {educationData.map((item) => (
              <TimelineItem key={item.id} item={item} />
            ))}
          </div>
        </section>

        {/* Achievements Section */}
        <section className="mb-12">
          <SectionTitle level={2} id="achievements">
            Achievements
          </SectionTitle>
          <div className="mt-4">
            {achievementsData.map((item) => (
              <AchievementItem key={item.id} item={item} />
            ))}
          </div>
        </section>
      </article>
    </Container>
  );
}
