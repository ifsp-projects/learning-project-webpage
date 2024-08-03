import { EmptyList } from "../../icons/EmptyList"
import { ActivityProps } from "./types"

export const Activity: React.FC<ActivityProps> = () => {
  return (
    <section className="rounded-sm border border-slate-300 bg-white p-6">
      <h2 className="font-semibold">Atividade de Higor</h2>
      <p className="text-sm">
        Veja seus últimos comentários e ações realizadas
      </p>
      <div className="mt-16 flex w-full flex-col items-center gap-4">
        <EmptyList />
        <p className="text-sm">Nenhum dado disponível por enquanto</p>
      </div>
    </section>
  )
}
