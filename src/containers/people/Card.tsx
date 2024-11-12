import { GithubIcon, InstagramIcon } from '@public/icons'

interface CardProps {
  information: {
    name: string
    role: string
    github?: string
    instagram?: string
  }
}

export const Card = ({ information = { name: '', role: '' } }: CardProps) => {
  return (
    <article className="relative w-full">
      <div className="aspect-square rounded-[8px] bg-gray-80" />
      <section className="absolute right-[16px] top-[16px] flex gap-2">
        {information.github && (
          <a
            href={information.github}
            target="_blank"
            className="flex h-7 w-7 items-center justify-center rounded-full bg-gray-100"
          >
            <GithubIcon />
          </a>
        )}
        {information.instagram && (
          <a
            href={information.instagram}
            target="_blank"
            className="flex h-7 w-7 items-center justify-center rounded-full bg-gray-100"
          >
            <InstagramIcon width={16} height={16} />
          </a>
        )}
      </section>
      <section className="mt-3 px-2">
        <h2 className="text-b2 font-semibold text-gray-15">{information.name}</h2>
        <h3 className="text-b4 font-normal text-gray-40">{information.role}</h3>
      </section>
    </article>
  )
}
