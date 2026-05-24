interface Stat {
  v: string;
  l: string;
}

export function AboutStats() {
  const stats: Stat[] = [
    { v: "240k+", l: "Wallets funded" },
    { v: "$480M", l: "Annualized volume" },
    { v: "38", l: "Countries supported" },
    { v: "42", l: "People on the team" },
  ];

  return (
    <section className="border-y border-puplar-900/8 bg-puplar-900 text-white">
      <div className="max-w-[1280px] mx-auto px-8 lg:px-14 py-14 grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((s, i) => (
          <div
            key={i}
            className={i > 0 ? "md:border-l border-white/15 md:pl-8" : ""}
          >
            <div className="font-display font-bold text-[44px] tracking-[-0.03em] leading-none">
              {s.v}
            </div>
            <div className="mt-2 text-[13px] text-white/60">{s.l}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
