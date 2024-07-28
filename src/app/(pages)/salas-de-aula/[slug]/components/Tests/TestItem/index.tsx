import { TestItemProps } from './types'

export const TestItem: React.FC<TestItemProps> = ({ test }) => {
  return (
    <div className="flex cursor-pointer flex-col gap-4 border-l-2 border-slate-300 bg-white pl-2 transition-all duration-300 hover:bg-slate-100 lg:gap-6">
      <article className="flex flex-col gap-2">
        <h2 className="line-clamp-1 text-sm font-semibold">{test.title}</h2>
        <p className="line-clamp-3 text-sm">{test.description}</p>
      </article>
      <article className="flex w-full justify-between gap-2">
        <div className="w-full">
          <p className="text-sm text-slate-500">Prazo: {test.date}</p>
        </div>
        <div className="flex w-full justify-end">
          <p
            className={`text-sm ${test.status ? 'text-teal-600' : 'text-red-600'}`}
          >
            {test.status ? 'Avaliado' : 'Pendente'}
          </p>
        </div>
      </article>
    </div>
  )
}
