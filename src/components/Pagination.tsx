import { useEffect, useState } from 'react'

import clsx from 'clsx'

import {
  ArrowLeftIcon,
  ArrowRightIcon,
  DoubleArrowLeftIcon,
  DoubleArrowRightIcon,
} from '@public/icons'

interface PaginationProps {
  currentPage: number
  setPage: (page: number) => void
  totalPages: number
}

export const Pagination = ({ currentPage, setPage, totalPages }: PaginationProps) => {
  const [limit, setLimit] = useState(10)
  const [range, setRange] = useState<{ [key: string]: number }>({
    start: 1,
    end: 1,
  })
  const [pages, setPages] = useState<number[]>([])

  useEffect(() => {
    const updateLIMIT = () => {
      if (window.matchMedia('(max-width: 425px)').matches) {
        setLimit(3)
      } else if (window.matchMedia('(max-width: 960px)').matches) {
        setLimit(5)
      } else {
        setLimit(10)
      }
    }

    updateLIMIT()
    window.addEventListener('resize', updateLIMIT)
    return () => window.removeEventListener('resize', updateLIMIT)
  }, [])

  useEffect(() => {
    const start = Math.floor((currentPage - 1) / limit) * limit + 1
    const end = start + limit - 1 > totalPages ? totalPages : start + limit - 1

    setRange({ start, end })
    setPages(Array.from({ length: end - start + 1 }, (_, i) => start + i))
  }, [currentPage, totalPages, limit])

  return (
    <section className="flex justify-center gap-4">
      <div className="flex gap-2">
        <button onClick={() => setPage(1)}>
          <DoubleArrowLeftIcon width={24} height={24} />
        </button>
        <button onClick={() => setPage(range.start - limit)}>
          <ArrowLeftIcon width={24} height={24} />
        </button>
      </div>
      <div className="flex items-center gap-2">
        {pages.map((page) => (
          <button
            key={page}
            onClick={() => setPage(page)}
            className={clsx(
              'flex h-7 w-7 items-center justify-center rounded-md pt-[3px] text-c1 font-normal text-gray-60',
              page === currentPage && 'bg-primary-1 font-semibold text-white'
            )}
          >
            {page}
          </button>
        ))}
      </div>
      <div className="flex gap-2">
        <button onClick={() => setPage(range.end + 1)}>
          <ArrowRightIcon width={24} height={24} />
        </button>
        <button onClick={() => setPage(totalPages)}>
          <DoubleArrowRightIcon width={24} height={24} />
        </button>
      </div>
    </section>
  )
}
