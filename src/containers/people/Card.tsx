import { memo } from 'react'

import Image from 'next/image'

import { ICON, SocialButton } from '@src/components/SocialButton'
import { getPlaceholderDataURL } from '@src/utils/placeholder'

interface CardProps {
  index: number
  information: Member
}

export const Card = memo(({ index, information }: CardProps) => {
  const socialLinks: { type: keyof typeof ICON; url: string | null | undefined }[] = [
    { type: 'github', url: information.githubUrl },
    { type: 'instagram', url: information.instagramUrl },
    { type: 'linkedin', url: information.linkedinUrl },
    { type: 'behance', url: information.behanceUrl },
    { type: 'site', url: information.siteUrl },
  ]

  return (
    <article className="relative w-full">
      <figure className="relative aspect-square w-full overflow-hidden rounded-[8px] bg-gray-90">
        <Image
          src={information.imgUrl}
          alt={information.name}
          sizes="(max-width: 600px) 50vw, (max-width: 1064px) 33vw, 33vw"
          fill
          loading={index >= 6 ? 'lazy' : undefined}
          quality={85}
          priority={index < 6}
          className="w-full object-cover object-center-1 transition-opacity"
          placeholder="blur"
          blurDataURL={getPlaceholderDataURL()}
        />
      </figure>
      <section className="absolute right-4 top-4 flex gap-2 sm:right-2 sm:top-2 sm:gap-1">
        {socialLinks.map(
          (link) =>
            link.url && <SocialButton key={link.type} type={link.type} url={link.url} primary />
        )}
      </section>
      <section className="mt-3 px-2">
        <h2 className="text-b2 font-semibold text-gray-15">{information.name}</h2>
        <h3 className="text-b4 font-normal text-gray-40">{information.part}</h3>
      </section>
    </article>
  )
})

Card.displayName = 'Card'
