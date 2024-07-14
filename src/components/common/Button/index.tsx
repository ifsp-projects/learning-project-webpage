import React from 'react'
import { ButtonProps } from './types'

export const Button: React.FC<ButtonProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <button
      className={`w-auto max-w-fit rounded-[4px] bg-gradient-to-br from-teal-600 to-teal-500 px-6 py-2 text-sm text-white transition-all duration-300 hover:brightness-105 md:text-base ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}
