import { Tabs } from '@radix-ui/themes'

import { TableNote } from '../Table'
import { TabProps } from './types'

export const Tab: React.FC<TabProps> = () => {
  return (
    <>
      <h2 className="font-semibold">Informações Escolares</h2>
      <section className="mb-10 rounded-sm border border-slate-300 bg-white p-6">
        <Tabs.Root defaultValue="Notas">
          <Tabs.List size="2">
            <Tabs.Trigger value="Notas">Notas</Tabs.Trigger>
            <Tabs.Trigger value="Dados">Dados</Tabs.Trigger>
            <Tabs.Trigger value="Teste">Teste</Tabs.Trigger>
          </Tabs.List>
          <Tabs.Content value="Notas">
            <TableNote />
          </Tabs.Content>
          <Tabs.Content value="Dados">
            <p>Dados, fazer depois</p>
          </Tabs.Content>
          <Tabs.Content value="Teste">
            <p>Teste, fazer depois</p>
          </Tabs.Content>
        </Tabs.Root>
        <div className="mt-16 flex w-full flex-col items-center gap-4"></div>
      </section>
    </>
  )
}
