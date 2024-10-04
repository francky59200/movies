import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import AuthProvider from '~/provider/AuthProvider'
import NotFound from '~/pages/NotFound/NotFound'
import HomePage from '~/pages/HomePage/HomePage'
import DetailMovie from '~/pages/DetailMovie/DetailMovie'

const router = createBrowserRouter([

  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: 'detail/:id',
    element: <DetailMovie />,
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
