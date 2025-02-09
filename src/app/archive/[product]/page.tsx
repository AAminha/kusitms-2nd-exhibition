import { Metadata } from 'next'

import { getProductDetail } from '@src/apis/getProductDetail'
import { baseMetadata } from '@src/constants/metadata'
import { Comment } from '@src/containers/detail/Comment'
import { Service } from '@src/containers/detail/Service'
import { Team } from '@src/containers/detail/Team'

export async function generateMetadata({
  params,
}: Readonly<{ params: { product: string } }>): Promise<Metadata> {
  const productId = params.product.split('-')[0]
  const product = await getProductDetail(productId)

  return {
    ...baseMetadata,
    title: `${product.shortName || product.name} | Chemical Synergy`,
    description: product.introduction,
    openGraph: {
      ...baseMetadata.openGraph,
      title: `${product.shortName || product.name} | Chemical Synergy`,
      url: `https://www.chemical-synergy-with-kusitms.com/archive/${params.product}`,
      description: product.introduction,
      images: [
        {
          url: product.thumbnailUrl,
          width: 1200,
          height: 630,
          alt: product.name,
        },
      ],
    },
  }
}

export default function ArchiveDetailPage({ params }: Readonly<{ params: { product: string } }>) {
  const productId = params.product.split('-')[0]

  return (
    <main className="mx-auto flex max-w-[1168px] flex-col gap-20 pt-[140px]">
      <Service productId={productId} />
      <Team productId={productId} />
      <Comment productId={productId} />
    </main>
  )
}
