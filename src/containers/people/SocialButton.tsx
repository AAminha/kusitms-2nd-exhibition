import { BehanceIcon, GithubIcon, InstagramIcon, LinkedinIcon } from '@public/icons'

const ICON = {
  github: <GithubIcon />,
  instagram: <InstagramIcon width={16} height={16} className="h-full w-full" />,
  linkedin: <LinkedinIcon />,
  behance: <BehanceIcon />,
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
