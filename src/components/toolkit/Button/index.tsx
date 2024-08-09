import { LoadingIcon } from './icons'
import { ButtonProps } from './types'
import { buttonVariants } from './variance'

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  buttonSize = 'base',
  className = '',
  isLoading = false,
  loadingText,
  type = 'button',
  disabled,
  ...props
}) => {
  return (
    <button
      className={`${
        variant !== 'custom'
          ? buttonVariants({ variant, size: buttonSize })
          : ''
      } ${className}`}
      disabled={isLoading || disabled}
      type={type}
      {...props}
    >
      {isLoading ? (
        <span className="flex items-center justify-center gap-x-2">
          <LoadingIcon buttonSize={buttonSize} />{' '}
          {loadingText && <p>{loadingText}</p>}
        </span>
      ) : (
        children
      )}
    </button>
  )
}
