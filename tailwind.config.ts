import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        default: {
          white: '#FFFFFF',
          black: '#000000',
        },
        gray: {
          100: '#0A0A0A',
          90: '#232323',
          80: '#3B3B3B',
          70: '#545454',
          60: '#6C6C6C',
          50: '#858585',
          40: '#9D9D9D',
          30: '#B6B6B6',
          20: '#CECECE',
          15: '#DADADA',
          10: '#E7E7E7',
          5: '#F2F2F2',
        },
      },
      fontSize: {
        xxl: ['3rem', { lineHeight: '145%', letterSpacing: '-0.09rem' }],
        xl: ['2.5rem', { lineHeight: '145%', letterSpacing: '-0.09rem' }],
        l: ['2rem', { lineHeight: '152%', letterSpacing: '-0.09rem' }],
        h1: ['1.7rem', { lineHeight: '152%', letterSpacing: '-0.09rem' }],
        h2: ['1.5rem', { lineHeight: '152%', letterSpacing: '-0.025rem' }],
        b1: ['1.25rem', { lineHeight: '164%', letterSpacing: '-0.025rem' }],
        b2: ['1.125rem', { lineHeight: '164%', letterSpacing: '-0.025rem' }],
        b3: ['1rem', { lineHeight: '164%', letterSpacing: '-0.09rem' }],
        c1: ['0.875rem', { lineHeight: '150%', letterSpacing: '-0.09rem' }],
      },
    },
  },
  plugins: [],
}
export default config
