import { LabelFieldProps } from './types'
import { labelVariants } from './variance'

export const LabelField: React.FC<LabelFieldProps> = ({
  id,
  isRequired,
  className,
  variant,
  label,
  error,
  ...props
}) => {
  return label ? (
    <label
      className={labelVariants({
        variant,
        error,
        className
      })}
      htmlFor={`${id}-label`}
      {...props}
    >
      {label}
      {isRequired && <span className="pl-1 text-red-500">&#42;</span>}
    </label>
  ) : null
}
