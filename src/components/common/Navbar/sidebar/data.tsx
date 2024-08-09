import { Icon } from '@iconify/react'

export const SIDENAV_ITEMS = [
  {
    title: 'Home',
    path: '/',
    icon: <Icon height="24" icon="lucide:home" width="24" />
  },
  {
    title: 'Projects',
    path: '/projects',
    icon: <Icon height="24" icon="lucide:folder" width="24" />,
    submenu: true,
    subMenuItems: [
      { title: 'All', path: '/projects' },
      { title: 'Web Design', path: '/projects/web-design' },
      { title: 'Graphic Design', path: '/projects/graphic-design' }
    ]
  },
  {
    title: 'Messages',
    path: '/messages',
    icon: <Icon height="24" icon="lucide:mail" width="24" />
  },
  {
    title: 'Settings',
    path: '/settings',
    icon: <Icon height="24" icon="lucide:settings" width="24" />,
    submenu: true,
    subMenuItems: [
      { title: 'Account', path: '/settings/account' },
      { title: 'Privacy', path: '/settings/privacy' }
    ]
  },
  {
    title: 'Help',
    path: '/help',
    icon: <Icon height="24" icon="lucide:help-circle" width="24" />
  }
]
