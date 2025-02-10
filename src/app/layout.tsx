import { Metadata } from 'next'

import { Header } from '@src/components/Header'
import MicrosoftClarity from '@src/components/MicrosoftClarity'
import { baseMetadata } from '@src/constants/metadata'
import { AboutSectionRefProvider } from '@src/contexts/AboutSectionRefContext'
import { GuestBookProvider } from '@src/contexts/GuestBookContext'
import { pretendard } from '@src/styles/font'
import { SpeedInsights } from '@vercel/speed-insights/next'

import '@src/styles/globals.css'

export async function generateMetadata(): Promise<Metadata> {
  return baseMetadata
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ko" className={pretendard.className}>
      <MicrosoftClarity />
      <body className="bg-gray-100 text-white">
        <GuestBookProvider>
          <AboutSectionRefProvider>
            <Header />
            {children}
          </AboutSectionRefProvider>
        </GuestBookProvider>
        <SpeedInsights />
      </body>
    </html>
  )
}
