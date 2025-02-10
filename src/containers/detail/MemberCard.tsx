import Image from 'next/image'

import { ICON, SocialButton } from '@src/components/SocialButton'

interface MemberCardProps {
  information: ProductMember
}

export const MemberCard = ({ information }: MemberCardProps) => {
  const socialLinks: { type: keyof typeof ICON; url: string | null | undefined }[] = [
    { type: 'github', url: information.githubUrl },
    { type: 'instagram', url: information.instagramUrl },
    { type: 'linkedin', url: information.linkedinUrl },
    { type: 'behance', url: information.behanceUrl },
  ]

  return (
    <article className="flex min-w-fit items-center justify-between rounded-lg bg-gray-90 py-[9px] pl-3 pr-[14px]">
      <div className="flex items-center gap-3">
        <figure className="relative h-14 w-14 overflow-hidden rounded-full bg-gray-90">
          <Image
            src={information.imgUrl}
            alt={information.name}
            sizes="56px"
            fill
            quality={85}
            className="object-cover object-center-1"
          />
        </figure>
        <div>
          <p className="mb-[2px] text-b3 font-semibold text-gray-5">{information.name}</p>
          <p className="text-c1 font-normal text-gray-40">{information.part}</p>
        </div>
      </div>
      <div className="flex gap-2">
        {socialLinks.map(
          (link) => link.url && <SocialButton key={link.type} type={link.type} url={link.url} />
        )}
      </div>
    </article>
  )
}
