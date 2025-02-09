import { redirect } from 'next/navigation'

import { getProducts } from '@src/apis/getProducts'
import { ARCHIVE_NAVIGATION } from '@src/constants/archive'
import { Card } from '@src/containers/archive/Card'

interface ArchivePageProps {
  searchParams: { type?: string }
}

export default function ArchivePage({ searchParams }: ArchivePageProps) {
  const products = getProducts()
  const type = searchParams.type ?? ARCHIVE_NAVIGATION[0]

  if (!ARCHIVE_NAVIGATION.includes(type)) {
    redirect('/archive')
  }

  const filteredProducts = type
    ? products.filter((product) => product.type.includes(type.toLowerCase()))
    : products

  return (
    <section className="grid-rows-auto mx-auto grid w-full max-w-[1064px] grid-cols-3 gap-x-4 gap-y-10 py-[140px] mobile:max-w-[600px] mobile:grid-cols-1 mobile:py-[100px] desktop:px-10">
      {filteredProducts.map((product) => (
        <Card key={product.productId} information={product} />
      ))}
    </section>
  )
}
