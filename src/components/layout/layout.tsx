import { Outlet, useOutletContext } from 'react-router-dom'

import { Header } from '@/components/header/header'
import { useGetMeQuery } from '@/services/auth/auth.service'

import s from './layout.module.scss'

/*type Props = {
  children: ReactNode
}*/
type AuthContext = {
  isAuthenticated: boolean
}

export function useAuthContext() {
  return useOutletContext<AuthContext>()
}

export const Layout = () => {
  const { data: meData, isError, isLoading } = useGetMeQuery()
  const isAuthenticated = !isError && !isLoading

  if (isLoading) {
    return null
  }

  return (
    <div>
      <Header meData={meData} />
      <div className={s.container}>
        <Outlet context={{ isAuthenticated } satisfies AuthContext} />
      </div>
    </div>
  )
}
