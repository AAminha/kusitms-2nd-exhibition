import clsx from 'clsx'

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
        className="flex h-[60px] w-[60px] items-center justify-center rounded-full bg-gray-90 transition-colors duration-200 mobile:h-10 mobile:w-10 desktop:group-hover:bg-primary-1"
      >
        {children}
      </a>
      <p
        className={clsx(
          'pointer-events-none absolute top-[50%] z-[-1] translate-y-[-50%] rounded-full bg-gray-100/50 px-5 py-3 text-b3 font-normal text-gray-10',
          'left-[72px] w-max opacity-0 transition-opacity duration-200 desktop:group-hover:opacity-100'
        )}
      >
        {explanation}
      </p>
    </div>
  )
}
