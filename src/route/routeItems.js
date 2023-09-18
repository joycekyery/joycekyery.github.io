import React from 'react'
import AboutMe from 'container/aboutMe'
import Homepage from 'container/home'
import Test from 'container/test'
import { ABOUT_ME, ART_GALLERY_YEAR, HOME, PROJECT } from './routeConstant'
import Project from 'container/project'
import ArtGallery from 'container/artGallery'
export const test = {
  path: 'test',
  element: <Test />,
  title: 'test',
}

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
export const artGalleryRoute = {
  path: ART_GALLERY_YEAR,
  element: <ArtGallery />,
  title: 'Art',
}
export const router = [test, homeRoute, aboutMeRoute, projectRoute]
