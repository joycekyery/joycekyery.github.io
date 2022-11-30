import { Box } from '@mui/system'
import React from 'react'
import HomeIcon from '@mui/icons-material/Home'
import { IconButton } from '@mui/material'

const NavBar = () => {
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
        height: '50px',
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
            height: 'inherit',
            display: 'flex',
            flexDirection: 'row',
          }}
        >
          <IconButton size="large">
            <HomeIcon fontSize="inherit" />
          </IconButton>
        </Box>
      </Box>
    </Box>
  )
}

export default NavBar
