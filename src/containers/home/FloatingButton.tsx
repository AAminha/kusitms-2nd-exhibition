import { twMerge } from 'tailwind-merge'

interface FloatingButtonProps {
  children: React.ReactElement
  explanation: string
  link: string
}

export const FloatingButton = ({ children, explanation, link }: FloatingButtonProps) => {
  return (
    <div className="group relative z-50">
      <a
        href={link}
        target="_blank"
        aria-label={explanation}
        className="flex h-[60px] w-[60px] items-center justify-center rounded-full bg-gray-90 transition-colors duration-200 group-hover:bg-primary-1 mobile:h-10 mobile:w-10"
      >
        {children}
      </a>
      <p
        className={twMerge(
          'pointer-events-none absolute top-[50%] z-[-1] translate-y-[-50%] rounded-full bg-gray-100/50 px-5 py-3 text-b3 font-normal text-gray-10 mobile:px-4 mobile:py-2 mobile:text-b4',
          'left-[72px] w-max opacity-0 transition-opacity duration-200 group-hover:opacity-100 mobile:left-[52px]'
        )}
      >
        {explanation}
      </p>
    </div>
  )
}
