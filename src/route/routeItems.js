import React from 'react'
import AboutMe from 'container/aboutMe'
import Homepage from 'container/home'
import { ABOUT_ME, HOME, PROJECT } from './routeConstant'
import Project from 'container/project'
export const homeRoute = {
  path: HOME,
  element: <Homepage />,
  title: 'Home',
}
export const aboutMeRoute = {
  path: ABOUT_ME,
  element: <AboutMe />,
  title: 'About Me',
}
export const projectRoute = {
  path: PROJECT,
  element: <Project />,
  title: 'Projects',
}

export const router = [homeRoute, aboutMeRoute, projectRoute]
