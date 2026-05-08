import { motion } from "framer-motion";

function BigChart({ label, change, path, area }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="rounded-2xl border border-border bg-card/50 p-6"
    >
      <div className="flex items-center justify-between">
        <div>
          <div className="text-sm text-muted-foreground">{label}</div>
          <div className="text-2xl font-semibold mt-1 tabular-nums" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            {change}
          </div>
        </div>
        <div className="flex gap-1 text-xs text-muted-foreground">
          {["1D","1W","1M","1Y"].map((t,i)=>(
            <button key={t} className={`px-2 py-1 rounded-md ${i===2?"bg-secondary text-foreground":"hover:text-foreground"}`}>{t}</button>
          ))}
        </div>
      </div>
      <div className="h-44 mt-4">
        <svg viewBox="0 0 400 160" preserveAspectRatio="none" className="w-full h-full">
          <defs>
            <linearGradient id={label} x1="0" x2="0" y1="0" y2="1">
              <stop offset="0%" stopColor="white" stopOpacity="0.18" />
              <stop offset="100%" stopColor="white" stopOpacity="0" />
            </linearGradient>
          </defs>
          <motion.path
            d={area}
            fill={`url(#${label})`}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.6 }}
          />
          <motion.path
            d={path}
            fill="none"
            stroke="white"
            strokeWidth="1.5"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 2, ease: "easeInOut" }}
          />
        </svg>
      </div>
    </motion.div>
  );
}

export function MarketOverview() {
  const btcPath = "M0 110 L40 90 L80 100 L120 70 L160 80 L200 50 L240 65 L280 35 L320 55 L360 25 L400 40";
  const ethPath = "M0 60 L40 70 L80 55 L120 90 L160 75 L200 100 L240 80 L280 110 L320 95 L360 120 L400 100";

  return (
    <section className="py-24 border-t border-border">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-end justify-between mb-10">
          <div>
            <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Overview</div>
            <h2 className="mt-2 text-3xl md:text-4xl font-semibold tracking-tight" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              The market at a glance
            </h2>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 grid gap-6">
            <BigChart
              label="BTC / USD · 1M"
              change="$67,284  +14.8%"
              path={btcPath}
              area={`${btcPath} L400 160 L0 160 Z`}
            />
            <BigChart
              label="ETH / USD · 1M"
              change="$3,412  -3.2%"
              path={ethPath}
              area={`${ethPath} L400 160 L0 160 Z`}
            />
          </div>

          <div className="grid gap-6">
            {[
              { l: "Total Market Cap", v: "$2.41T", s: "+1.8% today" },
              { l: "BTC Dominance", v: "52.1%", s: "+0.3%" },
              { l: "24h Volume", v: "$98.2B", s: "+12.4%" },
              { l: "Active Coins", v: "12,420", s: "Updated live" },
            ].map((s, i) => (
              <motion.div
                key={s.l}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="rounded-2xl border border-border bg-card/50 p-6"
              >
                <div className="text-sm text-muted-foreground">{s.l}</div>
                <div className="mt-2 text-3xl font-semibold tabular-nums" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                  {s.v}
                </div>
                <div className="mt-1 text-xs text-muted-foreground">{s.s}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}