import { DependencyList, useEffect } from 'react'

interface getResponsiveProps {
  dependency?: DependencyList
  isInit?: boolean
  callback: () => void
}

export const useResponsive = ({
  dependency = [],
  isInit = false,
  callback,
}: getResponsiveProps) => {
  useEffect(() => {
    if (isInit) {
      callback()
    }

    window.addEventListener('resize', callback)
    return () => {
      window.removeEventListener('resize', callback)
    }
  }, dependency)
}
