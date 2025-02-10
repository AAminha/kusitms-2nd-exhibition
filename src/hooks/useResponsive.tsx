import { DependencyList, useCallback, useEffect } from 'react'

interface useResponsiveProps {
  dependency?: DependencyList
  isInit?: boolean
  callback: () => void
}

export const useResponsive = ({
  dependency = [],
  isInit = false,
  callback,
}: useResponsiveProps) => {
  const memoizedCallback = useCallback(callback, [...dependency])

  useEffect(() => {
    if (isInit) {
      memoizedCallback()
    }

    window.addEventListener('resize', memoizedCallback)

    return () => {
      window.removeEventListener('resize', memoizedCallback)
    }
  }, [memoizedCallback, isInit])
}
