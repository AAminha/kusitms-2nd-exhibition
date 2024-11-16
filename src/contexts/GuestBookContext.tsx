'use client'

import { createContext, useContext, useRef, useState } from 'react'

interface GuestBookContextType {
  isPost: boolean
  guestbookRef: React.MutableRefObject<HTMLElement | null>
  moveToGuestBook: () => void
  resetPostState: () => void
}

export const GuestBookContext = createContext<GuestBookContextType | null>(null)

export const GuestBookProvider = ({ children }: { children: React.ReactNode }) => {
  const guestbookRef = useRef<HTMLElement | null>(null)
  const [isPost, setIsPost] = useState(false)

  const moveToGuestBook = () => {
    if (guestbookRef.current) {
      const top = guestbookRef.current.getBoundingClientRect().top + window.scrollY - 100
      window.scrollTo({
        top,
        behavior: 'smooth',
      })
      setIsPost(true)
    }
  }

  const resetPostState = () => {
    setIsPost(false)
  }

  return (
    <GuestBookContext.Provider value={{ isPost, guestbookRef, moveToGuestBook, resetPostState }}>
      {children}
    </GuestBookContext.Provider>
  )
}

export const useGuestBook = () => {
  const context = useContext(GuestBookContext)
  if (!context) {
    throw new Error()
  }
  return context
}
