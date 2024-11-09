import { Footer } from '@src/components/Footer'
import { Catchphrase } from '@src/containers/home/Catchphrase'
import { GuestBook } from '@src/containers/home/GuestBook'
import { Keyword } from '@src/containers/home/Keyword'
import { MainGraphic } from '@src/containers/home/MainGraphic'

export default function Home() {
  return (
    <>
      <MainGraphic />
      <Catchphrase />
      <Keyword />
      <GuestBook />
      <Footer />
    </>
  )
}
