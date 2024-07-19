import { PropsWithChildren } from 'react'

export interface ModalContainerProps extends PropsWithChildren {
  setShowMenu(arg: boolean): void
  showMenu: boolean
}
