import { PropsWithChildren } from "react";

export interface MiniNavbarProps extends PropsWithChildren{
    showMenu: boolean
    setShowMenu(arg: boolean): void
  }