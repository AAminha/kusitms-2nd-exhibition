import { getProductDetail } from '@src/apis/getProductDetail'
import useSWR from 'swr'

export const useProductDetail = (productId: string) => {
  const cacheKey = `archive-detail-service-${productId}`
  const { data, error } = useSWR(cacheKey, () => getProductDetail(productId), {
    revalidateOnFocus: false,
    dedupingInterval: 60000 * 60,
  })

  return { product: data, error }
}
