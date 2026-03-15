import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import SkillsSection from "../components/SkillsSection";
import ExperienceSection from "../components/ExperienceSection";
import ProjectsSection from "../components/ProjectsSection";
import LabsSection from "../components/LabsSection";
import WriteupsSection from "../components/WriteupsSection";
import AchievementsSection from "../components/AchievementsSection";
import OnlinePresenceSection from "../components/OnlinePresenceSection";
import CertificationsSection from "../components/CertificationsSection";
import ContactSection from "../components/ContactSection";
import { Github, Linkedin } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ExperienceSection />
      <ProjectsSection />
      <LabsSection />
      <WriteupsSection />
      <AchievementsSection />
      <OnlinePresenceSection />
      <CertificationsSection />
      <ContactSection />
      <footer className="py-10 text-center border-t border-border">
        <p className="font-mono font-bold text-foreground mb-1">Abdelrahman Sayed</p>
        <p className="font-mono text-sm text-muted-foreground mb-4">
          Cybersecurity Student | Aspiring Penetration Tester
        </p>
        <div className="flex justify-center gap-4 mb-4">
          <a href="https://github.com/X0-Deku" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
            <Github className="w-5 h-5" />
          </a>
          <a href="https://www.linkedin.com/in/abdelrahman-sayed-2486ba306/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
            <Linkedin className="w-5 h-5" />
          </a>
        </div>
        <p className="font-mono text-xs text-muted-foreground">
          &copy; 2026 Abdelrahman Sayed. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default Index;
