'use client'

import { useEffect, useState } from 'react'

import { MasonryGrid } from '@egjs/react-grid'
import { getGuestBook } from '@src/apis/getGuestBook'
import { FadeInSection } from '@src/components/FadeInSection'
import { GuestBookItem } from '@src/components/GuestBookItem'
import { Pagination } from '@src/components/Pagination'
import { SectionTitle } from '@src/components/SectionTitle'
import { useGuestBook } from '@src/contexts/GuestBookContext'
import { useResponsive } from '@src/hooks/useResponsive'

export const GuestBook = () => {
  const { isPost, guestbookRef, resetPostState } = useGuestBook()
  const [page, setPage] = useState(1)
  const [totalPage, setTotalPage] = useState(1)
  const [guestBooks, setGuestBooks] = useState<Comment[]>([])
  const [isMobile, setIsMobile] = useState(false)

  const fetchGuestBook = async () => {
    try {
      const data = await getGuestBook(page)
      setTotalPage(data.totalPageCount)
      setGuestBooks(data.comments)
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

  useResponsive({ isInit: true, callback: handleResize })

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
      <FadeInSection className="min-h-72 w-full max-w-[1120px]">
        <SectionTitle title="방명록" subtitle="내 방명록을 남기면 아래에서 확인할 수 있어요" />
        {guestBooks.length === 0 ? (
          <p className="mt-4 rounded-xl bg-gray-90 p-4 text-center text-b3 font-medium text-gray-40">
            아직 남겨진 방명록이 없어요! 1등으로 방명록을 남겨주실래요?
          </p>
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
              <GuestBookItem key={index} content={item.content} date={item.createdAt} />
            ))}
          </MasonryGrid>
        )}
        {guestBooks.length > 0 && (
          <Pagination currentPage={page} setPage={handleChangePage} totalPages={totalPage} />
        )}
      </FadeInSection>
    </section>
  )
}
