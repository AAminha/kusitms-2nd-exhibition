import { DependencyList, useEffect } from 'react'

interface getResponsiveProps {
  dependency?: DependencyList
  callback: () => void
}

export const useResponsive = ({ dependency = [], callback }: getResponsiveProps) => {
  useEffect(() => {
    window.addEventListener('resize', callback)
    return () => {
      window.removeEventListener('resize', callback)
    }
  }, dependency)
}
