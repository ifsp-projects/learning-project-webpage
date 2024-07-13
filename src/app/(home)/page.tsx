import { Logged } from './Logged'
import { NotLogged } from './NotLogged'

export default function Home() {
  const isUserLogged = false

  return isUserLogged ? <Logged /> : <NotLogged />
}
