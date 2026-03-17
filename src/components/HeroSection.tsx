import { motion } from "framer-motion";
import { Shield, Terminal, ChevronDown, Download } from "lucide-react";
import { useEffect, useState } from "react";

const TypeWriter = ({ text, delay = 0 }: { text: string; delay?: number }) => {
  const [displayed, setDisplayed] = useState("");
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const startTimeout = setTimeout(() => setStarted(true), delay);
    return () => clearTimeout(startTimeout);
  }, [delay]);

  useEffect(() => {
    if (!started) return;
    if (displayed.length < text.length) {
      const timeout = setTimeout(() => {
        setDisplayed(text.slice(0, displayed.length + 1));
      }, 50);
      return () => clearTimeout(timeout);
    }
  }, [displayed, text, started]);

  return (
    <span>
      {displayed}
      {displayed.length < text.length && started && (
        <span className="animate-flicker text-primary">▌</span>
      )}
    </span>
  );
};

const MatrixColumn = ({ delay, left }: { delay: number; left: string }) => {
  const chars = "01アイウエオカキクケコサシスセソタチツテト";
  const [text] = useState(() =>
    Array.from({ length: 20 }, () => chars[Math.floor(Math.random() * chars.length)]).join("\n")
  );

  return (
    <motion.div
      className="absolute top-0 font-mono text-xs text-primary/20 whitespace-pre leading-4 pointer-events-none select-none"
      style={{ left }}
      initial={{ y: "-100%", opacity: 0 }}
      animate={{ y: "100vh", opacity: [0, 0.6, 0.6, 0] }}
      transition={{ duration: 8 + Math.random() * 6, delay, repeat: Infinity, ease: "linear" }}
    >
      {text}
    </motion.div>
  );
};

const HeroSection = () => {
  const matrixColumns = Array.from({ length: 15 }, (_, i) => ({
    id: i,
    delay: Math.random() * 5,
    left: `${(i / 15) * 100}%`,
  }));

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div className="absolute inset-0 scanline" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_hsl(142_72%_48%_/_0.08)_0%,_transparent_60%)]" />
      <div className="absolute inset-0 scan-overlay" />

      {/* Matrix rain */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {matrixColumns.map((col) => (
          <MatrixColumn key={col.id} delay={col.delay} left={col.left} />
        ))}
      </div>

      <div className="relative z-10 container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full border border-border bg-card/60 backdrop-blur-sm animate-pulse-glow"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <Terminal className="w-4 h-4 text-primary" />
            <span className="font-mono text-sm text-muted-foreground">
              ~/security<span className="text-primary">$</span>{" "}
              <TypeWriter text="whoami" delay={800} />
            </span>
          </motion.div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold font-mono mb-4 tracking-tight">
            <span
              className="glitch-text text-foreground"
              data-text="Abdelrahman Sayed"
            >
              Abdelrahman Sayed
            </span>
          </h1>

          <motion.p
            className="text-lg sm:text-xl lg:text-2xl font-mono text-primary text-glow mb-6 animate-flicker"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            Cybersecurity Student & Aspiring Penetration Tester
          </motion.p>

          <motion.p
            className="max-w-2xl mx-auto text-secondary-foreground text-lg mb-8 leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
          >
            Focused on offensive security, vulnerability research, and real-world web application exploitation.
          </motion.p>

          <motion.div
            className="flex flex-wrap justify-center gap-3 mb-10"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.6 }}
          >
            {["Web App Pentesting", "Vulnerability Research", "Red Team Ops", "Bug Bounty"].map((tag, i) => (
              <motion.span
                key={tag}
                className="px-4 py-1.5 rounded border border-border bg-secondary font-mono text-sm text-primary text-glow-sm cyber-border"
                whileHover={{ scale: 1.05, borderColor: "hsl(142, 72%, 48%)" }}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 + i * 0.1 }}
              >
                {tag}
              </motion.span>
            ))}
          </motion.div>

          <motion.div
            className="flex flex-wrap justify-center gap-4"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.3, duration: 0.6 }}
          >
            <motion.a
              href="#projects"
              className="inline-flex items-center gap-2 px-8 py-3 rounded bg-primary text-primary-foreground font-semibold transition-all duration-300"
              whileHover={{ scale: 1.03, boxShadow: "0 0 25px hsl(142, 72%, 48%, 0.5)" }}
              whileTap={{ scale: 0.97 }}
            >
              <Shield className="w-4 h-4" />
              View Projects
            </motion.a>
            <motion.a
              href="#writeups"
              className="inline-flex items-center gap-2 px-8 py-3 rounded border border-primary text-primary font-semibold transition-all duration-300"
              whileHover={{ scale: 1.03, backgroundColor: "hsl(142, 72%, 48%, 0.1)" }}
              whileTap={{ scale: 0.97 }}
            >
              View Writeups
            </motion.a>
            <motion.a
              href="#contact"
              className="inline-flex items-center gap-2 px-8 py-3 rounded border border-border text-foreground font-semibold transition-all duration-300"
              whileHover={{ scale: 1.03, borderColor: "hsl(142, 72%, 48%)" }}
              whileTap={{ scale: 0.97 }}
            >
              Contact Me
            </motion.a>
            <motion.a
              href="#"
              className="inline-flex items-center gap-2 px-8 py-3 rounded border border-border text-muted-foreground font-semibold transition-all duration-300"
              whileHover={{ scale: 1.03, borderColor: "hsl(142, 72%, 48%)", color: "hsl(142, 72%, 48%)" }}
              whileTap={{ scale: 0.97 }}
            >
              <Download className="w-4 h-4" />
              Download CV
            </motion.a>
          </motion.div>
        </motion.div>

        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <ChevronDown className="w-6 h-6 text-primary/60" />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
