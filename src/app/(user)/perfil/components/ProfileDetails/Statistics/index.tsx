import { EmptyList } from "../../icons/EmptyList"
import { StatisticsProps } from "./types"

export const Statistics: React.FC<StatisticsProps> = () => {
  return (
    <section className="rounded-sm border border-slate-300 bg-white p-6">
      <h2 className="font-semibold">Outras Informações</h2>
      <p className="text-sm">
        Veja outros dados sobre o seu perfil de estudante
      </p>
      <div className="mt-16 flex w-full flex-col items-center gap-4">
        <EmptyList />
        <p className="text-sm">Nenhum dado disponível por enquanto</p>
      </div>
    </section>
  )
}
