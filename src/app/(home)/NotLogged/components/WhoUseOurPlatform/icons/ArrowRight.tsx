import { IconProps } from '@/types/components/icons'

export const ArrowRight: React.FC<IconProps> = props => {
  return (
    <svg
      color="currentColor"
      data-name="Layer 1"
      height="24"
      id="Layer_1"
      strokeWidth="1.5"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <defs>
        <style>.cls-63ce7424ea57ea6c8380054f-1</style>
      </defs>
      <circle
        className="cls-63ce7424ea57ea6c8380054f-1"
        cx="12"
        cy="12"
        r="10.5"
        stroke="currentColor"
      ></circle>
      <line
        className="cls-63ce7424ea57ea6c8380054f-1"
        fill="currentColor"
        x1="6.27"
        x2="17.73"
        y1="12"
        y2="12"
      ></line>
      <polyline
        className="cls-63ce7424ea57ea6c8380054f-1"
        fill="currentColor"
        points="12.96 7.23 17.73 12 12.96 16.77"
      ></polyline>
    </svg>
  )
}
