import { motion } from "framer-motion";
import { Crosshair, Globe, Shield, Bug } from "lucide-react";

const projects = [
  {
    icon: Crosshair,
    title: "Red Team Operation Simulation",
    subtitle: "Full Offensive Security Engagement",
    description: "A comprehensive academic project simulating a complete red team engagement, from initial reconnaissance through exploitation to final reporting.",
    details: [
      { label: "Reconnaissance", text: "Passive and active information gathering, OSINT, target profiling, and attack surface mapping." },
      { label: "Vulnerability Discovery", text: "Manual and automated scanning to identify misconfigurations, outdated software, and exploitable entry points." },
      { label: "Exploitation", text: "Leveraged discovered vulnerabilities to gain initial access, including web application exploits and credential attacks." },
      { label: "Malware & Virus Testing", text: "Analyzed and tested malicious payloads in controlled environments to understand evasion techniques." },
      { label: "Malicious File Analysis", text: "Inspected suspicious files and links using static and dynamic analysis methods." },
      { label: "Defensive Bypass", text: "Tested techniques to evade detection mechanisms including AV solutions and basic IDS rules." },
      { label: "Reporting", text: "Produced detailed engagement documentation with findings, risk ratings, and remediation recommendations." },
    ],
    skills: ["Metasploit", "Nmap", "Burp Suite", "Social Engineering", "Report Writing"],
  },
  {
    icon: Globe,
    title: "Web Crawler Recon Tool",
    subtitle: "Custom Security Reconnaissance Tool",
    description: "A purpose-built web crawler designed to support the reconnaissance phase of penetration testing engagements.",
    details: [
      { label: "Purpose", text: "Automates the discovery of endpoints, hidden paths, and link structures within target web applications." },
      { label: "Features", text: "Link extraction, directory mapping, endpoint enumeration, and response analysis." },
      { label: "Technologies", text: "Built with Python, leveraging requests and BeautifulSoup for HTTP interaction and HTML parsing." },
      { label: "Applications", text: "Used in pre-engagement recon to map attack surfaces and identify potential entry points for further testing." },
    ],
    skills: ["Python", "Web Scraping", "Reconnaissance", "HTTP Protocol"],
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-mono font-bold mb-2 text-primary text-glow-sm">
            <span className="text-muted-foreground">04.</span> Projects
          </h2>
          <div className="w-20 h-0.5 bg-primary/40 mb-10" />
        </motion.div>

        <div className="space-y-10">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="p-8 rounded-lg border border-border bg-card card-glow"
            >
              <div className="flex items-start gap-4 mb-4">
                <project.icon className="w-8 h-8 text-primary shrink-0" />
                <div>
                  <h3 className="text-xl font-bold text-foreground">{project.title}</h3>
                  <p className="font-mono text-sm text-primary">{project.subtitle}</p>
                </div>
              </div>

              <p className="text-secondary-foreground mb-6">{project.description}</p>

              <div className="space-y-3 mb-6">
                {project.details.map((d) => (
                  <div key={d.label} className="flex gap-3">
                    <span className="text-primary font-mono text-sm font-semibold shrink-0 w-40">{d.label}:</span>
                    <span className="text-sm text-muted-foreground">{d.text}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-2">
                {project.skills.map((s) => (
                  <span key={s} className="px-3 py-1 text-xs font-mono rounded bg-primary/10 text-primary border border-primary/20">
                    {s}
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

export default ProjectsSection;
