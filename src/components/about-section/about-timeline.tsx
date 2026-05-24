interface Milestone {
  y: string;
  t: string;
  d: string;
}

export function AboutTimeline() {
  const milestones: Milestone[] = [
    {
      y: "2022",
      t: "Founded as Akawo",
      d: "Started as an internal savings tool for Nigerian remote teams paid in USDT.",
    },
    {
      y: "2023",
      t: "Public launch",
      d: "Puplar launches on iOS + Android. First 10,000 wallets funded in 6 weeks.",
    },
    {
      y: "2024",
      t: "Mastercard partnership",
      d: "Virtual cards go live across 22 corridors. Berlin office opens.",
    },
    {
      y: "2025",
      t: "Tickets + Crusaders",
      d: "Two new surfaces — events payouts, and a community ambassador program.",
    },
    {
      y: "2026",
      t: "240k customers",
      d: "Approaching a quarter-million wallets and $480M annualized volume.",
    },
  ];

  return (
    <section className="max-w-[1280px] mx-auto px-8 lg:px-14 py-20">
      <div className="grid lg:grid-cols-[1fr_2fr] gap-12 mb-12">
        <div className="text-[12px] font-mono uppercase tracking-[0.12em] text-puplar-700">
          Milestones
        </div>
        <h2 className="font-display font-bold text-[40px] leading-[1.05] tracking-[-0.025em] text-puplar-900 max-w-[640px]">
          From an internal tool to a quarter-million wallets.
        </h2>
      </div>
      <div className="grid lg:grid-cols-[1fr_2fr] gap-0">
        <div></div>
        <ol className="border-l border-puplar-900/10">
          {milestones.map((m, i) => (
            <li key={i} className="pl-8 pr-4 py-6 relative">
              <span className="absolute -left-[6px] top-8 w-3 h-3 rounded-full bg-puplar-700 border-2 border-puplar-cream" />
              <div className="font-mono text-[12px] text-puplar-700 mb-1">
                {m.y}
              </div>
              <div className="font-display font-bold text-[20px] tracking-[-0.015em] text-puplar-900">
                {m.t}
              </div>
              <p className="mt-1 text-[14px] leading-[1.6] text-puplar-900/65 max-w-[540px]">
                {m.d}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
