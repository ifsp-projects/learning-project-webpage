import { VariantProps } from 'class-variance-authority'
import { HTMLAttributes, ReactNode } from 'react'

import { selectVariants } from './variance'

export interface SelectOption {
  label: ReactNode
  value: string
}

export interface SelectProps
  extends HTMLAttributes<HTMLSelectElement>,
    VariantProps<typeof selectVariants> {
  name: string
  options: SelectOption[]
  placeholder?: string
}
