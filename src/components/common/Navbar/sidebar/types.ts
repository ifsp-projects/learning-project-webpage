export interface SideNavItem {
  title: string
  path: string
  icon?: JSX.Element
  submenu?: boolean
  subMenuItems?: SideNavItem[]
}

export interface SideNavItemProps {
  item: SideNavItem
}
