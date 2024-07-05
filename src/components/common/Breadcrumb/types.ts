import { VariantProps } from 'class-variance-authority'
import { HTMLAttributes } from 'react'

import { breadcrumbVariants } from './variance'

export interface BreadcrumbItem {
  href?: string
  name: string
}

export interface BreadcrumbProps
  extends VariantProps<typeof breadcrumbVariants>,
    HTMLAttributes<HTMLDivElement> {
  disableAnchor?: boolean
  disableLineWrap?: boolean
  items: BreadcrumbItem[]
}
