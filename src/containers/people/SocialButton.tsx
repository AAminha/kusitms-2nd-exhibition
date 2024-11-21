import { BehanceIcon, GithubIcon, InstagramIcon, LinkedinIcon, ServiceIcon } from '@public/icons'

const ICON = {
  github: <GithubIcon className="h-full w-full" />,
  instagram: <InstagramIcon className="h-full w-full" />,
  linkedin: <LinkedinIcon className="h-full w-full" />,
  behance: <BehanceIcon className="h-full w-full" />,
  site: <ServiceIcon className="h-full w-full" />,
}

interface SocialButtonProps {
  type: keyof typeof ICON
  url: string
}

export const SocialButton = ({ type, url }: SocialButtonProps) => {
  return (
    <a
      href={url}
      target="_blank"
      className="flex h-7 w-7 items-center justify-center rounded-full bg-gray-100 p-[6px] sm:h-5 sm:w-5 sm:p-1"
    >
      {ICON[type]}
    </a>
  )
}
