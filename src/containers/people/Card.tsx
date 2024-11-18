import Image from 'next/image'

import { BehanceIcon, GithubIcon, InstagramIcon, LinkedinIcon } from '@public/icons'
import { GuestBookResponse } from '@src/apis/getMemberByType'

interface CardProps {
  information: GuestBookResponse
}

export const Card = ({ information }: CardProps) => {
  return (
    <article className="relative w-full">
      <Image
        src={encodeURI(information.imgUrl)}
        alt={information.name}
        width={100}
        height={100}
        className="aspect-square rounded-[8px]"
        unoptimized
      />
      <section className="absolute right-[16px] top-[16px] flex gap-2">
        {information.githubUrl && (
          <a
            href={information.githubUrl}
            target="_blank"
            className="flex h-7 w-7 items-center justify-center rounded-full bg-gray-100"
          >
            <GithubIcon />
          </a>
        )}
        {information.instagramUrl && (
          <a
            href={information.instagramUrl}
            target="_blank"
            className="flex h-7 w-7 items-center justify-center rounded-full bg-gray-100"
          >
            <InstagramIcon width={16} height={16} />
          </a>
        )}
        {information.linkedinUrl && (
          <a
            href={information.linkedinUrl}
            target="_blank"
            className="flex h-7 w-7 items-center justify-center rounded-full bg-gray-100"
          >
            <LinkedinIcon />
          </a>
        )}
        {information.behanceUrl && (
          <a
            href={information.behanceUrl}
            target="_blank"
            className="flex h-7 w-7 items-center justify-center rounded-full bg-gray-100"
          >
            <BehanceIcon />
          </a>
        )}
      </section>
      <section className="mt-3 px-2">
        <h2 className="text-b2 font-semibold text-gray-15">{information.name}</h2>
        <h3 className="text-b4 font-normal text-gray-40">{information.part}</h3>
      </section>
    </article>
  )
}
