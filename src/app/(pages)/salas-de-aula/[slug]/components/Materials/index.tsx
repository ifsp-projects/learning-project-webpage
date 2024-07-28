import { Container } from '@/components/toolkit/Container'

import { MaterialCard } from './MaterialCard'

export const Materials: React.FC = () => {
  return (
    <Container as="section" data-cid="classroom-materials">
      <section className="flex w-full flex-col gap-8 rounded-sm border border-slate-300 bg-white px-4 py-8">
        <h2 className="text-lg font-semibold lg:text-xl">
          Materiais Complementares
        </h2>
        <div className="grid grid-cols-1 gap-y-2 sm:grid-cols-2 lg:grid-cols-3">
          <MaterialCard type="pdf" />
          <MaterialCard type="excel" />
          <MaterialCard type="word" />
          <MaterialCard type="pdf" />
        </div>
      </section>
    </Container>
  )
}
