import { MATERIAL_CARD_ICONS } from './data'
import { MaterialCardProps } from './types'

export const MaterialCard: React.FC<MaterialCardProps> = ({ type }) => {
  return (
    <div className="flex w-auto max-w-fit cursor-pointer items-start justify-between gap-4 px-4 py-2 transition-all duration-300 hover:bg-slate-100">
      <figure className="mt-1 w-auto">{MATERIAL_CARD_ICONS[type]}</figure>
      <article className="flex w-full flex-1 flex-col gap-1">
        <p className="text-xs text-slate-500">{type.toUpperCase()}</p>
        <p className="line-clamp-2 text-sm">
          Como fazer um ovo frito utilizando html e css -{' '}
          <span className="text-sm text-slate-500">5,2mb</span>
        </p>
      </article>
    </div>
  )
}
