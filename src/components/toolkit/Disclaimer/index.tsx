import { DisclaimerProps } from './types'
import { disclaimerVariants } from './variance'

export const Disclaimer: React.FC<DisclaimerProps> = ({
  variant,
  size,
  children,
  className,
  ...props
}) => {
  return (
    <div
      className={disclaimerVariants({
        variant,
        size,
        className
      })}
      data-cid="disclaimer"
      {...props}
    >
      {children}
    </div>
  )
}
