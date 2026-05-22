interface PuplarMarkProps {
  light?: boolean
  size?: number
}

export function PuplarMark({ light = false, size = 24 }: PuplarMarkProps) {
  return (
    <div className="flex items-center gap-2">
      <div
        className="rounded-[7px] bg-puplar-700 text-white grid place-items-center font-display font-bold relative"
        style={{ width: size, height: size, fontSize: size * 0.62 }}
      >
        P
        <span
          className="absolute -bottom-0.5 -right-0.5 bg-puplar-cream rounded-full"
          style={{
            width: size * 0.27,
            height: size * 0.27,
            border: '2px solid #12555B',
          }}
        />
      </div>
      <div
        className={`font-display font-bold tracking-[-0.02em] ${
          light ? 'text-white' : 'text-puplar-900'
        }`}
        style={{ fontSize: size * 0.82 }}
      >
        puplar
      </div>
    </div>
  )
}
