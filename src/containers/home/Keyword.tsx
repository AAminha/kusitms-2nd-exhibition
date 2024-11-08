import clsx from 'clsx'

import { helvetica } from '@src/styles/font'

const KEYWORDS = [
  {
    title: 'KEYWORD 1',
    description:
      '우리는 아직 완성되지 않은 존재이기에, 그 불완전함 속에서 배우고 실험하며 도전하는 과정을 통해 앞으로 나아갑니다. 이번 전시는 불안정한 우리가 함께한 여정의 흔적이자, 앞으로 펼쳐질 무한한 가능성의 시작입니다.',
  },
  {
    title: 'KEYWORD 2',
    description:
      '우리는 아직 완성되지 않은 존재이기에, 그 불완전함 속에서 배우고 실험하며 도전하는 과정을 통해 앞으로 나아갑니다. 이번 전시는 불안정한 우리가 함께한 여정의 흔적이자, 앞으로 펼쳐질 무한한 가능성의 시작입니다.',
  },
  {
    title: 'KEYWORD 3',
    description:
      '우리는 아직 완성되지 않은 존재이기에, 그 불완전함 속에서 배우고 실험하며 도전하는 과정을 통해 앞으로 나아갑니다. 이번 전시는 불안정한 우리가 함께한 여정의 흔적이자, 앞으로 펼쳐질 무한한 가능성의 시작입니다.',
  },
]

export const Keyword = () => {
  return (
    <section className="max-w-1440 flex flex-col items-center px-[50px] py-[232px]">
      <div className="w-full max-w-[1120px]">
        <figure className="mb-[100px] flex w-full gap-3">
          <div className="flex h-[196px] w-[365px] items-center justify-center bg-gray-90">
            로고
          </div>
          <div className="flex h-[196px] w-full items-center justify-center bg-gray-90">
            전시 타이틀
          </div>
          <figcaption className="visually-hidden">전시회 관련 이미지</figcaption>
        </figure>
        <section className="flex justify-between gap-[50px] mobile:flex-col mobile:items-center">
          {KEYWORDS.map((keyword) => (
            <article key={keyword.title} className="flex w-[312px] flex-col items-center">
              <h2 className={clsx('mb-5 text-branding-h2 text-gray-20', helvetica.className)}>
                {keyword.title}
              </h2>
              <p className="text-b4 font-normal text-gray-30">{keyword.description}</p>
            </article>
          ))}
        </section>
      </div>
    </section>
  )
}
