import { motion } from "framer-motion";
import { Activity, Wallet, Sparkles, BarChart3, Lock, Bell } from "lucide-react";

const items = [
  { icon: Activity, title: "Live Prices", desc: "Sub-second updates streamed from 50+ exchanges." },
  { icon: Wallet, title: "Portfolio Tracking", desc: "Connect wallets and exchanges in one quiet view." },
  { icon: Sparkles, title: "AI Insights", desc: "Pattern detection and signals tuned to your assets." },
  { icon: BarChart3, title: "Interactive Charts", desc: "Pro-grade tooling without the noise or clutter." },
  { icon: Lock, title: "Secure Login", desc: "Read-only API keys, 2FA and passkey support." },
  { icon: Bell, title: "Smart Alerts", desc: "Price, volume and on-chain triggers, your way." },
];

export function Highlights() {
  return (
    <section className="py-24 border-t border-border">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Why Monolith</div>
          <h2 className="mt-2 text-3xl md:text-5xl font-semibold tracking-tight" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            A calm surface for a loud market.
          </h2>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border rounded-2xl overflow-hidden border border-border">
          {items.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="bg-background p-8 group hover:bg-card transition-colors"
              >
                <Icon className="size-6 text-muted-foreground group-hover:text-foreground transition-colors" />
                <h3 className="mt-6 text-lg font-semibold" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}