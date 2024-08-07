'use client'

import { useState } from 'react'
import { FaInfo } from 'react-icons/fa'

import { ArrowDropdown } from '../../icons/ArrowDropdown'
import { MessageItemProps } from './types'

export const MessageItem: React.FC<MessageItemProps> = ({ copy }) => {
  const [isQuestionOpen, setIsQuestionOpen] = useState<boolean>(false)

  return (
    <button
      className="flex w-full cursor-pointer flex-col justify-center gap-2 border-b border-slate-300 pb-2 pt-4 lg:items-start"
      onClick={() => setIsQuestionOpen(!isQuestionOpen)}
    >
      <div
        className={`${
          isQuestionOpen ? 'mb-2' : 'mb-0'
        } flex w-full items-center justify-between transition-all`}
      >
        <p
          className={`flex items-center gap-4 text-left text-base font-normal ${
            isQuestionOpen ? 'font-medium' : ''
          } transition group-hover:text-green-600 group-hover:brightness-125`}
        >
          <figure className="flex h-auto w-auto items-center justify-center rounded-full bg-slate-100 p-2">
            <FaInfo fill="#64748b" size={12} />
          </figure>
          {copy.title}
        </p>

        <figure className="ml-2">
          <ArrowDropdown
            className={`w-4 transition-all ease-in-out ${
              isQuestionOpen
                ? 'rotate-180 text-green-600'
                : 'rotate-90 text-slate-700'
            }`}
          />
        </figure>
      </div>
      <div
        className={`overflow-hidden text-left text-sm transition-all duration-default ease-in-out ${isQuestionOpen ? 'max-h-[300px]' : 'max-h-0'}`}
      >
        <div
          className="text-sm text-slate-500"
          dangerouslySetInnerHTML={{ __html: copy.description }}
        />
      </div>
    </button>
  )
}
