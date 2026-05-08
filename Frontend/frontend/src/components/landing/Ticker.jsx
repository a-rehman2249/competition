const items = [
  ["BTC", "67,284", "+2.10%"],
  ["ETH", "3,412", "-1.20%"],
  ["SOL", "182.40", "+8.04%"],
  ["DOGE", "0.182", "+15.30%"],
  ["BNB", "612.10", "+0.42%"],
  ["XRP", "0.512", "-7.80%"],
  ["ADA", "0.391", "-4.91%"],
  ["PEPE", "0.0000124", "+35.20%"],
  ["AVAX", "37.84", "+3.12%"],
  ["LINK", "16.21", "-0.84%"],
  ["TON", "7.12", "+5.66%"],
  ["DOT", "6.94", "-2.10%"],
];

export function Ticker() {
  const loop = [...items, ...items];
  return (
    <div className="relative border-y border-border bg-card/40 overflow-hidden">
      <div className="flex animate-ticker whitespace-nowrap py-3">
        {loop.map(([sym, price, change], i) => {
          const up = change.startsWith("+");
          return (
            <div key={i} className="flex items-center gap-3 px-8 text-sm shrink-0">
              <span className="font-semibold tracking-wide" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>{sym}</span>
              <span className="text-muted-foreground tabular-nums">${price}</span>
              <span className={`tabular-nums ${up ? "text-foreground" : "text-muted-foreground"}`}>
                {up ? "▲" : "▼"} {change.replace(/[+-]/, "")}
              </span>
              <span className="size-1 rounded-full bg-border ml-4" />
            </div>
          );
        })}
      </div>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-linear-to-r from-background to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-linear-to-l from-background to-transparent" />
    </div>
  );
}