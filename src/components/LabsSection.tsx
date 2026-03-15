import { motion } from "framer-motion";
import { FlaskConical, Trophy, Target, Shield, Crosshair } from "lucide-react";

const platforms = [
  {
    name: "PortSwigger Web Security Academy",
    icon: FlaskConical,
    description: "Regularly completing advanced labs covering the full spectrum of web application vulnerabilities — from SQL injection and XSS to SSRF and request smuggling.",
    focus: ["SQL Injection", "Cross-Site Scripting", "Authentication Flaws", "Access Control", "SSRF", "CSRF", "Path Traversal"],
  },
  {
    name: "Capture The Flag Challenges",
    icon: Trophy,
    description: "Participating in CTF competitions to sharpen problem-solving skills and learn new exploitation techniques in a competitive environment.",
    focus: ["Web Exploitation", "Cryptography", "Forensics", "Reverse Engineering"],
  },
  {
    name: "Practical Exploitation Labs",
    icon: Target,
    description: "Hands-on practice with real-world exploitation scenarios including privilege escalation, lateral movement, and post-exploitation techniques.",
    focus: ["Linux Privilege Escalation", "Network Pivoting", "Enumeration", "Post-Exploitation"],
  },
  {
    name: "Red Team Practice Scenarios",
    icon: Crosshair,
    description: "Simulating full offensive security engagements from initial recon through exploitation to reporting, building real-world red team skills.",
    focus: ["Reconnaissance", "Social Engineering", "Evasion", "Reporting"],
  },
];

const LabsSection = () => {
  return (
    <section id="labs" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-mono font-bold mb-2 text-primary text-glow-sm">
            <span className="text-muted-foreground">05.</span> Labs & Security Challenges
          </h2>
          <div className="w-20 h-0.5 bg-primary/40 mb-10" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {platforms.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-6 rounded-lg border border-border bg-card card-glow"
            >
              <p.icon className="w-8 h-8 text-primary mb-3" />
              <h3 className="font-mono font-semibold text-foreground mb-2">{p.name}</h3>
              <p className="text-sm text-muted-foreground mb-4">{p.description}</p>
              <div className="flex flex-wrap gap-2">
                {p.focus.map((f) => (
                  <span key={f} className="px-2 py-1 text-xs font-mono rounded bg-secondary text-secondary-foreground border border-border">
                    {f}
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

export default LabsSection;
