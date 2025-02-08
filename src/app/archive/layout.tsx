'use client'

import { useEffect, useState } from 'react'

import { usePathname, useRouter, useSearchParams } from 'next/navigation'

import SideMenuLayout from '@src/components/SideMenuLayout'
import { ARCHIVE_NAVIGATION } from '@src/constants/archive'

export default function ArchiveLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const [activeSection, setActiveSection] = useState(ARCHIVE_NAVIGATION[0])

  useEffect(() => {
    const type = searchParams.get('type') || 'ALL'
    setActiveSection(type.toUpperCase())
  }, [searchParams])

  const onChangeSection = (menu: string) => {
    setActiveSection(menu)
    router.push(`/archive?type=${menu}`)
  }

  if (pathname !== '/archive') return children

  return (
    <SideMenuLayout
      sectionList={ARCHIVE_NAVIGATION}
      activeSection={activeSection}
      onChangeSection={onChangeSection}
    >
      {children}
    </SideMenuLayout>
  )
}
