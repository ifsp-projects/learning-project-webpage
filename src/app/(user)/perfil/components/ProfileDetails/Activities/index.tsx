import { EmptyList } from "../../icons/EmptyList"
import { ActivitiesProps } from "./types"

export const Activities: React.FC<ActivitiesProps> = () => {
  return (
    <section className="rounded-sm border border-slate-300 bg-white p-6">
      <h2 className="font-semibold">Atividades</h2>
      <p className="text-sm">Veja quais são suas atividades que estão ativas</p>
      <div className="mt-16 flex w-full flex-col items-center gap-4">
        <EmptyList />
        <p className="text-sm">Nenhum dado disponível por enquanto</p>
      </div>
    </section>
  )
}
