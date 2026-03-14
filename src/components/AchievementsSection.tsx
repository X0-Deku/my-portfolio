import { motion } from "framer-motion";
import { Award, Search, BookOpen } from "lucide-react";

const items = [
  {
    icon: Award,
    title: "Bug Bounty Participation",
    description: "Actively participating in bug bounty programs, identifying and responsibly reporting vulnerabilities in real-world web applications.",
  },
  {
    icon: BookOpen,
    title: "Continuous Learning",
    description: "Dedicated to staying current with emerging attack techniques, CVE research, and evolving security methodologies through daily practice.",
  },
  {
    icon: Search,
    title: "Security Research",
    description: "Exploring areas including web application exploitation, and offensive tool development.",
  },
];

const AchievementsSection = () => {
  return (
    <section id="achievements" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-mono font-bold mb-2 text-primary text-glow-sm">
            <span className="text-muted-foreground">06.</span> Achievements & Activities
          </h2>
          <div className="w-20 h-0.5 bg-primary/40 mb-10" />
        </motion.div>

        <div className="grid sm:grid-cols-3 gap-6">
          {items.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-6 rounded-lg border border-border bg-card card-glow text-center"
            >
              <item.icon className="w-10 h-10 text-primary mx-auto mb-4" />
              <h3 className="font-mono font-semibold text-foreground mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
