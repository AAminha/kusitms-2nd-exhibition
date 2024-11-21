import { SVGProps } from '@src/types/svg.type'

export const DoubleArrowLeftIcon = ({
  width = 32,
  height = 32,
  color = '#9D9D9D',
  strokeWidth = 1,
  ...props
}: SVGProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    viewBox="0 0 32 32"
    fill="none"
    {...props}
  >
    <path
      d="M14.6667 22.6666L8 15.9999L14.6667 9.33325"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M24.0002 22.6666L17.3335 15.9999L24.0002 9.33325"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

export const DoubleArrowRightIcon = ({
  width = 32,
  height = 32,
  color = '#9D9D9D',
  strokeWidth = 1,
  ...props
}: SVGProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    viewBox="0 0 32 32"
    fill="none"
    {...props}
  >
    <path
      d="M17.3335 22.6666L24.0002 15.9999L17.3335 9.33325"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M8 22.6666L14.6667 15.9999L8 9.33325"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)
