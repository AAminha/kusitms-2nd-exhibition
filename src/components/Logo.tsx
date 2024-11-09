import clsx from 'clsx'
import Link from 'next/link'

import { LogoIcon } from '@public/icons'

interface LogoProps {
  current: string | undefined
  openMenu: boolean
}

const LogoSection = ({ className = '' }: { className?: string }) => {
  return (
    <Link href="/">
      <nav
        className={clsx('cursor-pointer gap-[0.8356rem] text-branding-l leading-[140%]', className)}
      >
        <LogoIcon />
        <p>Chemical Synergy</p>
      </nav>
    </Link>
  )
}

export const Logo = ({ current, openMenu }: LogoProps) => {
  return (
    <h1 className="text-branding-bl font-white">
      {/* desktop 버전 */}
      <LogoSection className="flex mobile:hidden" />
      {/* mobile 버전 */}
      {openMenu ? (
        <LogoSection className="hidden mobile:flex" />
      ) : (
        <nav className="hidden gap-3 mobile:flex">
          <LogoIcon />
          <p className="before:content-[' '] flex items-center before:mr-3 before:inline-block before:h-1.5 before:w-1.5 before:rounded-full before:bg-white">
            {current}
          </p>
        </nav>
      )}
    </h1>
  )
}
