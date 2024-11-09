import { useRef, useState } from 'react'

import clsx from 'clsx'

interface InputFieldProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  value: string
  setValue: (value: string) => void
}

export const InputField = ({ value, setValue, ...props }: InputFieldProps) => {
  const [isFocused, setIsFocused] = useState(false)
  const textarea = useRef<HTMLTextAreaElement>(null)

  const handleResizeHeight = () => {
    if (!textarea.current) return
    textarea.current.style.height = 'auto'
    textarea.current.style.height = textarea.current.scrollHeight + 'px'
  }

  return (
    <div
      className={clsx(
        'rounded-xl border-[1px] bg-gray-90 px-5 py-4 hover:border-primary-1',
        value === '' ? 'border-gray-80' : 'border-primary-1/40',
        isFocused && 'border-primary-1 bg-primary-1/10'
      )}
    >
      <textarea
        ref={textarea}
        value={value}
        rows={1}
        onChange={(e) => {
          setValue(e.target.value)
          handleResizeHeight()
        }}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        className={clsx(
          'block w-full resize-none overflow-hidden bg-transparent text-c1 font-medium text-gray-10 placeholder:text-gray-40'
        )}
        {...props}
      />
    </div>
  )
}
