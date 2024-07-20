import { Modal } from '@/components/toolkit/Modal'

import { Form } from './Form'
import { CreateClassroomModalProps } from './types'

export const CreateClassroomModal: React.FC<CreateClassroomModalProps> = ({
  isOpen,
  setIsOpen
}) => {
  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <div className="flex w-[720px] flex-col gap-4 bg-white px-4 py-12 lg:gap-6 lg:px-8">
        <article>
          <h2 className="font-semibold">Adicionar nova sala de aula</h2>
          <p className="text-sm text-slate-500">
            Preencha os dados necessários para criar uma sala de aula
          </p>
        </article>
        <Form />
      </div>
    </Modal>
  )
}
