import { LogoIcon } from '@public/icons'

interface LogoProps {
  current: string | undefined
  openMenu: boolean
}

const LogoSection = ({ className = '' }: { className?: string }) => {
  return (
    <section className={`text-branding-l gap-[0.8356rem] ${className}`}>
      <LogoIcon />
      <p>Chemical Synergy</p>
    </section>
  )
}

export const Logo = ({ current, openMenu }: LogoProps) => {
  return (
    <h1 className="text-branding-bl font-white">
      {/* desktop 버전 */}
      <LogoSection className="mobile:hidden flex" />
      {/* mobile 버전 */}
      {openMenu ? (
        <LogoSection className="mobile:flex hidden" />
      ) : (
        <section className="mobile:flex hidden gap-3">
          <LogoIcon />
          <p className="before:content-[' '] flex items-center before:mr-3 before:inline-block before:h-1.5 before:w-1.5 before:rounded-full before:bg-white">
            {current}
          </p>
        </section>
      )}
    </h1>
  )
}
