import Image from 'next/image'

import { Container } from '@/components/toolkit/Container'

import { IoIosSearch } from 'react-icons/io'
import { FaBell } from 'react-icons/fa'
import { IoSettingsSharp } from 'react-icons/io5'
import { BsCalendar3 } from 'react-icons/bs'
import { SidebarNavigation } from '../Sidebar/SidebarNavigation'

export const DesktopNavbarLayout: React.FC = () => {
  return (
    <Container
      className="hidden w-full px-12 py-4 lg:block"
      wrapperClassName="border-b border-slate-100"
      data-cid="desktop-navbar"
    >
      <nav className="flex w-full items-center gap-4 text-white">
        <SidebarNavigation />
        <div className="flex w-full gap-4">
          <div className="relative flex w-full">
            <figure className="pointer-events-none absolute left-4 top-1/2 z-10 w-5 -translate-y-1/2 text-slate-200">
              <IoIosSearch size={24} fill="#334155" />
            </figure>
            <input
              type="text"
              name="search"
              id="search"
              autoComplete="off"
              className="w-full rounded-sm bg-slate-700 bg-opacity-10 px-3 py-2 pl-12 text-base outline-none duration-default focus:border-blue-400 focus:ring-2 focus:ring-blue-400"
            />
          </div>
        </div>
        <div className="flex w-full items-center justify-end gap-6">
          <FaBell className="cursor-pointer" size={20} fill="#334155" />
          <BsCalendar3 className="cursor-pointer" size={20} fill="#334155" />
          <IoSettingsSharp
            className="cursor-pointer"
            size={20}
            fill="#334155"
          />
          <figure>
            <Image
              src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
              alt="undefined-profile-picture"
              width={35}
              height={35}
              className="cursor-pointer rounded-full"
            />
          </figure>
        </div>
      </nav>
    </Container>
  )
}
