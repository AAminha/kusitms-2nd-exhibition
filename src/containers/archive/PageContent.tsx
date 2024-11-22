'use client'

import { redirect, useSearchParams } from 'next/navigation'
import useSWR from 'swr'

import { getProducts } from '@src/apis/getProducts'
import { ARCHIVE_NAVIGATION } from '@src/constants/archive'
import { Card } from '@src/containers/archive/Card'

const fetcher = (type: string) => getProducts(type as keyof typeof ARCHIVE_NAVIGATION)

export default function ArchivePageContent() {
  const searchParams = useSearchParams()
  const search = searchParams.get('type') || ARCHIVE_NAVIGATION[0]
  const cacheKey = `archive-${search}`

  if (search && !ARCHIVE_NAVIGATION.includes(search)) {
    redirect('/archive')
  }

  const { data: products, error } = useSWR(cacheKey, () => fetcher(search), {
    revalidateOnFocus: false,
    dedupingInterval: 60000 * 60,
  })

  return (
    <section className="grid-rows-auto mx-auto grid w-full max-w-[1064px] grid-cols-3 gap-x-4 gap-y-10 py-[140px] mobile:max-w-[600px] mobile:grid-cols-1 mobile:py-[100px] desktop:px-10">
      {error && <p>Failed to load</p>}
      {!products && !error && <p>Loading...</p>}
      {products && products.map((product, index) => <Card key={index} information={product} />)}
    </section>
  )
}