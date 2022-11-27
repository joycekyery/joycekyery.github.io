import { Box } from '@mui/system'
import React, { useState, useEffect } from 'react'
// import PropTypes from 'prop-types'
import test from 'asset/2021/20210115.png'
import test2 from 'asset/2021/20210128sl.png'
import { Typography } from '@mui/material'
import './index.scss'
import classNames from 'classnames'

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
    console.log('fadeout', fadeout)
    console.log('fadein', fadein)
    return () => {}
  }, [anim, fadein, fadeout, images.length])
  return (
    <Box
      height="1000px"
      style={{ background: 'linear-gradient(#B9E1DE,#022422 )' }}
    >
      <Box display="flex" flexDirection="column" paddingTop="180px">
        <Box
          style={{
            position: 'absolute',
            marginTop: '-161px',
            marginLeft: '142px',
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'column',

            zIndex: '2',
          }}
        >
          <Typography
            style={{
              color: '#000',
              fontSize: '64px',
              fontFamily: 'Inter',
              mixBlendMode: 'exclusion',
            }}
          >
            YUNG
          </Typography>
          <Typography
            style={{
              color: '#000',
              fontSize: '64px',
              fontFamily: 'Inter',
            }}
          >
            PORTFOLIO
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
            style={{
              width: '100%',
              display: 'flex',
              justifyContent: 'center',
              flexDirection: 'column',
              zIndex: '1',
              marginLeft: '-190px',
              marginTop: '-120px',
            }}
          >
            <Typography
              style={{
                color: '#8b8b8b',
                fontSize: '64px',
                fontFamily: 'Inter',
                mixBlendMode: 'exclusion',
              }}
            >
              YUNG
            </Typography>
            <Typography
              style={{
                color: '#8b8b8b',
                fontSize: '64px',
                fontFamily: 'Inter',
                mixBlendMode: 'exclusion',
              }}
            >
              PORTFOLIO
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default Homepage
Homepage.propTypes = {}
