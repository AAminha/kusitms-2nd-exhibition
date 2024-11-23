'use client'

import { Chip } from '@src/containers/detail/Chip'
import { MemberCard } from '@src/containers/detail/MemberCard'
import { useTeamInformation } from '@src/hooks/useTeamInformation'

interface TeamProps {
  productId: string
}

export const Team = ({ productId }: TeamProps) => {
  const { information, error } = useTeamInformation(productId)

  if (error)
    return (
      <section className="px-6">
        <p>Failed to load</p>
      </section>
    )

  if (information)
    return (
      <section className="mb-5 px-6">
        <h2 className="mb-2 text-h2 font-semibold text-gray-5 mobile:mb-3">
          <span className="text-primary-2">{information.teamName}</span> 팀을 만나보세요!
        </h2>
        <section className="flex gap-4 mobile:flex-col mobile:gap-1 desktop:items-center">
          <p className="text-b3 font-medium text-gray-5 mobile:text-c1">Originated from</p>
          <hr className="mx-1 h-4 w-[1px] rounded-sm border-none bg-gray-50 mobile:hidden" />
          <div className="flex gap-3">
            <Chip primary>{information.generation}</Chip>
            <Chip>{information.origin}</Chip>
          </div>
        </section>
        <p className="mb-6 mt-8 text-b4 font-normal text-gray-20 mobile:mb-8">
          {information.description}
        </p>
        <section className="grid-rows-auto grid-col-max-260 grid grid-cols-4 gap-3">
          {information.memberInfos.map((memberInfo) => (
            <MemberCard key={memberInfo.imgUrl} information={memberInfo} />
          ))}
        </section>
      </section>
    )
}
