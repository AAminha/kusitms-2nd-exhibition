import { Suspense } from 'react'

import { Metadata } from 'next'

import ArchiveLayoutContent from '@src/containers/archive/LayoutContent'

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'ARCHIVE',
  }
}

export default function ArchiveLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <ArchiveLayoutContent>{children}</ArchiveLayoutContent>
    </Suspense>
  )
}
