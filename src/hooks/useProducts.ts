import useSWR from 'swr'

import { getProducts } from '@src/apis/getProducts'
import { ARCHIVE_NAVIGATION } from '@src/constants/archive'

export const useProducts = (type: string) => {
  const cacheKey = `archive-${type}`
  const { data, error } = useSWR(
    cacheKey,
    () => getProducts(type as keyof typeof ARCHIVE_NAVIGATION),
    {
      revalidateOnFocus: false,
      dedupingInterval: 60000 * 60,
    }
  )

  return { products: data, error }
}
