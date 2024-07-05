import { VariantProps } from 'class-variance-authority'

import { spinVariants } from './variance'

export interface SpinProps
  extends React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof spinVariants> {
  size?: 'small' | 'medium' | 'large'
}
