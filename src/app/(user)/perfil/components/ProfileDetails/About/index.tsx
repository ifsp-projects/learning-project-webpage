import { EmptyList } from "../../icons/EmptyList"
import { AboutProps } from "./types"

export const About: React.FC<AboutProps> = () => {
  return (
    <section className="rounded-sm border border-slate-300 bg-white p-6">
      <h2 className="font-semibold">Sobre</h2>
      <p className="text-sm">Fale um pouco sobre você! Isso pode te ajudar em conseguir estágios.</p>
      <div className="mt-16 flex flex-col items-center gap-4 w-full">
        <EmptyList />
        <p className="text-sm">Nenhum dado disponível por enquanto</p>
      </div>
    </section>
  )
}
