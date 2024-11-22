import { Chip } from '@src/containers/detail/Chip'
import { MemberCard } from '@src/containers/detail/MemberCard'

const TEMP = {
  teamName: 'A팀',
  generation: '30th',
  origin: 'MEET-UP',
  description:
    '서비스한줄소개입니다서비스한줄소개입니다서비스한줄소개입니다서비스한줄소개입니다서비스한줄소개입니다서비스한줄소개입니다서비스한줄소개입니다서비스한줄소개입니다서비스한줄소개입니다서비스한줄소개입니다서비스한줄소개입니다서비스한줄소개입니다서비스한줄소개입니다서비스한줄소개입니다서비스한줄소개입니다서비스한줄소개입니다서비스한줄소개입니다서비스한줄소개입니다서비스한줄소개입니다서비스한줄소개입니다서비스한줄소개입니다서비스한줄소개입니다',
  memberInfos: [
    {
      name: '홍길동',
      imgUrl: 'https://img.url/1',
      part: 'Planner',
      instagramUrl: null,
      linkedinUrl: 'https://linkedin.com/example1',
      githubUrl: 'https://github.com/example1',
      behanceUrl: null,
    },
    {
      name: '김철수',
      imgUrl: 'https://img.url/2',
      part: 'Designer',
      instagramUrl: 'https://instagram.com/example2',
      linkedinUrl: null,
      githubUrl: null,
      behanceUrl: 'https://behance.net/example2',
    },
    {
      name: '홍길동',
      imgUrl: 'https://img.url/3',
      part: 'Planner',
      instagramUrl: null,
      linkedinUrl: 'https://linkedin.com/example1',
      githubUrl: 'https://github.com/example1',
      behanceUrl: null,
    },
    {
      name: '홍길동',
      imgUrl: 'https://img.url/4',
      part: 'PM / Planner',
      instagramUrl: null,
      linkedinUrl: 'https://linkedin.com/example1',
      githubUrl: 'https://github.com/example1',
      behanceUrl: null,
    },
  ],
}

interface MemberProps {
  serviceId: string
}

export const Member = ({ serviceId }: MemberProps) => {
  // TODO: serviceId를 이용해 팀 정보를 가져오기
  console.log(serviceId)
  return (
    <section>
      <h2 className="mb-2 text-h2 font-semibold text-gray-5 mobile:mb-3">
        <span className="text-primary-2">{TEMP.teamName}</span> 팀을 만나보세요!
      </h2>
      <section className="flex gap-4 mobile:flex-col mobile:gap-1 desktop:items-center">
        <p className="text-b3 font-medium text-gray-5 mobile:text-c1">Originated from</p>
        <hr className="mx-1 h-4 w-[1px] rounded-sm border-none bg-gray-50 mobile:hidden" />
        <div className="flex gap-3">
          <Chip primary>{`KUSITMS ${TEMP.generation}`}</Chip>
          <Chip>{TEMP.origin}</Chip>
        </div>
      </section>
      <p className="mb-6 mt-8 text-b4 font-normal text-gray-20 mobile:mb-8">{TEMP.description}</p>
      <section className="grid-rows-auto grid-col-max-260 grid grid-cols-4 gap-3">
        {TEMP.memberInfos.map((memberInfo) => (
          <MemberCard key={memberInfo.imgUrl} information={memberInfo} />
        ))}
      </section>
    </section>
  )
}
