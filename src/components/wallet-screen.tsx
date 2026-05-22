import {
  Bell,
  Plus,
  ArrowRight,
  ArrowLeftRight,
  CreditCard,
  Check,
} from 'lucide-react'
import { VirtualCard } from './virtual-card'

const transactions = [
  { id: 1, label: 'Spotify',          sub: 'Subscription · USD',  amt: '−$11.99',  icon: 'S', color: '#16a34a', pos: false },
  { id: 2, label: 'Funded with USDT', sub: 'Tron · 0xA2…f1',      amt: '+$500.00', icon: '₮', color: '#0d9488', pos: true  },
  { id: 3, label: 'Airbnb · Lisbon',  sub: 'Travel · EUR',        amt: '−$184.20', icon: 'A', color: '#e11d48', pos: false },
  { id: 4, label: 'Uber',             sub: 'Transport · NGN',     amt: '−$8.40',   icon: 'U', color: '#00343E', pos: false },
]

export function WalletScreen() {
  return (
    <div className="px-5 pt-1 pb-5">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-full bg-puplar-700 text-white grid place-items-center text-[12px] font-bold">
            FA
          </div>
          <div>
            <div className="text-[10px] text-puplar-900/55">Good evening</div>
            <div className="text-[13px] font-semibold text-puplar-900 leading-tight">Femi A.</div>
          </div>
        </div>
        <div className="w-8 h-8 rounded-full bg-white border border-puplar-900/10 grid place-items-center text-puplar-900/70">
          <Bell className="w-3.5 h-3.5" />
        </div>
      </div>

      <VirtualCard width={240} variant="teal" />

      {/* quick actions */}
      <div className="grid grid-cols-4 gap-2 mt-5">
        {[
          { l: 'Fund', i: <Plus className="w-4 h-4" /> },
          { l: 'Send', i: <ArrowRight className="w-4 h-4" /> },
          { l: 'Swap', i: <ArrowLeftRight className="w-4 h-4" /> },
          { l: 'Card', i: <CreditCard className="w-4 h-4" /> },
        ].map((a) => (
          <div
            key={a.l}
            className="bg-white rounded-xl py-2.5 flex flex-col items-center gap-1 border border-puplar-900/8"
          >
            <span className="text-puplar-700">{a.i}</span>
            <span className="text-[10px] font-medium text-puplar-900">{a.l}</span>
          </div>
        ))}
      </div>

      {/* activity */}
      <div className="mt-5">
        <div className="flex items-center justify-between mb-2">
          <div className="text-[11px] font-mono uppercase tracking-[0.1em] text-puplar-900/55">
            Recent
          </div>
          <div className="text-[11px] text-puplar-700 font-medium">See all</div>
        </div>
        <div className="bg-white rounded-xl border border-puplar-900/8 divide-y divide-puplar-900/6">
          {transactions.map((t) => (
            <div key={t.id} className="flex items-center gap-3 px-3 py-2.5">
              <div
                className="w-7 h-7 rounded-full grid place-items-center text-white text-[10px] font-bold"
                style={{ background: t.color }}
              >
                {t.icon}
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-[12px] font-semibold text-puplar-900 truncate">{t.label}</div>
                <div className="text-[10px] text-puplar-900/50 truncate">{t.sub}</div>
              </div>
              <div
                className={`text-[12px] font-mono font-semibold ${
                  t.pos ? 'text-emerald-600' : 'text-puplar-900'
                }`}
              >
                {t.amt}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* settled chip at bottom */}
      <div className="mt-4 flex items-center gap-2 bg-white rounded-xl border border-puplar-900/8 p-2.5">
        <div
          className="w-7 h-7 rounded-full grid place-items-center text-white text-[10px] font-bold"
          style={{ background: '#26a17b' }}
        >
          ₮
        </div>
        <div className="flex-1 min-w-0">
          <div className="text-[11px] font-semibold text-puplar-900">500.00 USDT · Settled</div>
          <div className="text-[10px] text-puplar-900/50">1 min ago</div>
        </div>
        <div className="w-5 h-5 rounded-full bg-emerald-50 grid place-items-center text-emerald-600">
          <Check className="w-3 h-3" />
        </div>
      </div>
    </div>
  )
}
