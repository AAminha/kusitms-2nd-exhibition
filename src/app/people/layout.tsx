'use client'

import { useState } from 'react'

import SideMenuLayout from '@src/components/SideMenuLayout'

const NAVIGATION = ['ALL', 'TF TEAM', 'PARTICIPANTS', 'OTHERS']

export default function PeopleLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const [activeSection, setActiveSection] = useState(NAVIGATION[0])
  const onChangeSection = (menu: string) => {
    setActiveSection(menu)
  }

  return (
    <SideMenuLayout
      sectionList={NAVIGATION}
      activeSection={activeSection}
      onChangeSection={onChangeSection}
    >
      {children}
    </SideMenuLayout>
  )
}
