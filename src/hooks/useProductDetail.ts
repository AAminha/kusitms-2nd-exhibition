import useSWR from 'swr'

import { getProductDetail } from '@src/apis/getProductDetail'
import { DEDUPING_INTERVAL, PRODUCT_DETAIL_CACHE_KEY } from '@src/constants/api'

export const useProductDetail = (productId: string) => {
  const cacheKey = `${PRODUCT_DETAIL_CACHE_KEY}${productId}`
  const { data, error } = useSWR(cacheKey, () => getProductDetail(productId), {
    revalidateOnFocus: false,
    dedupingInterval: DEDUPING_INTERVAL,
  })

  return { product: data, error }
}
