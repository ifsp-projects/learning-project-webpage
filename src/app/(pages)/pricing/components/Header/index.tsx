import { HalfImageBanner } from '@/components/common/HalfImageBanner'

export const Header: React.FC = () => {
  return (
    <HalfImageBanner
      image={{
        src: 'https://images.unsplash.com/photo-1643199011202-ef2d00dd8d60?q=80&w=2671&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        alt: 'University Classroom'
      }}
      className="bg-white"
    >
      <header className="flex w-full flex-col gap-8">
        <article className="flex flex-col gap-2">
          <p className="text-sm font-semibold uppercase text-indigo-500 lg:text-base">
            Learning Project
          </p>
          <h2 className="text-center text-2xl font-semibold lg:text-left lg:text-4xl">
            Faça parte da maior plataforma <br />
            gerenciadora de ensino mais <br />
            moderna do país!
          </h2>
          <p className="mt-2 text-center text-sm lg:text-left">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae sed
            possimus eos, corporis repellendus facilis, et hic deserunt corrupti
            expedita id quasi aperiam laudantium dolor cupiditate deleniti
            exercitationem saepe ut!
          </p>
        </article>
        <article>
          <p className="">
            * Colocar um formulário de contato aqui futuramente
          </p>
        </article>
      </header>
    </HalfImageBanner>
  )
}
