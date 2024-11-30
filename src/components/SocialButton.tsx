import clsx from 'clsx'

import { BehanceIcon, GithubIcon, InstagramIcon, LinkedinIcon, ServiceIcon } from '@public/icons'

export const ICON = {
  github: <GithubIcon className="h-4 w-4" />,
  instagram: <InstagramIcon className="h-4 w-4" />,
  linkedin: <LinkedinIcon className="h-4 w-4" />,
  behance: <BehanceIcon className="h-4 w-4" />,
  site: <ServiceIcon className="h-4 w-4" />,
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
      rel="noopener noreferrer"
      className={clsx(
        'flex h-7 w-7 items-center justify-center rounded-full p-[6px]',
        primary ? 'bg-gray-100 sm:h-5 sm:w-5 sm:p-1' : 'bg-gray-80'
      )}
    >
      {ICON[type]}
    </a>
  )
}
