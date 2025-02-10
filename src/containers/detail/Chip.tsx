import { twMerge } from 'tailwind-merge'

interface ChipProps {
  primary?: boolean
  children: string
}

export const Chip = ({ primary = false, children }: ChipProps) => {
  return (
    <p
      className={twMerge(
        'w-fit rounded-xl px-3 py-[6px] text-c1 font-medium',
        primary ? 'bg-primary-2/15 text-primary-2' : 'bg-white/10 text-white'
      )}
    >
      {children}
    </p>
  )
}
