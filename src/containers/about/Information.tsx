import { SectionTitle } from '@src/components/SectionTitle'
import { ZONE_INFORMATION } from '@src/constants/about'

export const Information = () => {
  return (
    <section className="py-[115px]">
      <SectionTitle title={ZONE_INFORMATION.title} subtitle={ZONE_INFORMATION.subtitle} />
      <div className="mt-[60px] flex h-[417px] w-full items-center justify-center bg-gray-70">
        도면 들어갈 예정
      </div>
    </section>
  )
}
