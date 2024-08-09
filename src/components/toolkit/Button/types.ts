import { PropsWithChildren } from 'react'

type ButtonVariantProp =
  | 'primary'
  | 'primaryOutline'
  | 'secondary'
  | 'secondaryOutline'
  | 'danger'
  | 'custom'
  | 'tmdPrimary'
  | 'tmdSecondary'

type ButtonSizeProp = 'xs' | 'sm' | 'base' | 'lg' | 'xl' | '2xl'

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    PropsWithChildren {
  buttonSize?: ButtonSizeProp
  className?: string
  isLoading?: boolean
  loadingText?: string
  variant?: ButtonVariantProp
}
