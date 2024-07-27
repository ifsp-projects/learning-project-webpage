import Image from 'next/image'
import { BsCalendar3 } from 'react-icons/bs'
import { FaBell } from 'react-icons/fa'
import { IoIosSearch } from 'react-icons/io'
import { IoSettingsSharp } from 'react-icons/io5'

import { Container } from '@/components/toolkit/Container'

import { SidebarNavigation } from '../sidebar/SidebarNavigation'
import { Sidebar } from '../../Sidebar/Sidebar'

export const DesktopNavbarLayout: React.FC = () => {
  return (
    <Container
      className="hidden w-full px-12 py-4 lg:block"
      data-cid="desktop-navbar"
      wrapperClassName="border-b border-slate-100"
    >
      <nav className="flex w-full items-center gap-4 text-white">
        <SidebarNavigation />
        <div className="flex w-full gap-4">
          <div className="relative flex w-full">
            <figure className="pointer-events-none absolute left-4 top-1/2 z-10 w-5 -translate-y-1/2 text-slate-200">
              <IoIosSearch fill="#334155" size={24} />
            </figure>
            <input
              autoComplete="off"
              className="w-full rounded-sm bg-slate-700 bg-opacity-5 px-3 py-2 pl-12 text-base outline-none duration-default focus:border-blue-400 focus:ring-2 focus:ring-blue-400"
              id="search"
              name="search"
              type="text"
            />
          </div>
        </div>
        <div className="flex w-full items-center justify-end gap-6">
          <FaBell className="cursor-pointer" fill="#334155" size={20} />
          <BsCalendar3 className="cursor-pointer" fill="#334155" size={20} />
          <IoSettingsSharp
            className="cursor-pointer"
            fill="#334155"
            size={20}
          />
          <figure>
            <Image
              alt="undefined-profile-picture"
              className="cursor-pointer rounded-full"
              height={35}
              src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
              width={35}
            />
          </figure>
        </div>
      </nav>
    </Container>
  )
}
