import { SchoolBook } from '../../icons/SchoolBook'
import { ClassroomCardProps } from './types'

export const ClassroomCard: React.FC<ClassroomCardProps> = ({ copy }) => {
  return (
    <div className="flex cursor-pointer flex-col gap-3 rounded-md border border-slate-300 p-4 transition-all duration-300 hover:bg-slate-50">
      <article className="flex items-center gap-3">
        <SchoolBook className="h-4 w-4 text-blue-500" />
        <p className="text-sm font-semibold">{copy.title}</p>
      </article>
      <p className="text-xs text-slate-500">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus harum
        corporis odio tempora, esse vitae, inventore amet dolores veritatis
        officiis dicta nobis quam repellat, eaque ea sunt quasi quas nulla.
      </p>
      <p className="text-xs font-semibold text-indigo-500">
        {copy.modules} módulos
      </p>
    </div>
  )
}
