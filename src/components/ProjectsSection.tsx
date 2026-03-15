import { motion } from "framer-motion";
import { Crosshair, Globe, Shield, Search, Github } from "lucide-react";

const projects = [
  {
    icon: Shield,
    title: "Web Application Security Testing Lab",
    description: "A comprehensive testing environment for practicing web application vulnerability assessment, covering OWASP Top 10 vulnerabilities with hands-on exploitation scenarios.",
    skills: ["Burp Suite", "OWASP", "Python", "SQL Injection", "XSS"],
  },
  {
    icon: Crosshair,
    title: "Network Scanning Toolkit",
    description: "Custom network reconnaissance toolkit automating host discovery, port scanning, and service enumeration for penetration testing engagements.",
    skills: ["Python", "Nmap", "TCP/IP", "Bash", "Network Security"],
  },
  {
    icon: Search,
    title: "Vulnerability Assessment Framework",
    description: "A modular framework for conducting structured vulnerability assessments, integrating multiple scanning tools and generating consolidated reports.",
    skills: ["Python", "Nmap", "Nikto", "Automation", "Reporting"],
  },
  {
    icon: Globe,
    title: "Custom Web Crawler for Security Recon",
    description: "Purpose-built web crawler designed to support reconnaissance in penetration testing — automating endpoint discovery, link extraction, and attack surface mapping.",
    skills: ["Python", "BeautifulSoup", "HTTP Protocol", "Reconnaissance"],
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

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-6 rounded-lg border border-border bg-card card-glow flex flex-col"
            >
              <div className="flex items-start gap-3 mb-3">
                <project.icon className="w-6 h-6 text-primary shrink-0 mt-0.5" />
                <h3 className="text-lg font-bold text-foreground">{project.title}</h3>
              </div>
              <p className="text-sm text-secondary-foreground mb-4 flex-1">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.skills.map((s) => (
                  <span key={s} className="px-2 py-0.5 text-xs font-mono rounded bg-primary/10 text-primary border border-primary/20">
                    {s}
                  </span>
                ))}
              </div>
              <a
                href="https://github.com/X0-Deku"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-mono text-primary hover:text-foreground transition-colors self-start"
              >
                <Github className="w-4 h-4" />
                View on GitHub
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
