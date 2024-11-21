'use client'

import { useEffect, useState } from 'react'

import { useRouter, useSearchParams } from 'next/navigation'

import SideMenuLayout from '@src/components/SideMenuLayout'
import { PEOPLE_NAVIGATION } from '@src/constants/people'

export default function PeopleLayoutContent({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [activeSection, setActiveSection] = useState(PEOPLE_NAVIGATION[0])

  useEffect(() => {
    const type = searchParams.get('type') || 'ALL'
    setActiveSection(type.toUpperCase())
  }, [searchParams])

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
