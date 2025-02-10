import { Metadata } from 'next'

import AboutLayoutContent from '@src/containers/about/LayoutContent'

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'ABOUT',
  }
}

export default function AboutLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return <AboutLayoutContent>{children}</AboutLayoutContent>
}
