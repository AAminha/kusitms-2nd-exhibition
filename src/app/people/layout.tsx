import { Suspense } from 'react'

import { Metadata } from 'next'

import PeopleLayoutContent from '@src/containers/people/LayoutContent'

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'PEOPLE',
  }
}

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
