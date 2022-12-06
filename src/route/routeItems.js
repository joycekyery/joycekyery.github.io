import React from 'react'
import AboutMe from 'container/aboutMe'
import Homepage from 'container/home'
import { ABOUT_ME, HOME, PROJECT } from './routeConstant'
import Project from 'container/project'
export const homeRoute = {
  path: HOME,
  element: <Homepage />,
}
export const aboutMeRoute = {
  path: ABOUT_ME,
  element: <AboutMe />,
}
export const projectRoute = {
  path: PROJECT,
  element: <Project />,
}
