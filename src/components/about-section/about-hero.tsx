

export function AboutHero() {
  return (
    <section className="border-b border-puplar-900/8">
      <div className="max-w-[1280px] mx-auto px-8 lg:px-14 py-20">
        <div className="max-w-[820px]">
          <div className="text-[12px] font-mono uppercase tracking-[0.12em] text-puplar-700 mb-4">
            About Puplar
          </div>
          <h1 className="font-hero font-bold text-[64px] leading-[1.02] tracking-[-0.03em] text-puplar-900 mb-6">
            Money that moves
            <br />
            at the speed of your life.
          </h1>
          <p className="text-[19px] leading-[1.55] text-puplar-900/70 tracking-[-0.005em] max-w-[640px]">
            Puplar is a consumer wallet that lets anyone fund a US-dollar
            balance with crypto or local currency, then spend it anywhere on a
            virtual Mastercard. We built it because the existing way takes too
            long.
          </p>
        </div>
      </div>
    </section>
  );
}
