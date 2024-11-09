import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/containers/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        default: {
          white: '#FFFFFF',
          black: '#000000',
        },
        primary: {
          1: '#001CC6',
          2: '#03A3FF',
          3: '#75DAFF',
          4: '#C1EEFF',
        },
        gray: {
          100: '#0A0A0A',
          95: '#161616',
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
        xl: ['2.5rem', { lineHeight: '145%', letterSpacing: '-0.075rem' }],
        l: ['2rem', { lineHeight: '152%', letterSpacing: '-0.06rem' }],
        h1: ['1.7rem', { lineHeight: '152%', letterSpacing: '-0.0525rem' }],
        h2: ['1.5rem', { lineHeight: '152%', letterSpacing: '-0.03rem' }],
        b1: ['1.25rem', { lineHeight: '164%', letterSpacing: '-0.025rem' }],
        b2: ['1.125rem', { lineHeight: '164%', letterSpacing: '-0.0225rem' }],
        b3: ['1rem', { lineHeight: '164%', letterSpacing: '-0.03rem' }],
        b4: ['0.875rem', { lineHeight: '164%', letterSpacing: '-0.0262rem' }],
        c1: ['0.875rem', { lineHeight: '150%', letterSpacing: '-0.0262rem' }],
        'branding-b3': ['1rem', { lineHeight: '164%', letterSpacing: '-0.01rem' }],
        'branding-b2': ['1.125rem', { lineHeight: '164%', letterSpacing: '-0.0112rem' }],
        'branding-b1': ['1.25rem', { lineHeight: '164%', letterSpacing: '-0.0125rem' }],
        'branding-h2': ['1.5rem', { lineHeight: '152%', letterSpacing: '-0.015rem' }],
        'branding-h1': ['1.75rem', { lineHeight: '152%', letterSpacing: '-0.0175rem' }],
        'branding-l': ['2rem', { lineHeight: '152%', letterSpacing: '0.02rem' }],
      },
    },
    backgroundImage: {
      'desktop-header-gradient':
        'linear-gradient(180deg, #0A0A0A 0%, rgba(10, 10, 10, 0.75) 30.69%, rgba(10, 10, 10, 0.44) 58.86%, rgba(10, 10, 10, 0.00) 100%)',
      'mobile-header-gradient':
        'linear-gradient(0deg, rgba(10, 10, 10, 0.00) -0.67%, rgba(10, 10, 10, 0.40) 20.92%, rgba(10, 10, 10, 0.84) 47.22%, #0A0A0A 84.24%)',
      'home-gradient':
        'linear-gradient(180deg, rgba(10, 10, 10, 0.00) 24.36%, rgba(10, 10, 10, 0.30) 46.42%, rgba(10, 10, 10, 0.74) 65.85%, #0A0A0A 90.88%)',
    },
    screens: {
      // mobile: "640px" / tablet: "960px"
      mobile: { max: '960px' },
      desktop: '961px',
    },
  },
  plugins: [],
}
export default config
