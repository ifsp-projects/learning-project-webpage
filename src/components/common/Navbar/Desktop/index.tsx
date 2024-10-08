import Image from 'next/image'
import Link from 'next/link'
import { IoIosSearch } from 'react-icons/io'

import { Anchor } from '@/components/toolkit/Anchor'
import { Container } from '@/components/toolkit/Container'
import { getUserSession } from '@/utils/auth/getUserSession'

import { AuthButtons } from './AuthButtons'
import { Notification } from './icons/Notifications'

export const DesktopNavbarLayout: React.FC = async () => {
  const user = await getUserSession()

  return (
    <Container
      className="mx-auto hidden w-full max-w-[1520px] px-12 py-4 lg:block"
      container="fluid"
      data-cid="desktop-navbar"
      wrapperClassName="w-full bg-white fixed border-b border-slate-100 z-[99999999]"
    >
      <nav className="flex w-full items-center justify-between gap-4">
        <div className="flex w-full flex-1 items-center gap-4 lg:gap-8">
          <Anchor className="max-w-12" href="/" variant="custom">
            <Image
              alt="Company Logo"
              className="w-full object-cover"
              height={94}
              src="/components/logo.png"
              width={94}
            />
          </Anchor>
          <div className="hidden items-center justify-between gap-6 lg:flex lg:gap-8">
            <Anchor
              className="cursor-pointer text-sm font-medium text-slate-600 transition-all duration-300 hover:text-slate-500"
              href="/"
              variant="custom"
            >
              Home
            </Anchor>
            <Anchor
              className="cursor-pointer text-sm font-medium text-slate-600 transition-all duration-300 hover:text-slate-500"
              href="/salas-de-aula"
              variant="custom"
            >
              Meu Aprendizado
            </Anchor>
            <Anchor
              className="cursor-pointer text-sm font-medium text-slate-600 transition-all duration-300 hover:text-slate-500"
              href="/pricing"
              variant="custom"
            >
              Pricing
            </Anchor>
            <Anchor
              className="cursor-pointer text-sm font-medium text-slate-600 transition-all duration-300 hover:text-slate-500"
              href="/quem-somos"
              variant="custom"
            >
              Suporte
            </Anchor>
          </div>
        </div>
        <div className="flex w-full flex-1 items-center justify-end gap-10">
          <div className="relative flex w-full flex-1">
            <figure className="pointer-events-none absolute left-4 top-1/2 z-10 w-5 -translate-y-1/2 text-slate-200">
              <IoIosSearch fill="#334155" size={24} />
            </figure>
            <input
              autoComplete="off"
              className="w-full rounded-sm bg-slate-700 bg-opacity-5 px-3 py-2 pl-12 text-base outline-none duration-default focus:border-indigo-200 focus:ring-2 focus:ring-indigo-200"
              id="search"
              name="search"
              type="text"
            />
          </div>
          {user ? (
            <>
              <Notification className="h-5 w-5 text-slate-400" />
              <Link className="group overflow-hidden" href="/perfil">
                <Image
                  alt="undefined-profile-picture"
                  className="cursor-pointer rounded-full transition-all duration-300 group-hover:brightness-95"
                  height={35}
                  src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
                  width={35}
                />
                {/* <User className="cursor-pointer text-slate-400 transition-all duration-300 group-hover:brightness-95" /> */}
              </Link>
            </>
          ) : (
            <AuthButtons />
          )}
        </div>
      </nav>
    </Container>
  )
}
