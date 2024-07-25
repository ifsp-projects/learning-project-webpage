import { Breadcrumb } from '@/components/common/Breadcrumb'
import { Container } from '@/components/toolkit/Container'

import { GENERAL_VIEW_FAKE_DATA } from './data'
import { InsightCard } from './InsightCard'
import { InsightProps } from './types'

export const GeneralView: React.FC = () => {
  return (
    <Container
      as="section"
      className="flex flex-col gap-8 lg:gap-12"
      data-cid="general-view"
    >
      <Breadcrumb
        items={[{ name: 'Área do Professor', href: '/area-do-professor' }]}
      />
      <article className="flex flex-col gap-8">
        <h2 className="text-base font-semibold lg:text-xl">Visão Geral</h2>
        <ul className="flex h-auto w-full flex-col items-center gap-2 self-stretch lg:flex-row">
          {GENERAL_VIEW_FAKE_DATA.map(
            (insight: InsightProps, index: number) => (
              <InsightCard
                insight={insight}
                key={`${insight.title}-${index}`}
              />
            )
          )}
        </ul>
      </article>
    </Container>
  )
}
