import { Ticket, ArrowRight } from 'lucide-react'

const metrics = [
  { t: 'Sold',  v: '1,284'  },
  { t: 'Gross', v: '$38,420' },
  { t: 'Today', v: '+212'    },
]

const recentSales = [
  { n: 'Adaeze K.', t: 'Early bird · GA', a: '$24.00'  },
  { n: 'Tomás R.',  t: 'VIP · table 4',   a: '$120.00' },
  { n: 'Priya B.',  t: 'Group of 4',      a: '$96.00'  },
]

export function TicketsBanner() {
  return (
    <section id="tickets" className="max-w-[1280px] mx-auto px-8 lg:px-14 pb-24">
      <div className="rounded-3xl bg-puplar-cream border border-puplar-900/10 p-10 lg:p-14 grid lg:grid-cols-[1.1fr_0.9fr] gap-10 items-center">
        <div>
          <div className="inline-flex items-center gap-2 text-puplar-700">
            <Ticket className="w-5 h-5" />
            <span className="text-[12px] font-mono uppercase tracking-[0.12em]">
              Puplar Tickets
            </span>
          </div>
          <h2 className="mt-3 font-display font-bold text-[36px] leading-[1.1] tracking-[-0.025em] text-puplar-900 max-w-[520px]">
            Sell tickets to your next event. Get paid in crypto, dollars, or naira.
          </h2>
          <p className="mt-4 text-[16px] leading-[1.55] text-puplar-900/65 max-w-[480px]">
            One link, instant payouts, and access control that lives in the Puplar app. No
            platform fees on your first 100 tickets.
          </p>
          <a
            href="#"
            className="mt-6 inline-flex items-center gap-1.5 bg-puplar-900 hover:bg-puplar-700 text-white text-[14px] font-semibold px-4 py-2.5 rounded-md transition-colors"
          >
            Explore Tickets
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Event card mockup */}
        <div className="bg-white rounded-2xl border border-puplar-900/10 p-5 max-w-[400px] mx-auto w-full">
          <div className="flex items-center justify-between mb-4">
            <div>
              <div className="text-[11px] font-mono uppercase tracking-[0.1em] text-puplar-900/55">
                Event
              </div>
              <div className="text-[15px] font-display font-bold text-puplar-900 tracking-[-0.01em]">
                Afrobeats Berlin · Apr 26
              </div>
            </div>
            <div className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 uppercase tracking-[0.1em]">
              Live
            </div>
          </div>

          <div className="grid grid-cols-3 gap-2 mb-4">
            {metrics.map((m) => (
              <div key={m.t} className="bg-puplar-cream rounded-lg p-2.5">
                <div className="text-[10px] font-mono uppercase text-puplar-900/55">{m.t}</div>
                <div className="text-[14px] font-display font-bold text-puplar-900 tracking-[-0.01em]">
                  {m.v}
                </div>
              </div>
            ))}
          </div>

          <div className="text-[11px] font-mono uppercase tracking-[0.1em] text-puplar-900/55 mb-2">
            Recent
          </div>
          <div className="space-y-1.5">
            {recentSales.map((r) => (
              <div key={r.n} className="flex items-center justify-between text-[12px]">
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full bg-puplar-700 text-white grid place-items-center text-[9px] font-bold">
                    {r.n[0]}
                  </div>
                  <span className="text-puplar-900 font-medium">{r.n}</span>
                  <span className="text-puplar-900/55">· {r.t}</span>
                </div>
                <span className="font-mono text-puplar-900">{r.a}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
