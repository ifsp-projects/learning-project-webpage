import { PropsWithChildren } from 'react'

export interface ModalContainerProps extends PropsWithChildren {
  showMenu: boolean
  setShowMenu(arg: boolean): void
}
