import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        'nexa-text': ['var(--font-nexa-text)']
      },
      screens: {
        ultrawide: '2560px',
        xs: '425px'
      },
      fontSize: {
        '9xl': ['8rem', '1rem'],
        '8xl': ['6rem', '6.5rem'],
        '7xl': ['4.5rem', '5rem'],
        '6xl': ['3.75rem', '4.25rem'],
        '5xl': ['3rem', '3.5rem'],
        '4xl': ['2.5rem', '3rem'],
        '3xl': ['2rem', '2.5rem'],
        '2xl': ['1.5rem', '2rem'],
        xl: ['1.25rem', '1.75rem'],
        lg: ['1.125rem', '1.5rem'],
        base: ['1rem', '1.5rem'],
        headline: ['1.125rem', '1.125rem'],
        'headline-sm': ['1rem', '1rem'],
        sm: ['0.875rem', '1.25rem'],
        xs: ['0.75rem', '1rem']
      },
      transitionDuration: {
        default: '200ms'
      }
    },
    variants: {
      extend: {
        brightness: ['hover', 'focus']
      }
    }
  },
  plugins: []
}
export default config
