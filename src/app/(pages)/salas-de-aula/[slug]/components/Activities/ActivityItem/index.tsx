import { HiOutlineDocumentText } from 'react-icons/hi2'

import { ActivityItemProps } from './types'

export const ActivityItem: React.FC<ActivityItemProps> = ({ activity }) => {
  return (
    <div className="flex w-full items-start justify-between gap-4">
      <figure
        className={`w-auto rounded-full p-2 ${activity.status ? 'bg-teal-100' : 'bg-slate-100'}`}
      >
        <HiOutlineDocumentText
          fill={activity.status ? '#0d9488' : '#374151'}
          size={20}
        />
      </figure>
      <article className="flex w-full flex-1 flex-col gap-1">
        <p className="text-sm font-semibold">{activity.title}</p>
        <p className="text-sm">{activity.description}</p>
      </article>
    </div>
  )
}
