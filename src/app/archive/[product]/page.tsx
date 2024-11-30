import { Suspense } from 'react'

import { Comment } from '@src/containers/detail/Comment'
import { Service } from '@src/containers/detail/Service'
import { Team } from '@src/containers/detail/Team'

export default function ArchiveDetailPage({ params }: Readonly<{ params: { product: string } }>) {
  const productId = params.product.split('-')[0]

  return (
    <main className="mx-auto flex max-w-[1168px] flex-col gap-20 pt-[140px]">
      <Suspense fallback={<p>Loading...</p>}>
        <Service productId={productId} />
        <Team productId={productId} />
        <Comment productId={productId} />
      </Suspense>
    </main>
  )
}
