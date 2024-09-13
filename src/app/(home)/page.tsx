import { getMetaData } from '@/utils/getters/getMetaData'

import { Logged } from './Logged'
import { NotLogged } from './NotLogged'

export async function generateMetadata() {
  return getMetaData({
    title: 'Página Inicial - Bem-Vindo à nossa plataforma',
    description:
      'Assista ou lecione aulas dentro de nossa plataforma, com auxilio nossas ferramentas educacionais!',
    opengraph: ''
  })
}

export default function Home() {
  const isUserLogged = true

  return isUserLogged ? <Logged /> : <NotLogged />
}
