import { cva } from 'class-variance-authority'

export const anchorVariants = cva(
  [
    'max-w-fit',
    'flex',
    'rounded-sm',
    'cursor-pointer',
    'justify-center',
    'items-center',
    'px-6',
    'py-2',
    'w-full',
    'tracking-wide',
    'transition',
    'ease-in-out'
  ],
  {
    variants: {
      variant: {
        primary: ['text-slate-50', 'bg-indigo-500', 'hover:brightness-[115%]'],
        primaryOutline: [
          'text-indigo-600',
          'border',
          'border-indigo-500',
          'hover:bg-indigo-500',
          'hover:border-indigo-500',
          'hover:text-slate-50'
        ],
        secondary: [
          'text-slate-50',
          'bg-gradient-to-r',
          'from-slate-900',
          'to-slate-800',
          'hover:brightness-[115%]'
        ],
        secondaryOutline: [
          'text-slate-700',
          'border',
          'border-slate-900',
          'hover:bg-slate-800',
          'hover:border-slate-800',
          'hover:text-slate-50'
        ],
        danger: [
          'text-slate-50',
          'bg-gradient-to-tr',
          'from-red-600',
          'via-red-500',
          'to-red-500',
          'hover:brightness-[115%]'
        ]
      },
      size: {
        xs: ['text-xs'],
        sm: ['text-sm'],
        base: ['text-sm', 'md:text-base'],
        lg: ['text-base', 'md:text-lg'],
        xl: ['text-lg', 'md:text-xl'],
        '2xl': ['text-xl', 'md:text-2xl']
      }
    },
    defaultVariants: {
      variant: 'primary',
      size: 'base'
    }
  }
)
