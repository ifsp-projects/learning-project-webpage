import { VariantProps } from 'class-variance-authority'
import { LabelHTMLAttributes } from 'react'

import { labelVariants } from './variance'

export interface LabelFieldProps
  extends LabelHTMLAttributes<HTMLLabelElement>,
    VariantProps<typeof labelVariants> {
  id: string
  isRequired?: boolean
  label?: string
}
