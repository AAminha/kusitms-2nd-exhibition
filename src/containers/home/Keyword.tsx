import clsx from 'clsx'

import { EXHIBITION_KEYWORDS } from '@src/constants/home'
import { helvetica } from '@src/styles/font'

export const Keyword = () => {
  return (
    <section className="max-w-1440 flex flex-col items-center px-[50px] py-[232px]">
      <div className="w-full max-w-[1120px]">
        <figure className="mb-[100px] flex w-full gap-3">
          <div className="flex h-[196px] w-[365px] items-center justify-center bg-gray-90">
            로고
          </div>
          <div className="flex h-[196px] w-full items-center justify-center bg-gray-90">
            전시 타이틀
          </div>
          <figcaption className="visually-hidden">전시회 관련 이미지</figcaption>
        </figure>
        <section className="flex justify-between gap-[50px] mobile:flex-col mobile:items-center">
          {EXHIBITION_KEYWORDS.map((keyword) => (
            <article key={keyword.title} className="flex w-[312px] flex-col items-center">
              <h2 className={clsx('mb-5 text-branding-h2 text-gray-20', helvetica.className)}>
                {keyword.title}
              </h2>
              <p className="text-b4 font-normal text-gray-30">{keyword.description}</p>
            </article>
          ))}
        </section>
      </div>
    </section>
  )
}
