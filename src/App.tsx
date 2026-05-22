import { useState } from 'react'
import { LandingHeader } from '@/components/landing-header'
import { LandingFooter } from '@/components/landing-footer'
import { HeroSplit } from '@/components/product-sections/hero-split'
import { HeroCentered } from '@/components/product-sections/hero-centered'
import { StatsStrip } from '@/components/product-sections/stats-strip'
import { HowItWorks } from '@/components/product-sections/howIt-works'
import { FundSection } from '@/components/product-sections/fund-section'
import { CardShowcase } from '@/components/product-sections/card-showcase'
import { TicketsBanner } from '@/components/product-sections/tickets-banner'
import { Testimonials } from '@/components/product-sections/Testimonials'
import { DownloadCta } from '@/components/product-sections/download-cta'

export default function App() {
  const [heroVariant] = useState<'split' | 'centered'>('split')

  return (
    <div>
      <LandingHeader active="product" />
      {heroVariant === 'split' ? <HeroSplit /> : <HeroCentered />}
      <StatsStrip />
      <HowItWorks />
      <FundSection />
      <CardShowcase />
      <TicketsBanner />
      <Testimonials />
      <DownloadCta />
      <LandingFooter />
    </div>
  )
}
