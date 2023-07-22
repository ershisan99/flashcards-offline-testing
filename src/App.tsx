import {
  createBrowserRouter,
  Navigate,
  Outlet,
  RouteObject,
  RouterProvider,
} from 'react-router-dom'

import { Layout } from './components/layout'
import { Login } from './pages'
import { Decks } from './pages/decks/decks'
import { useMeQuery } from './services'

const protectedRoutes: RouteObject[] = [
  {
    path: '/',
    element: <Decks />,
    //   {
    //     path: 'cards/:deckId',
    //     element: <Cards />,
    //   },
    //   {
    //     path: 'sign-up',
    //     element: <SignUpPage />,
    //   },
    //   {
    //     path: 'profile',
    //     element: <Profile />,
    //   },
  },
]

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        element: <ProtectedRoutes />,
        children: protectedRoutes,
      },
      {
        path: 'login',
        element: <Login />,
      },
    ],
  },
])

export function App() {
  const { data, isLoading, isError, error } = useMeQuery()

  console.log({ data, isLoading, isError, error })

  return <RouterProvider router={router} />
}

function ProtectedRoutes() {
  const { data, isLoading, ...rest } = useMeQuery()

  console.log('status: ', { data, isLoading, ...rest })
  if (isLoading) return <div>Loading...</div>

  return data ? <Outlet /> : <Navigate to="/login" />
}
