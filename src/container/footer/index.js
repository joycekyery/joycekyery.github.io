import { Box } from '@mui/system'
import React from 'react'
import { Grid, Link, Typography } from '@mui/material'
import GitHubIcon from '@mui/icons-material/GitHub'
import InstagramIcon from '@mui/icons-material/Instagram'

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: '#434641',
        width: 'inherit',
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <Box
        sx={{
          width: '80%',
          height: 'inherit',
          display: 'flex',
          flexDirection: 'row',
        }}
      >
        <Grid
          container
          spacing={0.5}
          padding="0.5rem"
          direction="row"
          justifyContent="space-between"
        >
          <Grid item>
            <Typography
              sx={{
                color: '#F4F0F0',
              }}
            >
              Designed and Developed by Yung-ching Lin
            </Typography>
          </Grid>
          <Grid item>
            <Link
              p={0.5}
              href="https://github.com/joycekyery"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GitHubIcon style={{ color: 'F4F0F0' }} />
            </Link>
            <Link
              p={0.5}
              href="https://www.instagram.com/bleepbloopmylife/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <InstagramIcon style={{ color: 'F4F0F0' }} />
            </Link>
          </Grid>
        </Grid>
      </Box>
    </Box>
  )
}

export default Footer
