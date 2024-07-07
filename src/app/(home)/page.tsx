import { Logged } from './Logged'
import { NotLogged } from './NotLogged'

export default function Home() {
  const isUserLogged = true

  return isUserLogged ? <Logged /> : <NotLogged />
}
