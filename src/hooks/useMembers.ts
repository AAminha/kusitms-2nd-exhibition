import useSWR from 'swr'

import { getMembers } from '@src/apis/getMembers'
import { PEOPLE_NAVIGATION } from '@src/constants/people'

export const useMembers = (type: string) => {
  const cacheKey = `people-${type}`
  const { data, error } = useSWR(
    cacheKey,
    () => getMembers(type as keyof typeof PEOPLE_NAVIGATION),
    {
      revalidateOnFocus: false,
      dedupingInterval: 60000 * 60,
    }
  )

  return { members: data, error }
}
