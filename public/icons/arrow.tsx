import { SVGProps } from '@src/types/svg.type'

export const ArrowUpIcon = ({ width, height, color = '#9D9D9D', strokeWidth = 1 }: SVGProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    viewBox="0 0 32 32"
    fill="none"
  >
    <path
      d="M24 20L16 12L8 20"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

export const ArrowDownIcon = ({ width, height, color = '#9D9D9D', strokeWidth = 1 }: SVGProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    viewBox="0 0 32 32"
    fill="none"
  >
    <path
      d="M8 12L16 20L24 12"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

export const ArrowLeftIcon = ({ width, height, color = '#9D9D9D', strokeWidth = 1 }: SVGProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    viewBox="0 0 32 32"
    fill="none"
  >
    <path
      d="M20 24L12 16L20 8"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

export const ArrowRightIcon = ({ width, height, color = '#9D9D9D', strokeWidth = 1 }: SVGProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    viewBox="0 0 32 32"
    fill="none"
  >
    <path
      d="M12 24L20 16L12 8"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)
