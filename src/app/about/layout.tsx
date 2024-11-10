'use client'

import { useState } from 'react'

import SideMenuLayout from '@src/components/SideMenuLayout'

const NAVIGATION = ['VISUALITY', 'INFORMATION', 'PROGRAM']

// TODO: 메뉴 클릭 시 스크롤 & 스크롤 위치 감지해서 메뉴 활성화
export default function AboutLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const [activeSection, setActiveSection] = useState('VISUALITY')
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
