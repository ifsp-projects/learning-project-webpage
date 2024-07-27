'use client'

import { useState } from 'react'
import { HamburgerButton } from '../../HamburgerButton'
import { Drawer } from '../Drawer'
import Link from 'next/link'
import { IoLogoGithub } from 'react-icons/io5'
import { FaLinkedin } from 'react-icons/fa6'

export const Sidebar: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(true)

  return (
    <div className="ml-6">
      <HamburgerButton
        isOpen={isSidebarOpen}
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        variant="primary"
      />

      {isSidebarOpen ? (
        <Drawer setIsOpen={setIsSidebarOpen} isOpen={isSidebarOpen}>
          testando
        </Drawer>
      ) : null}
    </div>
  )
}
