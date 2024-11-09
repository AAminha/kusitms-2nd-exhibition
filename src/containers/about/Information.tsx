import { SectionTitle } from '@src/containers/about/SectionTitle'
import { ZONE_INFORMATION } from '@src/containers/about/constant'

export const Information = () => {
  return (
    <section className="my-24">
      <SectionTitle title={ZONE_INFORMATION.title} subtitle={ZONE_INFORMATION.subtitle} />
      <div className="mt-[60px] h-[417px] w-full bg-gray-70" />
    </section>
  )
}
