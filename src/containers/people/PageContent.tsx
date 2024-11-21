'use client'

import { redirect, useSearchParams } from 'next/navigation'
import useSWR from 'swr'

import { getMemberByType } from '@src/apis/getMemberByType'
import { PEOPLE_NAVIGATION } from '@src/constants/people'
import { Card } from '@src/containers/people/Card'

const fetcher = (type: string) => getMemberByType(type as keyof typeof PEOPLE_NAVIGATION)

export default function PeoplePageContent() {
  const searchParams = useSearchParams()
  const search = searchParams.get('type') || PEOPLE_NAVIGATION[0]
  const cacheKey = `people-${search}`

  if (search && !PEOPLE_NAVIGATION.includes(search)) {
    redirect('/people')
  }

  const { data: members, error } = useSWR(cacheKey, () => fetcher(search), {
    revalidateOnFocus: false,
    dedupingInterval: 60000 * 60,
  })

  if (error) return <p>Failed to load</p>
  if (!members) return <p>Loading...</p>

  return (
    <section className="grid-rows-auto mx-auto grid w-full max-w-[1064px] grid-cols-3 gap-x-4 gap-y-10 py-[140px] mobile:max-w-[600px] mobile:grid-cols-2 mobile:py-[100px] desktop:px-10">
      {members.map((member, index) => (
        <Card key={index} information={member} />
      ))}
    </section>
  )
}
