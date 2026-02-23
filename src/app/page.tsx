import { Header } from '@/components/Header';
import { HeroSection } from '@/components/sections/HeroSection';
import { AboutSection } from '@/components/sections/AboutSection';
import { SkillsSection } from '@/components/sections/SkillsSection';
import { ProjectsSection } from '@/components/sections/ProjectsSection';
import { ContactSection } from '@/components/sections/ContactSection';
import { Footer } from '@/components/Footer';
import { personalDetails, skills, projects } from '@/lib/data';
import { QualificationSummary } from '@/components/QualificationSummary';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <HeroSection personalDetails={personalDetails} />
        <AboutSection personalDetails={personalDetails} />
        <SkillsSection skills={skills} />
        <ProjectsSection projects={projects} />
        <ContactSection />
        <QualificationSummary />
      </main>
      <Footer />
    </div>
  );
}
