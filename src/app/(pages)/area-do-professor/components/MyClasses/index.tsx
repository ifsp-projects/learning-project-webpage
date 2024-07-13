'use client'

import { Container } from '@/components/toolkit/Container'
import { ContentCard } from '@/components/common/ContentCard'
import { FAKE_DATA } from './data'
import { SkeletonContentCard } from '@/components/toolkit/SkeletonContentCard'
import { useEffect, useState } from 'react'

export const MyClasses: React.FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <Container
      as="section"
      data-cid="my-classes"
      className="flex flex-col gap-8"
    >
      <article>
        <h2 className="text-lg font-semibold lg:text-2xl">Aulas que leciono</h2>
        <p className="text-sm text-slate-500">
          Veja mais informações sobre as aulas lecionadas por você, veja quais
          alunos fazem parte das turmas, seus respectivos desempenhos e muitos
          mais
        </p>
      </article>
      <ul className="grid grid-cols-1 items-center gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {isLoading ? (
          <>
            <SkeletonContentCard />
            <SkeletonContentCard />
            <SkeletonContentCard />
            <SkeletonContentCard />
          </>
        ) : (
          <>
            <ContentCard card={FAKE_DATA} />
            <ContentCard card={FAKE_DATA} />
            <ContentCard card={FAKE_DATA} />
            <ContentCard card={FAKE_DATA} />
          </>
        )}
      </ul>
    </Container>
  )
}
