interface CardProps {
  name: string
  description: string
}

export const Card = ({ name, description }: CardProps) => {
  return (
    <article className="relative w-full">
      <div className="aspect-video rounded-[8px] bg-gray-80" />
      <section className="mt-2 px-2">
        <h2 className="text-b2 font-semibold text-gray-15">{name}</h2>
        <h3 className="text-b4 font-normal text-gray-40">{description}</h3>
      </section>
    </article>
  )
}
