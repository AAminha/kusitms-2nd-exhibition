import { ProblemIcon, SolutionIcon, TargetIcon } from '@public/icons'

const TYPE = {
  target: <TargetIcon />,
  problem: <ProblemIcon />,
  solution: <SolutionIcon />,
}

interface ServiceCardProps {
  type: 'target' | 'problem' | 'solution'
  content: string
}

export const ServiceCard = ({ type, content }: ServiceCardProps) => {
  return (
    <article className="rounded-lg bg-gray-90 p-4">
      <h4 className="mb-3 flex items-center gap-2 text-b2 font-semibold text-gray-5">
        {TYPE[type]}
        <p>{type.replace(type[0], type[0].toUpperCase())}</p>
      </h4>
      <p className="whitespace-pre-wrap text-b4 font-normal text-gray-30">{content}</p>
    </article>
  )
}
