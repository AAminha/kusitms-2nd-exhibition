'use client'

import { useEffect, useState } from 'react'

import { MasonryGrid } from '@egjs/react-grid'
import { getGuestBook } from '@src/apis/getGuestBook'
import { Pagination } from '@src/components/Pagination'
import { SectionTitle } from '@src/components/SectionTitle'
import { GuestBookItem } from '@src/containers/home/GuestBookItem'
import { useGuestBook } from '@src/contexts/GuestBookContext'
import { useResponsive } from '@src/hooks/useResponsive'

export const GuestBook = () => {
  const { isPost, guestbookRef, resetPostState } = useGuestBook()
  const [page, setPage] = useState(1)
  const [totalPage, setTotalPage] = useState(1)
  const [guestBooks, setGuestBooks] = useState<{ content: string; createdDate: string }[]>([])
  const [isMobile, setIsMobile] = useState(false)

  const fetchGuestBook = async () => {
    try {
      const guestBook = await getGuestBook(page)
      setTotalPage(guestBook.totalPageCount)
      setGuestBooks(guestBook.guestBooks)
    } catch (error) {
      console.error(error)
    }
  }

  const handleChangePage = (page: number) => {
    if (page < 1) setPage(1)
    else if (page > totalPage) setPage(totalPage)
    else setPage(page)
  }

  const handleResize = () => {
    setIsMobile(window.matchMedia('(max-width: 960px)').matches)
  }

  useResponsive({ callback: handleResize })

  useEffect(() => {
    fetchGuestBook()
  }, [page])

  useEffect(() => {
    if (isPost) {
      resetPostState()
      if (page === 1) fetchGuestBook()
      else setPage(1)
    }
  }, [isPost])

  return (
    <section
      ref={guestbookRef}
      className="max-w-1440 mb-[223px] mt-[140px] flex flex-col items-center px-[50px] mobile:my-[100px]"
    >
      <div className="w-full max-w-[1120px]">
        <SectionTitle title="방명록" subtitle="내 방명록을 남기면 아래에서 확인할 수 있어요" />
        {guestBooks.length === 0 ? (
          <section>
            <p className="pt-24 text-center">아직 등록된 방문록이 없습니다.</p>
          </section>
        ) : (
          <MasonryGrid
            className="mb-10 mt-5"
            gap={12}
            column={isMobile ? 1 : 3}
            align={'stretch'}
            useResizeObserver={true}
            observeChildren={true}
          >
            {guestBooks.map((item, index) => (
              <GuestBookItem key={index} content={item.content} date={item.createdDate} />
            ))}
          </MasonryGrid>
        )}
        {guestBooks.length > 0 && (
          <Pagination currentPage={page} setPage={handleChangePage} totalPages={totalPage} />
        )}
      </div>
    </section>
  )
}
