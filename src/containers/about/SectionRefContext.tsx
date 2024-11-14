'use client'

import { createContext, useContext, useRef } from 'react'

interface SectionRefContextType {
  sectionRefs: React.MutableRefObject<(HTMLElement | null)[]>
  moveToSection: (index: number) => void
}

export const SectionRefContext = createContext<SectionRefContextType | null>(null)

export const SectionRefProvider = ({ children }: { children: React.ReactNode }) => {
  const sectionRefs = useRef<(HTMLElement | null)[]>([])
  const moveToSection = (index: number) => {
    const element = sectionRefs.current[index]
    if (element) {
      const top =
        element.getBoundingClientRect().top +
        window.scrollY +
        (window.matchMedia('(max-width: 960px)').matches ? -30 : 0)
      window.scrollTo({
        top,
        behavior: 'smooth',
      })
    }
  }
  return (
    <SectionRefContext.Provider value={{ sectionRefs, moveToSection }}>
      {children}
    </SectionRefContext.Provider>
  )
}

export const useSectionRef = () => {
  const context = useContext(SectionRefContext)
  if (!context) {
    throw new Error('useSectionRef must be used within a SectionRefProvider')
  }
  return context
}
