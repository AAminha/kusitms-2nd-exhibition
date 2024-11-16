'use client'

import { useEffect, useRef, useState } from 'react'

import SideMenuLayout from '@src/components/SideMenuLayout'
import { useAboutSectionRef } from '@src/contexts/AboutSectionRefContext'

const NAVIGATION = ['VISUALITY', 'INFORMATION', 'PROGRAM']

// TODO: 메뉴 클릭 시 스크롤 & 스크롤 위치 감지해서 메뉴 활성화
export default function AboutLayout({
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

  useEffect(() => {
    const handleResize = () => {
      observer.current?.disconnect() // 기존 관찰 중단
      sectionRefs.current.forEach((ref) => {
        if (ref) observer.current?.observe(ref) // 다시 관찰 시작
      })
    }

    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
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
