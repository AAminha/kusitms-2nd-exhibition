'use client'

import { useState } from 'react'

import { Pagination } from '@src/components/Pagination'
import { SectionTitle } from '@src/components/SectionTitle'
import useMasonry from '@src/hooks/useMasonry'

import { GuestBookItem } from './GuestBookItem'

const DUMMY = [
  {
    content:
      '1 와 너무 멋져요 개설레요 우하하하하하하 큐시즘 1년반째인데 미칠거같아요 tf까지 하니까 2년이네요 죽을게요 ㅇㅇ',
    date: '2024년 06월 08일 10:10',
  },
  {
    content:
      '2 와 너무 멋져ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd요 개dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd설레요 우하하하하하하 큐시즘 1년반째인데 미칠거같아요 tf까지 하니까 2년이네요 죽을게요 ㅇㅇ',
    date: '2024년 06월 08일 10:10',
  },
  {
    content:
      '3 와 너무 멋져요 개설레요 우하하하하하하 큐시즘 1년반째인데 미칠거같아요 tf까지 하니까 2년이네요 죽을게요 ㅇㅇ',
    date: '2024년 06월 08일 10:10',
  },
  {
    content:
      '4 와 너무 멋져요 개설레요 우하하하하하하 큐시즘 1년반째인데 미칠거같아요 tf까지 하니까 2년이네요 죽을게요 ㅇㅇ',
    date: '2024년 06월 08일 10:10',
  },
  {
    content:
      '5 와 너무 멋져요 개설레요 우하하하하하하 큐시즘 1년반째인데 미칠거같아요 tf까지 하니까 2년이네요 죽을게요 ㅇㅇ',
    date: '2024년 06월 08일 10:10',
  },
  {
    content: '6 즘 1년반째인데 미칠거같아요 tf까지 하니까 2년이네요 죽을게요 ㅇㅇ',
    date: '2024년 06월 08일 10:10',
  },
  {
    content:
      '7 와 너무 멋져요 개설레요 우하하하하하하 큐시즘 1년반째인데 미칠거같아요 tf까지 하니까 2년이네요 죽을게요 ㅇㅇ',
    date: '2024년 06월 08일 10:10',
  },
  {
    content:
      '8 와 너무 멋져요 개설레요 우하하하하하하 큐시즘 1년반째인데 미칠거같아요 tf까지 하니까 2년이네요 죽을게요 ㅇㅇ',
    date: '2024년 06월 08일 10:10',
  },
  {
    content:
      '9 짱짱짱짱 짱짱짱짱짱짱짱짱짱짱짱짱짱짱짱짱짱짱짱짱짱짱짱짱짱짱짱짱짱짱짱짱짱짱짱짱짱짱짱짱짱짱짱짱짱짱짱짱짱짱짱짱짱짱짱짱짱짱짱짱짱짱짱짱짱짱짱짱짱짱짱짱',
    date: '2024년 06월 08일 10:10',
  },
  {
    content:
      '0 짱짱짱짱 짱짱짱짱짱짱짱짱짱짱짱짱짱짱짱짱짱짱짱짱짱짱짱짱짱짱짱짱짱짱짱짱짱짱짱짱짱짱짱짱짱짱짱짱짱짱짱짱짱짱짱짱짱짱짱짱짱짱짱짱짱짱짱짱짱짱짱짱짱짱짱짱',
    date: '2024년 06월 08일 10:10',
  },
]

export const GuestBook = () => {
  const masonryContainer = useMasonry()
  const [page, setPage] = useState(1)
  const totalPage = 22 // 임시 데이터
  /* const [totalPage, setTotalPage] = useState(22) */

  const handleChangePage = (page: number) => {
    console.log(page)
    if (page < 1) setPage(1)
    else if (page > totalPage) setPage(totalPage)
    else setPage(page)

    console.log('click')
  }

  return (
    <section className="max-w-1440 mb-[223px] mt-[140px] flex flex-col items-center px-[50px]">
      <div className="w-full max-w-[1120px]">
        <SectionTitle title="방명록" subtitle="내 방명록을 남기면 아래에서 확인할 수 있어요" />
        <section
          ref={masonryContainer}
          className="mb-10 mt-5 grid grid-cols-3 gap-3 mobile:grid-cols-1"
          style={{ gridAutoFlow: 'dense' }}
        >
          {DUMMY.map((item, index) => (
            <GuestBookItem key={index} content={item.content} date={item.date} />
          ))}
        </section>
        <Pagination currentPage={page} setPage={handleChangePage} totalPages={totalPage} />
      </div>
    </section>
  )
}
