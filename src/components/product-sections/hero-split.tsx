import { Star, Shield, Globe, Check } from 'lucide-react'
import { StoreButton } from '@/components/store-button'
import { PhoneFrame } from '@/components/phone-frame'
import { VirtualCard } from '@/components/virtual-card'
import { WalletScreen } from '@/components/wallet-screen'

export function HeroSplit() {
  return (
    <section className="relative overflow-hidden">
      {/* ambient teal glow */}
      <div
        className="absolute inset-x-0 top-[-20%] h-[600px] pointer-events-none opacity-50"
        style={{
          background:
            'radial-gradient(60% 50% at 60% 30%, rgba(18,85,91,.13) 0%, transparent 70%)',
        }}
      />

      <div className="max-w-[1280px] mx-auto px-8 lg:px-14 pt-14 pb-24 grid lg:grid-cols-[1.05fr_0.95fr] gap-16 items-center relative">
        {/* Left copy */}
        <div>
          <div className="inline-flex items-center gap-2 bg-white border border-puplar-900/10 rounded-full pl-1.5 pr-3 py-1 text-[12px] font-medium text-puplar-900/75 mb-6">
            <span className="bg-puplar-700 text-white text-[10px] font-mono uppercase tracking-[0.1em] px-2 py-0.5 rounded-full">
              NEW
            </span>
            Crypto-funded cards now in 38 countries
          </div>

          <h1 className="font-hero font-bold text-[64px] leading-[1.02] tracking-[-0.03em] text-puplar-900">
            Savings, crypto,
            <br />
            and a global card
            <br />
            <span className="text-puplar-700">in one app.</span>
          </h1>

          <p className="mt-6 text-[19px] leading-[1.55] text-puplar-900/70 max-w-[520px] tracking-[-0.005em]">
            Fund a US-dollar wallet with crypto or local currency. Spin up a virtual Mastercard.
            Spend anywhere in the world — Netflix, Airbnb, tuition, flights — at the global rate.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <StoreButton store="apple" />
            <StoreButton store="google" />
          </div>

          <div className="mt-8 flex items-center gap-6 text-[12px] text-puplar-900/60 flex-wrap">
            <div className="flex items-center gap-1.5">
              <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
              <span>
                <span className="font-semibold text-puplar-900">4.8</span> · App Store
              </span>
            </div>
            <div className="h-3 w-px bg-puplar-900/15" />
            <div className="flex items-center gap-1.5">
              <Shield className="w-3.5 h-3.5 text-puplar-700" />
              <span>Licensed under EU AISP</span>
            </div>
            <div className="h-3 w-px bg-puplar-900/15" />
            <div className="flex items-center gap-1.5">
              <Globe className="w-3.5 h-3.5 text-puplar-700" />
              <span>400+ assets</span>
            </div>
          </div>
        </div>

        {/* Phone stack */}
        <div className="relative h-[600px] flex items-center justify-center">
          {/* floating card — top right */}
          <div className="absolute top-[40px] right-[20px] rotate-[8deg] z-10">
            <VirtualCard width={260} variant="teal" />
          </div>

          {/* phone */}
          <div className="relative z-20">
            <PhoneFrame width={290}>
              <WalletScreen />
            </PhoneFrame>
          </div>

          {/* funded chip — bottom left */}
          <div className="absolute bottom-[60px] left-[-10px] z-30 bg-white rounded-2xl border border-puplar-900/8 p-3 shadow-[0_18px_36px_-12px_rgba(15,23,42,.18)] w-[210px]">
            <div className="flex items-center justify-between mb-2">
              <div className="text-[10px] font-mono uppercase tracking-[0.1em] text-puplar-900/55">
                Funded
              </div>
              <div className="text-[10px] font-mono text-emerald-600">+$500.00</div>
            </div>
            <div className="flex items-center gap-2.5">
              <div
                className="w-9 h-9 rounded-full grid place-items-center text-white text-[14px] font-bold"
                style={{ background: '#26a17b' }}
              >
                ₮
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-[12px] font-semibold text-puplar-900">500.00 USDT</div>
                <div className="text-[10px] text-puplar-900/55">Settled · 1 min</div>
              </div>
              <div className="w-5 h-5 rounded-full bg-emerald-50 grid place-items-center text-emerald-600">
                <Check className="w-3 h-3" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
