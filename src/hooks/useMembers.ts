import useSWR from 'swr'

import { getMembers } from '@src/apis/getMembers'
import { DEDUPING_INTERVAL, MEMBERS_CACHE_KEY } from '@src/constants/api'

export const useMembers = (type: string) => {
  const cacheKey = `${MEMBERS_CACHE_KEY}${type}`
  const { data, error } = useSWR(cacheKey, () => getMembers(type), {
    revalidateOnFocus: false,
    dedupingInterval: DEDUPING_INTERVAL,
  })

  return { members: data, error }
}
