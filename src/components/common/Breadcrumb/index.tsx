import Link from 'next/link'
import { Fragment, createElement } from 'react'

import { BreadcrumbProps } from './types'
import { breadcrumbVariants } from './variance'

import { IoHomeOutline } from 'react-icons/io5'
import { GoChevronRight } from 'react-icons/go'

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
          <GoChevronRight width={12} fill="#64748b" />
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
