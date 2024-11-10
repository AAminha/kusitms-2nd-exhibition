import { FirstExhibitionIcon, InstagramIcon, KusitmsIcon } from '@public/icons'

export const BUTTON = [
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
        className="fill-gray-20 transition-colors duration-200 group-hover:fill-white mobile:h-[19px] mobile:w-[28px]"
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
        className="fill-gray-20 transition-colors duration-200 group-hover:fill-white mobile:h-[14px] mobile:w-[26px]"
      />
    ),
  },
]
