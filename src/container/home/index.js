import { Box } from '@mui/system'
import React, { useState, useEffect } from 'react'
// import PropTypes from 'prop-types'
import test from 'asset/2021/20210115.png'
import test2 from 'asset/2021/20210128sl.png'
import { IconButton, Typography } from '@mui/material'
import './index.scss'
import classNames from 'classnames'
import { Fragment } from 'react'
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow'
import { useNavigate } from 'react-router-dom/dist'
import { ABOUT_ME } from 'route/routeConstant'

const Homepage = () => {
  const images = [test, test2]
  const delay = 6000
  const [imageIndex, setImageIndex] = useState(0)
  const [anim, setAnim] = useState(false)
  const [fadeout, setFadeout] = useState(false)
  const [fadein, setFadein] = useState(false)
  const navigate = useNavigate()
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
        }, 900)
      }
      if (fadein) {
        setTimeout(() => {
          setFadein(false)
          setAnim(false)
        }, 900)
      }
    } else {
      setTimeout(() => {
        setAnim(true)
        setFadeout(true)
      }, delay)
    }
    return () => {}
  }, [anim, fadein, fadeout, images.length])

  return (
    <Fragment>
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
              left: '18%',
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
              }}
              variant="h1"
            >
              YUNG-CHING
            </Typography>
            <Typography
              sx={{
                color: '#000',
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
              height: {
                xs: '30vh',
                sm: '30vh',
                md: '50vh',
                lg: '100vh',
                xl: '100vh',
              },
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
        </Box>
      </Box>
      <IconButton
        size="large"
        contained
        className="moreAboutMeButton"
        sx={{
          position: 'absolute',
          right: '5%',
          bottom: '10%',
          color: '#d0bb96',
          border: 'solid',
          borderColor: '#d0bb96',
          backgroundColor: '#022422',
          borderRadius: '20px',
          '&:hover': {
            backgroundColor: '#d0bb96',
            color: '#022422',
            transition: 'background-color 200ms linear',
          },
        }}
        onClick={() => {
          navigate(ABOUT_ME)
        }}
      >
        More About Me
        <DoubleArrowIcon fontSize="inherit" />
      </IconButton>
    </Fragment>
  )
}

export default Homepage
Homepage.propTypes = {}
