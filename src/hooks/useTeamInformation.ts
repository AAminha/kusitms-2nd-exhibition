import useSWR from 'swr'

import { getTeamInformation } from '@src/apis/getTeamInformation'
import { DEDUPING_INTERVAL, TEAM_INFORMATION_CACHE_KEY } from '@src/constants/api'

export const useTeamInformation = (productId: string) => {
  const cacheKey = `${TEAM_INFORMATION_CACHE_KEY}${productId}`
  const { data, error } = useSWR(cacheKey, () => getTeamInformation(productId), {
    revalidateOnFocus: false,
    dedupingInterval: DEDUPING_INTERVAL,
  })

  return { information: data, error }
}
