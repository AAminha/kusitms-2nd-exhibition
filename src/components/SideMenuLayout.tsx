import clsx from 'clsx'

import { pretendard } from '@src/styles/font'

interface SideMenuLayoutProps {
  children: React.ReactNode
  sectionList: string[]
  activeSection: string
  onChangeSection: (menu: string) => void
  className?: string
  isSkeleton?: boolean
}

export default function SideMenuLayout({
  children,
  sectionList,
  activeSection,
  onChangeSection,
  className = '',
  isSkeleton = false,
}: SideMenuLayoutProps) {
  return (
    <div
      className={clsx(
        'max-w-1440 flex py-[155px] mobile:flex-col mobile:items-center mobile:pt-20',
        className,
        pretendard.className
      )}
    >
      <aside className="sticky top-[160px] z-40 flex h-fit w-[296px] justify-center bg-gray-100 mobile:fixed mobile:top-0 mobile:w-full mobile:px-6 mobile:py-2 mobile:pt-[100px]">
        <nav>
          <ul className="flex flex-col gap-2 text-b1 font-normal text-gray-50 mobile:flex-row mobile:gap-6 mobile:text-b2 desktop:w-32">
            {sectionList.map((item) => (
              <li key={item} className="mobile:w-[120px]">
                <button
                  className={clsx(
                    'relative w-fit text-center mobile:w-full',
                    isSkeleton && 'no-select bg-gray-80 text-gray-80',
                    !isSkeleton &&
                      item === activeSection &&
                      'font-semibold text-primary-2 before:absolute before:right-[-16px] before:top-[50%] before:h-1.5 before:w-1.5 before:translate-y-[-50%] before:rounded-full before:bg-primary-2 mobile:before:hidden'
                  )}
                  onClick={() => onChangeSection(item)}
                  disabled={isSkeleton}
                >
                  {item}
                </button>
              </li>
            ))}
            <li>
              <p className="text-white">스크롤 준비 중</p>
            </li>
          </ul>
        </nav>
      </aside>
      <main className="w-full mobile:px-[24px] mobile:py-[115px]">{children}</main>
    </div>
  )
}
