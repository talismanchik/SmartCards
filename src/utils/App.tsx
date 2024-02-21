import { Header } from '@/components/header/header'
import { Router } from '@/utils/router'

import s from './app.module.scss'

export function App() {
  return (
    <>
      <Header isAuth />
      <section className={s.container}>
        <Router />
      </section>
    </>
  )
}
