'use client'

import { createContext, useContext, useRef } from 'react'

interface GuestBookContextType {
  guestbookRef: React.MutableRefObject<HTMLElement | null>
  moveToGuestBook: () => void
}

export const GuestBookContext = createContext<GuestBookContextType | null>(null)

export const GuestBookProvider = ({ children }: { children: React.ReactNode }) => {
  const guestbookRef = useRef<HTMLElement | null>(null)

  const moveToGuestBook = () => {
    if (guestbookRef.current) {
      const top = guestbookRef.current.getBoundingClientRect().top + window.scrollY - 100
      window.scrollTo({
        top,
        behavior: 'smooth',
      })
    }
  }

  return (
    <GuestBookContext.Provider value={{ guestbookRef, moveToGuestBook }}>
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
