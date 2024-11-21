'use client'

import { useEffect, useState } from 'react'

import { redirect, useSearchParams } from 'next/navigation'

import { getMemberByType, GuestBookResponse } from '@src/apis/getMemberByType'
import { PEOPLE_NAVIGATION } from '@src/constants/people'
import { Card } from '@src/containers/people/Card'

export default function PeoplePageContent() {
  const searchParams = useSearchParams()
  const search = searchParams.get('type')
  const [members, setMembers] = useState<GuestBookResponse[] | null>(null)

  if (search && !PEOPLE_NAVIGATION.includes(search)) {
    redirect('/people')
  }

  useEffect(() => {
    const fetchMembers = async () => {
      const response = await getMemberByType(
        (search || PEOPLE_NAVIGATION[0]) as keyof typeof PEOPLE_NAVIGATION
      )
      setMembers(response)
    }

    fetchMembers()
  }, [search])

  return (
    <section className="grid-rows-auto mx-auto grid w-full max-w-[1064px] grid-cols-3 gap-x-4 gap-y-10 py-[140px] mobile:max-w-[600px] mobile:grid-cols-2 mobile:py-[100px] desktop:px-10">
      {members ? (
        members.map((member, index) => <Card key={index} information={member} />)
      ) : (
        <p>Loading...</p>
      )}
    </section>
  )
}
