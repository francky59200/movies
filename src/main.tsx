import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import AuthProvider from '~/provider/AuthProvider'
import Home from '~/components/Home/Home'
import Dashboard from '~/components/Dashboard/Dashboard'
import Trophies from '~/components/trophies/trophies'
import WorkhoutDetail from '~/components/workhoutDetail/workhoutDetail'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/resume',
    element: <Dashboard />,
  },
  {
    path: '/trophies',
    element: <Trophies />,
  },
  {
    path: '/workhoutDetail',
    element: <WorkhoutDetail />,
  },
])

ReactDOM.createRoot(document.getElementById('app') as HTMLElement).render(
    <AuthProvider>
            <RouterProvider router={router} />
    </AuthProvider>,
)
