import Tippy from '@tippyjs/react'

import { Disclaimer } from '../Disclaimer'
import { TooltipProps } from './types'

export const Tooltip: React.FC<TooltipProps> = ({
  content,
  children,
  ...props
}) => {
  return (
    <Tippy
      content={
        content ? (
          <Disclaimer size="small" variant="info">
            {content}
          </Disclaimer>
        ) : null
      }
      {...props}
    >
      {children}
    </Tippy>
  )
}
