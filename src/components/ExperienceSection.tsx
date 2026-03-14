import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    title: "Cybersecurity Intern",
    org: "Digital Egypt Pioneers Initiative (DEPI)",
    period: "Current — 6-Month Program",
    description: "Completing an intensive cybersecurity training program focused on offensive security methodologies, penetration testing workflows, and real-world attack simulations.",
    highlights: [
      "Hands-on penetration testing labs and exercises",
      "Web application vulnerability assessment",
      "Network security analysis and defense bypass techniques",
      "Collaborative red team scenario training",
    ],
  },
  {
    title: "Cybersecurity Intern",
    org: "IEEE",
    period: "Completed",
    description: "Participated in a structured cybersecurity internship covering foundational and intermediate security topics, with emphasis on practical tool usage and vulnerability analysis.",
    highlights: [
      "Conducted vulnerability scanning using Nmap and Nikto",
      "Performed web application testing with Burp Suite",
      "Analyzed network traffic using Wireshark",
      "Documented findings in structured security reports",
    ],
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24">
      <div className="container mx-auto px-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-mono font-bold mb-2 text-primary text-glow-sm">
            <span className="text-muted-foreground">03.</span> Experience
          </h2>
          <div className="w-20 h-0.5 bg-primary/40 mb-10" />
        </motion.div>

        <div className="space-y-8">
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.title + exp.org}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="relative pl-8 border-l-2 border-border"
            >
              <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-primary border-2 border-background" />
              <div className="p-6 rounded-lg border border-border bg-card card-glow">
                <div className="flex items-start gap-3 mb-3">
                  <Briefcase className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                  <div>
                    <h3 className="font-semibold text-foreground text-lg">{exp.title}</h3>
                    <p className="font-mono text-sm text-primary">{exp.org}</p>
                    <p className="text-xs text-muted-foreground mt-1">{exp.period}</p>
                  </div>
                </div>
                <p className="text-secondary-foreground mb-4">{exp.description}</p>
                <ul className="space-y-1.5">
                  {exp.highlights.map((h) => (
                    <li key={h} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <span className="text-primary mt-1">▹</span>
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
