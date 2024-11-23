import { InstagramIcon, ServiceIcon } from '@public/icons'
import { ServiceCard } from '@src/containers/detail/ServiceCard'

const TEMP = {
  name: 'A팀 서비스명 A팀 서비스명 A팀 서비스명',
  category: 'A팀 카테고리',
  introduction: 'A팀 한줄 소개',
  description: 'A팀 상세 설명',
  thumbnailUrl: 'https://thumbnail.url/a',
  instagramUrl: 'https://instagram.url/a',
  serviceUrl: 'https://service.url/a',
  target: 'A팀 타겟',
  problem: 'A팀 문제',
  solution: 'A팀 해결책',
}

interface ServiceProps {
  serviceId: string
}

export const Service = ({ serviceId }: ServiceProps) => {
  console.log(serviceId)
  return (
    <section className="">
      <section className="mb-6 flex flex-wrap justify-between gap-x-20 gap-y-3">
        <div>
          <div className="mb-1 flex flex-wrap-reverse items-center gap-x-6 gap-y-1">
            <h2 className="text-l font-semibold text-gray-5 mobile:text-h2">{TEMP.name}</h2>
            <p className="h-fit w-fit rounded-xl bg-primary-1 px-3 py-[6px] text-b3 font-semibold text-white mobile:text-c1">
              {TEMP.category}
            </p>
          </div>
          <h3 className="text-b1 font-normal text-gray-30 mobile:text-b3">{TEMP.introduction}</h3>
        </div>
        <div className="flex gap-4">
          <a
            href={TEMP.instagramUrl}
            target="_blank"
            className="flex h-[52px] w-[52px] items-center justify-center rounded-full bg-gray-90 p-[6px]"
          >
            <InstagramIcon width={24} height={24} />
          </a>
          <a
            href={TEMP.serviceUrl}
            target="_blank"
            className="flex h-[52px] w-[52px] items-center justify-center rounded-full bg-gray-90 p-[6px]"
          >
            <ServiceIcon width={24} height={24} />
          </a>
        </div>
      </section>
      <div className="w-full overflow-hidden rounded-lg bg-gray-90">
        <div className="mx-auto aspect-video bg-gray-80 desktop:max-w-[731px]" />
      </div>
      <p className="mt-6 text-b3 font-normal text-gray-20">{TEMP.description}</p>
      <section className="grid-rows-auto mt-10 grid grid-cols-3 gap-3 mobile:grid-cols-1">
        <ServiceCard type="target" content={TEMP.target} />
        <ServiceCard type="problem" content={TEMP.problem} />
        <ServiceCard type="solution" content={TEMP.solution} />
      </section>
    </section>
  )
}
