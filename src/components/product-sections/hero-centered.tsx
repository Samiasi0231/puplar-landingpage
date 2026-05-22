import { StoreButton } from '@/components/store-button'
import { PhoneFrame } from '@/components/phone-frame'
import { WalletScreen } from '@/components/wallet-screen'
import { FundScreen } from '@/components/fund-screen'
import { CardScreen } from '@/components/card-screen'

export function HeroCentered() {
  return (
    <section className="relative overflow-hidden">
      <div
        className="absolute inset-x-0 top-[-20%] h-[700px] pointer-events-none opacity-50"
        style={{
          background:
            'radial-gradient(60% 40% at 50% 30%, rgba(18,85,91,.15) 0%, transparent 70%)',
        }}
      />

      <div className="max-w-[1080px] mx-auto px-8 lg:px-14 pt-16 pb-12 text-center relative">
        <div className="inline-flex items-center gap-2 bg-white border border-puplar-900/10 rounded-full pl-1.5 pr-3 py-1 text-[12px] font-medium text-puplar-900/75 mb-6">
          <span className="bg-puplar-700 text-white text-[10px] font-mono uppercase tracking-[0.1em] px-2 py-0.5 rounded-full">
            NEW
          </span>
          Crypto-funded cards now in 38 countries
        </div>

        <h1 className="font-hero font-bold text-[72px] leading-[1] tracking-[-0.035em] text-puplar-900 max-w-[820px] mx-auto">
          Spend your crypto
          <br />
          like it's just{' '}
          <span className="text-puplar-700 italic">money.</span>
        </h1>

        <p className="mt-6 text-[20px] leading-[1.5] text-puplar-900/70 max-w-[620px] mx-auto tracking-[-0.005em]">
          Fund a USD wallet with 400+ crypto assets. Spin up a virtual Mastercard. Spend
          anywhere — at the global rate.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <StoreButton store="apple" />
          <StoreButton store="google" />
        </div>
      </div>

      <div className="max-w-[1280px] mx-auto px-8 lg:px-14 pb-20 relative">
        <div className="flex items-end justify-center gap-8 lg:gap-14">
          <PhoneFrame width={260} className="hidden md:block translate-y-8">
            <FundScreen />
          </PhoneFrame>
          <PhoneFrame width={290}>
            <WalletScreen />
          </PhoneFrame>
          <PhoneFrame width={260} className="hidden md:block translate-y-8">
            <CardScreen />
          </PhoneFrame>
        </div>
      </div>
    </section>
  )
}
