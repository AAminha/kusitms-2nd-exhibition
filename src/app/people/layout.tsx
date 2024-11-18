'use client'

import { useState } from 'react'

import { useRouter } from 'next/navigation'

import SideMenuLayout from '@src/components/SideMenuLayout'
import { PEOPLE_NAVIGATION } from '@src/constants/people'

export default function PeopleLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const [activeSection, setActiveSection] = useState(PEOPLE_NAVIGATION[0])
  const router = useRouter()

  const onChangeSection = (menu: string) => {
    setActiveSection(menu)
    router.push(`/people?type=${menu}`)
  }

  return (
    <SideMenuLayout
      sectionList={PEOPLE_NAVIGATION}
      activeSection={activeSection}
      onChangeSection={onChangeSection}
    >
      {children}
    </SideMenuLayout>
  )
}
