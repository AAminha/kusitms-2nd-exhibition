import { Suspense } from 'react'

import { DefaultButton } from '@src/components/DefaultButton'
import { FloatingMenu } from '@src/containers/home/FloatingMenu'

interface MainGraphicProps {
  onOpen: () => void
}

export const MainGraphic = ({ onOpen }: MainGraphicProps) => {
  return (
    <section className="relative bg-[#040404] py-[60px] mobile:mt-[-120px] sm:pb-[120px] desktop:mt-[-200px]">
      <FloatingMenu />
      <Suspense fallback={<p>Loading video...</p>}>
        <video
          src="/videos/exhibition.mp4"
          poster="/videos/thumbnail.webp"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="max-h-[782px] w-full"
          title="Chemical Synergy Exhibition Video"
        ></video>
      </Suspense>
      <div className="absolute bottom-0 flex h-[35%] w-full flex-col items-center justify-end bg-home-gradient">
        <DefaultButton
          type="button"
          onClick={onOpen}
          className="mb-3 rounded-full px-10 py-4 text-b1 mobile:px-7 mobile:py-2 mobile:text-b3"
        >
          방명록 남기기
        </DefaultButton>
        <p className="mb-[100px] text-center text-b3 font-normal text-gray-40 mobile:mb-8 sm:whitespace-pre-wrap">
          {'Chemical Synergy 에\n여러분의 이야기를 들려주세요'}
        </p>
      </div>
    </section>
  )
}
