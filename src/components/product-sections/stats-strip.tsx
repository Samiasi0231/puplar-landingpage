const stats = [
  { v: '400+', l: 'Crypto assets accepted' },
  { v: '38',   l: 'Countries supported'    },
  { v: '$10k', l: 'Monthly card limit'     },
  { v: '24/7', l: 'Human support'          },
]

export function StatsStrip() {
  return (
    <section className="border-y border-puplar-900/8 bg-white/40">
      <div className="max-w-[1280px] mx-auto px-8 lg:px-14 py-10 grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((s, i) => (
          <div
            key={s.l}
            className={i > 0 ? 'md:border-l border-puplar-900/8 md:pl-8' : ''}
          >
            <div className="font-display font-bold text-[40px] tracking-[-0.03em] text-puplar-900 leading-none">
              {s.v}
            </div>
            <div className="mt-2 text-[13px] text-puplar-900/60 tracking-[-0.005em]">{s.l}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
