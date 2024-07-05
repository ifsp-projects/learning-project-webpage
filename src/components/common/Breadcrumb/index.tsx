import Link from 'next/link'
import { Fragment, createElement } from 'react'

import { BreadcrumbProps } from './types'
import { breadcrumbVariants } from './variance'

export const Breadcrumb: React.FC<BreadcrumbProps> = ({
  variant,
  className,
  items = [],
  disableAnchor,
  disableLineWrap,
  ...props
}) => {
  return (
    <div
      className={breadcrumbVariants({
        variant,
        className
      })}
      {...props}
      title={items.map(item => item.name).join(' > ')}
    >
      <figure className="rounded-sm p-0.5">
        {/* <BasicUIHome className="w-4" /> */}
        icone de home aqui dps
      </figure>
      {items.map((item, index) => (
        <Fragment key={`${item.name}-${index}`}>
          {/* <ChevronDown className="w-3 -rotate-90" />
          {createElement(
            item.href && !disableAnchor ? Link : 'p',
            {
              href: item.href,
              className: `w-fit ${disableLineWrap ? 'flex-1' : ''} overflow-hidden text-ellipsis whitespace-nowrap text-sm ${item.href ? 'hover:underline' : ''}`
            },
            item.name
          )} */}
          Adicionar depois os icones do react
        </Fragment>
      ))}
    </div>
  )
}
