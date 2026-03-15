import { motion } from "framer-motion";
import { GraduationCap, BookOpen } from "lucide-react";

const certifications = [
  { name: "CompTIA Network+", status: "Studied" },
  { name: "eLearnSecurity Junior Penetration Tester (eJPT)", status: "Studied" },
  { name: "CompTIA Linux+", status: "Studied" },
];

const CertificationsSection = () => {
  return (
    <section id="certifications" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-mono font-bold mb-2 text-primary text-glow-sm">
            <span className="text-muted-foreground">08.</span> Certifications & Learning
          </h2>
          <div className="w-20 h-0.5 bg-primary/40 mb-10" />
        </motion.div>

        <div className="grid sm:grid-cols-3 gap-6 mb-8">
          {certifications.map((cert, i) => (
            <motion.div
              key={cert.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-5 rounded-lg border border-border bg-card card-glow text-center"
            >
              <GraduationCap className="w-8 h-8 text-primary mx-auto mb-3" />
              <h3 className="font-mono font-semibold text-foreground text-sm mb-1">{cert.name}</h3>
              <span className="text-xs font-mono text-terminal-amber">{cert.status}</span>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="p-6 rounded-lg border border-border bg-card card-glow"
        >
          <div className="flex items-center gap-3 mb-3">
            <BookOpen className="w-6 h-6 text-primary" />
            <h3 className="font-mono font-semibold text-foreground">Ongoing Self-Study</h3>
          </div>
          <p className="text-secondary-foreground text-sm">
            Continuously expanding knowledge through daily practice on security labs, vulnerability research,
            CTF competitions, and staying current with the latest CVEs and attack methodologies.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default CertificationsSection;
