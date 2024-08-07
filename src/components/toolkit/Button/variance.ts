import { cva } from 'class-variance-authority'

export const buttonVariants = cva(
  [
    'max-w-fit',
    'rounded-sm',
    'font-semibold',
    'px-6',
    'py-2',
    'w-full',
    'tracking-wide',
    'transition',
    'ease-in-out',
    'disabled:cursor-not-allowed',
    'disabled:opacity-60'
  ],
  {
    variants: {
      variant: {
        primary: [
          'text-slate-50',
          'bg-gradient-to-r',
          'from-green-600',
          'to-green-500',
          'hover:brightness-[115%]'
        ],
        primaryOutline: [
          'text-green-600',
          'border',
          'border-green-600',
          'hover:bg-green-500',
          'hover:border-green-500',
          'hover:text-slate-50'
        ],
        secondary: [
          'text-slate-50',
          'bg-gradient-to-tr',
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
        tmdPrimary: [
          'bg-yellow-400',
          'text-slate-700',
          'hover:brightness-[115%]'
        ],
        tmdSecondary: [
          'bg-slate-50',
          'text-slate-700',
          'hover:brightness-[90%]'
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
      variant: 'primary'
    }
  }
)
