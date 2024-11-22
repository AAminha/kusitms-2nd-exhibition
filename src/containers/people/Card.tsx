import Image from 'next/image'

import { MemberResponse } from '@src/apis/getMembers'
import { SocialButton } from '@src/components/SocialButton'

interface CardProps {
  information: MemberResponse
}

export const Card = ({ information }: CardProps) => {
  return (
    <article className="relative w-full">
      <figure className="relative aspect-square w-full overflow-hidden rounded-[8px] bg-gray-90">
        <Image
          src={information.imgUrl}
          alt={information.name}
          sizes="40vw"
          fill
          loading="lazy"
          quality={85} // 이게 최대
          className="w-full object-cover object-center-1"
        />
      </figure>
      <section className="absolute right-4 top-4 flex gap-2 sm:right-2 sm:top-2 sm:gap-1">
        <SocialButton type="github" url={information.githubUrl} primary />
        <SocialButton type="instagram" url={information.instagramUrl} primary />
        <SocialButton type="linkedin" url={information.linkedinUrl} primary />
        <SocialButton type="behance" url={information.behanceUrl} primary />
        <SocialButton type="site" url={information.siteUrl ?? null} primary />
      </section>
      <section className="mt-3 px-2">
        <h2 className="text-b2 font-semibold text-gray-15">{information.name}</h2>
        <h3 className="text-b4 font-normal text-gray-40">{information.part}</h3>
      </section>
    </article>
  )
}
