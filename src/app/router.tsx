import {
  Navigate,
  Outlet,
  RouteObject,
  RouterProvider,
  createBrowserRouter,
} from 'react-router-dom'

import { Layout, useAuthContext } from '@/components/layout/layout'
import { CheckEmailPage } from '@/pages/auth/checkEmail/checkEmailPage'
import { CreateNewPasswordPage } from '@/pages/auth/createNewPasswordPage'
import { ForgotPasswordPage } from '@/pages/auth/forgotPasswordPage'
import { SignIn } from '@/pages/auth/signIn/signIn'
import { SignUp } from '@/pages/auth/signUp'
import { Cards } from '@/pages/cards'
import { Decks } from '@/pages/decks/decks'
import { ErrorPage } from '@/pages/error/errorPage'
import { Learn } from '@/pages/learn'
import { Profile } from '@/pages/profile/profile'

const publicRoutes: RouteObject[] = [
  {
    element: <SignIn />,
    path: '/login',
  },
  {
    element: <SignUp />,
    path: '/signup',
  },
  {
    element: <ForgotPasswordPage />,
    path: '/forgot-password',
  },
  {
    element: <CheckEmailPage />,
    path: '/check-email',
  },
  {
    element: <CreateNewPasswordPage />,
    path: '/recover-password/:token',
  },
  {
    element: <ErrorPage />,
    path: '*',
  },
]
const privateRoutes: RouteObject[] = [
  {
    element: <Decks />,
    path: '/',
  },
  {
    element: <Cards />,
    path: '/cards/:deckId',
  },
  {
    element: <Profile />,
    path: '/profile',
  },
  {
    element: <Learn />,
    path: `/cards/:deckId?/learn`,
  },
]

export const router = createBrowserRouter([
  {
    children: [
      {
        children: privateRoutes,
        element: <PrivateRoutes />,
      },
      {
        children: publicRoutes,
        element: <PublicRoutes />,
      },
    ],
    element: <Layout />,
  },
])

export const Router = () => {
  return <RouterProvider router={router} />
}
export function PrivateRoutes() {
  const { isAuthenticated } = useAuthContext()

  return isAuthenticated ? <Outlet /> : <Navigate to={'/login'} />
}
function PublicRoutes() {
  const { isAuthenticated } = useAuthContext()

  return isAuthenticated ? <Navigate to={'/'} /> : <Outlet />
}
