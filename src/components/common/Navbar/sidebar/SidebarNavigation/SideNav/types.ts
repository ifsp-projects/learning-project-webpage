import { SetStateAction } from 'react'

export interface SideNavProps {
  isSidebarOpen: boolean
  setIsSidebarOpen: React.Dispatch<SetStateAction<boolean>>
}
