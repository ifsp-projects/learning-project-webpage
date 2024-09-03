import React from 'react'
import { GrNotes } from 'react-icons/gr'

export const Card: React.FC = () => {
  return (
    <li className="flex flex-col items-center gap-4 rounded-sm border border-slate-300 p-4 shadow">
      <figure className="rounded-full bg-indigo-50 p-4">
        <GrNotes />
      </figure>
      <article className="flex flex-col items-center gap-2">
        <p className="text-center text-lg font-semibold lg:text-xl">Notas</p>
        <p className="text-center text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
          explicabo expedita ratione voluptates placeat necessitatibus eveniet
          exercitationem tenetur esse pariatur? Consectetur delectus vel animi
          fugiat officia pariatur deserunt maiores tempora.
        </p>
      </article>
    </li>
  )
}
