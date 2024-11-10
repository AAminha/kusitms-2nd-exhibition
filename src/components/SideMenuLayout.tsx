import clsx from 'clsx'

import { pretendard } from '@src/styles/font'

interface SideMenuLayoutProps {
  children: React.ReactNode
  sectionList: string[]
  activeSection: string
  onChangeSection: (menu: string) => void
}

export default function SideMenuLayout({
  children,
  sectionList,
  activeSection,
  onChangeSection,
}: SideMenuLayoutProps) {
  return (
    <div
      className={clsx(
        'max-w-1440 flex py-[155px] mobile:flex-col mobile:items-center mobile:pt-20 desktop:pr-[160px]',
        pretendard.className
      )}
    >
      <aside className="sticky top-[140px] z-40 flex h-fit w-[296px] justify-center bg-gray-100 mobile:fixed mobile:top-0 mobile:w-full mobile:px-6 mobile:py-2 mobile:pt-[100px]">
        <ul className="flex flex-col gap-2 text-b1 font-normal text-gray-50 mobile:flex-row mobile:gap-6 mobile:text-b2 desktop:w-32">
          {sectionList.map((item) => (
            <li key={item} className="cursor-pointer mobile:w-[120px]">
              <nav
                className={clsx(
                  'relative w-fit text-center mobile:w-full',
                  item === activeSection &&
                    'font-semibold text-primary-2 before:absolute before:right-[-16px] before:top-[50%] before:h-1.5 before:w-1.5 before:translate-y-[-50%] before:rounded-full before:bg-primary-2 mobile:before:hidden'
                )}
                onClick={() => onChangeSection(item)}
              >
                {item}
              </nav>
            </li>
          ))}
          <li>
            <p className="text-white">스크롤 준비 중</p>
          </li>
        </ul>
      </aside>
      <main className="w-full mobile:px-[24px]">{children}</main>
    </div>
  )
}
