import { Card } from '@src/containers/archive/Card'

export default function ArchivePage() {
  return (
    <section className="grid-rows-auto mx-auto grid w-full max-w-[1064px] grid-cols-3 gap-x-4 gap-y-10 py-[140px] mobile:max-w-[600px] mobile:grid-cols-2 mobile:py-[100px] desktop:px-10">
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </section>
  )
}
