import { forwardRef } from 'react'

import { InputProps } from './types'
import { inputVariants } from './variance'

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ variant, error, className, ...props }, ref) => {
    return (
      <input
        className={inputVariants({
          variant,
          error,
          className
        })}
        ref={ref}
        {...props}
      />
    )
  }
)

Input.displayName = 'Input'
