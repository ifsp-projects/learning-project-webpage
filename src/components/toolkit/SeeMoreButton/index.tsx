'use client'

import { SeeMoreButtonProps } from './types'

const SeeMoreButton: React.FC<SeeMoreButtonProps> = ({
  onClick,
  className
}) => {
  return (
    <button
      className={`mx-auto mt-12 flex items-center justify-center gap-x-2 font-semibold leading-4 text-indigo-700 transition-colors duration-default ease-in-out hover:text-indigo-800 lg:hover:cursor-pointer ${className}`}
      onClick={() => onClick()}
    >
      <svg
        className="inline transition-colors duration-default ease-in-out hover:text-indigo-800"
        height="20"
        viewBox="0 0 20 20"
        width="20"
      >
        <path
          d="M11 5H9V9H5V11H9V15H11V11H15V9H11V5ZM10 0C4.49 0 0 4.49 0 10C0 15.51 4.49 20 10 20C15.51 20 20 15.51 20 10C20 4.49 15.51 0 10 0ZM10 18C5.59 18 2 14.41 2 10C2 5.59 5.59 2 10 2C14.41 2 18 5.59 18 10C18 14.41 14.41 18 10 18Z"
          fill="#0f766e"
        />
      </svg>
      Ver mais
    </button>
  )
}

export default SeeMoreButton
