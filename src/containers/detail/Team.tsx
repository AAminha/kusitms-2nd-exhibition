import { getProductMembers } from '@src/apis/getProductMembers'
import { getTeamInformation } from '@src/apis/getTeamInformation'
import { Chip } from '@src/containers/detail/Chip'
import { MemberCard } from '@src/containers/detail/MemberCard'

interface TeamProps {
  productId: string
}

export const Team = async ({ productId }: TeamProps) => {
  const information = await getTeamInformation(productId)
  const members = await getProductMembers(productId)

  return (
    <section className="mb-5 px-6">
      <h2 className="mb-2 text-h2 font-semibold text-gray-5 sm:mb-3">
        <span className="text-primary-2">{information.teamName}</span> 팀을 만나보세요!
      </h2>
      <section className="flex items-center gap-4 mobile:items-start sm:flex-col sm:gap-1">
        <p className="text-b3 font-medium text-gray-5 sm:text-c1">Originated from</p>
        <hr className="mx-1 h-4 w-[1px] rounded-sm border-none bg-gray-50 sm:hidden" />
        <div className="flex gap-3">
          <Chip primary>{information.generation}</Chip>
          <Chip>{information.origin}</Chip>
        </div>
      </section>
      <p className="mb-6 mt-8 whitespace-pre-wrap text-b4 font-normal text-gray-20 sm:mb-8">
        {information.description}
      </p>
      <section className="grid-rows-auto grid-col-max-260 grid grid-cols-4 gap-3">
        {members.map((member) => (
          <MemberCard key={member.id} information={member} />
        ))}
      </section>
    </section>
  )
}
