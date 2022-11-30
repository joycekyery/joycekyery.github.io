import React, { Fragment } from 'react'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Homepage from 'container/home'
import './css/index.scss'
import NavBar from './container/navBar'
import Footer from './container/footer'
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
  return (
    // <Box overflow="hidden">
    <Fragment>
      <NavBar />
      <RouterProvider router={router} />
      <Footer />
    </Fragment>
    // </Box>
  )
}

export default App
