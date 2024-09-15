import React from 'react'

import { ContentCard } from '@/components/common/ContentCard'
import { Container } from '@/components/toolkit/Container'

import { FAKE_DATA } from './data'

export const MyClassRooms: React.FC = () => {
  return (
    <Container
      as="section"
      className="flex flex-col gap-8 py-12 lg:py-20"
      data-cid="logged-homepage-classrooms"
    >
      <article>
        <h2 className="text-lg font-semibold lg:text-2xl">
          Minhas Salas de Aula
        </h2>
        <p className="text-sm text-slate-500">
          Acompanhe as aulas de seus professores e tenha acesso às atividades e
          materiais de aula
        </p>
      </article>
      <ul className="grid grid-cols-1 items-center gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {[...Array(5)].map((_, index) => (
          <ContentCard card={FAKE_DATA} key={index} />
        ))}
      </ul>
    </Container>
  )
}
