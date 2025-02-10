import { useEffect, useState } from 'react'

import { twMerge } from 'tailwind-merge'

import {
  ArrowLeftIcon,
  ArrowRightIcon,
  DoubleArrowLeftIcon,
  DoubleArrowRightIcon,
} from '@public/icons'
import { useResponsive } from '@src/hooks/useResponsive'

interface PaginationProps {
  currentPage: number
  setPage: (page: number) => void
  totalPages: number
}

export const Pagination = ({ currentPage, setPage, totalPages }: PaginationProps) => {
  const [limit, setLimit] = useState(10)
  const [pages, setPages] = useState<number[]>([])

  const updateLIMIT = () => {
    if (window.matchMedia('(max-width: 425px)').matches) {
      setLimit(3)
    } else if (window.matchMedia('(max-width: 960px)').matches) {
      setLimit(5)
    } else {
      setLimit(10)
    }
  }

  useResponsive({ isInit: true, callback: updateLIMIT })

  useEffect(() => {
    const start = Math.floor((currentPage - 1) / limit) * limit + 1
    const end = start + limit - 1 > totalPages ? totalPages : start + limit - 1

    setPages(Array.from({ length: end - start + 1 }, (_, i) => start + i))
  }, [currentPage, totalPages, limit])

  return (
    <section className="flex justify-center gap-4">
      <div className="flex gap-2">
        <button type="button" onClick={() => setPage(1)} aria-label="첫 페이지">
          <DoubleArrowLeftIcon width={24} height={24} />
        </button>
        <button type="button" onClick={() => setPage(currentPage - 1)} aria-label="이전 페이지">
          <ArrowLeftIcon width={24} height={24} />
        </button>
      </div>
      <div className="flex items-center gap-2">
        {pages.map((page) => (
          <button
            type="button"
            key={page}
            onClick={() => setPage(page)}
            className={twMerge(
              'flex h-7 w-7 items-center justify-center rounded-md pt-[3px] text-c1 font-normal text-gray-60',
              page === currentPage && 'bg-primary-1 font-semibold text-white'
            )}
            aria-label={`페이지 ${page}`}
          >
            {page}
          </button>
        ))}
      </div>
      <div className="flex gap-2">
        <button type="button" onClick={() => setPage(currentPage + 1)}>
          <ArrowRightIcon width={24} height={24} aria-label="다음 페이지" />
        </button>
        <button type="button" onClick={() => setPage(totalPages)}>
          <DoubleArrowRightIcon width={24} height={24} aria-label="마지막 페이지" />
        </button>
      </div>
    </section>
  )
}
