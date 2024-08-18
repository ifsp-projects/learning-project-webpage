import { IconProps } from '@/types/components/icons'

export const DropdownArrow: React.FC<IconProps> = props => {
  return (
    <svg
      fill="none"
      height="13"
      viewBox="0 0 22 13"
      width="22"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        clipRule="evenodd"
        d="M21.5657 1.56569L11.0001 12.1314L0.43457 1.56569L1.56595 0.434329L11.0001 9.86863L20.4344 0.434326L21.5657 1.56569Z"
        fill="#334155"
        fillRule="evenodd"
      />
    </svg>
  )
}
