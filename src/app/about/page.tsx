'use client'

import { Information } from '@src/containers/about/Information'
import { Program } from '@src/containers/about/Program'
import { useSectionRef } from '@src/containers/about/SectionRefContext'
import { Visuality } from '@src/containers/about/Visuality'

export default function AboutPage() {
  const { sectionRefs } = useSectionRef()

  return (
    <div className="w-full desktop:max-w-[984px]">
      <Visuality
        ref={(el) => {
          sectionRefs.current[0] = el
        }}
      />
      <Information
        ref={(el) => {
          sectionRefs.current[1] = el
        }}
      />
      <Program
        ref={(el) => {
          sectionRefs.current[2] = el
        }}
      />
    </div>
  )
}
