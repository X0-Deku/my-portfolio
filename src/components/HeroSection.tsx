import { motion } from "framer-motion";
import { Shield, Terminal, ChevronDown, Download } from "lucide-react";

const HeroSection = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-40" />
      <div className="absolute inset-0 scanline pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_hsl(142_72%_48%_/_0.06)_0%,_transparent_70%)]" />

      <div className="relative z-10 container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full border border-border bg-card/60 backdrop-blur-sm">
            <Terminal className="w-4 h-4 text-primary" />
            <span className="font-mono text-sm text-muted-foreground">
              ~/security<span className="text-primary">$</span> whoami
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold font-mono mb-4 tracking-tight">
            <span className="text-foreground">Abdelrahman Sayed</span>
          </h1>

          <p className="text-lg sm:text-xl lg:text-2xl font-mono text-primary text-glow mb-6">
            Cybersecurity Student & Aspiring Penetration Tester
          </p>

          <p className="max-w-2xl mx-auto text-secondary-foreground text-lg mb-8 leading-relaxed">
            Focused on offensive security, vulnerability research, and real-world web application exploitation.
          </p>

          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {["Web App Pentesting", "Vulnerability Research", "Red Team Ops", "Bug Bounty"].map((tag) => (
              <span
                key={tag}
                className="px-4 py-1.5 rounded border border-border bg-secondary font-mono text-sm text-primary text-glow-sm"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-8 py-3 rounded bg-primary text-primary-foreground font-semibold hover:shadow-[0_0_20px_hsl(142_72%_48%_/_0.4)] transition-all duration-300"
            >
              <Shield className="w-4 h-4" />
              View Projects
            </a>
            <a
              href="#writeups"
              className="inline-flex items-center gap-2 px-8 py-3 rounded border border-primary text-primary font-semibold hover:bg-primary/10 transition-all duration-300"
            >
              View Writeups
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-8 py-3 rounded border border-border text-foreground font-semibold hover:border-primary hover:text-primary transition-all duration-300"
            >
              Contact Me
            </a>
            <a
              href="#"
              className="inline-flex items-center gap-2 px-8 py-3 rounded border border-border text-muted-foreground font-semibold hover:border-primary hover:text-primary transition-all duration-300"
            >
              <Download className="w-4 h-4" />
              Download CV
            </a>
          </div>
        </motion.div>

        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <ChevronDown className="w-6 h-6 text-muted-foreground" />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
