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
        'font-white fixed left-0 top-0 z-50 h-[100px] w-full text-branding-b1',
        openMenu ? 'bg-gray-100' : 'bg-desktop-header-gradient'
      )}
    >
      <section className="mx-auto flex h-full w-full max-w-[1440px] items-center justify-between pl-20 pr-[88px] mobile:px-[24px]">
        <Logo
          current={NAVIGATION.find((nav) => nav.path === pathname)?.title}
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
                    pathname === path &&
                      'text-white before:absolute before:left-[50%] before:top-[-6px] before:h-1.5 before:w-1.5 before:translate-x-[-50%] before:rounded-full before:bg-white'
                  )}
                >
                  {title}
                </nav>
              </Link>
            </li>
          ))}
        </ul>
        {openMenu ? (
          <CloseIcon className="cursor-pointer" onClick={() => setOpenMenu(false)} role="button" />
        ) : (
          <MenuIcon
            width={28}
            height={28}
            strokeWidth={1.5}
            className="hidden cursor-pointer mobile:block"
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
      </section>
    </header>
  )
}
