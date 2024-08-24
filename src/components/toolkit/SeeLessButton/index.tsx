'use client'

import { SeeLessButtonProps } from './types'

export const SeeLessButton: React.FC<SeeLessButtonProps> = ({
  elementId = null,
  onClick,
  className = ''
}) => {
  const handleClickScroll = () => {
    const idToUse = typeof elementId === 'string' ? elementId : ''

    const element = document.getElementById(idToUse)

    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    onClick()
  }

  return (
    <button
      className={`mx-auto mt-12 flex items-center justify-center gap-x-2 font-semibold leading-4 text-indigo-700 transition-colors duration-default ease-in-out hover:text-indigo-800 lg:hover:cursor-pointer ${className}`}
      onClick={() => (elementId ? handleClickScroll() : onClick())}
    >
      <svg
        className="inline transition-colors duration-default ease-in-out lg:hover:text-indigo-800"
        height="21"
        viewBox="0 0 20 21"
        width="20"
      >
        <path
          d="M11 9.5H9H5V11.5H9H11H15V9.5H11ZM10 0.5C4.49 0.5 0 4.99 0 10.5C0 16.01 4.49 20.5 10 20.5C15.51 20.5 20 16.01 20 10.5C20 4.99 15.51 0.5 10 0.5ZM10 18.5C5.59 18.5 2 14.91 2 10.5C2 6.09 5.59 2.5 10 2.5C14.41 2.5 18 6.09 18 10.5C18 14.91 14.41 18.5 10 18.5Z"
          fill="#0f766e"
        />
      </svg>
      Ver menos
    </button>
  )
}
