'use client'

import { useEffect, useState } from 'react'

import clsx from 'clsx'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { CloseIcon, MenuIcon } from '@public/icons'
import { Logo } from '@src/components/Logo'
import { helvetica } from '@src/styles/font'

const NAVIGATION: { [key: string]: string }[] = [
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
        'font-white fixed left-0 top-0 z-50 h-[100px] w-full text-branding-b1',
        openMenu ? 'bg-gray-100' : 'bg-desktop-header-gradient'
      )}
    >
      <section className="max-w-1440 flex h-full items-center justify-between pl-20 pr-[88px] mobile:px-6">
        <Logo
          current={
            NAVIGATION.find((nav) => pathname === nav.path || pathname.startsWith(`${nav.path}/`))
              ?.title
          }
          openMenu={openMenu}
        />
        {/* desktop 버전 메뉴 */}
        <ul className="flex h-full items-center gap-4 text-gray-50 mobile:hidden">
          {NAVIGATION.map(({ title, path }) => (
            <li key={title}>
              <Link href={path}>
                <nav
                  className={clsx(
                    'relative w-24 text-center',
                    (pathname === path || pathname.startsWith(`${path}/`)) &&
                      'text-white before:absolute before:left-[50%] before:top-[-6px] before:h-1.5 before:w-1.5 before:translate-x-[-50%] before:rounded-full before:bg-white'
                  )}
                >
                  {title}
                </nav>
              </Link>
            </li>
          ))}
        </ul>
        {/* mobile 버전 메뉴 */}
        {openMenu ? (
          <CloseIcon
            className="hidden cursor-pointer mobile:block"
            onClick={() => setOpenMenu(false)}
            role="button"
          />
        ) : (
          <MenuIcon
            className="hidden cursor-pointer mobile:block"
            onClick={() => setOpenMenu(true)}
            role="button"
          />
        )}
        <section
          className={clsx(
            'absolute inset-0 top-[100px] hidden h-[calc(100vh-100px)] w-full flex-col gap-2 bg-mobile-header-gradient px-6 py-10 text-gray-50 mobile:flex',
            openMenu ? 'mobile:opacity-100' : 'pointer-events-none mobile:opacity-0',
            'duration-200 mobile:transition-opacity'
          )}
        >
          {NAVIGATION.map(({ title, path }) => (
            <Link key={title} href={path}>
              <nav
                className={clsx(
                  'relative mb-2 mt-[11px] w-fit text-center',
                  (pathname === path || pathname.startsWith(`${path}/`)) &&
                    'text-white before:absolute before:right-[-14px] before:top-[50%] before:h-1.5 before:w-1.5 before:translate-y-[-50%] before:rounded-full before:bg-white'
                )}
              >
                {title}
              </nav>
            </Link>
          ))}
        </section>
      </section>
    </header>
  )
}
