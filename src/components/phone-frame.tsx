import { ReactNode } from 'react'

interface PhoneFrameProps {
  children: ReactNode
  width?: number
  scheme?: 'dark' | 'light'
  className?: string
  scale?: number
}

export function PhoneFrame({
  children,
  width = 280,
  scheme = 'dark',
  className = '',
  scale = 1,
}: PhoneFrameProps) {
  const h = (width / 280) * 580

  return (
    <div
      className={`relative ${className}`}
      style={{ width: width * scale, height: h * scale }}
    >
      <div
        className={`absolute inset-0 origin-top-left ${
          scheme === 'dark' ? 'bg-stone-900' : 'bg-white border border-stone-200'
        }`}
        style={{
          width,
          height: h,
          transform: `scale(${scale})`,
          borderRadius: 44,
          padding: 9,
          boxShadow:
            scheme === 'dark'
              ? '0 30px 60px -20px rgba(15,23,42,.35), 0 12px 28px -10px rgba(18,85,91,.18), inset 0 0 0 1px rgba(255,255,255,.08)'
              : '0 30px 60px -20px rgba(15,23,42,.2), 0 12px 28px -10px rgba(18,85,91,.12)',
        }}
      >
        <div className="w-full h-full bg-puplar-cream rounded-[36px] overflow-hidden relative">
          {/* notch */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-6 bg-stone-900 rounded-b-2xl z-20" />
          {/* status bar */}
          <div className="h-11 flex items-center justify-between px-7 pt-2 text-[11px] font-semibold text-puplar-900 relative z-10">
            <span>9:41</span>
            <span className="flex items-center gap-1">
              <span className="inline-block w-3.5 h-2 border border-current rounded-sm relative">
                <span className="absolute inset-0.5 bg-current rounded-[1px]" />
              </span>
            </span>
          </div>
          {children}
        </div>
      </div>
    </div>
  )
}
