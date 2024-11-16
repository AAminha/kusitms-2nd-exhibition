import { Header } from '@src/components/Header'
import { metadata } from '@src/constants/metadata'
import { AboutSectionRefProvider } from '@src/contexts/AboutSectionRefContext'
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
        <AboutSectionRefProvider>
          <Header />
          {children}
        </AboutSectionRefProvider>
      </body>
    </html>
  )
}
