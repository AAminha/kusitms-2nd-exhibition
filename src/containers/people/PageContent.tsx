'use client'

import { redirect, useSearchParams } from 'next/navigation'

import { PEOPLE_NAVIGATION } from '@src/constants/people'
import { Card } from '@src/containers/people/Card'
import { useMembers } from '@src/hooks/useMembers'

export default function PeoplePageContent() {
  const searchParams = useSearchParams()
  const search = searchParams.get('type') || PEOPLE_NAVIGATION[0]

  if (search && !PEOPLE_NAVIGATION.includes(search)) {
    redirect('/people')
  }

  const { members, error } = useMembers(search)

  return (
    <section className="grid-rows-auto mx-auto grid w-full max-w-[1064px] grid-cols-3 gap-x-4 gap-y-10 py-[140px] mobile:max-w-[600px] mobile:grid-cols-2 mobile:py-[100px] desktop:px-10">
      {error && <p>Failed to load</p>}
      {!members && !error && <p>Loading...</p>}
      {members && members.map((member, index) => <Card key={index} information={member} />)}
    </section>
  )
}
