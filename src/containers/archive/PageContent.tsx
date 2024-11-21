'use client'

import { useEffect, useState } from 'react'

import { redirect, useSearchParams } from 'next/navigation'

import { getProducts, ProductResponse } from '@src/apis/getProducts'
import { ARCHIVE_NAVIGATION } from '@src/constants/archive'
import { Card } from '@src/containers/archive/Card'

export default function ArchivePageContent() {
  const searchParams = useSearchParams()
  const search = searchParams.get('type')
  const [products, setProducts] = useState<ProductResponse[] | null>(null)

  if (search && !ARCHIVE_NAVIGATION.includes(search)) {
    redirect('/archive')
  }

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await getProducts(
        (search || ARCHIVE_NAVIGATION[0]) as keyof typeof ARCHIVE_NAVIGATION
      )
      setProducts(response)
    }

    fetchProducts()
  }, [search])

  return (
    <section className="grid-rows-auto mx-auto grid w-full max-w-[1064px] grid-cols-3 gap-x-4 gap-y-10 py-[140px] mobile:max-w-[600px] mobile:grid-cols-2 mobile:py-[100px] desktop:px-10">
      {products ? (
        products.map((product, index) => <Card key={index} information={product} />)
      ) : (
        <p>Loading...</p>
      )}
    </section>
  )
}
