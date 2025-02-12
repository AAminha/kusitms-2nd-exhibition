import type { MetadataRoute } from 'next'

import { getProducts } from '@src/apis/getProducts'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const dynamicPaths = await getDynamicPaths()

  return [
    {
      url: 'https://www.chemical-synergy-with-kusitms.com/',
      lastModified: new Date('2024-11-25'),
      changeFrequency: 'always' as const,
      priority: 1,
    },
    {
      url: 'https://www.chemical-synergy-with-kusitms.com/about',
      lastModified: new Date('2024-11-26'),
      changeFrequency: 'never' as const,
      priority: 0.5,
    },
    {
      url: 'https://www.chemical-synergy-with-kusitms.com/archive',
      lastModified: new Date('2024-12-02'),
      changeFrequency: 'never' as const,
      priority: 0.5,
    },
    {
      url: 'https://www.chemical-synergy-with-kusitms.com/people',
      lastModified: new Date('2024-11-25'),
      changeFrequency: 'never' as const,
      priority: 0.5,
    },
    ...dynamicPaths,
  ]
}

async function getDynamicPaths() {
  try {
    const response = await getProducts()
    return response
      .filter((product) => !product.siteUrl)
      .map((product) => ({
        url: `https://www.chemical-synergy-with-kusitms.com/archive/${product.productId}-${product.name}`,
        lastModified: new Date('2024-12-02'),
        changeFrequency: 'always' as const,
        priority: 0.5,
      }))
  } catch (error) {
    console.error('Error in getDynamicPaths:', error)
    return []
  }
}
