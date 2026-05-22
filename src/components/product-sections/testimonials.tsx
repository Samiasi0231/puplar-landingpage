import { Star } from 'lucide-react'

const quotes = [
  {
    h: 'Slick and simple',
    q: 'The interface is sleek and intuitive, and I appreciate the added peace of mind knowing my financial information is protected.',
    n: 'Femi H. Adeyemi',
    r: 'Lagos, NG',
  },
  {
    h: 'A game-changer',
    q: 'Seamlessly converting cryptocurrencies to fiat in real-time — without waiting for confirmation or dealing with high fees.',
    n: 'Benjamin O.',
    r: 'Berlin, DE',
  },
  {
    h: 'Good rates',
    q: 'I make multiple purchases from anywhere in the world now, without worrying about hefty international transaction fees.',
    n: 'Susan G.',
    r: 'London, UK',
  },
  {
    h: 'Just works',
    q: "It's so easy to use and it's made things so much simpler. I love being able to spend my crypto funds wherever I want.",
    n: 'David A. Ames',
    r: 'Toronto, CA',
  },
]

function Stars({ count = 5, size = 'sm' }: { count?: number; size?: 'sm' | 'md' }) {
  const cls = size === 'sm' ? 'w-3.5 h-3.5' : 'w-5 h-5'
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} className={`${cls} text-amber-500 fill-amber-500`} />
      ))}
    </div>
  )
}

export function Testimonials() {
  return (
    <section className="bg-puplar-cream/70 border-y border-puplar-900/8">
      <div className="max-w-[1280px] mx-auto px-8 lg:px-14 py-24">
        <div className="flex items-end justify-between mb-12 flex-wrap gap-4">
          <div>
            <div className="text-[12px] font-mono uppercase tracking-[0.12em] text-puplar-700 mb-3">
              From our community
            </div>
            <h2 className="font-display font-bold text-[40px] leading-[1.05] tracking-[-0.025em] text-puplar-900 max-w-[520px]">
              Trusted by 240,000 people across 38 countries.
            </h2>
          </div>
          <div className="flex items-center gap-3">
            <Stars count={5} size="md" />
            <div className="text-[14px] text-puplar-900/70">
              <span className="font-semibold text-puplar-900">4.8</span> · 5,200+ reviews
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {quotes.map((t, i) => (
            <figure
              key={i}
              className="bg-white rounded-2xl border border-puplar-900/8 p-6 flex flex-col gap-4 min-h-[260px]"
            >
              <Stars count={5} size="sm" />
              <div className="font-display font-bold text-[17px] tracking-[-0.01em] text-puplar-900">
                {t.h}
              </div>
              <blockquote className="text-[14px] leading-[1.55] text-puplar-900/70 flex-1">
                "{t.q}"
              </blockquote>
              <figcaption className="flex items-center gap-2.5 pt-3 border-t border-puplar-900/8">
                <div className="w-8 h-8 rounded-full bg-puplar-700 text-white grid place-items-center text-[12px] font-bold">
                  {t.n[0]}
                </div>
                <div>
                  <div className="text-[13px] font-semibold text-puplar-900">{t.n}</div>
                  <div className="text-[11px] text-puplar-900/55 font-mono">{t.r}</div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
