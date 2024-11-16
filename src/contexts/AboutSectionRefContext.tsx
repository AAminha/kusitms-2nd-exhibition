'use client'

import { createContext, useContext, useRef } from 'react'

interface AboutSectionRefContextType {
  sectionRefs: React.MutableRefObject<(HTMLElement | null)[]>
  moveToSection: (index: number) => void
}

export const AboutSectionRefContext = createContext<AboutSectionRefContextType | null>(null)

export const AboutSectionRefProvider = ({ children }: { children: React.ReactNode }) => {
  const sectionRefs = useRef<(HTMLElement | null)[]>([])
  const moveToSection = (index: number) => {
    const element = sectionRefs.current[index]
    if (element) {
      const top =
        element.getBoundingClientRect().top +
        window.scrollY +
        (window.matchMedia('(max-width: 960px)').matches ? -80 : 0)
      window.scrollTo({
        top,
        behavior: 'smooth',
      })
    }
  }
  return (
    <AboutSectionRefContext.Provider value={{ sectionRefs, moveToSection }}>
      {children}
    </AboutSectionRefContext.Provider>
  )
}

export const useAboutSectionRef = () => {
  const context = useContext(AboutSectionRefContext)
  if (!context) {
    throw new Error('useSectionRef must be used within a SectionRefProvider')
  }
  return context
}
