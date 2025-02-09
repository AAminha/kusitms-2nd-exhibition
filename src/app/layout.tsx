import { Metadata } from 'next'

import { Header } from '@src/components/Header'
import { baseMetadata } from '@src/constants/metadata'
import { AboutSectionRefProvider } from '@src/contexts/AboutSectionRefContext'
import { GuestBookProvider } from '@src/contexts/GuestBookContext'
import { pretendard } from '@src/styles/font'
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
      <body className="bg-gray-100 text-white">
        <GuestBookProvider>
          <AboutSectionRefProvider>
            <Header />
            {children}
          </AboutSectionRefProvider>
        </GuestBookProvider>
        {/* <MicrosoftClarity /> */}
      </body>
    </html>
  )
}
