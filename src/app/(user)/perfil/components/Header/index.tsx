import Image from 'next/image'
import { MdOutlineEmail } from 'react-icons/md'
import { HiOutlineMapPin } from 'react-icons/hi2'
import { IoSchoolOutline } from 'react-icons/io5'
import { DedicatedTwo } from '@/assets/achievements/DedicatedTwo'
import { Punctual } from '@/assets/achievements/Punctual'
import { Pioneer } from '@/assets/achievements/Pioneer'
import { Button } from '@/components/common/Button'
import { MoreThanAYear } from '@/assets/achievements/MoreThanAYear'
import { LockedAchievement } from '@/assets/achievements/LockedAchievement'
import { Devoted } from '@/assets/achievements/Devoted'
import { ConstantOne } from '@/assets/achievements/ConstantOne'
import { HeaderProps } from './types'

export const Header: React.FC<HeaderProps> = () => {
  return (
    <section className="mx-auto w-full max-w-2xl rounded-sm lg:max-w-6xl">
      <figure className="group max-h-[180px] w-full overflow-hidden rounded-t-sm">
        <Image
          width={1536}
          height={180}
          className="max-h-[180px] w-full object-cover transition-all duration-500 selection:bg-transparent group-hover:scale-[1.01]"
          src="https://images.unsplash.com/photo-1488998427799-e3362cec87c3?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="profile-background-image"
        />
      </figure>
      <article className="relative z-20 flex w-full flex-col gap-8 rounded-b-sm border-x border-b border-slate-300 bg-white px-4 py-4 lg:px-12 lg:py-8">
        <figure className="-mt-20">
          <Image
            alt="undefined-profile-picture"
            className="h-28 w-28 cursor-pointer rounded-md object-cover"
            height={112}
            src="https://media.licdn.com/dms/image/D4E03AQG18eMCSCl6cg/profile-displayphoto-shrink_200_200/0/1707168979756?e=2147483647&v=beta&t=7N2f4yrafP_lGdXY20r33vB1hg18T4FoPpaQ5OOhVEo"
            width={112}
          />
        </figure>
        <article className="flex w-full justify-between">
          <article className="flex w-full flex-col gap-8 flex-1 lg:gap-10">
            <article className="flex flex-col">
              <h2 className="text-lg font-semibold lg:text-xl">
                Higor Matias Figueiredo
              </h2>
              <p className="text-sm">
                Estudante de Análise e Desenvolvimento de Sistemas em IFSP
                Capivari
              </p>
              <p className="mt-2 text-sm text-slate-500">
                Piracicaba, SP - Brasil • Estudante
              </p>
            </article>
            <div className="flex flex-col">
              <ul className="flex flex-col gap-2">
                <li className="flex items-center gap-3">
                  <MdOutlineEmail color="#334155" size={18} />
                  <p className="text-sm">higormatias@aluno.ifsp.edu.br</p>
                </li>
                <li className="flex items-center gap-3">
                  <IoSchoolOutline color="#334155" size={18} />
                  <p className="text-sm">
                    Técnologo Análise e Desenvolvimento de Sistemas
                  </p>
                </li>
                <li className="flex items-center gap-3">
                  <HiOutlineMapPin color="#334155" size={18} />
                  <p className="text-sm">Capivari, SP - Brasil</p>
                </li>
              </ul>
            </div>
          </article>
          <article className="w-auto">
            <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
              <ConstantOne className="w-14" />
              <DedicatedTwo className="w-14" />
              <Punctual className="w-14" />
              <Devoted className="w-14" />
              <Pioneer className="w-14" />
              <MoreThanAYear className="w-14" />
              <LockedAchievement className="w-14" />
              <LockedAchievement className="w-14" />
            </div>
          </article>
        </article>
        <div className="flex w-full justify-between gap-8">
          <ul className="flex w-full items-center gap-3">
            <li className="rounded-full bg-green-100 px-3 py-1 text-xs text-green-600">
              html
            </li>
            <li className="rounded-full bg-green-100 px-3 py-1 text-xs text-green-600">
              css
            </li>
            <li className="rounded-full bg-green-100 px-3 py-1 text-xs text-green-600">
              javascript
            </li>
            <li className="rounded-full bg-green-100 px-3 py-1 text-xs text-green-600">
              python
            </li>
            <li className="rounded-full bg-green-100 px-3 py-1 text-xs text-green-600">
              shell script
            </li>
          </ul>
          <div className="flex w-full items-center justify-end">
            <Button className="md:text-sm">Editar Perfil</Button>
          </div>
        </div>
      </article>
    </section>
  )
}
