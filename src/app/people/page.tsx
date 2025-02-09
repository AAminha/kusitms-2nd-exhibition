import { redirect } from 'next/navigation'

import { getMembers } from '@src/apis/getMembers'
import { PEOPLE_NAVIGATION, PEOPLE_TYPE } from '@src/constants/people'
import { Card } from '@src/containers/people/Card'

interface PeoplePageProps {
  searchParams: { type?: string }
}

export default async function PeoplePage({ searchParams }: PeoplePageProps) {
  const members = await getMembers()
  const type = searchParams.type ?? PEOPLE_NAVIGATION[0]

  if (!PEOPLE_NAVIGATION.includes(type)) {
    redirect('/people')
  }

  const filteredMembers = type
    ? members.filter((member) => member.types.includes(PEOPLE_TYPE[type]))
    : members

  return (
    <section className="grid-rows-auto mx-auto grid w-full max-w-[1064px] grid-cols-3 gap-x-4 gap-y-10 py-[140px] mobile:max-w-[600px] mobile:grid-cols-2 mobile:py-[100px] desktop:px-10">
      {filteredMembers.map((member, index) => (
        <Card key={member.imgUrl} index={index} information={member} />
      ))}
    </section>
  )
}
