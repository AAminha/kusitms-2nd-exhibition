import { CardSkeleton } from '@src/containers/archive/CardSkeleton'

export default function ArchivePreviewPage() {
  const today = new Date()
  today.setHours(0, 0, 0, 0)

  const targetDate = new Date(2024, 12 - 1, 2)
  targetDate.setHours(0, 0, 0, 0)

  const dday = Math.floor((targetDate.getTime() - today.getTime()) / (1000 * 60 * 60 * 24))

  return (
    <main className="max-w-1440 relative mx-auto h-screen overflow-hidden px-6 py-[140px] mobile:max-w-[800px] mobile:py-[100px] desktop:px-10">
      <div className="grid-rows-auto grid w-full grid-cols-3 gap-x-4 gap-y-10 blur-md mobile:grid-cols-2">
        {Array.from({ length: 9 }).map((_, index) => (
          <CardSkeleton key={index} />
        ))}
      </div>
      <div className="absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] text-center">
        <h2 className="text-[1.875rem] font-medium">Comming Soon</h2>
        <h2 className="text-[5rem] font-bold">D-{dday}</h2>
        {/* <h2 className="text-[1.5rem] font-medium">프로젝트는 추후 아카이빙 될 예정입니다.</h2> */}
      </div>
    </main>
  )
}
