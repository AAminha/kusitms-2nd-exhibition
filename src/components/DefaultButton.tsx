import { twMerge } from 'tailwind-merge'

interface DefaultButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string
}

export const DefaultButton = ({ children, className = '', ...props }: DefaultButtonProps) => {
  return (
    <button
      className={twMerge(
        'bg-primary-2 font-semibold text-white disabled:bg-gray-90 disabled:text-gray-70',
        className
      )}
      {...props}
    >
      {children}
    </button>
  )
}
