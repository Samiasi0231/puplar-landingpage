interface Value {
  t: string;
  d: string;
}

export function AboutValues() {
  const values: Value[] = [
    {
      t: "Money should move",
      d: "Borders, banks, and weekends shouldn't decide when you can spend. We design for the friction-free path first, then layer compliance on top.",
    },
    {
      t: "Crypto is a rail",
      d: "We don't treat crypto as a speculation venue — it's how dollars actually arrive in our wallet. 400+ assets, one settled balance.",
    },
    {
      t: "Plain language",
      d: "No hidden FX spreads, no surprise pauses, no \"contact your local branch\". If we can't explain it in a sentence, we won't ship it.",
    },
    {
      t: "Local + global",
      d: "Built in Berlin and Port Harcourt — across two timezones, four languages, and a deeply held belief that the Global South is the global market.",
    },
  ];

  return (
    <section className="bg-white/40 border-y border-puplar-900/8">
      <div className="max-w-[1280px] mx-auto px-8 lg:px-14 py-20">
        <div className="text-[12px] font-mono uppercase tracking-[0.12em] text-puplar-700 mb-10">
          What we believe
        </div>
        <div className="grid md:grid-cols-2 gap-px bg-puplar-900/8 rounded-2xl overflow-hidden border border-puplar-900/8">
          {values.map((v, i) => (
            <div key={i} className="bg-puplar-cream p-8">
              <div className="font-mono text-[11px] text-puplar-900/45 tracking-[0.1em] mb-3">
                0{i + 1}
              </div>
              <div className="font-display font-bold text-[22px] tracking-[-0.015em] text-puplar-900">
                {v.t}
              </div>
              <p className="mt-3 text-[15px] leading-[1.6] text-puplar-900/65">
                {v.d}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
