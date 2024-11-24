import { FadeInSection } from '@src/components/FadeInSection'

export const Catchphrase = () => {
  return (
    <section className="relative flex h-[900px] items-center mobile:h-[600px]">
      <div className="absolute inset-0 z-10 h-full w-full bg-home-gradient" />
      <div className="flex h-[341px] w-full flex-col items-center justify-center bg-gray-90">
        <FadeInSection>
          <p className="mb-2 text-h2 font-normal text-gray-40 mobile:text-b3">
            KUSITMS 제 2회 전시회
          </p>
          <h2 className="text-center text-xl font-bold text-gray-5 mobile:text-h1 mobile:font-semibold">
            결합과 반응,
            <br />
            그리고 완성의 순간
          </h2>
        </FadeInSection>
      </div>
    </section>
  )
}
