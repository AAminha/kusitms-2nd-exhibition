import clsx from 'clsx'

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
  url: string | null
  primary?: boolean
}

export const SocialButton = ({ type, url, primary = false }: SocialButtonProps) => {
  if (!url) return null

  return (
    <a
      href={url}
      target="_blank"
      className={clsx(
        'flex h-7 w-7 items-center justify-center rounded-full p-[6px]',
        primary ? 'bg-gray-100 sm:h-5 sm:w-5 sm:p-1' : 'bg-gray-80'
      )}
    >
      {ICON[type]}
    </a>
  )
}
