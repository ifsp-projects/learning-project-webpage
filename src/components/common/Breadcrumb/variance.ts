import { cva } from 'class-variance-authority'

export const breadcrumbVariants = cva(
  ['flex', 'flex-wrap', 'gap-2', 'w-full', 'items-center', 'flex-1'],
  {
    variants: {
      variant: {
        light: ['text-slate-500'],
        dark: ['text-slate-50']
      }
    },
    defaultVariants: {
      variant: 'light'
    }
  }
)
