import { motion } from "framer-motion";
import { Github, Linkedin } from "lucide-react";

const OnlinePresenceSection = () => {
  return (
    <section id="presence" className="py-24">
      <div className="container mx-auto px-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-mono font-bold mb-2 text-primary text-glow-sm">
            <span className="text-muted-foreground">07.</span> Online Presence
          </h2>
          <div className="w-20 h-0.5 bg-primary/40 mb-10" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-6 rounded-lg border border-border bg-card card-glow"
          >
            <div className="flex items-center gap-3 mb-4">
              <Github className="w-8 h-8 text-primary" />
              <h3 className="font-mono font-semibold text-foreground text-lg">GitHub</h3>
            </div>
            <p className="text-secondary-foreground mb-4">
              My repositories reflect real security work — custom reconnaissance tools, exploitation scripts, and lab documentation. Code is clean, documented, and built for practical offensive security use.
            </p>
            <a
              href="https://github.com/X0-Deku"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-primary font-mono text-sm hover:text-foreground transition-colors"
            >
              github.com/X0-Deku →
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-6 rounded-lg border border-border bg-card card-glow"
          >
            <div className="flex items-center gap-3 mb-4">
              <Linkedin className="w-8 h-8 text-primary" />
              <h3 className="font-mono font-semibold text-foreground text-lg">LinkedIn</h3>
            </div>
            <p className="text-secondary-foreground mb-4">
              Professional profile optimized for recruiters — showcasing internships, certifications, technical skills, and career trajectory in offensive security. Open to international opportunities.
            </p>
            <a
              href="https://www.linkedin.com/in/abdelrahman-sayed-2486ba306/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-primary font-mono text-sm hover:text-foreground transition-colors"
            >
              LinkedIn Profile →
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default OnlinePresenceSection;
