import { LineColumnChart } from '@/components/common/Charts/LineColumChart'
import { Container } from '@/components/toolkit/Container'

export const Analytics: React.FC = () => {
  return (
    <Container
      as="section"
      className="flex flex-col gap-8"
      data-cid="analytics"
    >
      <h2 className="text-base font-semibold lg:text-xl">Visão Geral</h2>
      <div className="relative w-full rounded-sm border border-slate-300 bg-white p-4">
        <LineColumnChart />
      </div>
    </Container>
  )
}
