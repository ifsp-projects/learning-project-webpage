import { IconProps } from '@/types/components/icons'

export const InfoIcon: React.FC<IconProps> = props => {
  return (
    <svg
      id="Layer_1"
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      color="currentColor"
      {...props}
    >
      <defs>
        <style></style>
      </defs>
      <circle
        className="cls-6374f8d9b67f094e4896c63c-1"
        cx="12"
        cy="12"
        r="10.5"
      ></circle>
      <polyline
        className="cls-6374f8d9b67f094e4896c63c-1"
        points="12 16.77 12 10.09 10.09 10.09"
      ></polyline>
      <line
        className="cls-6374f8d9b67f094e4896c63c-1"
        x1="10.09"
        y1="16.77"
        x2="13.91"
        y2="16.77"
      ></line>
      <line
        className="cls-6374f8d9b67f094e4896c63c-1"
        x1="11.05"
        y1="7.23"
        x2="12.95"
        y2="7.23"
      ></line>
    </svg>
  )
}
