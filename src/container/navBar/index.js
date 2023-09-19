import { Box } from '@mui/system'
import React, { Fragment, useEffect, useState } from 'react'
import {
  Button,
  Divider,
  Menu,
  MenuItem,
  SwipeableDrawer,
  Typography,
  useMediaQuery,
  useTheme,
  Link,
} from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { artGalleryRoute, router } from 'route/routeItems'
import { ART_GALLERY } from 'route/routeConstant'
import MenuIcon from '@mui/icons-material/Menu'

const NavBar = () => {
  const [anchorEl, setAnchorEl] = React.useState(null)
  const open = Boolean(anchorEl)
  const [show, setShow] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [drawerOpen, setDrawerOpen] = useState(false)
  console.log(process.env.PUBLIC_URL)
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
        setShow(true)
      } else {
        if (window.scrollY > lastScrollY) {
          setShow(false)

          // if scroll down hide the navbar
        } else {
          setShow(true)
          // if scroll up show the navbar
        }
      }

      // remember current page location to use in the next move
      setLastScrollY(window.scrollY)
    }
  }

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', controlNavbar)

      return () => {
        window.removeEventListener('scroll', controlNavbar)
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lastScrollY])
  const theme = useTheme()
  const sm = useMediaQuery(theme.breakpoints.up('sm'))
  const toggleDrawer = (open) => (event) => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return
    }
    setDrawerOpen(open)
  }

  return (
    <Box
      className="navBar"
      sx={{
        position: 'fixed',
        padding: '0',
        margin: '0',
        left: '0',
        zIndex: '9999',
        width: '100%',
        height: '80px',
        backdropFilter: 'blur(10px)',
        transform: 'translate3d(0,0,-80px)',
        top: show ? '0px' : '-80px',
      }}
    >
      <Box
        sx={{
          backgroundColor: '#ffffff',
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
          {sm ? (
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
                    <MenuItem key={item}>
                      <Link
                        href={`${process.env.REACT_APP_PUBLIC_URL}${ART_GALLERY}/${item}`}
                        underline="none"
                        key={item}
                      >
                        {item}
                      </Link>
                    </MenuItem>
                  ))}
              </Menu>
            </Box>
          ) : (
            <Fragment>
              <Button
                onClick={() => {
                  setDrawerOpen(true)
                }}
                sx={{
                  color: '#F4F0F0',
                }}
              >
                <MenuIcon />
              </Button>
              <SwipeableDrawer
                sx={{ zIndex: '9999' }}
                anchor="right"
                open={drawerOpen}
                onClose={toggleDrawer(false)}
                onOpen={toggleDrawer(true)}
              >
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    height: '100%',
                    backgroundColor: '#788177',
                  }}
                >
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
                  <Typography
                    sx={{
                      textAlign: 'center',
                      color: '#c2b2b2',
                    }}
                  >
                    {artGalleryRoute.title}
                  </Typography>
                  <Divider
                    sx={{
                      color: '#F4F0F0',
                    }}
                  />
                  {[...Array(4).keys()]
                    .map((x) => x + 2019)
                    .reverse()
                    .map((item) => (
                      <Link
                        sx={{
                          color: '#F4F0F0',
                          alignSelf: 'center',
                        }}
                        href={`${process.env.REACT_APP_PUBLIC_URL}${ART_GALLERY}/${item}`}
                        underline="none"
                        key={item}
                      >
                        {item}
                      </Link>
                    ))}
                </Box>
              </SwipeableDrawer>
            </Fragment>
          )}
        </Box>
      </Box>
    </Box>
  )
}

export default NavBar
