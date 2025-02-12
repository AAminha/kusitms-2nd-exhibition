import Image from 'next/image'
import Link from 'next/link'

interface CardProps {
  information: Product
}

export const Card = ({ information }: CardProps) => {
  const linkContent = (
    <article className="relative w-full">
      <figure className="relative aspect-video w-full overflow-hidden rounded-[8px] bg-gray-90">
        <Image
          src={information.thumbnailUrl}
          alt={information.name}
          sizes="50vw"
          fill
          priority
          className="w-full object-cover object-center"
        />
      </figure>
      <section className="mt-2 px-2">
        <h2 className="text-b2 font-semibold text-gray-15">{information.name}</h2>
        <h3 className="text-b4 font-normal text-gray-40">{information.introduction}</h3>
      </section>
    </article>
  )

  return information.siteUrl ? (
    <a href={information.siteUrl} target="_blank" rel="noopener noreferrer">
      {linkContent}
    </a>
  ) : (
    <Link href={`/archive/${information.productId}-${information.name}`}>{linkContent}</Link>
  )
}
