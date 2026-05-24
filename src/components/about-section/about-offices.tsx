interface Office {
  city: string;
  region: string;
  addr: string;
  team: string;
}

export function AboutOffices() {
  const offices: Office[] = [
    {
      city: "Berlin",
      region: "Germany",
      addr: "Kaiser Wilhelm Strasse 73, 12247",
      team: "Engineering · Compliance · Payments",
    },
    {
      city: "Port Harcourt",
      region: "Nigeria",
      addr: "2A Orji Close, Ada George, Rivers State",
      team: "Product · Support · Operations · Design",
    },
  ];

  return (
    <section className="max-w-[1280px] mx-auto px-8 lg:px-14 py-20">
      <div className="text-[12px] font-mono uppercase tracking-[0.12em] text-puplar-700 mb-3">
        Where we work
      </div>
      <h2 className="font-display font-bold text-[36px] leading-[1.1] tracking-[-0.025em] text-puplar-900 mb-10">
        Two offices, one product.
      </h2>
      <div className="grid md:grid-cols-2 gap-5">
        {offices.map((o, i) => (
          <div
            key={i}
            className="rounded-2xl border border-puplar-900/10 bg-white overflow-hidden hover:border-puplar-700 transition p-8 flex flex-col gap-4"
          >
            {/* Map Placeholder */}
            <div className="aspect-video rounded-xl bg-puplar-cream relative overflow-hidden border border-puplar-900/8">
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage:
                    "repeating-linear-gradient(135deg, rgba(18,85,91,0.08) 0 10px, transparent 10px 22px)",
                }}
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-3 h-3 rounded-full bg-puplar-700 relative">
                  <span className="absolute inset-0 rounded-full bg-puplar-700 animate-ping opacity-40" />
                </div>
              </div>
              <div className="absolute left-3 bottom-3 font-mono text-[10px] uppercase tracking-[0.1em] text-puplar-900/55">
                MAP · {o.city.toLowerCase()}
              </div>
            </div>

            {/* Content */}
            <div>
              <div className="text-[11px] font-mono uppercase tracking-[0.1em] text-puplar-700 mb-2">
                {o.region}
              </div>
              <div className="font-display font-bold text-[32px] tracking-[-0.02em] text-puplar-900 mb-4">
                {o.city}
              </div>
              <div className="text-[14px] text-puplar-900 mb-1">{o.addr}</div>
              <div className="text-[12px] text-puplar-900/70">{o.team}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
