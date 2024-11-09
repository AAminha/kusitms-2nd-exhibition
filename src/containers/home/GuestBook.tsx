'use client'

import { SectionTitle } from '@src/components/SectionTitle'
import { TEMP_GUEST_BOOKS } from '@src/constants/home'
import useMasonry from '@src/hooks/useMasonry'

import { GuestBookItem } from './GuestBookItem'

export const GuestBook = () => {
  const masonryContainer = useMasonry()
  return (
    <section className="max-w-1440 mb-[223px] mt-[140px] flex flex-col items-center px-[50px]">
      <div className="w-full max-w-[1120px]">
        <SectionTitle title="방명록" subtitle="내 방명록을 남기면 아래에서 확인할 수 있어요" />
        <section
          ref={masonryContainer}
          className="mb-10 mt-5 grid grid-cols-3 gap-3 mobile:grid-cols-1"
          style={{ gridAutoFlow: 'dense' }}
        >
          {TEMP_GUEST_BOOKS.map((item, index) => (
            <GuestBookItem key={index} content={item.content} date={item.date} />
          ))}
        </section>
        <p className="bg-gray-80 text-center">페이지네이션 들어가야 함</p>
      </div>
    </section>
  )
}
