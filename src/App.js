import React from 'react'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './css/index.scss'
import NavBar from 'container/navBar'
import Footer from 'container/footer'
import {
  createTheme,
  responsiveFontSizes,
  ThemeProvider,
} from '@mui/material/styles'
import { aboutMeRoute, homeRoute } from 'route/routeItems'

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

  const router = createBrowserRouter([homeRoute, aboutMeRoute])
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
