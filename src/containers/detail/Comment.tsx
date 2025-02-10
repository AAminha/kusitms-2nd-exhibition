'use client'

import { useCallback, useEffect, useState } from 'react'

import { twMerge } from 'tailwind-merge'

import { MasonryGrid } from '@egjs/react-grid'
import { getComments } from '@src/apis/getComments'
import { postComment } from '@src/apis/postComment'
import { GuestBookItem } from '@src/components/GuestBookItem'
import { InputField } from '@src/components/InputField'
import { Pagination } from '@src/components/Pagination'
import { useGuestBook } from '@src/contexts/GuestBookContext'
import { useResponsive } from '@src/hooks/useResponsive'

interface CommentProps {
  productId: string
}

export const Comment = ({ productId }: CommentProps) => {
  const { isPost, guestbookRef, resetPostState, moveToGuestBook } = useGuestBook()
  const [commentCount, setCommentCount] = useState(0)
  const [page, setPage] = useState(1)
  const [totalPage, setTotalPage] = useState(1)
  const [comments, setComments] = useState<Comment[]>([])
  const [isMobile, setIsMobile] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const [text, setText] = useState('')
  useResponsive({
    isInit: true,
    callback: () => {
      setIsMobile(window.matchMedia('(max-width: 960px)').matches)
    },
  })

  const fetchComments = useCallback(async () => {
    try {
      const data = await getComments(productId, page)
      setTotalPage(data.totalPageCount)
      setCommentCount(data.totalCommentCount)
      setComments(data.comments)
    } catch (error) {
      // TODO: 에러 처리
      console.error(error)
    }
  }, [productId, page])

  const handleChangePage = useCallback(
    (page: number) => {
      if (page < 1) setPage(1)
      else if (page > totalPage) setPage(totalPage)
      else setPage(page)
    },
    [totalPage]
  )

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    try {
      const newComment = await postComment(productId, text)
      if (newComment) {
        setTimeout(() => {
          moveToGuestBook()
        }, 300)
        setText('')
      }
    } catch {
      alert('방명록 등록에 실패했습니다. 다시 시도해주세요.')
    }
  }

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY // 현재 스크롤 위치
      const windowHeight = window.innerHeight // 화면 높이
      const documentHeight = document.documentElement.scrollHeight // 문서 전체 높이

      if (Math.abs(scrollTop + windowHeight - documentHeight) <= 60) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  useEffect(() => {
    fetchComments()
  }, [fetchComments])

  useEffect(() => {
    if (isPost) {
      resetPostState()
      if (page === 1) fetchComments()
      else setPage(1)
    }
  }, [isPost, page, resetPostState, fetchComments])

  return (
    <section ref={guestbookRef} className="relative min-h-[400px] overflow-hidden px-6 pb-[185px]">
      <div className="mb-4 flex items-center gap-3">
        <h2 className="text-h2 font-semibold text-gray-5 sm:text-b1">달린 의견들</h2>
        <p className="text-b2 font-medium text-primary-2">{commentCount}개</p>
      </div>
      {comments.length === 0 ? (
        <p className="rounded-xl bg-gray-90 px-2 py-4 text-center text-b3 font-medium text-gray-40 sm:whitespace-pre-wrap">
          {`아직 의견이 달리지 않았어요!\n1등으로 의견을 달아주실래요?`}
        </p>
      ) : (
        <MasonryGrid
          className="mb-10"
          gap={12}
          column={isMobile ? 1 : 3}
          align={'stretch'}
          useResizeObserver={true}
          observeChildren={true}
        >
          {comments.map((item) => (
            <GuestBookItem key={item.id} content={item.content} date={item.createdAt} />
          ))}
        </MasonryGrid>
      )}
      {comments.length > 0 && (
        <Pagination currentPage={page} setPage={handleChangePage} totalPages={totalPage} />
      )}

      <div
        className={twMerge(
          'transition-translate absolute bottom-0 left-0 z-20 flex h-[305px] w-full flex-col items-center justify-center gap-4 bg-input-gradient px-6 duration-500',
          isVisible ? 'translate-y-0' : 'translate-y-[305px]'
        )}
      >
        <p className="mt-12 text-b1 font-semibold text-gray-5">여러분의 의견을 들려주세요!</p>
        <form className="flex w-full max-w-[648px] gap-3 sm:flex-col" onSubmit={handleSubmit}>
          <InputField
            placeholder="의견을 적어주세요!"
            value={text}
            setValue={setText}
            resetFieldHeight={isPost}
            maxLine={4}
          />
          <button
            type="submit"
            className="mb-[25px] flex h-[53px] w-[119px] min-w-fit items-center justify-center self-end rounded-xl bg-primary-1 px-4 text-b3 font-normal text-white disabled:bg-gray-90 disabled:text-gray-70 mobile:text-c1 sm:w-full"
            disabled={!text}
          >
            등록하기
          </button>
        </form>
      </div>
    </section>
  )
}
