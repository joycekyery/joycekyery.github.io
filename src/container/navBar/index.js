import { Box } from '@mui/system'
import React, { useEffect, useState } from 'react'
import { Button, Menu, MenuItem, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { artGalleryRoute, router } from 'route/routeItems'
import './index.scss'
import { ART_GALLERY } from 'route/routeConstant'

const NavBar = () => {
  const [anchorEl, setAnchorEl] = React.useState(null)
  const open = Boolean(anchorEl)
  const [show, setShow] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [anim, setAnim] = useState(false)
  const [fadeout, setFadeout] = useState(false)
  const [fadein, setFadein] = useState(false)

  const location = window.location.pathname.substring(
    1,
    window.location.pathname.length
  )
  const navigate = useNavigate()

  const newRouter = router.reduce((acc, curr) => {
    return { ...acc, [curr.path]: curr }
  }, {})
  const controlNavbar = () => {
    if (typeof window !== 'undefined') {
      if (window.scrollY === 0) {
        if (!show) {
          setShow(true)
          setAnim(true)
          setFadein(true)
        }
      } else {
        if (window.scrollY > lastScrollY) {
          if (show) {
            setAnim(true)
            setFadeout(true)
          }
          // if scroll down hide the navbar
        } else {
          if (!show) {
            setAnim(true)
            setFadein(true)
          }
          setShow(true)
          // if scroll up show the navbar
        }
      }

      // remember current page location to use in the next move
      setLastScrollY(window.scrollY)
    }
  }
  useEffect(() => {
    if (anim) {
      if (fadein) {
        setTimeout(() => {
          setFadein(false)
          setAnim(false)
        }, 400)
      }
      if (fadeout) {
        setTimeout(() => {
          setFadeout(false)
          setAnim(false)
          if (window.scrollY > lastScrollY) {
            setShow(false)
          }
        }, 400)
      }
    }
    return () => {}
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [anim, fadein, fadeout])

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', controlNavbar)

      return () => {
        window.removeEventListener('scroll', controlNavbar)
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lastScrollY])

  return (
    <Box
      className="navBar"
      sx={{
        position: 'fixed',
        padding: '0',
        margin: '0',
        top: '0',
        left: '0',
        zIndex: '9999',
        width: '100%',
        height: '80px',
        backdropFilter: 'blur(10px)',
        animation: anim
          ? fadein
            ? 'show .5s'
            : fadeout
            ? 'hide .5s'
            : 'none'
          : 'none',
        display: show ? 'block' : 'none',
      }}
    >
      <Box
        sx={{
          backgroundColor: '#E7D7C4',
          width: 'inherit',
          height: 'inherit',
          opacity: '0.5',
          position: 'fixed',
          top: '0',
          left: '0',
        }}
      />
      <Box
        sx={{
          width: 'inherit',
          height: 'inherit',
          display: 'flex',
          flexDirection: 'row',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: '100%',
          }}
        >
          <Typography
            sx={{
              color: '#F4F0F0',
            }}
            variant="h3"
            pl={3}
          >
            {newRouter[location] && newRouter[location].title}
          </Typography>
          <Box pr={3}>
            {router.map((r, index) => (
              <Button
                key={index}
                sx={{
                  color: '#F4F0F0',
                }}
                onClick={() => {
                  navigate(r.path)
                }}
              >
                {r.title}
              </Button>
            ))}
            <Button
              id="demo-positioned-button"
              sx={{
                color: '#F4F0F0',
              }}
              onClick={(e) => {
                setAnchorEl(e.currentTarget)
              }}
              aria-controls={open ? 'demo-positioned-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
            >
              {artGalleryRoute.title}
            </Button>
            <Menu
              sx={{ zIndex: '9999' }}
              id="demo-positioned-menu"
              aria-labelledby="demo-positioned-button"
              anchorEl={anchorEl}
              open={open}
              onClose={() => {
                setAnchorEl(null)
              }}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
            >
              {[...Array(4).keys()]
                .map((x) => x + 2019)
                .reverse()
                .map((item) => (
                  <MenuItem
                    key={item}
                    onClick={() => {
                      navigate(`${ART_GALLERY}/${item}`)
                    }}
                  >
                    {item}
                  </MenuItem>
                ))}
            </Menu>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default NavBar
