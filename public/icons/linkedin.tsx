import { SVGProps } from '@src/types/svg.type'

export const LinkedinIcon = ({ width = 16, height = 16, className = '' }: SVGProps) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <g clipPath="url(#clip0_1040_3070)">
      <path
        d="M1.99977 14.3996H4.39977V5.51961H1.99977V14.3996ZM3.19977 1.59961C2.39977 1.59961 1.75977 2.23961 1.75977 3.03961C1.75977 3.83961 2.39977 4.47961 3.19977 4.47961C3.99977 4.47961 4.63977 3.83961 4.63977 3.03961C4.63977 2.23961 3.99977 1.59961 3.19977 1.59961ZM8.47977 6.87961V5.51961H6.07977V14.3996H8.47977V9.83961C8.47977 7.27961 11.7598 7.11961 11.7598 9.83961V14.3996H14.1598V8.95961C14.1598 4.63961 9.59977 4.79961 8.47977 6.87961Z"
        fill="white"
      />
    </g>
    <defs>
      <clipPath id="clip0_1040_3070">
        <rect width="16" height="16" fill="white" />
      </clipPath>
    </defs>
  </svg>
)
