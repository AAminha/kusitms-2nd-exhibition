interface GuestBookItemProps {
  content: string
  date: string
}

export const GuestBookItem = ({ content, date }: GuestBookItemProps) => {
  return (
    <article className="h-fit w-full shrink rounded-xl bg-gray-90 p-4">
      <p className="mb-2 whitespace-pre-wrap break-all text-b4 font-medium text-gray-30">
        {content}
      </p>
      <p className="float-end text-c1 font-normal text-gray-60">{date}</p>
    </article>
  )
}
