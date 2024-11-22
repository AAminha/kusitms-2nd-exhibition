import { SocialButton } from '@src/components/SocialButton'

interface MemberCardProps {
  information: {
    name: string
    imgUrl: string
    part: string
    instagramUrl: string | null
    linkedinUrl: string | null
    githubUrl: string | null
    behanceUrl: string | null
  }
}

export const MemberCard = ({ information }: MemberCardProps) => {
  return (
    <article className="flex min-w-fit items-center justify-between rounded-lg bg-gray-90 py-[9px] pl-3 pr-[14px]">
      <div className="flex items-center gap-3">
        {/* TODO: 이미지 삽입 */}
        <div className="h-14 w-14 rounded-full bg-gray-10" />
        <div>
          <p className="mb-[2px] text-b3 font-semibold text-gray-5">{information.name}</p>
          <p className="text-c1 font-normal text-gray-40">{information.part}</p>
        </div>
      </div>
      <div className="flex gap-2">
        <SocialButton type="github" url={information.githubUrl} />
        <SocialButton type="instagram" url={information.instagramUrl} />
        <SocialButton type="linkedin" url={information.linkedinUrl} />
        <SocialButton type="behance" url={information.behanceUrl} />
      </div>
    </article>
  )
}
