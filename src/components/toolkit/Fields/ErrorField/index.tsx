import { ErrorFieldProps } from './types'

export const ErrorField: React.FC<ErrorFieldProps> = ({
  errorMessage,
  centered = false,
  className,
  ...props
}) => {
  return (
    !!errorMessage && (
      <label
        className={`flex items-center gap-1.5 text-sm text-red-500 ${className} ${
          centered ? 'mx-auto' : ''
        }`}
        {...props}
      >
        <svg
          enableBackground="new 0 0 32 32"
          height="16"
          overflow="visible"
          viewBox="0 0 32 32"
          width="16"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g>
            <g>
              <circle cx="16" cy="16" fill="#f87171" r="16"></circle>
              <path d="M14.5 25h3v-3h-3v3zm0-19v13h3V6h-3z" fill="white"></path>
            </g>
          </g>
        </svg>

        <p className="text-left text-sm text-red-400 subpixel-antialiased first-letter:uppercase">
          {errorMessage}
        </p>
      </label>
    )
  )
}
