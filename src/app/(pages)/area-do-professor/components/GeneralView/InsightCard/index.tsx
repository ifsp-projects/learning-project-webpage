import { InsightCardProps } from '../types'

export const InsightCard: React.FC<InsightCardProps> = ({ insight }) => {
  return (
    <article className="flex h-full min-h-[100px] w-full flex-col items-center gap-1 rounded-sm border border-slate-300 bg-white p-4">
      <h3 className="text-center text-xl font-semibold lg:text-2xl">
        {insight.title}
      </h3>
      <p className="text-center text-xs">{insight.description}</p>
    </article>
  )
}
