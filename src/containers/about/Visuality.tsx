import { forwardRef } from 'react'

import { twMerge } from 'tailwind-merge'

import { SectionTitle } from '@src/components/SectionTitle'
import { VISUALITY_INFORMATION } from '@src/constants/about'
import { EXHIBITION_KEYWORDS } from '@src/constants/home'
import { Paragraph } from '@src/containers/about/Paragraph'
import { helvetica } from '@src/styles/font'

const Visuality = forwardRef<HTMLElement, unknown>((_, ref) => {
  return (
    <section
      ref={ref}
      className="w-full py-[140px] mobile:pb-[80px] mobile:pt-[100px] desktop:max-w-[984px]"
    >
      <SectionTitle title={VISUALITY_INFORMATION.title} subtitle={VISUALITY_INFORMATION.subtitle} />
      <Paragraph information={VISUALITY_INFORMATION.descriptions} className="mb-16 mt-8" />
      <section className="flex gap-3 mobile:flex-col desktop:h-max">
        {EXHIBITION_KEYWORDS.map((item) => (
          <article key={item.title} className="flex-1 rounded-lg bg-gray-90 p-4">
            <h4 className={twMerge('font-branding-b2 mb-2 text-gray-10', helvetica.className)}>
              {item.title}
            </h4>
            <p className="text-b4 font-normal text-gray-30">{item.description}</p>
          </article>
        ))}
      </section>
    </section>
  )
})

Visuality.displayName = 'Visuality'

export { Visuality }
