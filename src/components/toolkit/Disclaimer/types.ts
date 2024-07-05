import { VariantProps } from 'class-variance-authority'

import { disclaimerVariants } from './variance'

export interface DisclaimerProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof disclaimerVariants> {}
