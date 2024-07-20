import { Dispatch, SetStateAction } from 'react'

export interface CreateClassroomModalProps {
  isOpen: boolean
  setIsOpen: Dispatch<SetStateAction<boolean>>
}
