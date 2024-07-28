import { FaInfo } from 'react-icons/fa6'

import { MessageItemProps } from '../types'

export const MessageItem: React.FC<MessageItemProps> = ({ message }) => {
  return (
    <li className="flex w-full items-start justify-between gap-4">
      <figure className="flex h-auto w-auto items-center justify-center rounded-full bg-red-100 p-2">
        <FaInfo fill="#dc2626" size={12} />
      </figure>
      <article className="flex w-full flex-1 flex-col gap-1">
        <p className="text-sm text-slate-500">{message.creator}</p>
        <p className="text-sm">{message.message}</p>
      </article>
    </li>
  )
}
