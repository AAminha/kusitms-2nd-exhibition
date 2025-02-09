import React, { useEffect, useRef } from 'react'

import { twMerge } from 'tailwind-merge'

interface FadeInSectionProps {
  children: React.ReactNode
  className?: string
}

export const FadeInSection = ({ children, className }: FadeInSectionProps) => {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const currentRef = ref.current

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-visible')
          }
        })
      },
      {
        threshold: window.matchMedia('(max-width: 960px)').matches ? 0.5 : 0.7,
      }
    )

    if (currentRef) {
      observer.observe(currentRef)
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef)
      }
    }
  }, [])

  return (
    <div ref={ref} className={twMerge('fade-in', className)}>
      {children}
    </div>
  )
}
