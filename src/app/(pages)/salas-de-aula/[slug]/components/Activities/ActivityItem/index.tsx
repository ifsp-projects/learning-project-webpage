import { ActivityIcon } from '../../icons/Activity'
import { ActivityItemProps } from './types'

export const ActivityItem: React.FC<ActivityItemProps> = ({ activity }) => {
  return (
    <div className="flex w-full cursor-pointer items-start justify-between gap-4 border-b border-slate-300 px-4 py-4 transition-all duration-300 hover:bg-slate-100">
      <figure className="mt-1 w-auto rounded-full">
        <ActivityIcon className="h-6 w-6 text-slate-700" />
      </figure>
      <article className="flex w-full flex-1 flex-col gap-1">
        <p className="text-sm font-semibold">
          {activity.title} •{' '}
          <span
            className={`text-sm font-normal ${activity.status ? 'text-indigo-500' : 'text-red-600'}`}
          >
            {activity.status ? 'Concluída' : 'Pendente'}
          </span>
        </p>
        <p className="text-sm text-slate-500">{activity.description}</p>
      </article>
    </div>
  )
}
