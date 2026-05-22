type CardVariant = 'teal' | 'cream' | 'night'

interface VirtualCardProps {
  width?: number
  name?: string
  number?: string
  expiry?: string
  balance?: string
  variant?: CardVariant
}

const palettes: Record<
  CardVariant,
  { bg: string; glow: string; dark?: boolean }
> = {
  teal: {
    bg: 'linear-gradient(135deg, #12555B 0%, #00343E 60%, #021D22 100%)',
    glow: 'rgba(45,212,191,.35)',
  },
  cream: {
    bg: 'linear-gradient(135deg, #F8F9EA 0%, #e5e1d6 60%, #d6cfba 100%)',
    glow: 'rgba(120,113,108,.25)',
    dark: true,
  },
  night: {
    bg: 'linear-gradient(135deg, #1c1917 0%, #292524 60%, #0c0a09 100%)',
    glow: 'rgba(217,119,87,.35)',
  },
}

export function VirtualCard({
  width = 320,
  name = 'Femi H. Adeyemi',
  number = '4892  ••••  ••••  2271',
  expiry = '08/29',
  balance = '$2,418.50',
  variant = 'teal',
}: VirtualCardProps) {
  const p = palettes[variant]
  const isDark = !p.dark
  const h = width * 0.62

  return (
    <div
      className="relative rounded-[22px] overflow-hidden"
      style={{
        width,
        height: h,
        background: p.bg,
        color: isDark ? '#fff' : '#1c1917',
        boxShadow: `0 24px 50px -18px rgba(15,23,42,.45), 0 8px 18px -8px ${p.glow}, inset 0 1px 0 0 rgba(255,255,255,.14)`,
      }}
    >
      {/* decorative arc */}
      <svg
        className="absolute -right-10 -top-10 opacity-20"
        width={h * 1.4}
        height={h * 1.4}
        viewBox="0 0 200 200"
        fill="none"
      >
        <circle cx="100" cy="100" r="80" stroke="currentColor" strokeWidth="0.6" />
        <circle cx="100" cy="100" r="55" stroke="currentColor" strokeWidth="0.6" />
        <circle cx="100" cy="100" r="30" stroke="currentColor" strokeWidth="0.6" />
      </svg>

      <div className="absolute inset-0 p-5 flex flex-col justify-between">
        <div className="flex items-start justify-between">
          <div>
            <div className="text-[10px] font-mono uppercase tracking-[0.18em] opacity-70">
              Puplar · Virtual
            </div>
            <div className="text-[11px] mt-1 opacity-60">USD Balance</div>
            <div className="font-display text-[22px] font-bold tracking-[-0.02em] mt-0.5">
              {balance}
            </div>
          </div>
          {/* chip */}
          <div
            className="w-9 h-7 rounded-[5px]"
            style={{
              background: isDark
                ? 'linear-gradient(135deg, #d4af6a 0%, #8a6c3a 100%)'
                : 'linear-gradient(135deg, #b8975a 0%, #6b5028 100%)',
              boxShadow: 'inset 0 0 0 1px rgba(255,255,255,.2)',
            }}
          >
            <div
              className="w-full h-full opacity-40"
              style={{
                backgroundImage:
                  'linear-gradient(90deg, transparent 33%, rgba(0,0,0,.4) 33%, rgba(0,0,0,.4) 38%, transparent 38%, transparent 60%, rgba(0,0,0,.4) 60%, rgba(0,0,0,.4) 65%, transparent 65%)',
              }}
            />
          </div>
        </div>

        <div>
          <div
            className="font-mono text-[14px] tracking-[0.15em] mb-3"
            style={{ fontFeatureSettings: '"tnum"' }}
          >
            {number}
          </div>
          <div className="flex items-end justify-between">
            <div>
              <div className="text-[9px] font-mono uppercase tracking-[0.12em] opacity-60 mb-0.5">
                Cardholder
              </div>
              <div className="text-[11px] font-semibold tracking-[0.02em]">{name}</div>
            </div>
            <div>
              <div className="text-[9px] font-mono uppercase tracking-[0.12em] opacity-60 mb-0.5">
                Exp
              </div>
              <div className="text-[11px] font-semibold font-mono">{expiry}</div>
            </div>
            {/* Mastercard mark — two interlocking circles */}
            <div className="flex items-center gap-1">
              <div className="relative w-7 h-5">
                <span
                  className="absolute left-0 top-0 w-5 h-5 rounded-full"
                  style={{ background: '#eb001b' }}
                />
                <span
                  className="absolute right-0 top-0 w-5 h-5 rounded-full"
                  style={{ background: '#f79e1b', mixBlendMode: 'multiply' }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
