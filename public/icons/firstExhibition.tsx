import { SVGProps } from '@src/types/svg.type'

export const FirstExhibitionIcon = ({
  width,
  height,
  color = 'white',
  className = '',
}: SVGProps) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 36 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <g clipPath="url(#clip0_157_252)">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18 15.4962C16.2454 18.2055 13.2316 19.993 9.80822 19.993C4.39129 19.993 0 15.5174 0 9.99651C0 4.47559 4.39129 0 9.80822 0C13.2316 0 16.2454 1.78756 18 4.49683C19.7545 1.78756 22.7683 0 26.1917 0C31.6086 0 35.9999 4.47559 35.9999 9.99651C35.9999 15.5174 31.6086 19.993 26.1917 19.993C22.7683 19.993 19.7545 18.2055 18 15.4962ZM13.6523 15.0528H6.23077V5.59777H13.6523V6.96663H7.72615V9.61968H13.4446V10.9744H7.72615V13.6839H13.6523V15.0528ZM22.8462 15.0528H30.2677V13.6839H24.3415V10.9744H30.06V9.61968H24.3415V6.96663H30.2677V5.59777H22.8462V15.0528Z"
        fill={color}
        className={className}
      />
    </g>
  </svg>
)
