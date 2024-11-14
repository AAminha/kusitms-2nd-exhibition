import { forwardRef } from 'react'

import clsx from 'clsx'

import { SectionTitle } from '@src/components/SectionTitle'
import { VISUALITY_INFORMATION } from '@src/constants/about'
import { Paragraph } from '@src/containers/about/Paragraph'
import { helvetica } from '@src/styles/font'

const Visuality = forwardRef<HTMLElement, unknown>((_, ref) => {
  return (
    <section ref={ref} className="bg-red-400 py-[140px] mobile:py-[100px]">
      <SectionTitle title={VISUALITY_INFORMATION.title} subtitle={VISUALITY_INFORMATION.subtitle} />
      <Paragraph information={VISUALITY_INFORMATION.descriptions} className="mb-16 mt-8" />
      <section className="flex gap-3 mobile:flex-col desktop:h-max">
        {VISUALITY_INFORMATION.keywords.map((item) => (
          <article key={item.title} className="flex-1 rounded-lg bg-gray-90 p-4">
            <h4 className={clsx('font-branding-b2 mb-2 text-gray-10', helvetica.className)}>
              {item.title}
            </h4>
            <p className="whitespace-pre-wrap text-b4 font-normal text-gray-30">
              {item.description}
            </p>
          </article>
        ))}
      </section>
    </section>
  )
})

Visuality.displayName = 'Visuality'

export { Visuality }
