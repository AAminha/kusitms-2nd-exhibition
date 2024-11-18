'use client'

import { useState } from 'react'

import SideMenuLayout from '@src/components/SideMenuLayout'
import { ARCHIVE_NAVIGATION } from '@src/constants/archive'

export default function ArchiveLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const [activeSection, setActiveSection] = useState(ARCHIVE_NAVIGATION[0])
  const onChangeSection = (menu: string) => {
    setActiveSection(menu)
  }

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
