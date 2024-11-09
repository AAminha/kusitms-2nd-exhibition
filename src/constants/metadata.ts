import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Chemical Synergy - KUSITMS',
  description: '큐시즘 2회 전시회 - Chemical Synergy',
  keywords: ['KUSITMS', 'Chemical Synergy', '2회', '전시회'],
  icons: {
    icon: '/metadata/favicon.svg',
  },
  openGraph: {
    title: 'Chemical Synergy - KUSITMS',
    url: 'https://www.kusitms.com', // TODO: Update this
    description: '큐시즘 2회 전시회 - Chemical Synergy',
    images: [
      {
        url: '/metadata/open-graph.png',
        width: 1200,
        height: 630,
        alt: 'Chemical Synergy - KUSITMS',
      },
    ],
    siteName: 'Chemical Synergy - KUSITMS',
  },
}
