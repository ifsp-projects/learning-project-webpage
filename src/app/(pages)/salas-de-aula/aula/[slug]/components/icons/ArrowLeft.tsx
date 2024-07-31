import { IconProps } from '@/types/components/icons'

export const ArrowLeft: React.FC<IconProps> = props => {
  return (
    <svg
      fill="none"
      viewBox="0 0 14 9"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M13 8L7 2L0.999999 8" stroke="#64748b" strokeWidth="1.6" />
    </svg>
  )
}
