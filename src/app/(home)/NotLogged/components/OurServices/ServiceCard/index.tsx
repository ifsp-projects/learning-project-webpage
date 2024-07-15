import React from 'react'
import { ServiceCardProps } from '../types'
import { SERVICES_ICONS } from '../data'

export const ServiceCard: React.FC<ServiceCardProps> = ({ copy }) => {
  return (
    <li className="flex flex-col gap-4 items-center rounded-sm border border-slate-300 p-4 shadow">
      <figure className="bg-teal-50 rounded-full p-4">
        {SERVICES_ICONS[copy.icon]}
      </figure>
      <article className='flex flex-col items-center gap-2'>
        <h3 className='text-lg text-center font-semibold lg:text-xl'>{copy.title}</h3>
        <p className='text-sm text-center'>{copy.description}</p>
      </article>
    </li>
  )
}
