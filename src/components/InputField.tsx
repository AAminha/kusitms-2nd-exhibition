import { useCallback, useEffect, useRef, useState } from 'react'

import { twMerge } from 'tailwind-merge'

interface InputFieldProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  value: string
  setValue: (value: string) => void
  resetFieldHeight?: boolean
  focus?: boolean
  maxLine: number
}

export const InputField = ({
  value,
  setValue,
  resetFieldHeight,
  focus = false,
  maxLine,
  ...props
}: InputFieldProps) => {
  const [isFocused, setIsFocused] = useState(false)
  const textarea = useRef<HTMLTextAreaElement>(null)
  const MAX_LENGTH = 200

  const handleResizeHeight = useCallback(() => {
    if (!textarea.current) return
    textarea.current.style.height = 'auto'
    textarea.current.style.height = `${Math.min(textarea.current.scrollHeight, maxLine * 21)}px`
  }, [maxLine])

  useEffect(() => {
    if (resetFieldHeight) handleResizeHeight()
  }, [resetFieldHeight, handleResizeHeight])

  useEffect(() => {
    if (focus && textarea.current) {
      textarea.current.focus()
    }
  }, [focus])

  return (
    <section className="w-full">
      <div
        className={twMerge(
          'rounded-xl border-[1px] bg-gray-90 py-4 pl-5 hover:border-primary-1',
          value === '' ? 'border-gray-80' : 'border-primary-1/40',
          isFocused && 'border-primary-1 bg-[#090C1D]'
        )}
      >
        <textarea
          ref={textarea}
          value={value}
          rows={1}
          maxLength={MAX_LENGTH}
          onChange={(e) => {
            setValue(e.target.value)
            handleResizeHeight()
          }}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          className={twMerge(
            'custom-scrollbar block w-full resize-none overflow-y-scroll bg-transparent text-c1 font-medium text-gray-10 placeholder:text-gray-40'
          )}
          {...props}
        />
      </div>
      <p className="mt-1 text-end text-c1 text-gray-40">
        {value.length}/{MAX_LENGTH} 자
      </p>
    </section>
  )
}
