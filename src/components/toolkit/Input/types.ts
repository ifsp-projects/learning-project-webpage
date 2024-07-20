import { VariantProps } from 'class-variance-authority'
import { InputHTMLAttributes } from 'react'

import { inputVariants } from './variance'

export interface InputProps
  extends InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof inputVariants> {}
