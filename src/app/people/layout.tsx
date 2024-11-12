'use client'

import { useState } from 'react'

import SideMenuLayout from '@src/components/SideMenuLayout'

const NAVIGATION = ['ALL', 'TF TEAM', 'PARTICIPANTS', 'OTHERS']

// TODO: 메뉴 클릭 시 스크롤 & 스크롤 위치 감지해서 메뉴 활성화
export default function PeopleLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const [activeSection, setActiveSection] = useState('ALL')
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
