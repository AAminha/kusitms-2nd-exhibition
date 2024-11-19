'use client'

import { Suspense, useEffect, useState } from 'react'

import { useRouter, useSearchParams } from 'next/navigation'

import SideMenuLayout from '@src/components/SideMenuLayout'
import { PEOPLE_NAVIGATION } from '@src/constants/people'

export default function PeopleLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const router = useRouter()
  const searchParams = useSearchParams()
  const type = searchParams.get('type') || 'ALL'
  const [activeSection, setActiveSection] = useState(type)

  useEffect(() => {
    setActiveSection(type)
  }, [type])

  const onChangeSection = (menu: string) => {
    setActiveSection(menu)
    router.push(`/people?type=${menu}`)
  }

  return (
    <Suspense fallback={<p className="mt-[200px] text-center">Loading...</p>}>
      <SideMenuLayout
        sectionList={PEOPLE_NAVIGATION}
        activeSection={activeSection}
        onChangeSection={onChangeSection}
      >
        {children}
      </SideMenuLayout>
    </Suspense>
  )
}
