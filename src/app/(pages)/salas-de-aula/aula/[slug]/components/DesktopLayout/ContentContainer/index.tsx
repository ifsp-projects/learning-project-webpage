import { Breadcrumb } from '@/components/common/Breadcrumb'
import { YoutubeVideoPlayer } from '@/components/common/YoutubeVideoPlayer'

export const ContentContainer: React.FC = () => {
  return (
    <section className="flex w-full flex-1 flex-col gap-4 p-6">
      <Breadcrumb
        items={[
          { name: 'Salas de Aula', href: '#' },
          { name: 'Algoritmos e Programaçãoo', href: '#' }
        ]}
      />
      <YoutubeVideoPlayer video="https://www.youtube.com/watch?v=9EeAELbtwzE&t=1s" />
      <article className="flex flex-col gap-4">
        <h2 className="text-xl font-semibold">Introdução a funções em C++</h2>
        <p className="text-sm font-light text-slate-500">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, id ea!
          Tenetur similique non voluptate voluptas. Error enim ipsa esse aut
          animi, quaerat iusto!
        </p>
        <div className="mt-4 flex w-full items-center justify-between lg:mt-8">
          <article className="flex w-full items-center">
            <p className="text-sm">
              Professor:{' '}
              <span className="text-sm text-indigo-500">Edivaldo Serafim</span>
            </p>
          </article>
          <div className="flex w-full justify-end">
            <button className="rounded-sm bg-indigo-500 px-4 py-2 text-sm text-white">
              Baixar Aula
            </button>
          </div>
        </div>
      </article>
    </section>
  )
}
