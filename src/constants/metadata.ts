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
    url: 'https://www.chemical-synergy-with-kusitms.com',
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
    type: 'website',
    locale: 'ko_KR',
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
  },
}
