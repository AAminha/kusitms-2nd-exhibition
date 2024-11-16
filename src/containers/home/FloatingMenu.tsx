import { FirstExhibitionIcon, InstagramIcon, KusitmsIcon } from '@public/icons'
import { FloatingButton } from '@src/components/FloatingButton'

const BUTTON = [
  {
    explanation: '전시회 인스타그램',
    link: 'https://www.instagram.com/kusitms_official/reels/?__d=11',
    icon: (
      <InstagramIcon
        width={32}
        height={32}
        className="stroke-gray-20 transition-colors duration-200 group-hover:stroke-white mobile:h-6 mobile:w-6"
      />
    ),
  },
  {
    explanation: '큐시즘 공식 홈',
    link: 'https://www.kusitms.com/',
    icon: (
      <KusitmsIcon
        width={38}
        height={27}
        className="fill-gray-20 transition-colors duration-200 group-hover:fill-white mobile:h-[19px] mobile:w-7"
      />
    ),
  },
  {
    explanation: '1회 전시회 웹사이트',
    link: 'https://www.engage-energy-with-kusitms.com//',
    icon: (
      <FirstExhibitionIcon
        width={36}
        height={20}
        className="fill-gray-20 transition-colors duration-200 group-hover:fill-white mobile:h-3.5 mobile:w-[26px]"
      />
    ),
  },
]

export const FloatingMenu = () => {
  return (
    <aside className="sticky top-[50%] z-20 ml-6 flex w-fit translate-y-[-50%] flex-col gap-5 sm:ml-3 sm:mt-5 sm:scale-75">
      {BUTTON.map((button) => (
        <FloatingButton
          key={button.explanation}
          explanation={button.explanation}
          link={button.link}
        >
          {button.icon}
        </FloatingButton>
      ))}
    </aside>
  )
}
