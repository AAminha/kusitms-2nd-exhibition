'use client'

import { useEffect, useState } from 'react'

import clsx from 'clsx'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { CloseIcon, MenuIcon } from '@public/icons'
import { Logo } from '@src/components/Logo'
import { helvetica } from '@src/styles/font'

const NAVIGATION = [
  { title: 'HOME', path: '/' },
  { title: 'ABOUT', path: '/about' },
  { title: 'ARCHIVE', path: '/archive' },
  { title: 'PEOPLE', path: '/people' },
]

export const Header = () => {
  const pathname = usePathname()
  const [openMenu, setOpenMenu] = useState(false)

  useEffect(() => {
    setOpenMenu(false)
  }, [pathname])

  return (
    <header
      className={clsx(
        helvetica.className,
        'text-branding-b1 font-white mobile:px-6 relative flex h-[100px] items-center justify-between pl-20 pr-[88px]',
        openMenu ? 'bg-gray-100' : 'bg-desktop-header-gradient'
      )}
    >
      <Logo current={NAVIGATION.find((nav) => nav.path === pathname)?.title} openMenu={openMenu} />
      {/* desktop 버전 메뉴 */}
      <section className="mobile:hidden flex h-full items-center gap-4 text-gray-50">
        {NAVIGATION.map(({ title, path }) => (
          <Link key={title} href={path}>
            <nav
              className={clsx(
                'relative w-24 text-center',
                pathname === path &&
                  'text-white before:absolute before:left-[50%] before:top-[-6px] before:h-1.5 before:w-1.5 before:translate-x-[-50%] before:rounded-full before:bg-white'
              )}
            >
              {title}
            </nav>
          </Link>
        ))}
      </section>
      {openMenu ? (
        <CloseIcon className="cursor-pointer" onClick={() => setOpenMenu(false)} role="button" />
      ) : (
        <MenuIcon
          width={28}
          height={28}
          strokeWidth={1.5}
          className="mobile:block hidden cursor-pointer"
          onClick={() => setOpenMenu(true)}
          role="button"
        />
      )}
      {openMenu && (
        <section className="absolute inset-0 top-[100px] flex h-[calc(100vh-100px)] w-full flex-col gap-[22px] bg-mobile-header-gradient px-6 py-10 text-gray-50">
          {NAVIGATION.map(({ title, path }) => (
            <Link key={title} href={path}>
              <nav
                className={clsx(
                  'relative w-fit text-center',
                  pathname === path &&
                    'text-white before:absolute before:right-[-14px] before:top-[50%] before:h-1.5 before:w-1.5 before:translate-y-[-50%] before:rounded-full before:bg-white'
                )}
              >
                {title}
              </nav>
            </Link>
          ))}
        </section>
      )}
    </header>
  )
}
