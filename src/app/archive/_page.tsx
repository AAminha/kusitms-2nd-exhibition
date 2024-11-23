import { Suspense } from 'react'

import ArchivePageContent from '@src/containers/archive/PageContent'

export default function ArchivePage() {
  return (
    <Suspense fallback={<p className="py-[140px] mobile:py-[100px]">Loading...</p>}>
      <ArchivePageContent />
    </Suspense>
  )
}
