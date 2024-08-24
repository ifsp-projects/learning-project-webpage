import { BsGraphUp } from 'react-icons/bs'
import { FaRegLightbulb } from 'react-icons/fa'
import { SiAwsorganizations } from 'react-icons/si'

type ServicesIconsType = {
  bulb: JSX.Element
  dashboard: JSX.Element
  report: JSX.Element
  [key: string]: JSX.Element
}

export const SERVICES_DATA = [
  {
    title: 'Aprendizado',
    description:
      'Organize o aprendizado de seus estudantes de maneira dinâmica e eficaz com nossa plataforma.',
    icon: 'bulb'
  },
  {
    title: 'Análises',
    description:
      'Tenha um feedback detalhado com análise de dados e infográficos de suas aulas.',
    icon: 'dashboard'
  },
  {
    title: 'Organização',
    description:
      'Organize suas aulas e matérias lecionadas em módulos, além de anexar materiais e conteúdos.',
    icon: 'report'
  }
]

export const SERVICES_ICONS: ServicesIconsType = {
  bulb: <FaRegLightbulb fill="#3b82f6" size={28} />,
  dashboard: <BsGraphUp fill="#3b82f6" size={28} />,
  report: <SiAwsorganizations fill="#3b82f6" size={28} />
}
