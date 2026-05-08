import { motion } from "framer-motion";
import { ArrowUpRight, ArrowDownRight } from "lucide-react";

const gainers = [
  { sym: "PEPE", name: "Pepe", price: "$0.0000124", change: "+35.2%" },
  { sym: "SOL", name: "Solana", price: "$182.40", change: "+11.0%" },
  { sym: "TON", name: "Toncoin", price: "$7.12", change: "+5.6%" },
  { sym: "AVAX", name: "Avalanche", price: "$37.84", change: "+3.1%" },
];

const losers = [
  { sym: "XRP", name: "Ripple", price: "$0.512", change: "-7.8%" },
  { sym: "ADA", name: "Cardano", price: "$0.391", change: "-4.9%" },
  { sym: "DOT", name: "Polkadot", price: "$6.94", change: "-2.1%" },
  { sym: "ETH", name: "Ethereum", price: "$3,412", change: "-1.2%" },
];

function List({ title, data, up }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6 }}
      className="rounded-2xl border border-border bg-card/50 p-6"
    >
      <div className="flex items-center justify-between mb-5">
        <h3 className="text-lg font-semibold tracking-tight" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
          {title}
        </h3>
        {up ? (
          <ArrowUpRight className="size-4 text-muted-foreground" />
        ) : (
          <ArrowDownRight className="size-4 text-muted-foreground" />
        )}
      </div>
      <ul className="divide-y divide-border">
        {data.map((c, i) => (
          <motion.li
            key={c.sym}
            initial={{ opacity: 0, x: -8 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.06, duration: 0.4 }}
            className="flex items-center justify-between py-3 group cursor-pointer"
          >
            <div className="flex items-center gap-3">
              <div className="size-9 rounded-full border border-border bg-secondary/40 grid place-items-center text-xs font-semibold group-hover:bg-foreground group-hover:text-background transition-colors">
                {c.sym.slice(0, 2)}
              </div>
              <div>
                <div className="font-medium">{c.sym}</div>
                <div className="text-xs text-muted-foreground">{c.name}</div>
              </div>
            </div>
            <div className="text-right">
              <div className="font-medium tabular-nums">{c.price}</div>
              <div className={`text-xs tabular-nums ${up ? "text-foreground" : "text-muted-foreground"}`}>
                {c.change}
              </div>
            </div>
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
}

export function MoversSection() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-end justify-between mb-10">
          <div>
            <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">24h movement</div>
            <h2 className="mt-2 text-3xl md:text-4xl font-semibold tracking-tight" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              Top gainers & losers
            </h2>
          </div>
          <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors hidden sm:inline">
            View all markets →
          </a>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          <List title="Gainers" data={gainers} up />
          <List title="Losers" data={losers} up={false} />
        </div>
      </div>
    </section>
  );
}