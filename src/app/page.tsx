'use client'

import { useState } from 'react'

import { Dialog } from '@src/components/Dialog'
import { Footer } from '@src/components/Footer'
import { Catchphrase } from '@src/containers/home/Catchphrase'
import { FloatingMenu } from '@src/containers/home/FloatingMenu'
import { GuestBook } from '@src/containers/home/GuestBook'
import { Keyword } from '@src/containers/home/Keyword'
import { MainGraphic } from '@src/containers/home/MainGraphic'

export default function Home() {
  const [openModal, setOpenModal] = useState(false)

  const handleOpen = () => {
    setOpenModal(true)
  }

  const handleClose = () => {
    setOpenModal(false)
  }

  return (
    <>
      <Dialog open={openModal} onClose={handleClose} />
      <FloatingMenu />
      <MainGraphic onOpen={handleOpen} />
      <Catchphrase />
      <Keyword />
      <GuestBook />
      <Footer />
    </>
  )
}
