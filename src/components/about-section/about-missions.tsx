export function AboutMissions() {
  return (
    <section className="max-w-[1280px] mx-auto px-8 lg:px-14 py-20 grid lg:grid-cols-[1fr_2fr] gap-12">
      <div className="text-[12px] font-mono uppercase tracking-[0.12em] text-puplar-700">
        Our mission
      </div>
      <div>
        <p
          className="font-display text-[32px] leading-[1.2] tracking-[-0.02em] text-puplar-900"
          style={{ textWrap: "balance" }}
        >
          To make a global, crypto-funded bank account feel as ordinary as
          opening a checking account at the bank down the street — and then make
          it work better.
        </p>
      </div>
    </section>
  );
}
