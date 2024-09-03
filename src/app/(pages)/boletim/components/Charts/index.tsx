import { Container } from '@/components/toolkit/Container'

import { LineColumnChartNotes } from './LineColumnChartsNotes'

export const Charts: React.FC = () => {
  return (
    <Container
      as="section"
      className="flex flex-col gap-8"
      data-cid="analytics"
    >
      <h2 className="text-base font-semibold lg:text-xl">Analytics</h2>
      <div className="relative mb-8 w-full rounded-sm border border-slate-300 bg-white p-4">
        <LineColumnChartNotes />
      </div>
    </Container>
  )
}
