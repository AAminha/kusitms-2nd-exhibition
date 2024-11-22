import clsx from 'clsx'

import { CardSkeleton } from '@src/containers/archive/CardSkeleton'
import { helvetica } from '@src/styles/font'

export default function ArchivePreviewPage() {
  const today = new Date()
  const target = new Date(2024, 12 - 1, 2)
  const difference = target.getTime() - today.getTime()
  const dday = Math.ceil(difference / (1000 * 60 * 60 * 24))

  return (
    <main className="max-w-1440 relative mx-auto h-screen overflow-hidden px-6 py-[140px] mobile:max-w-[800px] mobile:py-[100px] desktop:px-10">
      <div className="grid-rows-auto grid w-full grid-cols-3 gap-x-4 gap-y-10 blur-[3px] mobile:grid-cols-2">
        {Array.from({ length: 9 }).map((_, index) => (
          <CardSkeleton key={index} />
        ))}
      </div>
      <div className="absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] p-2 text-center">
        <h2 className={clsx('mb-4 text-[2rem] font-medium', helvetica.className)}>Comming Soon</h2>
        <h2 className={clsx('text-[5rem] font-bold', helvetica.className)}>D-{dday}</h2>
      </div>
    </main>
  )
}
