import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import AuthProvider from '~/provider/AuthProvider'
import Dashboard from '~/components/Dashboard/Dashboard'
import Trophies from '~/components/trophies/trophies'
import WorkhoutDetail from '~/components/workhoutDetail/workhoutDetail'
import Profil from '~/components/Profil/Profil'
import NotFound from '~/components/NotFound/NotFound'
import Connexion from '~/components/Connexion/Connexion'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Connexion />,
  },
  {
    path: '/account',
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
    </AuthProvider>,
)
