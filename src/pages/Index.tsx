import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ExperienceSection from "@/components/ExperienceSection";
import ProjectsSection from "@/components/ProjectsSection";
import LabsSection from "@/components/LabsSection";
import AchievementsSection from "@/components/AchievementsSection";
import OnlinePresenceSection from "@/components/OnlinePresenceSection";
import ContactSection from "@/components/ContactSection";

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
      <AchievementsSection />
      <OnlinePresenceSection />
      <ContactSection />
      <footer className="py-8 text-center border-t border-border">
        <p className="font-mono text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} Abdelrahman Sayed — Built with precision.
        </p>
      </footer>
    </div>
  );
};

export default Index;
