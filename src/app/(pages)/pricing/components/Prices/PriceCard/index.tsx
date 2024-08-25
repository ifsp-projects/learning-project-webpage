import { Button } from '@/components/toolkit/Button'
import { formatCurrency } from '@/utils/getters/getFormattedCurrency'

import { PriceCardProps } from './types'

export const PriceCard: React.FC<PriceCardProps> = ({ colors, copy }) => {
  return (
    <div className="flex flex-col">
      <hr className={`h-2 w-full rounded-t-sm ${colors.className}`} />
      <li className="flex h-full w-full flex-col items-center gap-4 rounded-b-sm bg-white p-4 shadow lg:gap-8 lg:p-8">
        <article className="flex flex-col items-center gap-2">
          <p
            className={`rounded-full px-2 py-1 text-center text-xs font-medium uppercase ${colors.background} ${colors.text}`}
          >
            {copy.title}
          </p>
          <p className="text-center text-2xl lg:text-3xl">
            {formatCurrency(copy.price)}/mês
          </p>
          <p className="text-center text-xs text-slate-500">
            {copy.description}
          </p>
        </article>
        <ul className="flex h-[320px] flex-col gap-2 overflow-hidden">
          {copy.features.map((feature: string, index: number) => (
            <li className="text-sm" key={`${feature}-${index}`}>
              • {feature}{' '}
            </li>
          ))}
        </ul>
        <Button className="min-w-full md:text-sm">Assinar agora</Button>
      </li>
    </div>
  )
}
