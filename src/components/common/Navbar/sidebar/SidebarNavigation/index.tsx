'use client'

import { HamburgerButton } from "@/components/common/HamburgerButton"
import ModalContainer from "@/components/common/ModalContainer"
import Link from "next/link"
import { useState } from "react"
import { SIDENAV_ITEMS } from "../data"
import { MenuItem } from ".."


export const SidebarNavigation: React.FC = () => {
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
          <div className="flex w-full flex-col space-y-6">
            <Link
              href="/"
              className="flex h-12 w-full flex-row items-center justify-center space-x-3 border-b border-zinc-200 md:justify-start md:px-6"
            >
              <span className="h-7 w-7 rounded-lg bg-zinc-300" />
              <span className="hidden text-xl md:flex">Logo</span>
            </Link>

            <div className="flex flex-col space-y-2  md:px-6 ">
              {SIDENAV_ITEMS.map((item, idx) => {
                return <MenuItem key={idx} item={item} />
              })}
            </div>
          </div>
        </ModalContainer>
      ) : null}
    </div>
  )
}
