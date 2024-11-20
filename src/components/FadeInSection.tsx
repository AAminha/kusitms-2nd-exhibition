import React, { useEffect, useRef } from 'react'

import clsx from 'clsx'

interface FadeInSectionProps {
  children: React.ReactNode
  className?: string
}

export const FadeInSection = ({ children, className }: FadeInSectionProps) => {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
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

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [])

  return (
    <div ref={ref} className={clsx('fade-in', className)}>
      {children}
    </div>
  )
}
