import AboutSection from "./AboutSection";
import Section from "./Section";
import SkillsSection from "./SkillsSection";
import ContactSection from "./ContactSection";
export default function Interface() {
  return (
    <>
      <div className="flex flex-col items-center w-screen">
        <AboutSection />
        <SkillsSection />
        <Section>
          <h1>Projects</h1>
        </Section>
        <ContactSection />
      </div>
    </>
  );
}
