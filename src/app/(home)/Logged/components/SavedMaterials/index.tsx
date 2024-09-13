import React from 'react'

import { MaterialCard } from '@/app/(pages)/salas-de-aula/[slug]/components/Materials/MaterialCard'
import { Container } from '@/components/toolkit/Container'

export const SavedMaterials: React.FC = () => {
  return (
    <Container
      as="section"
      className="flex flex-col gap-8 pb-12 lg:pb-20"
      data-cid="logged-homepage-saved-materials"
    >
      <article>
        <h2 className="text-lg font-semibold lg:text-2xl">
          Meus Materiais Salvos
        </h2>
        <p className="text-sm text-slate-500">
          Veja seus materiais na qual você favoritou anteriormente dentro de
          nossa plataforma, eles podem ser pdfs, documentos, ou planilhas
        </p>
      </article>
      <ul className="grid grid-cols-1 items-center gap-6 sm:grid-cols-2 md:grid-cols-3">
        <MaterialCard type="pdf" />
        <MaterialCard type="excel" />
        <MaterialCard type="word" />
        <MaterialCard type="pdf" />
      </ul>
    </Container>
  )
}
