import { Container } from '@/components/toolkit/Container'

import { COLORS_PALLET, PLANS_DATA } from './data'
import { PriceCard } from './PriceCard'
import { PricePlanProps } from './types'

export const Prices: React.FC = () => {
  return (
    <Container
      as="section"
      className="flex flex-col gap-8 py-12 lg:gap-16 lg:py-20"
      data-cid="home-logged-out-services"
      wrapperClassName="bg-slate-100"
    >
      <article className="mx-auto flex max-w-xl flex-col items-center gap-2 lg:gap-4">
        <p className="text-sm font-medium uppercase text-indigo-500">Pricing</p>
        <h1 className="text-2xl font-semibold lg:text-4xl">
          Nossos Planos Oferecidos
        </h1>
        <p className="text-center text-sm">
          Nós fornecemos as melhores features aos nossos usuários. Sempre
          focados na satisfação e experiência em nossa plataforma
        </p>
      </article>
      <ul className="grid h-auto w-full grid-cols-1 gap-8 self-stretch sm:grid-cols-2 lg:grid-cols-3">
        {PLANS_DATA.map((plan: PricePlanProps, index: number) => (
          <PriceCard
            colors={COLORS_PALLET[index]}
            copy={plan}
            key={`${plan.price}-${index}`}
          />
        ))}
      </ul>
      <p className="text-center text-xs text-slate-500">
        * Valores sujeitos a alteração de preço
      </p>
    </Container>
  )
}
