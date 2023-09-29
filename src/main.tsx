import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import AuthProvider from '~/provider/AuthProvider'
import Dashboard from '~/pages/Dashboard/Dashboard'
import Trophies from '~/pages/Trophies/Trophies'
import WorkhoutDetail from '~/pages/WorkhoutDetail/WorkhoutDetail'
import Profil from '~/pages/Profil/Profil'
import NotFound from '~/pages/NotFound/NotFound'
import Connexion from '~/pages/Connexion/Connexion'
import Alert from '~/elements/Alert/Alert'
import ProtectedRoutes from '~/components/ProtectedRoutes/ProtectedRoutes'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Connexion />,
  },
  {
    path: '/account',
    element: <ProtectedRoutes />,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: 'trophies',
        element: <Trophies />,
      },
      {
        path: 'workhoutDetail',
        element: <WorkhoutDetail />,
      },
      {
        path: 'profil',
        element: <Profil />,
      },
    ],
  },
  {
    path: '*',
    element: <NotFound />,
  },
])

ReactDOM.createRoot(document.getElementById('app') as HTMLElement).render(
    <AuthProvider>
            <RouterProvider router={router} />
      <Alert />
    </AuthProvider>,
)
