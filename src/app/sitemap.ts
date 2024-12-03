import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
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
  ]
}
