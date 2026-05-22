import { Smartphone, Lock, Wallet, CreditCard, LucideIcon } from 'lucide-react'

const steps: Array<{
  n: string
  t: string
  d: string
  i: LucideIcon
}> = [
  {
    n: '01',
    t: 'Download Puplar',
    d: 'Get the app from the App Store or Google Play.',
    i: Smartphone,
  },
  {
    n: '02',
    t: 'Create your account',
    d: 'Sign up in a few steps. Biometric + identity verification.',
    i: Lock,
  },
  {
    n: '03',
    t: 'Fund your wallet',
    d: 'Choose any of 400+ crypto assets, or pay in local currency.',
    i: Wallet,
  },
  {
    n: '04',
    t: 'Spend anywhere',
    d: 'Customize a virtual Mastercard and tap pay — globally.',
    i: CreditCard,
  },
]

export function HowItWorks() {
  return (
    <section id="product" className="max-w-[1280px] mx-auto px-8 lg:px-14 py-24">
      <div className="grid lg:grid-cols-[1fr_2fr] gap-12 mb-14">
        <div>
          <div className="text-[12px] font-mono uppercase tracking-[0.12em] text-puplar-700 mb-3">
            How it works
          </div>
          <h2 className="font-display font-bold text-[44px] leading-[1.05] tracking-[-0.025em] text-puplar-900">
            From signup to spending in under{' '}
            <span className="text-puplar-700">10 minutes.</span>
          </h2>
        </div>
        <p className="text-[17px] leading-[1.55] text-puplar-900/70 lg:pt-6 max-w-[520px]">
          We built Puplar so anyone — anywhere — can move between crypto, savings, and everyday
          spending without thinking about rails, custody, or FX spreads.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-puplar-900/8 rounded-2xl overflow-hidden border border-puplar-900/8">
        {steps.map((s) => {
          const I = s.i
          return (
            <div
              key={s.n}
              className="bg-puplar-cream p-7 flex flex-col gap-6 min-h-[260px]"
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-[11px] text-puplar-900/45 tracking-[0.1em]">
                  {s.n}
                </span>
                <I className="w-5 h-5 text-puplar-700" />
              </div>
              <div className="mt-auto">
                <div className="font-display font-bold text-[20px] tracking-[-0.015em] text-puplar-900 leading-snug">
                  {s.t}
                </div>
                <div className="mt-2 text-[14px] leading-[1.55] text-puplar-900/65">{s.d}</div>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
