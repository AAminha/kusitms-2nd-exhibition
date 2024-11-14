import { Header } from '@src/components/Header'
import { metadata } from '@src/constants/metadata'
import { SectionRefProvider } from '@src/containers/about/SectionRefContext'
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
        <SectionRefProvider>
          <Header />
          {children}
        </SectionRefProvider>
      </body>
    </html>
  )
}
