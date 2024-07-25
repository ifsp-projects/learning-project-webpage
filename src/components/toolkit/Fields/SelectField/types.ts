import { SelectProps } from '../../Select/types'

export interface SelectFieldProps extends SelectProps {
  errorMessage?: string
  label?: string
  required?: boolean
}
