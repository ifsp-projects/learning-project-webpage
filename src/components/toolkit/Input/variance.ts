import { cva } from 'class-variance-authority'

export const inputVariants = cva(
  [
    'rounded-sm',
    'p-2',
    'text-sm',
    'ring-0',
    'outline-none',
    'duration-default'
  ],
  {
    variants: {
      variant: {
        primary: [
          'border',
          'py-[0.40rem]',
          'focus:ring-white',
          'focus:ring-1',
          'focus:border-white',
          'bg-white'
        ],
        secondary: [
          'border',
          'border-slate-300',
          'py-[0.40rem]',
          'focus:border-slate-500',
          'bg-white'
        ]
      },
      error: {
        true: ['border-2', 'border-red-400'],
        false: []
      }
    },
    defaultVariants: {
      variant: 'primary'
    }
  }
)
