'use client'

import { useEffect, useRef, useState } from 'react'

import SideMenuLayout from '@src/components/SideMenuLayout'
import { useSectionRef } from '@src/containers/about/SectionRefContext'

const NAVIGATION = ['VISUALITY', 'INFORMATION', 'PROGRAM']

// TODO: 메뉴 클릭 시 스크롤 & 스크롤 위치 감지해서 메뉴 활성화
export default function AboutLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const [activeSection, setActiveSection] = useState(NAVIGATION[0])
  const { sectionRefs, moveToSection } = useSectionRef()
  const observer = useRef<IntersectionObserver | null>(null)

  const onChangeSection = (menu: string) => {
    setActiveSection(menu)
    moveToSection(NAVIGATION.indexOf(menu))
  }

  useEffect(() => {
    observer.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = sectionRefs.current.indexOf(entry.target as HTMLElement)
            if (index !== -1) {
              setActiveSection(NAVIGATION[index])
            }
          }
        })
      },
      { threshold: 0.5 }
    )

    sectionRefs.current.forEach((ref) => {
      if (ref) {
        observer.current?.observe(ref)
      }
    })

    return () => {
      observer.current?.disconnect()
    }
  }, [sectionRefs])

  return (
    <SideMenuLayout
      sectionList={NAVIGATION}
      activeSection={activeSection}
      onChangeSection={onChangeSection}
    >
      {children}
    </SideMenuLayout>
  )
}
