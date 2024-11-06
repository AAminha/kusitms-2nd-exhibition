import clsx from 'clsx'

import { helvetica } from '@src/styles/font'

import { PROGRAMS } from './constant'

// 확정된 구성으로 수정
export const Program = () => {
  return (
    <section className="relative flex w-full flex-col gap-3">
      <div className="absolute left-[65px] z-[-1] h-full w-[3px] bg-primary-1" />
      {PROGRAMS.map((program) => (
        <article key={program.title} className="flex gap-3">
          <h2
            className={clsx(
              'flex w-[134px] shrink-0 items-center justify-center rounded-lg bg-primary-1 text-branding-b1 text-gray-10',
              helvetica.className
            )}
          >
            {program.time}
          </h2>
          <div className="w-full rounded-lg bg-gray-90 p-4">
            <h3 className="pb-2 text-b3 font-semibold text-gray-10">{program.title}</h3>
            <h4 className="text-b4 font-normal text-gray-30">{program.description}</h4>
          </div>
        </article>
      ))}
    </section>
  )
}
