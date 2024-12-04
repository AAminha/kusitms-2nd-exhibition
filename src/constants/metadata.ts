import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Chemical Synergy - KUSITMS',
  description: '큐시즘 2회 전시회 - Chemical Synergy',
  metadataBase: new URL('https://www.chemical-synergy-with-kusitms.com'),
  alternates: {
    canonical: '/',
  },
  keywords: [
    '큐시즘',
    '전시회',
    '전시',
    'Chemical Synergy',
    'KUSITMS',
    '한국대학생IT경영학회',
    '2회',
  ],
  icons: {
    icon: [
      {
        url: '/metadata/favicon-96x96.png',
        sizes: '96x96',
        type: 'image/png',
      },
      {
        url: '/metadata/favicon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: [
      {
        url: '/metadata/favicon-180x180.png',
        sizes: '180x180',
      },
    ],
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
