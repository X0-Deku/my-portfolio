import { motion } from "framer-motion";
import { FileText, ExternalLink } from "lucide-react";

const writeups = [
  {
    title: "Information Disclosure via Version Control History",
    platform: "PortSwigger Lab",
    difficulty: "Practitioner",
    summary: "Exploited exposed .git directory to extract sensitive configuration data including admin credentials from version control history.",
    tags: ["Information Disclosure", "Git", "Reconnaissance"],
  },
  {
    title: "Cross-Site Scripting (XSS) Exploitation Lab",
    platform: "PortSwigger Lab",
    difficulty: "Practitioner",
    summary: "Identified and exploited reflected and stored XSS vulnerabilities to demonstrate session hijacking and cookie theft in a controlled environment.",
    tags: ["XSS", "Reflected", "Stored", "Session Hijacking"],
  },
  {
    title: "SQL Injection Authentication Bypass",
    platform: "PortSwigger Lab",
    difficulty: "Apprentice",
    summary: "Bypassed login authentication using classic SQL injection techniques, demonstrating improper input validation in query construction.",
    tags: ["SQLi", "Authentication Bypass", "Web Security"],
  },
  {
    title: "Directory Traversal Vulnerability Analysis",
    platform: "PortSwigger Lab",
    difficulty: "Practitioner",
    summary: "Exploited path traversal flaws to access restricted files on the server, bypassing basic input filters and security controls.",
    tags: ["Path Traversal", "File Access", "Filter Bypass"],
  },
];

const difficultyColor: Record<string, string> = {
  Apprentice: "text-primary",
  Practitioner: "text-terminal-amber",
  Expert: "text-terminal-red",
};

const WriteupsSection = () => {
  return (
    <section id="writeups" className="py-24">
      <div className="container mx-auto px-6 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-mono font-bold mb-2 text-primary text-glow-sm">
            <span className="text-muted-foreground">06.</span> Security Writeups
          </h2>
          <div className="w-20 h-0.5 bg-primary/40 mb-4" />
          <p className="text-muted-foreground text-sm font-mono mb-10">
            Documenting vulnerability research from authorized testing environments and security labs.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {writeups.map((w, i) => (
            <motion.div
              key={w.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-6 rounded-lg border border-border bg-card card-glow flex flex-col"
            >
              <div className="flex items-start gap-3 mb-3">
                <FileText className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <h3 className="font-semibold text-foreground">{w.title}</h3>
              </div>
              <div className="flex items-center gap-3 mb-3 font-mono text-xs">
                <span className="text-muted-foreground">{w.platform}</span>
                <span className="text-border">|</span>
                <span className={difficultyColor[w.difficulty] || "text-muted-foreground"}>
                  {w.difficulty}
                </span>
              </div>
              <p className="text-sm text-secondary-foreground mb-4 flex-1">{w.summary}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {w.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 text-xs font-mono rounded bg-primary/10 text-primary border border-primary/20"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <button className="inline-flex items-center gap-1.5 text-sm font-mono text-primary hover:text-foreground transition-colors self-start">
                Read More <ExternalLink className="w-3.5 h-3.5" />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WriteupsSection;
