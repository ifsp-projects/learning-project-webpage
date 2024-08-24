import React from 'react'

import { SERVICES_ICONS } from '../data'
import { ServiceCardProps } from '../types'

export const ServiceCard: React.FC<ServiceCardProps> = ({ copy }) => {
  return (
    <li className="flex flex-col items-center gap-4 rounded-sm border border-slate-300 p-4 shadow">
      <figure className="rounded-full bg-indigo-50 p-4">
        {SERVICES_ICONS[copy.icon]}
      </figure>
      <article className="flex flex-col items-center gap-2">
        <p className="text-center text-lg font-semibold lg:text-xl">
          {copy.title}
        </p>
        <p className="text-center text-sm">{copy.description}</p>
      </article>
    </li>
  )
}
