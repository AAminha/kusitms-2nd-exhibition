import { twMerge } from 'tailwind-merge'

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
      className={twMerge(
        'max-w-1440 flex mobile:flex-col mobile:items-center mobile:pt-20',
        pretendard.className
      )}
    >
      <aside className="fixed top-0 z-40 flex h-full w-[256px] bg-gray-100 px-20 pt-[140px] mobile:top-0 mobile:h-fit mobile:w-full mobile:justify-center mobile:px-6 mobile:py-2 mobile:pt-[100px]">
        <nav>
          <ul className="flex flex-col gap-2 text-b1 font-normal text-gray-50 mobile:flex-row mobile:gap-6 mobile:text-b2 sm:gap-4 sm:text-b4 desktop:w-32">
            {sectionList.map((item) => (
              <li key={item}>
                <button
                  className={twMerge(
                    'relative w-fit text-center mobile:w-full',
                    item === activeSection &&
                      'font-semibold text-primary-2 before:absolute before:right-[-16px] before:top-[50%] before:h-1.5 before:w-1.5 before:translate-y-[-50%] before:rounded-full before:bg-primary-2 mobile:before:hidden'
                  )}
                  onClick={() => onChangeSection(item)}
                >
                  {item}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </aside>
      <main className="w-full mobile:px-6 desktop:ml-[256px] desktop:px-10">{children}</main>
    </div>
  )
}
