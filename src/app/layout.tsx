import { Header } from '@src/components/Header'
import MicrosoftClarity from '@src/components/MicrosoftClarity'
import { metadata } from '@src/constants/metadata'
import { AboutSectionRefProvider } from '@src/contexts/AboutSectionRefContext'
import { GuestBookProvider } from '@src/contexts/GuestBookContext'
import { pretendard } from '@src/styles/font'

import '@src/styles/globals.css'

export { metadata }

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
        <MicrosoftClarity />
      </body>
    </html>
  )
}
