import React from 'react'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Homepage from 'container/home'
import './css/index.scss'
import NavBar from './container/navBar'
import Footer from './container/footer'
import {
  createTheme,
  responsiveFontSizes,
  ThemeProvider,
} from '@mui/material/styles'

function App() {
  let theme = createTheme()
  theme = responsiveFontSizes(theme)
  theme.typography.h1 = {
    [theme.breakpoints.up('xs')]: {
      fontSize: '2.4rem',
    },
    [theme.breakpoints.up('sm')]: {
      fontSize: '3.4rem',
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '4.4rem',
    },
  }

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
    <ThemeProvider theme={theme}>
      <NavBar />
      <RouterProvider router={router} />
      <Footer />
    </ThemeProvider>
    // </Box>
  )
}

export default App
