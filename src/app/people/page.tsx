import { Suspense } from 'react'

import PeoplePageContent from '@src/containers/people/PageContent'

export default function PeoplePage() {
  return (
    <Suspense fallback={<p className="py-[140px] text-center mobile:py-[100px]">Loading...</p>}>
      <PeoplePageContent />
    </Suspense>
  )
}
