import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Hero } from "@/components/home/Hero";
import { SkillsSection } from "@/components/home/SkillsSection";
import { ContactSection } from "@/components/home/ContactSection";

export default function HomePage() {
  return (
    <Container className="py-8">
      <article>
        <SectionTitle level={1}>Home</SectionTitle>
        <Hero />
        <SkillsSection />
        <ContactSection />
      </article>
    </Container>
  );
}
