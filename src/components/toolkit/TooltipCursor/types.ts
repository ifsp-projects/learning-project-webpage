import { PropsWithChildren } from 'react'

export interface TooltipCursorProps extends PropsWithChildren {
  content: string
  delay?: number
  disable?: boolean
}
