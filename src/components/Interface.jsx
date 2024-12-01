import AboutSection from "./AboutSection";
import Section from "./Section";
import SkillsSection from "./SkillsSection";
import ContactSection from "./ContactSection";
import ProjectsSection from "./ProjectsSection";
export default function Interface() {
  return (
    <>
      <div className="flex flex-col items-center w-screen">
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </div>
    </>
  );
}
