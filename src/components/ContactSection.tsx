import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Send, Loader2 } from "lucide-react";
import { useState } from "react";

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) return;

    setStatus("loading");
    try {
      // Using EmailJS - user needs to set up their own service
      const { default: emailjs } = await import("@emailjs/browser");
      await emailjs.send(
        "service_portfolio", // Replace with your EmailJS service ID
        "template_contact",  // Replace with your EmailJS template ID
        {
          from_name: form.name,
          from_email: form.email,
          message: form.message,
          to_email: "abdosayed4555@gmail.com",
        },
        "YOUR_PUBLIC_KEY" // Replace with your EmailJS public key
      );
      setStatus("success");
      setForm({ name: "", email: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="py-24">
      <div className="container mx-auto px-6 max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-mono font-bold mb-2 text-primary text-glow-sm text-center">
            <span className="text-muted-foreground">09.</span> Get In Touch
          </h2>
          <div className="w-20 h-0.5 bg-primary/40 mb-4 mx-auto" />
          <p className="text-secondary-foreground text-center mb-10">
            Feel free to contact me for opportunities, collaborations, or security-related discussions.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4 mb-10">
            <div>
              <label htmlFor="name" className="block text-sm font-mono text-muted-foreground mb-1.5">
                Full Name
              </label>
              <input
                id="name"
                type="text"
                required
                maxLength={100}
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full px-4 py-3 rounded-lg border border-border bg-card text-foreground font-mono text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-mono text-muted-foreground mb-1.5">
                Email
              </label>
              <input
                id="email"
                type="email"
                required
                maxLength={255}
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full px-4 py-3 rounded-lg border border-border bg-card text-foreground font-mono text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-mono text-muted-foreground mb-1.5">
                Message
              </label>
              <textarea
                id="message"
                required
                maxLength={1000}
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full px-4 py-3 rounded-lg border border-border bg-card text-foreground font-mono text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors resize-none"
                placeholder="Your message..."
              />
            </div>

            <button
              type="submit"
              disabled={status === "loading"}
              className="w-full inline-flex items-center justify-center gap-2 px-8 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:shadow-[0_0_20px_hsl(142_72%_48%_/_0.4)] transition-all duration-300 disabled:opacity-50"
            >
              {status === "loading" ? (
                <><Loader2 className="w-4 h-4 animate-spin" /> Sending...</>
              ) : (
                <><Send className="w-4 h-4" /> Send Message</>
              )}
            </button>

            {status === "success" && (
              <p className="text-primary text-center text-sm font-mono">Message sent successfully!</p>
            )}
            {status === "error" && (
              <p className="text-destructive text-center text-sm font-mono">Failed to send. Please email me directly.</p>
            )}
          </form>

          <div className="flex justify-center gap-6">
            <a href="mailto:abdosayed4555@gmail.com" className="p-3 rounded-lg border border-border bg-card hover:border-primary transition-colors">
              <Mail className="w-6 h-6 text-primary" />
            </a>
            <a href="https://github.com/X0-Deku" target="_blank" rel="noopener noreferrer" className="p-3 rounded-lg border border-border bg-card hover:border-primary transition-colors">
              <Github className="w-6 h-6 text-primary" />
            </a>
            <a href="https://www.linkedin.com/in/abdelrahman-sayed-2486ba306/" target="_blank" rel="noopener noreferrer" className="p-3 rounded-lg border border-border bg-card hover:border-primary transition-colors">
              <Linkedin className="w-6 h-6 text-primary" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
