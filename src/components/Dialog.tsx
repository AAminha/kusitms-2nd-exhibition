import { useEffect, useState } from 'react'

import { CloseIcon } from '@public/icons'
import { InputField } from '@src/components/InputField'
import { getScrollbarWidth } from '@src/utils/getScrollbarWidth'

const DIALOG_TEXT = {
  title: '큐밀리의 차원에 오신 걸 환영해요.\n당신은 어떤 이야기를 가지고 있나요?',
  subtitle:
    '큐시즘 제 2회 전시회는 나만의 이야기를 가지고 있는 모든 분들과 함께해요!\n당신을 표현할 수 있는 한 문장을 남겨봐요 :)',
}

interface DialogProps {
  open: boolean
  onClose: () => void
}

export const Dialog = ({ open, onClose }: DialogProps) => {
  const [text, setText] = useState('')

  useEffect(() => {
    const scrollbarWidth = getScrollbarWidth()
    setText('')

    if (open) {
      document.body.style.overflow = 'hidden'
      document.body.style.paddingRight = `${scrollbarWidth}px`
      const header = document.querySelector('header')
      if (header) {
        header.style.paddingRight = `${scrollbarWidth}px`
      }
    } else {
      document.body.style.overflow = ''
      document.body.style.paddingRight = ''
      const header = document.querySelector('header')
      if (header) {
        header.style.paddingRight = ''
      }
    }

    return () => {
      document.body.style.overflow = ''
      document.body.style.paddingRight = ''
    }
  }, [open])

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log(text)
    // TODO: API 쏘기
    onClose()
  }

  if (!open) return null

  return (
    <div className="fixed inset-0 z-40 flex h-full w-full items-center justify-center bg-[rgba(255,255,255,0.10)] p-6 backdrop-blur">
      <dialog
        open={open}
        className="relative flex min-h-[439px] w-full max-w-[558px] whitespace-pre-wrap rounded-[40px] bg-gray-100 p-8 mobile:rounded-[32px]"
      >
        <form onSubmit={handleSubmit} className="flex grow flex-col">
          <button type="button" onClick={onClose} className="absolute right-4 top-4 cursor-pointer">
            <CloseIcon />
          </button>

          <h2 className="pb-3 text-[18px] font-semibold leading-[152%] tracking-[-0.0225rem] text-gray-10 desktop:text-h2">
            {DIALOG_TEXT.title}
          </h2>
          <h3 className="text-[12px] font-normal leading-[164%] tracking-[-0.0225rem] text-gray-40 desktop:text-c1">
            {DIALOG_TEXT.subtitle}
          </h3>
          <div className="mt-10 flex grow flex-col justify-between">
            <InputField
              placeholder="이곳에 방명록을 입력해주세요!"
              value={text}
              setValue={setText}
            />
            <button
              type="submit"
              className="mt-6 w-full rounded-xl bg-primary-2 py-[13px] text-b3 font-semibold text-white disabled:bg-gray-90 disabled:text-gray-70"
              disabled={!text}
            >
              방명록 남기기
            </button>
          </div>
        </form>
      </dialog>
    </div>
  )
}
