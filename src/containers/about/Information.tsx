import { forwardRef, useState } from 'react'

import clsx from 'clsx'

import { MapDesktop } from '@public/images/mapDesktop'
import { MapMobile } from '@public/images/mapMobile'
import { SectionTitle } from '@src/components/SectionTitle'
import { AREA_INFORMATION, LOCATION_INFORMATION } from '@src/constants/about'

const Information = forwardRef<HTMLElement, unknown>((_, ref) => {
  const [activeArea, setActiveArea] = useState<keyof typeof AREA_INFORMATION | null>(null)

  const handleSelectArea = (area: keyof typeof AREA_INFORMATION | null) => {
    setActiveArea(area)
  }

  // TODO: 바깥영역 클릭 시 activeArea 초기화
  return (
    <section ref={ref} className="py-[140px] mobile:py-[80px]">
      <SectionTitle
        title={LOCATION_INFORMATION.title}
        additional={LOCATION_INFORMATION.additional}
        subtitle={LOCATION_INFORMATION.subtitle}
      />
      <div
        className={clsx(
          'relative flex flex-wrap justify-center gap-6 py-12',
          'mobile:mx-auto mobile:items-center'
        )}
      >
        <MapDesktop className="w-full max-w-[715px] mobile:hidden" onClick={handleSelectArea} />
        <MapMobile className="desktop:hidden" onClick={handleSelectArea} />
        <article
          className={clsx(
            'h-fit w-[302px] rounded-[8px] bg-gray-90 p-4',
            'desktop:min-w-[302px] desktop:max-w-[400px] desktop:flex-shrink desktop:shrink-0 desktop:flex-grow',
            activeArea ? 'opacity-100' : 'opacity-0'
          )}
        >
          <h2 className="text-b2 font-semibold text-gray-10">
            {activeArea ? AREA_INFORMATION[activeArea].name : ''}
          </h2>
          <p className="whitespace-pre-wrap text-b4 font-normal text-gray-30">
            {activeArea ? AREA_INFORMATION[activeArea].description : ''}
          </p>
        </article>
      </div>
    </section>
  )
})

Information.displayName = 'Information'

export { Information }
