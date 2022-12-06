import React from 'react'
import AboutMe from 'container/aboutMe'
import Homepage from 'container/home'
import { ABOUT_ME, HOME } from './routeConstant'
export const homeRoute = {
  path: HOME,
  element: <Homepage />,
}
export const aboutMeRoute = {
  path: ABOUT_ME,
  element: <AboutMe />,
}
