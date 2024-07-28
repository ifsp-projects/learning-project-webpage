'use client'

import { HamburgerButton } from '../../HamburgerButton'
import { Drawer } from '../Drawer'
import { SidebarProps } from './types'

export const Sidebar: React.FC<SidebarProps> = ({
  isSidebarOpen,
  setIsSidebarOpen
}) => {
  return (
    <div className="ml-6">
      <HamburgerButton
        isOpen={isSidebarOpen}
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        variant="primary"
      />

      {isSidebarOpen ? (
        <Drawer isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen}>
          testando
        </Drawer>
      ) : null}
    </div>
  )
}
