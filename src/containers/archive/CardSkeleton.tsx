export const CardSkeleton = () => {
  return (
    <article className="relative w-full">
      <div className="aspect-video rounded-[8px] bg-gray-90" />
      <section className="mt-2 px-1">
        <h2 className="mb-2 h-[20px] w-[35%] min-w-[90px] bg-gray-90 text-b2 font-semibold text-gray-15"></h2>
        <h3 className="h-[20px] w-[70%] min-w-[100px] bg-gray-90 text-b4 font-normal text-gray-40"></h3>
      </section>
    </article>
  )
}
