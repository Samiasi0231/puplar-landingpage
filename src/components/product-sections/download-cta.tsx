import { StoreButton } from '@/components/store-button'
import { PhoneFrame } from '@/components/phone-frame'
import { WalletScreen } from '@/components/wallet-screen'
import { FundScreen } from '@/components/fund-screen'
import { CardScreen } from '@/components/card-screen'

export function DownloadCta() {
  return (
    <section id="download" className="relative overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none opacity-50"
        style={{
          background:
            'radial-gradient(50% 50% at 50% 50%, rgba(18,85,91,.18), transparent 70%)',
        }}
      />

      <div className="max-w-[1280px] mx-auto px-8 lg:px-14 py-24 relative">
        <div className="text-center max-w-[720px] mx-auto mb-14">
          <div className="text-[12px] font-mono uppercase tracking-[0.12em] text-puplar-700 mb-3">
            Available on all devices
          </div>
          <h2 className="font-hero font-bold text-[52px] leading-[1.02] tracking-[-0.03em] text-puplar-900">
            Manage everything in your hands.
          </h2>
          <p className="mt-5 text-[18px] leading-[1.55] text-puplar-900/70">
            Spend worldwide with your brand-new virtual Mastercard. Free to download — takes about
            8 minutes from signup to first swipe.
          </p>
          <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
            <StoreButton store="apple" />
            <StoreButton store="google" />
          </div>
        </div>

        <div className="flex items-end justify-center gap-6">
          <PhoneFrame
            width={220}
            scheme="dark"
            className="hidden md:block translate-y-10 -rotate-3"
          >
            <FundScreen />
          </PhoneFrame>
          <PhoneFrame width={260} scheme="dark">
            <CardScreen />
          </PhoneFrame>
          <PhoneFrame
            width={220}
            scheme="dark"
            className="hidden md:block translate-y-10 rotate-3"
          >
            <WalletScreen />
          </PhoneFrame>
        </div>
      </div>
    </section>
  )
}
