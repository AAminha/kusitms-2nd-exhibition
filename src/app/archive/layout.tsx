import { Suspense } from 'react'

import ArchiveLayoutContent from '@src/containers/archive/LayoutContent'

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
