import { Dispatch, SetStateAction } from 'react'

export interface ModalProps {
  children: JSX.Element
  dismissible?: boolean
  fullScreen?: boolean
  hideCloseButton?: boolean
  isOpen: boolean
  onClose?: () => void
  onlyMobileFullScreen?: boolean
  setIsOpen: Dispatch<SetStateAction<boolean>>
  zIndex?: string
}
