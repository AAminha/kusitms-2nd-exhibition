import clsx from 'clsx'

interface ParagraphProps {
  information: string[]
  className?: string
}

export const Paragraph = ({ information, className }: ParagraphProps) => {
  return (
    <article className={clsx('flex flex-col gap-4 text-b3 font-normal text-gray-20', className)}>
      {information.map((item, index) => (
        <p key={index}>{item}</p>
      ))}
    </article>
  )
}
