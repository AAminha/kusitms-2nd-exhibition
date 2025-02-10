import Image from 'next/image'
import { twMerge } from 'tailwind-merge'

import { ExhibitionLogo } from '@public/logos'
import { FadeInSection } from '@src/components/FadeInSection'
import { EXHIBITION_KEYWORDS } from '@src/constants/home'
import { helvetica } from '@src/styles/font'

export const Keyword = () => {
  return (
    <section className="flex flex-col items-center px-[50px] py-[232px] mobile:px-6 sm:py-[100px]">
      <div className="w-full max-w-[1120px]">
        <FadeInSection>
          <section className="mb-[145px] flex w-full justify-center gap-[90px] mobile:gap-[18px]">
            <ExhibitionLogo height={126} className="mobile:h-[52px] sm:h-[40px]" />
            <Image
              src="/images/exhibition-title.png"
              alt="큐시즘 2회 전시회 타이틀"
              width={605}
              height={131}
              className="mobile:h-[57px] mobile:w-[263.6px] sm:h-[36.6px] sm:w-[169px]"
            />
          </section>
        </FadeInSection>
        <FadeInSection>
          <section className="flex justify-between gap-[50px] mobile:flex-col mobile:items-center">
            {EXHIBITION_KEYWORDS.map((keyword) => (
              <article
                key={keyword.title}
                className="flex w-[312px] flex-col items-center sm:w-full"
              >
                <h2 className={twMerge('mb-5 text-branding-h2 text-gray-20', helvetica.className)}>
                  {keyword.title}
                </h2>
                <p className="whitespace-pre-wrap text-center text-b4 font-normal text-gray-30">
                  {keyword.description}
                </p>
              </article>
            ))}
          </section>
        </FadeInSection>
      </div>
    </section>
  )
}
