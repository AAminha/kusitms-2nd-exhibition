'use client'

import { redirect, useSearchParams } from 'next/navigation'

import { ARCHIVE_NAVIGATION } from '@src/constants/archive'
import { Card } from '@src/containers/archive/Card'
import { useProducts } from '@src/hooks/useProducts'

export default function ArchivePageContent() {
  const searchParams = useSearchParams()
  const search = searchParams.get('type') || ARCHIVE_NAVIGATION[0]

  if (search && !ARCHIVE_NAVIGATION.includes(search)) {
    redirect('/archive')
  }

  const { products, error } = useProducts(search)

  if (error) return <p className="py-[140px] mobile:py-[100px]">Failed to load</p>

  return (
    <section className="grid-rows-auto mx-auto grid w-full max-w-[1064px] grid-cols-3 gap-x-4 gap-y-10 py-[140px] mobile:max-w-[600px] mobile:grid-cols-1 mobile:py-[100px] desktop:px-10">
      {products && products.map((product, index) => <Card key={index} information={product} />)}
    </section>
  )
}
