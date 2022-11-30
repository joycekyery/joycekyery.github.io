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

const Homepage = () => {
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
      <Box
        minHeight="714px"
        display="flex"
        flexDirection="column"
        paddingTop="100px"
      >
        <Box
          sx={{
            position: 'absolute',
            marginTop: '-98px',
            marginLeft: '266px',
            width: 'fit-content',
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'column',
            zIndex: '2',
          }}
        >
          <Typography
            sx={{
              color: '#000',
              // fontSize: '64px',

              mixBlendMode: 'exclusion',
            }}
            variant="h1"
          >
            YUNG-CHING
          </Typography>
          <Typography
            sx={{
              color: '#000',
              // fontSize: '64px',
            }}
            variant="h1"
          >
            LIN
          </Typography>
        </Box>
        <Box
          className={classNames('homepageImage')}
          sx={{
            alignSelf: 'center',
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'top',
            width: '100vw',
            maxHeight: '70vh',
            maxWidth: '50vw',
            height: '100vh',
            animation: anim
              ? fadein
                ? 'fadeIn 1s'
                : fadeout
                ? 'fadout 1s'
                : 'none'
              : 'none',
            backgroundImage: `url(${images[imageIndex]})`,
          }}
        >
          <Box
            sx={{
              width: 'fit-content',
              display: 'flex',
              justifyContent: 'center',
              flexDirection: 'column',
              zIndex: '1',
              marginLeft: '-32px',
              marginTop: '-37px',
            }}
          >
            <Typography
              sx={{
                color: '#8b8b8b',
                // fontSize: '64px',
                mixBlendMode: 'exclusion',
              }}
              variant="h1"
            >
              YUNG-CHING
            </Typography>
            <Typography
              sx={{
                color: '#8b8b8b',
                // fontSize: '64px',

                mixBlendMode: 'exclusion',
              }}
              variant="h1"
            >
              LIN
            </Typography>
          </Box>
        </Box>
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
          spacing={2}
        >
          <Grid
            item
            sx={{
              backgroundColor: '#F4F0F0',
              //   borderRadius: '30px',
            }}
            xs={12}
            sm={12}
            md={3}
            lg={2}
            xl={2}
          >
            <Typography
              pt={2}
              sx={{
                color: '#5B6FB6',
              }}
              variant="h5"
            >
              SKILLS
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
          </Grid>
          <Grid item xs={12} sm={12} md={9} lg={10} xl={10}>
            <Typography
              sx={{
                // fontSize: '28px',
                color: '#F4F0F0',
                fontStyle: 'bold',
                textAlign: 'center',
              }}
              variant="h5"
            >
              EXPERIENCE
            </Typography>
            <Box
              width="100%"
              display="flex"
              flexDirection="row"
              p={3}
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
                textAlign: 'center',
              }}
              variant="h5"
            >
              EDUCATION
            </Typography>
            <Box width="100%" display="flex" flexDirection="row" p={3}>
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

export default Homepage
Homepage.propTypes = {}
