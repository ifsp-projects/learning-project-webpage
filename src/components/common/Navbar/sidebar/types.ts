export interface SideNavItem {
  icon?: JSX.Element
  path: string
  submenu?: boolean
  subMenuItems?: SideNavItem[]
  title: string
}

export interface SideNavItemProps {
  item: SideNavItem
}
