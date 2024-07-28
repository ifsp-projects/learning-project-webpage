import { Container } from '@/components/toolkit/Container'

import { AVAILABLE_TESTS } from './data'
import { TestItem } from './TestItem'
import { Test } from './types'

export const Tests: React.FC = () => {
  return (
    <Container as="section" data-cid="classroom-testes">
      <section className="flex w-full flex-col gap-8 rounded-sm border border-slate-300 bg-white px-4 py-8">
        <h2 className="text-lg font-semibold lg:text-xl">Avaliações</h2>
        <div className="grid grid-cols-1 gap-x-2 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
          {AVAILABLE_TESTS.map((test: Test, index: number) => (
            <TestItem key={`${test.title}-${index}`} test={test} />
          ))}
        </div>
      </section>
    </Container>
  )
}
