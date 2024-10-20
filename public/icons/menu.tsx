import { SVGProps } from '@src/types/svg.type'

export const MenuIcon = ({ width, height, strokeWidth = 1 }: SVGProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    viewBox="0 0 28 28"
    fill="none"
  >
    <path
      d="M3.5 14H24.5"
      stroke="white"
      stroke-width={strokeWidth}
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M3.5 7H24.5"
      stroke="white"
      stroke-width={strokeWidth}
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M3.5 21H24.5"
      stroke="white"
      stroke-width={strokeWidth}
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
)
