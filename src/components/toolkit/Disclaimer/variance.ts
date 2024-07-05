import { cva } from 'class-variance-authority'

export const disclaimerVariants = cva(['rounded-sm', 'border'], {
  variants: {
    variant: {
      success: ['border-green-200', 'bg-green-50', 'text-green-900'],
      info: ['border-blue-200', 'bg-blue-50', 'text-blue-900'],
      warning: ['border-amber-200', 'bg-amber-50', 'text-amber-900'],
      error: ['border-red-200', 'bg-red-50', 'text-red-900']
    },
    size: {
      small: ['text-sm', 'p-2'],
      medium: ['text-base', 'p-4'],
      large: ['text-lg', 'p-6']
    }
  },
  defaultVariants: {
    variant: 'warning',
    size: 'medium'
  }
})
