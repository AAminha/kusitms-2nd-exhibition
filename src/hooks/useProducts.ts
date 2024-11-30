import useSWR from 'swr'

import { getProducts } from '@src/apis/getProducts'
import { DEDUPING_INTERVAL, PRODUCTS_CACHE_KEY } from '@src/constants/api'

export const useProducts = (type: string) => {
  const cacheKey = `${PRODUCTS_CACHE_KEY}${type}`
  const { data, error } = useSWR(cacheKey, () => getProducts(type), {
    revalidateOnFocus: false,
    dedupingInterval: DEDUPING_INTERVAL,
  })

  return { products: data, error }
}
