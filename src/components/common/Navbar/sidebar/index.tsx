'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useState } from 'react'

import { Icon } from '@iconify/react'

import { SideNavItemProps } from './types'

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
            className={`hover-bg-zinc-100 flex w-full flex-row items-center justify-between rounded-lg p-2 hover:bg-zinc-100 ${
              pathname.includes(item.path) ? 'bg-zinc-100' : ''
            }`}
            onClick={handleToggleSubMenu}
          >
            <div className="flex flex-row items-center space-x-4">
              <figure>{item.icon}</figure>
              <span className="flex text-xl">{item.title}</span>
            </div>

            <figure className={`${subMenuOpen ? 'rotate-180' : ''} flex`}>
              <Icon height="24" icon="lucide:chevron-down" width="24" />
            </figure>
          </button>

          {subMenuOpen ? (
            <div className="my-2 ml-12 flex flex-col space-y-4">
              {item.subMenuItems?.map((subItem, idx) => {
                return (
                  <Link href={subItem.path} key={idx}>
                    <span>{subItem.title}</span>
                  </Link>
                )
              })}
            </div>
          ) : null}
        </>
      ) : (
        <Link
          className={`flex flex-row items-center space-x-4 rounded-lg p-2 hover:bg-zinc-100 ${
            item.path === pathname ? 'bg-zinc-100' : ''
          }`}
          href={item.path}
        >
          <figure>{item.icon}</figure>
          <span className="flex text-xl">{item.title}</span>
        </Link>
      )}
    </div>
  )
}
