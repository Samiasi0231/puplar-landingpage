import { ChevronLeft, Shield } from 'lucide-react'
import { VirtualCard } from './virtual-card'

export function CardScreen() {
  return (
    <div className="px-5 pt-1 pb-5">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-1.5 text-puplar-900/70 text-[12px]">
          <ChevronLeft className="w-3.5 h-3.5" />
          Back
        </div>
        <div className="text-[13px] font-display font-bold text-puplar-900">My card</div>
        <div className="w-6" />
      </div>

      <div className="flex justify-center mb-4">
        <VirtualCard width={230} variant="teal" />
      </div>

      <div className="grid grid-cols-3 gap-2 mb-4">
        {['Freeze', 'Top up', 'Details'].map((l) => (
          <div
            key={l}
            className="bg-white border border-puplar-900/10 rounded-xl py-2 text-center text-[11px] font-semibold text-puplar-900"
          >
            {l}
          </div>
        ))}
      </div>

      <div className="bg-white rounded-2xl border border-puplar-900/8 p-3.5 mb-3">
        <div className="text-[10px] font-mono uppercase tracking-[0.1em] text-puplar-900/55 mb-2">
          Spend limit
        </div>
        <div className="flex items-baseline justify-between mb-2">
          <div className="font-display text-[18px] font-bold text-puplar-900">$2,418</div>
          <div className="text-[11px] text-puplar-900/55 font-mono">of $10,000 / mo</div>
        </div>
        <div className="h-1.5 bg-puplar-900/8 rounded-full overflow-hidden">
          <div className="h-full bg-puplar-700 rounded-full" style={{ width: '24%' }} />
        </div>
      </div>

      <div className="bg-white rounded-2xl border border-puplar-900/8 px-3.5 py-3">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-full bg-emerald-50 grid place-items-center text-emerald-700">
            <Shield className="w-4 h-4" />
          </div>
          <div className="flex-1">
            <div className="text-[12px] font-semibold text-puplar-900">3-D Secure active</div>
            <div className="text-[10px] text-puplar-900/55">
              Approve charges in-app · works globally
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
