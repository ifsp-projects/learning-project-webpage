import { Container } from '@/components/toolkit/Container'

import { MESSAGES } from './data'
import { MessageItem } from './MessageItem'
import { Message } from './types'

// TODO = MELHORIAS VISUAIS NESSA SECTION (ESSA É PROVISÓRIA)
export const Notices: React.FC = () => {
  return (
    <Container as="section" data-cid="classroom-notices">
      <section className="flex w-full flex-col gap-8 rounded-sm border border-slate-300 bg-white px-4 py-8">
        <h2 className="text-lg font-semibold lg:text-xl">Avisos Gerais</h2>
        <ul className="flex flex-col">
          {MESSAGES.map((message: Message, index: number) => (
            <MessageItem copy={message} key={`message-${index}`} />
          ))}
        </ul>
      </section>
    </Container>
  )
}
