import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Terminal } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6 max-w-2xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-mono font-bold mb-2 text-primary text-glow-sm">
            <span className="text-muted-foreground">08.</span> Contact
          </h2>
          <div className="w-20 h-0.5 bg-primary/40 mb-8 mx-auto" />

          <p className="text-secondary-foreground text-lg mb-8">
            Interested in working together? Whether it's a penetration testing engagement, a security consultation, or a career opportunity — I'd like to hear from you.
          </p>

          {/* Terminal-style contact */}
          <div className="rounded-lg border border-border bg-card p-6 card-glow text-left font-mono text-sm mb-8">
            <div className="flex items-center gap-2 mb-4 pb-3 border-b border-border">
              <div className="w-3 h-3 rounded-full bg-terminal-red" />
              <div className="w-3 h-3 rounded-full bg-terminal-amber" />
              <div className="w-3 h-3 rounded-full bg-primary" />
              <span className="text-muted-foreground ml-2">contact.sh</span>
            </div>
            <div className="space-y-2">
              <p><span className="text-primary">$</span> <span className="text-muted-foreground">echo</span> <span className="text-terminal-amber">$EMAIL</span></p>
              <p className="text-secondary-foreground pl-4">abdosayed4555@gmail.com</p>
              <p><span className="text-primary">$</span> <span className="text-muted-foreground">echo</span> <span className="text-terminal-amber">$GITHUB</span></p>
              <p className="text-secondary-foreground pl-4">github.com/X0-Deku</p>
              <p><span className="text-primary">$</span> <span className="text-muted-foreground">echo</span> <span className="text-terminal-amber">$LINKEDIN</span></p>
              <p className="text-secondary-foreground pl-4">linkedin.com/in/abdelrahman-sayed</p>
            </div>
          </div>

          <div className="flex justify-center gap-6">
            <a href="mailto:abdosayed4555@gmail.com" className="p-3 rounded-lg border border-border bg-card hover:border-primary transition-colors">
              <Mail className="w-6 h-6 text-primary" />
            </a>
            <a href="https://github.com/X0-Deku" target="_blank" rel="noopener noreferrer" className="p-3 rounded-lg border border-border bg-card hover:border-primary transition-colors">
              <Github className="w-6 h-6 text-primary" />
            </a>
            <a href="https://linkedin.com/in/abdelrahman-sayed" target="_blank" rel="noopener noreferrer" className="p-3 rounded-lg border border-border bg-card hover:border-primary transition-colors">
              <Linkedin className="w-6 h-6 text-primary" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
