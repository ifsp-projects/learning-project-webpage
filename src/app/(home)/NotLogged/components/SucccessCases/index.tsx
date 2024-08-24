import { Container } from '@/components/toolkit/Container'

import { SUCCESS_CASES_DATA } from './data'
import { SuccessCaseCard } from './SuccessCaseCard'
import { SuccessCaseProps } from './types'

export const SuccessCases: React.FC = () => {
  return (
    <Container
      as="section"
      className="flex flex-col gap-8 py-12 lg:gap-16 lg:py-20"
      data-cid="home-success-cases"
      wrapperClassName="bg-slate-100"
    >
      <h2 className="text-2xl font-semibold lg:text-4xl">Casos de Sucesso</h2>
      <article className="grid h-auto w-full grid-cols-1 gap-8 self-stretch md:grid-cols-2 lg:grid-cols-3">
        {SUCCESS_CASES_DATA.map(
          (successCase: SuccessCaseProps, index: number) => (
            <SuccessCaseCard
              copy={successCase}
              key={`${successCase.title}-${index}`}
            />
          )
        )}
      </article>
    </Container>
  )
}
