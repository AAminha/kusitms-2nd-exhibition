import Image from 'next/image'

import { GuestBookResponse } from '@src/apis/getMemberByType'
import { SocialButton } from '@src/containers/people/SocialButton'

interface CardProps {
  information: GuestBookResponse
}

export const Card = ({ information }: CardProps) => {
  return (
    <article className="relative w-full">
      <Image
        src={information.imgUrl}
        alt={information.name}
        width={100}
        height={100}
        className="aspect-square w-full rounded-[8px] bg-gray-90 object-cover object-center-1"
        unoptimized
      />
      <section className="absolute right-4 top-4 flex gap-2 sm:right-2 sm:top-2 sm:gap-1">
        {information.githubUrl && <SocialButton type="github" url={information.githubUrl} />}
        {information.instagramUrl && (
          <SocialButton type="instagram" url={information.instagramUrl} />
        )}
        {information.linkedinUrl && <SocialButton type="linkedin" url={information.linkedinUrl} />}
        {information.behanceUrl && <SocialButton type="behance" url={information.behanceUrl} />}
        {information.siteUrl && <SocialButton type="site" url={information.siteUrl} />}
      </section>
      <section className="mt-3 px-2">
        <h2 className="text-b2 font-semibold text-gray-15">{information.name}</h2>
        <h3 className="text-b4 font-normal text-gray-40">{information.part}</h3>
      </section>
    </article>
  )
}
