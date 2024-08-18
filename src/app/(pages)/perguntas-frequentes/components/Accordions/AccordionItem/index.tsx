'use client'

import { useState } from 'react'

import { DropdownArrow } from '../../icons/DropdownArrow'
import { AccordionItemProps } from '../types'

export const AccordionItem: React.FC<AccordionItemProps> = ({ copy }) => {
  const [isQuestionOpen, setIsQuestionOpen] = useState<boolean>(false)

  return (
    <button
      className={`flex w-full cursor-pointer flex-col justify-center rounded-sm border bg-white p-3 ring-1 ring-slate-600 duration-default hover:border-green-500 hover:ring-green-500 lg:items-start lg:p-4`}
      onClick={() => setIsQuestionOpen(!isQuestionOpen)}
    >
      <div
        className={`${
          isQuestionOpen ? 'mb-2' : 'mb-0'
        } flex w-full items-center justify-between transition-all`}
      >
        <p className="text-left text-sm font-semibold transition group-hover:text-green-500 group-hover:brightness-125 lg:text-base">
          {copy.title}
        </p>

        <figure className="ml-2">
          <DropdownArrow
            className={`w-4 transition-all ease-in-out ${
              isQuestionOpen ? 'rotate-0' : '-rotate-90'
            }`}
          />
        </figure>
      </div>

      <div
        className={`animate__animated animate__fadeIn overflow-hidden text-left text-sm transition-all duration-default ease-in-out ${isQuestionOpen ? 'max-h-[200px]' : 'max-h-0'}`}
      >
        <article
          className="text-xs text-slate-500 lg:text-sm"
          dangerouslySetInnerHTML={{ __html: copy.description }}
        />
      </div>
    </button>
  )
}
