import Image from 'next/image'
import Link from 'next/link'
import { IoIosSearch } from 'react-icons/io'

export const MobileNavbarLayout: React.FC = () => {
  return (
    <nav className="flex w-full justify-between gap-6 bg-slate-50 p-4 lg:hidden">
      <div className="flex w-full gap-4">
        <div className="relative flex w-full">
          <figure className="pointer-events-none absolute left-4 top-1/2 z-10 w-5 -translate-y-1/2 text-slate-200">
            <IoIosSearch fill="#334155" size={24} />
          </figure>
          <input
            autoComplete="off"
            className="w-full rounded-sm bg-slate-700 bg-opacity-10 px-3 py-2 pl-12 text-base outline-none duration-default focus:border-slate-400 focus:ring-2 focus:ring-slate-400"
            id="search"
            name="search"
            type="text"
          />
        </div>
      </div>
      <figure className="flex w-auto items-center justify-end pr-4">
        <Link className="group overflow-hidden" href="/perfil">
          <Image
            alt="undefined-profile-picture"
            className="cursor-pointer rounded-full transition-all duration-300 group-hover:brightness-95"
            height={50}
            src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
            width={50}
          />
        </Link>
      </figure>
    </nav>
  )
}
