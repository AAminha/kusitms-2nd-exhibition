import { forwardRef } from 'react'

import clsx from 'clsx'

import { PROGRAM_INFORMATION, PROGRAMS } from '@src/constants/about'

const Program = forwardRef<HTMLElement, unknown>((_, ref) => {
  return (
    <section ref={ref} className="w-full py-[140px] mobile:py-[80px] desktop:max-w-[984px]">
      <p className="text-b3 font-normal text-gray-20">{PROGRAM_INFORMATION}</p>
      <article className="relative mt-14 flex flex-col gap-3 sm:gap-8">
        <div className="absolute left-[89px] z-[-1] h-full w-[3px] bg-primary-1 mobile:left-[75px] sm:hidden" />
        {PROGRAMS.map((program) => (
          <div key={program.title} className="flex gap-3 sm:flex-col">
            <h2
              className={clsx(
                'flex w-max shrink-0 items-center justify-center rounded-lg bg-primary-1 p-4 text-branding-b1 font-semibold text-gray-10 mobile:text-branding-b3',
                'sm:w-full'
              )}
            >
              {program.time}
            </h2>
            <div className="w-full rounded-lg bg-gray-90 p-4">
              <h3 className="pb-2 text-b3 font-semibold text-gray-10">{program.title}</h3>
              <h4 className="text-b4 font-normal text-gray-30">{program.description}</h4>
            </div>
          </div>
        ))}
      </article>
    </section>
  )
})

Program.displayName = 'Program'

export { Program }
