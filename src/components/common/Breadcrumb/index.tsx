import Link from 'next/link'
import { Fragment, createElement } from 'react'
import { GoChevronRight } from 'react-icons/go'
import { IoHomeOutline } from 'react-icons/io5'

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
        <IoHomeOutline />
      </figure>
      {items.map((item, index) => (
        <Fragment key={`${item.name}-${index}`}>
          <GoChevronRight fill="#64748b" width={12} />
          {createElement(
            item.href && !disableAnchor ? Link : 'p',
            {
              href: item.href || '/',
              className: `w-fit ${disableLineWrap ? 'flex-1' : ''} font-light text-slate-500 overflow-hidden text-ellipsis whitespace-nowrap text-xs ${item.href ? 'hover:underline' : ''}`
            },
            item.name
          )}
        </Fragment>
      ))}
    </div>
  )
}
