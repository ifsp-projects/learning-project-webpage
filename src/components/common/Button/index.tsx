import React from 'react'
import { ButtonProps } from './types'

export const Button: React.FC<ButtonProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <button
      className={`w-auto max-w-fit rounded-sm bg-gradient-to-br from-green-600 to-green-500 px-4 py-1 text-sm text-white transition-all duration-300 hover:brightness-105 md:text-base ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}
