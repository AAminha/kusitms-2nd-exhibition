import clsx from 'clsx'

import { helvetica } from '@src/styles/font'

import { VISUALITY_INFORMATION } from './constant'

export const Visuality = () => {
  return (
    <>
      <h2 className="text-h1 font-semibold text-gray-5 mobile:text-h2">
        {VISUALITY_INFORMATION.title}
      </h2>
      <h3 className="text-b3 font-normal text-gray-30">{VISUALITY_INFORMATION.subtitle}</h3>
      <article className="mb-16 mt-8 flex flex-col gap-6 text-b3 font-normal text-gray-20">
        {VISUALITY_INFORMATION.descriptions.map((item, index) => (
          <p key={index}>{item}</p>
        ))}
      </article>
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
    </>
  )
}
