import { DesktopNavbarLayout } from "./Desktop"
import { MobileNavbarLayout } from "./Mobile"

export const Navbar: React.FC = () => {
  return (
    <>
      <DesktopNavbarLayout />
      <MobileNavbarLayout />
    </>
  )
}
