import { motion } from "framer-motion";
import { ArrowRight, LineChart } from "lucide-react";
import { Button } from "@/components/ui/button";

function Sparkline() {
  // Decorative animated line chart (SVG)
  const path =
    "M0 120 L40 100 L80 110 L120 70 L160 90 L200 50 L240 75 L280 40 L320 60 L360 25 L400 45";
  return (
    <svg viewBox="0 0 400 160" className="w-full h-full" preserveAspectRatio="none">
      <defs>
        <linearGradient id="fadeLine" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="white" stopOpacity="0.25" />
          <stop offset="100%" stopColor="white" stopOpacity="0" />
        </linearGradient>
      </defs>
      <motion.path
        d={`${path} L400 160 L0 160 Z`}
        fill="url(#fadeLine)"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
      />
      <motion.path
        d={path}
        fill="none"
        stroke="white"
        strokeWidth="1.5"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 2.2, ease: "easeInOut" }}
      />
    </svg>
  );
}

export function Hero() {
  return (
    <section className="relative pt-32 pb-24 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-60 mask-[radial-gradient(ellipse_at_center,black,transparent_70%)]" />
      <div className="absolute inset-0 radial-fade" />

      <div className="relative mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/40 px-3 py-1 text-xs text-muted-foreground"
          >
            <span className="size-1.5 rounded-full bg-foreground animate-pulse" />
            Live · 12,420 markets streaming
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mt-6 text-5xl md:text-7xl font-bold tracking-tight leading-[1.05]"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Track crypto markets <br />
            <span className="text-shimmer">in real time.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-6 max-w-lg text-lg text-muted-foreground"
          >
            One quiet, monochrome dashboard for prices, portfolios and signals across thousands of coins. Built for focus.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <Button size="lg" className="bg-foreground text-background hover:bg-foreground/90 group">
              Explore Markets
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
            </Button>
            <Button size="lg" variant="outline" className="border-border bg-transparent hover:bg-secondary text-foreground">
              Get Started
            </Button>
          </motion.div>

          <div className="mt-10 flex items-center gap-6 text-xs text-muted-foreground">
            <div><span className="text-foreground font-semibold">$2.4T</span> · Total Cap</div>
            <div className="h-4 w-px bg-border" />
            <div><span className="text-foreground font-semibold">52.1%</span> · BTC Dom</div>
            <div className="h-4 w-px bg-border" />
            <div><span className="text-foreground font-semibold">$98B</span> · 24h Vol</div>
          </div>
        </div>

        {/* Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.3 }}
          className="relative"
        >
          <div className="absolute -inset-10 bg-foreground/5 blur-3xl rounded-full" />
          <div className="relative rounded-2xl border border-border bg-card/60 backdrop-blur-xl p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="size-10 rounded-full bg-foreground text-background grid place-items-center font-bold animate-float">₿</div>
                <div>
                  <div className="font-semibold">Bitcoin</div>
                  <div className="text-xs text-muted-foreground">BTC / USD</div>
                </div>
              </div>
              <div className="text-right">
                <div className="font-semibold tabular-nums">$67,284.12</div>
                <div className="text-xs text-muted-foreground tabular-nums">+2.14% today</div>
              </div>
            </div>
            <div className="h-48 -mx-2">
              <Sparkline />
            </div>
            <div className="mt-4 grid grid-cols-3 gap-3 text-xs">
              {[
                ["Open", "$65,902"],
                ["High", "$67,940"],
                ["Vol", "$31.2B"],
              ].map(([k, v]) => (
                <div key={k} className="rounded-md border border-border bg-secondary/40 p-3">
                  <div className="text-muted-foreground">{k}</div>
                  <div className="text-foreground font-semibold tabular-nums mt-1">{v}</div>
                </div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.6 }}
            className="absolute -bottom-6 -left-6 hidden md:flex items-center gap-2 rounded-full border border-border bg-card/80 backdrop-blur px-4 py-2 text-xs"
          >
            <LineChart className="size-3.5 text-muted-foreground" />
            AI signal: accumulation phase
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}