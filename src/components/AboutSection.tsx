import { motion } from "framer-motion";
import { Target, BookOpen, Briefcase } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-mono font-bold mb-2 text-primary text-glow-sm">
            <span className="text-muted-foreground">01.</span> About Me
          </h2>
          <div className="w-20 h-0.5 bg-primary/40 mb-10" />

          <div className="space-y-6 text-secondary-foreground leading-relaxed text-lg">
            <p>
              My journey into cybersecurity started with a simple curiosity: <span className="text-primary font-medium">how do systems break?</span> That question led me from disassembling software to actively hunting vulnerabilities in real-world applications.
            </p>
            <p>
              As a cybersecurity student specializing in offensive security, I dedicate my time to understanding attack surfaces, exploiting web application vulnerabilities, and building tools that support penetration testing workflows. I actively participate in bug bounty programs, solve advanced labs on PortSwigger and TryHackMe, and continuously expand my offensive toolkit.
            </p>
            <p>
              I balance full-time studies with intensive hands-on cybersecurity training and professional internships — because in this field, <span className="text-primary font-medium">real skills come from real practice</span>. I believe consistent effort and genuine curiosity are what separate professionals from hobbyists.
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-6 mt-12">
            {[
              { icon: Target, title: "Offensive Mindset", desc: "Think like an attacker to defend like a professional." },
              { icon: BookOpen, title: "Continuous Learner", desc: "Constantly studying new attack vectors and exploitation techniques." },
              { icon: Briefcase, title: "Career Focus", desc: "Building toward a career in penetration testing and red team operations." },
            ].map(({ icon: Icon, title, desc }, i) => (
              <motion.div
                key={title}
                className="p-5 rounded-lg border border-border bg-card card-glow cyber-border group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + i * 0.15 }}
              >
                <Icon className="w-8 h-8 text-primary mb-3 transition-transform duration-300 group-hover:scale-110" />
                <h3 className="font-mono font-semibold text-foreground mb-2">{title}</h3>
                <p className="text-sm text-muted-foreground">{desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
