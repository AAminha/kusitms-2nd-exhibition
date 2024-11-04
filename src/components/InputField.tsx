import clsx from 'clsx'

export const InputField = ({ ...props }: React.InputHTMLAttributes<HTMLInputElement>) => {
  return (
    <input
      className={clsx(
        'w-[327px] rounded-xl border-[1px] bg-gray-90 px-5 py-4 text-c1 font-normal text-gray-10 placeholder:text-gray-40 hover:border-[#4C69FF] focus:border-[#4C69FF] focus:bg-[#4c69ff]/10',
        props.value === '' ? 'border-gray-80' : 'border-[#4c69ff]/40'
      )}
      {...props}
    />
  )
}