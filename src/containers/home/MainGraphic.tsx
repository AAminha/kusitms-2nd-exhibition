export const MainGraphic = () => {
  return (
    <section className="relative bg-[#020202] py-20">
      <video
        src="/videos/exhibition.mp4"
        autoPlay
        muted
        loop
        className="mx-auto mb-8 max-h-[782px] w-full"
      ></video>
      <div className="bg-home-gradient absolute bottom-0 flex h-[45%] w-full flex-col items-center justify-center">
        <button className="mb-3 mt-[30px] rounded-full bg-primary-2 px-10 py-4 text-b1 font-semibold text-white">
          방명록 남기기
        </button>
        <p className="text-b3 font-normal text-gray-40">
          [전시회 네이밍]에 여러분의 이야기를 들려주세요
        </p>
      </div>
    </section>
  )
}
