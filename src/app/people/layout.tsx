'use client'

import { Suspense } from 'react'

import LayoutContent from '@src/containers/people/LayoutContent'

export default function PeopleLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <Suspense fallback={<p className="mt-[200px] text-center">Loading...</p>}>
      <LayoutContent>{children}</LayoutContent>
    </Suspense>
  )
}
