import { ButtonHTMLAttributes, PropsWithChildren } from 'react'

export interface ButtonProps
  extends PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement>> {
  className?: string
}
