interface GuestBookItemProps {
  content: string
  date: string // Date 타입 변경 가능성
}

export const GuestBookItem = ({ content, date }: GuestBookItemProps) => {
  return (
    <article className="h-fit w-full shrink rounded-xl bg-gray-90 p-4 desktop:max-w-[365px]">
      <p className="mb-2 break-all text-b4 font-medium text-gray-30">{content}</p>
      <p className="float-end text-c1 font-normal text-gray-60">{date}</p>
    </article>
  )
}
