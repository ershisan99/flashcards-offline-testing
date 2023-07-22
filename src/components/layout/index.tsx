import { Outlet } from 'react-router-dom'

import { Header } from './header'
import s from './layout.module.scss'

export const Layout = () => {
  const logout = () => {
    console.log('logout')
  }

  return (
    <div className={s.container}>
      <Header isAuth={false} onSignOut={logout} />
      <div aria-hidden className={s.placeholder} />
      <Outlet />
    </div>
  )
}
