import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Cybersecurity Skills",
    skills: ["Penetration Testing", "Web Application Security", "Vulnerability Assessment", "Network Security", "Exploitation Fundamentals", "Information Security Principles"],
  },
  {
    title: "Programming",
    skills: ["Python", "C++", "JavaScript", "SQL"],
  },
  {
    title: "Systems & Networking",
    skills: ["Linux", "TCP/IP Networking", "System Administration Basics"],
  },
  {
    title: "Security Tools",
    skills: ["Burp Suite", "Nmap", "Wireshark", "Metasploit", "Gobuster", "Nikto", "Git"],
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 relative bg-secondary/30">
      <div className="container mx-auto px-6 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-mono font-bold mb-2 text-primary text-glow-sm">
            <span className="text-muted-foreground">02.</span> Core Skills
          </h2>
          <div className="w-20 h-0.5 bg-primary/40 mb-10" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {skillCategories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-6 rounded-lg border border-border bg-card card-glow cyber-border"
            >
              <h3 className="font-mono font-semibold text-primary text-sm mb-4 uppercase tracking-wider">
                {cat.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 text-xs font-mono rounded bg-secondary text-secondary-foreground border border-border"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
