import { forwardRef } from 'react'

import { SectionTitle } from '@src/components/SectionTitle'
import { ZONE_INFORMATION } from '@src/constants/about'

const Information = forwardRef<HTMLElement, unknown>((_, ref) => {
  return (
    <section ref={ref} className="py-[140px] mobile:py-[100px]">
      <SectionTitle title={ZONE_INFORMATION.title} subtitle={ZONE_INFORMATION.subtitle} />
      <div className="mt-[60px] flex h-[417px] w-full items-center justify-center bg-gray-70">
        도면 들어갈 예정
      </div>
    </section>
  )
})

Information.displayName = 'Information'

export { Information }
