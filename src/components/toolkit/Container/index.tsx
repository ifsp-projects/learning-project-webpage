import { createElement } from 'react'

import { ContainerProps } from './types'

export const Container: React.FC<ContainerProps> = ({
  children,
  className = '',
  wrapperClassName,
  'data-cid': dataCid,
  disableSidePadding,
  container = 'fixed',
  as = 'div',
  ...props
}) => {
  return createElement(
    as,
    {
      className: `scroll-mt-[100px] ${disableSidePadding ? '' : 'px-4'} ${wrapperClassName}`,
      'data-cid': dataCid,
      ...props
    },
    <div
      className={`${container === 'fixed' ? 'mx-auto max-w-6xl' : ''} ${className}`}
    >
      {children}
    </div>
  )
}
