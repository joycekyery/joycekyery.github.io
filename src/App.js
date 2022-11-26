import React from 'react'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Homepage from 'container/home'

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Homepage />,
      // children: [
      //   {
      //     path: 'contact',
      //     element: <Contact />,
      //   },
      //   {
      //     path: 'dashboard',
      //     element: <Dashboard />,
      //     loader: ({ request }) =>
      //       fetch('/api/dashboard.json', {
      //         signal: request.signal,
      //       }),
      //   },
      //   {
      //     element: <AuthLayout />,
      //     children: [
      //       {
      //         path: 'login',
      //         element: <Login />,
      //         loader: redirectIfUser,
      //       },
      //       {
      //         path: 'logout',
      //         action: logoutUser,
      //       },
      //     ],
      //   },
      // ],
    },
  ])
  return <RouterProvider router={router} />
}

export default App
