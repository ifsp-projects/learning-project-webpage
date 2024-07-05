import { cva } from 'class-variance-authority'

export const spinVariants = cva(['flex', 'items-center', 'justify-center'], {
  variants: {
    variant: {
      light: ['dark'],
      dark: ['light']
    },
    size: {
      small: ['h-4', 'w-4'],
      medium: ['h-5', 'w-5'],
      large: ['h-6', 'w-6']
    }
  },
  defaultVariants: {
    size: 'small'
  }
})

export const spinIconVariants = cva(['inline', ' w-full', 'animate-spin'], {
  variants: {
    variant: {
      light: ['fill-slate-500', 'text-slate-500/20'],
      dark: ['fill-slate-100', 'text-slate-100/30']
    }
  },
  defaultVariants: {
    variant: 'light'
  }
})
