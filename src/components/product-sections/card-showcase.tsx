import { Zap, Wallet, Globe, LucideIcon } from 'lucide-react'
import { VirtualCard } from '@/components/virtual-card'

const feats: Array<{ i: LucideIcon; t: string; d: string }> = [
  {
    i: Zap,
    t: 'Flexible',
    d: 'Spin up disposable or named cards. Set per-card limits. Freeze instantly.',
  },
  {
    i: Wallet,
    t: 'Easy funding',
    d: 'Fund with crypto and unlock up to $10,000 a month in spending limits.',
  },
  {
    i: Globe,
    t: 'Globally accepted',
    d: 'Shop, pay suppliers, Netflix, online ads, tuition, flights, Airbnb — anywhere.',
  },
]

export function CardShowcase() {
  return (
    <section id="card" className="max-w-[1280px] mx-auto px-8 lg:px-14 py-24">
      <div className="grid lg:grid-cols-[1fr_1.1fr] gap-16 items-center">
        {/* Card stack */}
        <div className="relative flex justify-center min-h-[380px]">
          <div
            className="absolute inset-0 rounded-[40px]"
            style={{
              background:
                'radial-gradient(60% 50% at 50% 50%, rgba(18,85,91,.18), transparent 70%)',
            }}
          />
          <div className="relative mt-16">
            <div className="absolute -top-10 -left-10 rotate-[-8deg] opacity-90">
              <VirtualCard
                width={300}
                variant="cream"
                name="Susan G."
                number="4892  ••••  ••••  3104"
                expiry="11/28"
                balance="$840.20"
              />
            </div>
            <div className="relative z-10 rotate-[3deg]">
              <VirtualCard width={340} variant="teal" />
            </div>
            <div className="absolute -bottom-10 -right-10 rotate-[10deg] opacity-90 z-20">
              <VirtualCard
                width={290}
                variant="night"
                name="Benjamin O."
                number="4892  ••••  ••••  7726"
                expiry="04/30"
                balance="$1,205.00"
              />
            </div>
          </div>
        </div>

        {/* Copy */}
        <div>
          <div className="text-[12px] font-mono uppercase tracking-[0.12em] text-puplar-700 mb-3">
            Virtual card
          </div>
          <h2 className="font-display font-bold text-[44px] leading-[1.05] tracking-[-0.025em] text-puplar-900 max-w-[460px]">
            A Mastercard that thinks like your wallet.
          </h2>
          <p className="mt-5 text-[17px] leading-[1.55] text-puplar-900/70 max-w-[500px]">
            Every Puplar card runs on the Mastercard network and pulls from your USD balance.
            Make one for subscriptions. One for travel. Burn it after a sketchy checkout. Up to
            you.
          </p>

          <div className="mt-10 grid gap-7">
            {feats.map((f) => {
              const I = f.i
              return (
                <div key={f.t} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-puplar-cream border border-puplar-900/10 grid place-items-center text-puplar-700 shrink-0">
                    <I className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-display font-bold text-[17px] tracking-[-0.01em] text-puplar-900">
                      {f.t}
                    </div>
                    <div className="mt-1 text-[14px] leading-[1.55] text-puplar-900/65 max-w-[440px]">
                      {f.d}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
