import type { MetadataRoute } from 'next'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const dynamicPaths = await getDynamicPaths()

  return [
    {
      url: 'https://www.chemical-synergy-with-kusitms.com/',
      lastModified: new Date('2024-11-25'),
      changeFrequency: 'always',
      priority: 1,
    },
    {
      url: 'https://www.chemical-synergy-with-kusitms.com/about',
      lastModified: new Date('2024-11-26'),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: 'https://www.chemical-synergy-with-kusitms.com/archive',
      lastModified: new Date('2024-12-02'),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: 'https://www.chemical-synergy-with-kusitms.com/people',
      lastModified: new Date('2024-11-25'),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    ...dynamicPaths,
  ]
}

async function getDynamicPaths() {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/products/all`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })

    if (!response.ok) return []

    const { payload } = await response.json()
    return payload
      .filter((product: { siteUrl: string | null }) => !product.siteUrl)
      .map((product: { productId: number; name: string }) => ({
        url: `https://www.chemical-synergy-with-kusitms.com/archive/${product.productId}-${product.name}`,
        lastModified: new Date('2024-12-02'),
        changeFrequency: 'never',
        priority: 0.5,
      }))
  } catch (error) {
    console.error('Error in getDynamicPaths:', error)
    return []
  }
}
