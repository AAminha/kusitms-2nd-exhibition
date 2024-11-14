import clsx from 'clsx'
import Link from 'next/link'

import { DefaultButton } from '@src/components/DefaultButton'
import { helvetica } from '@src/styles/font'

export default function NotFound() {
  return (
    <main className="flex h-screen flex-col items-center justify-center">
      <h2
        className={clsx('text-xxl font-semibold text-gray-5 mobile:text-h2', helvetica.className)}
      >
        404
      </h2>
      <p className="mb-10 text-b3 font-normal text-gray-30">
        찾을 수 없는 페이지를 요청하셨습니다.
      </p>
      <Link href="/">
        <DefaultButton type="button" className="rounded-full px-6 py-2 text-b3">
          홈으로 돌아가기
        </DefaultButton>
      </Link>
    </main>
  )
}
