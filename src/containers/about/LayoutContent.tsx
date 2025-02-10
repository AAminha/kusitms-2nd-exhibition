'use client'

import { useEffect, useRef, useState } from 'react'

import SideMenuLayout from '@src/components/SideMenuLayout'
import { useAboutSectionRef } from '@src/contexts/AboutSectionRefContext'
import { useResponsive } from '@src/hooks/useResponsive'

const NAVIGATION = ['VISUALITY', 'INFORMATION', 'PROGRAM']

export default function AboutLayoutContent({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const [activeSection, setActiveSection] = useState(NAVIGATION[0])
  const { sectionRefs, moveToSection } = useAboutSectionRef()
  const observer = useRef<IntersectionObserver | null>(null)

  const onChangeSection = (menu: string) => {
    setActiveSection(menu)
    moveToSection(NAVIGATION.indexOf(menu))
  }

  const handleResize = () => {
    observer.current?.disconnect() // 기존 관찰 중단
    sectionRefs.current.forEach((ref) => {
      if (ref) observer.current?.observe(ref) // 다시 관찰 시작
    })
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
      {
        threshold: 0.25, // 최소 25%만 보이더라도 감지
        rootMargin: '0px 0px -20% 0px', // 약간의 여유 공간 추가
      }
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

  // 초기 활성 섹션 설정
  useEffect(() => {
    const initialActiveSection = sectionRefs.current.findIndex((ref) => {
      if (!ref) return false
      const rect = ref.getBoundingClientRect()
      return rect.top >= 0 && rect.bottom <= window.innerHeight
    })

    if (initialActiveSection !== -1) {
      setActiveSection(NAVIGATION[initialActiveSection])
    }
  }, [sectionRefs])

  useResponsive({ dependency: [sectionRefs], callback: handleResize })

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
