import { PdfIcon } from '../../icons/PDF'
import { MATERIAL_CARD_ICONS } from './data'
import { MaterialCardProps } from './types'

export const MaterialCard: React.FC<MaterialCardProps> = ({ type }) => {
  return (
    <div className="flex w-auto max-w-fit border-l-2 border-slate-300 cursor-pointer items-center justify-between gap-4 px-2 transition-all duration-300 hover:bg-slate-100">
      <figure className="w-auto">{MATERIAL_CARD_ICONS[type]}</figure>
      <article className="flex w-full flex-1 flex-col gap-1">
        <p className="line-clamp-1 text-sm">
          Como fazer um ovo frito utilizando html e css
        </p>
        <p className="text-sm text-slate-500">{type.toUpperCase()}</p>
      </article>
    </div>
  )
}
