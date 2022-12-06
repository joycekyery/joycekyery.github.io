import { Box } from '@mui/system'
import React from 'react'
import { Button, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { router } from 'route/routeItems'

const NavBar = () => {
  const location = window.location.pathname.substring(
    1,
    window.location.pathname.length
  )
  const navigate = useNavigate()

  const newRouter = router.reduce((acc, curr) => {
    return { ...acc, [curr.path]: curr }
  }, {})
  return (
    <Box
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
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default NavBar
