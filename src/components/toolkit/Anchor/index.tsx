import Link from 'next/link'

import { AnchorProps } from './types'
import { anchorVariants } from './variance'

export const Anchor: React.FC<AnchorProps> = ({
  children,
  variant = 'primary',
  anchorStyle = 'button',
  anchorSize = 'base',
  className = '',
  href,
  target = '_self',
  ...props
}) => {
  const inlineTextStyle =
    'hover:underline transition-all cursor-pointer max-w-fit'

  const buttonStyle =
    variant !== 'custom' ? anchorVariants({ variant, size: anchorSize }) : ''

  return target === '_blank' || href.startsWith('#') ? (
    <a
      className={`${className} ${
        anchorStyle === 'button' ? buttonStyle : inlineTextStyle
      }`}
      href={href}
      target={target === '_self' ? '_self' : '_blank'}
      {...props}
    >
      {children}
    </a>
  ) : (
    <Link
      className={`${className} ${
        anchorStyle === 'button' ? buttonStyle : inlineTextStyle
      }`}
      href={href}
      {...props}
    >
      {children}
    </Link>
  )
}
