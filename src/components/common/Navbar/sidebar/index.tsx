'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { Icon } from '@iconify/react'
import { SideNavItem, SideNavItemProps } from './types'

export const MenuItem: React.FC<SideNavItemProps> = ({ item }) => {
  const pathname = usePathname()

  const [subMenuOpen, setSubMenuOpen] = useState<boolean>(false)

  const handleToggleSubMenu = () => {
    setSubMenuOpen(!subMenuOpen)
  }

  return (
    <div className="">
      {item.submenu ? (
        <>
          <button
            onClick={handleToggleSubMenu}
            className={`hover-bg-zinc-100 flex w-full flex-row items-center justify-between rounded-lg p-2 hover:bg-zinc-100 ${
              pathname.includes(item.path) ? 'bg-zinc-100' : ''
            }`}
          >
            <div className="flex flex-row items-center space-x-4">
              <figure>{item.icon}</figure>
              <span className="flex text-xl">{item.title}</span>
            </div>

            <figure className={`${subMenuOpen ? 'rotate-180' : ''} flex`}>
              <Icon icon="lucide:chevron-down" width="24" height="24" />
            </figure>
          </button>

          {subMenuOpen ? (
            <div className="my-2 ml-12 flex flex-col space-y-4">
              {item.subMenuItems?.map((subItem, idx) => {
                return (
                  <Link key={idx} href={subItem.path}>
                    <span>{subItem.title}</span>
                  </Link>
                )
              })}
            </div>
          ) : null}
        </>
      ) : (
        <Link
          href={item.path}
          className={`flex flex-row items-center space-x-4 rounded-lg p-2 hover:bg-zinc-100 ${
            item.path === pathname ? 'bg-zinc-100' : ''
          }`}
        >
          <figure>{item.icon}</figure>
          <span className="flex text-xl">{item.title}</span>
        </Link>
      )}
    </div>
  )
}
