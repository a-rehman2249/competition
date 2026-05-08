import { motion } from "framer-motion";

const coins = [
  { sym: "BTC", name: "Bitcoin", price: "$67,284.12", change: "+2.10%", cap: "$1.32T", up: true,
    path: "M0 40 L20 35 L40 38 L60 25 L80 30 L100 18 L120 22 L140 12" },
  { sym: "ETH", name: "Ethereum", price: "$3,412.08", change: "-1.20%", cap: "$410B", up: false,
    path: "M0 18 L20 22 L40 15 L60 30 L80 28 L100 35 L120 32 L140 40" },
  { sym: "SOL", name: "Solana", price: "$182.40", change: "+8.04%", cap: "$84B", up: true,
    path: "M0 42 L20 38 L40 30 L60 32 L80 22 L100 18 L120 14 L140 8" },
  { sym: "BNB", name: "BNB", price: "$612.10", change: "+0.42%", cap: "$92B", up: true,
    path: "M0 28 L20 30 L40 25 L60 27 L80 22 L100 24 L120 20 L140 22" },
];

export function FeaturedCoins() {
  return (
    <section className="py-24 border-t border-border">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-end justify-between mb-10">
          <div>
            <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Featured</div>
            <h2 className="mt-2 text-3xl md:text-4xl font-semibold tracking-tight" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              Coins to watch
            </h2>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {coins.map((c, i) => (
            <motion.div
              key={c.sym}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ y: -4 }}
              className="rounded-xl border border-border bg-card/50 p-5 hover:border-foreground/30 transition-colors"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="size-10 rounded-full bg-foreground/5 border border-border grid place-items-center font-semibold">
                    {c.sym.slice(0, 1)}
                  </div>
                  <div>
                    <div className="font-semibold">{c.sym}</div>
                    <div className="text-xs text-muted-foreground">{c.name}</div>
                  </div>
                </div>
                <span className={`text-xs tabular-nums ${c.up ? "text-foreground" : "text-muted-foreground"}`}>
                  {c.change}
                </span>
              </div>

              <div className="mt-4 h-14 -mx-2">
                <svg viewBox="0 0 140 50" className="w-full h-full" preserveAspectRatio="none">
                  <motion.path
                    d={c.path}
                    fill="none"
                    stroke="currentColor"
                    strokeOpacity={c.up ? 1 : 0.5}
                    strokeWidth="1.5"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.4, delay: 0.2 + i * 0.05, ease: "easeInOut" }}
                    className="text-foreground"
                  />
                </svg>
              </div>

              <div className="mt-3 flex items-center justify-between text-sm">
                <div className="font-semibold tabular-nums">{c.price}</div>
                <div className="text-xs text-muted-foreground">Cap {c.cap}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}