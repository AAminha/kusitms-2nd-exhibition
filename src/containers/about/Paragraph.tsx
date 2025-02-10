import { twMerge } from 'tailwind-merge'

interface ParagraphProps {
  information: string[]
  className?: string
}

export const Paragraph = ({ information, className }: ParagraphProps) => {
  return (
    <article className={twMerge('flex flex-col gap-4 text-b3 font-normal text-gray-20', className)}>
      {information.map((item, index) => (
        <p key={index}>{item}</p>
      ))}
    </article>
  )
}
