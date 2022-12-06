import { Box } from '@mui/system'
import React, { useState, useEffect } from 'react'
// import PropTypes from 'prop-types'
import test from 'asset/2021/20210115.png'
import test2 from 'asset/2021/20210128sl.png'
import { Divider, Grid, Typography } from '@mui/material'
import './index.scss'
import classNames from 'classnames'
import WorkIcon from '@mui/icons-material/Work'
import SchoolIcon from '@mui/icons-material/School'

const AboutMe = () => {
  const images = [test, test2]
  const delay = 6000
  const [imageIndex, setImageIndex] = useState(0)
  const [anim, setAnim] = useState(false)
  const [fadeout, setFadeout] = useState(false)
  const [fadein, setFadein] = useState(false)
  useEffect(() => {
    if (anim) {
      if (fadeout) {
        setTimeout(() => {
          setImageIndex((prevIndex) =>
            prevIndex === images.length - 1 && prevIndex !== 0
              ? 0
              : prevIndex + 1
          )
          setFadeout(false)
          setFadein(true)
        }, 1000)
      }
      if (fadein) {
        setTimeout(() => {
          setFadein(false)
          setAnim(false)
        }, 1000)
      }
    } else {
      setTimeout(() => {
        setAnim(true)
        setFadeout(true)
      }, delay)
    }
    return () => {}
  }, [anim, fadein, fadeout, images.length])

  const frontendPro = [
    'React JS',
    'Javascript (ES5 & ES6)',
    'CSS',
    'HTML',
    'Redux',
    'Eslint & Prettier',
    'Adobe Photoshop',
    'Adobe Illustrator',
  ]
  const otherPro = ['MySQL', 'MongoDB', 'C', 'Java']
  return (
    <Box
      height="100%"
      paddingTop="50px"
      width="100%"
      sx={{ background: 'linear-gradient(#B9E1DE,#022422 )' }}
    >
        <Typography
          sx={{
            // fontSize: '40px',
            color: '#F4F0F0',
            alignSelf: 'center',
          }}
          variant="h4"
          p={12}
        >
          I am a Frontend developer & Illustrator
        </Typography>

        <Grid
          container
          sx={{
            width: '70vw',
            alignSelf: 'center',
          }}
          direction="row"
          spacing={8}
          pb={20}
        >
          <Grid item xs={12} sm={12} md={4} lg={3} xl={3}>
            <Box
              sx={{
                backgroundColor: '#F4F0F0',
                height: '100%',
              }}
              p={2}
            >
              <Typography
                pt={2}
                sx={{
                  color: '#5B6FB6',
                }}
                variant="h5"
              >
                <strong>SKILLS</strong>
              </Typography>
              <Box p={2} pl={0}>
                <Divider
                  sx={{
                    borderColor: '#5B6FB6',
                    color: '#5B6FB6',
                  }}
                >
                  Frontend
                </Divider>
                {frontendPro.map((pro, index) => (
                  <Typography
                    key={index}
                    sx={{
                      color: '#5B6FB6',
                      // fontSize: '20px',
                    }}
                  >
                    {pro}
                  </Typography>
                ))}
                <Divider
                  sx={{
                    borderColor: '#5B6FB6',
                    color: '#5B6FB6',
                  }}
                >
                  Others
                </Divider>
                {otherPro.map((pro, index) => (
                  <Typography
                    key={index}
                    sx={{
                      color: '#5B6FB6',
                      // fontSize: '20px',
                    }}
                  >
                    {pro}
                  </Typography>
                ))}
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} sm={12} md={8} lg={9} xl={9}>
            <Typography
              sx={{
                // fontSize: '24px',
                color: '#F4F0F0',
              }}
              variant="h6"
            >
              Frontend developer with
              {<strong style={{ color: '#d0bb96' }}> 1.5+ Year </strong>}
              experience, skilled in
              {<strong style={{ color: '#d0bb96' }}> React JS.</strong>} Always
              enthusiastic in learning new skills and thinks proactive in
              teamworks. I am also skilled in{' '}
              {
                <strong style={{ color: '#d0bb96' }}>
                  {' '}
                  Adobe Photoshop and Illustrator{' '}
                </strong>
              }
              which made me able to communicate with UI/UX designers fluently. I
              am also an{' '}
              {<strong style={{ color: '#d0bb96' }}> illustrator </strong>} who
              enjoys producing digital artworks.
            </Typography>
            <Typography
              sx={{
                // fontSize: '28px',
                color: '#F4F0F0',
                fontStyle: 'bold',
                textAlign: 'end',
              }}
              variant="h5"
            >
              EXPERIENCE
            </Typography>
            <Divider
              sx={{
                borderColor: '#d0bb96',
              }}
            />
            <Box
              width="100%"
              display="flex"
              flexDirection="row"
              sx={{ padding: '24px 24px 24px 0px' }}
              justifyContent="center"
            >
              <Divider
                orientation="vertical"
                textAlign="left"
                sx={{
                  '&.MuiDivider-root::after': {
                    borderColor: '#F4F0F0',
                  },
                  '&.MuiDivider-root::before': {
                    borderColor: '#F4F0F0',
                  },
                }}
                flexItem
              >
                <WorkIcon
                  sx={{
                    color: '#d0bb96',
                  }}
                />
              </Divider>
              <Box width="100%" display="flex" flexDirection="column">
                <Typography
                  sx={{
                    // fontSize: '24px',
                    color: '#F4F0F0',
                  }}
                  variant="h6"
                >
                  React Developer
                </Typography>
                <Typography
                  sx={{
                    // fontSize: '20px',
                    color: '#d0bb96',
                  }}
                >
                  Onward Security
                </Typography>
                <Typography
                  sx={{
                    // fontSize: '20px',
                    color: '#F4F0F0',
                  }}
                >
                  Dec 2020 ~ June 2022 (1yr 7mos)
                </Typography>
              </Box>
            </Box>
            <Typography
              sx={{
                // fontSize: '28px',
                color: '#F4F0F0',
                fontStyle: 'bold',
                textAlign: 'end',
              }}
              variant="h5"
            >
              EDUCATION
            </Typography>
            <Divider
              sx={{
                borderColor: '#d0bb96',
              }}
            />
            <Box
              width="100%"
              display="flex"
              flexDirection="row"
              sx={{ padding: '24px 24px 24px 0px' }}
            >
              <Divider
                orientation="vertical"
                textAlign="left"
                sx={{
                  '&.MuiDivider-root::after': {
                    borderColor: '#F4F0F0',
                  },
                  '&.MuiDivider-root::before': {
                    borderColor: '#F4F0F0',
                  },
                }}
                flexItem
              >
                <SchoolIcon
                  sx={{
                    color: '#d0bb96',
                  }}
                />
              </Divider>
              <Box width="100%" display="flex" flexDirection="column">
                <Typography
                  sx={{
                    // fontSize: '24px',
                    color: '#F4F0F0',
                  }}
                  variant="h6"
                >
                  Bachelor of Design, Computing
                </Typography>
                <Typography
                  sx={{
                    // fontSize: '20px',
                    color: '#d0bb96',
                  }}
                >
                  University of Melbourne
                </Typography>
                <Typography
                  sx={{
                    // fontSize: '20px',
                    color: '#F4F0F0',
                  }}
                >
                  July 2018 ~ Dec 2022
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  )
}

export default AboutMe
AboutMe.propTypes = {}
