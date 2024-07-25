import { LabelHTMLAttributes } from 'react'

export interface ErrorFieldProps extends LabelHTMLAttributes<HTMLLabelElement> {
  centered?: boolean
  errorMessage: string
}
