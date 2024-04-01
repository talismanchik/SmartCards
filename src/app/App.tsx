import { ToastContainer } from 'react-toastify'

import { Router } from '@/app/router'

import 'react-toastify/dist/ReactToastify.css'

export function App() {
  return (
    <>
      <Router />
      <ToastContainer autoClose={3000} position={'bottom-left'} theme={'dark'} />
    </>
  )
}
