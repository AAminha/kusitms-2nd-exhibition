import { getTeamInformation } from '@src/apis/getTeamInformation'
import useSWR from 'swr'

export const useTeamInformation = (productId: string) => {
  const cacheKey = `people-team-${productId}`
  const { data, error } = useSWR(cacheKey, () => getTeamInformation(productId), {
    revalidateOnFocus: false,
    dedupingInterval: 60000 * 60,
  })

  return { information: data, error }
}
