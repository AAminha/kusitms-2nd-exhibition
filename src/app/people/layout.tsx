import { Suspense } from 'react'

import PeopleLayoutContent from '@src/containers/people/LayoutContent'

export default function PeopleLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <PeopleLayoutContent>{children}</PeopleLayoutContent>
    </Suspense>
  )
}
