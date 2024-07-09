'use client'

import { useState } from 'react'
import { HamburgerButton } from '../../HamburgerButton'
import ModalContainer from '../ModalContainer'

export const Sidebar: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false)

  return (
    <div className="ml-6">
      <HamburgerButton
        isOpen={isSidebarOpen}
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        variant="primary"
      />
      {isSidebarOpen ? (
        <ModalContainer setShowMenu={setIsSidebarOpen} showMenu={isSidebarOpen}>
          testando
        </ModalContainer>
      ) : null}
    </div>
  )
}
