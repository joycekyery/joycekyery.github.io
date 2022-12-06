import { Box } from '@mui/system'
import React from 'react'
import { Grid, IconButton, Link, Tooltip, Typography } from '@mui/material'
import GitHubIcon from '@mui/icons-material/GitHub'
import InstagramIcon from '@mui/icons-material/Instagram'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import EmailIcon from '@mui/icons-material/Email'
import { useState } from 'react'
import { styled } from '@mui/material/styles'
import { tooltipClasses } from '@mui/material/Tooltip'

const Footer = () => {
  const [emailCopyTooltip, setEmailCopyTooltip] = useState(false)
  const LightTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} classes={{ popper: className }} />
  ))(({ theme }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: '#F4F0F0',
      color: 'rgba(0, 0, 0, 0.87)',
      fontSize: 18,
    },
  }))

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
          <Grid item xs="auto">
            <Box
              display="flex"
              flexDirection="row"
              alignItems="center"
              height="100%"
            >
              <Typography
                sx={{
                  color: '#F4F0F0',
                }}
              >
                Designed and Developed by Yung-ching Lin
              </Typography>
            </Box>
          </Grid>
          <Grid item xs="auto">
            <Box display="flex" flexDirection="row" alignItems="baseline">
              <Link
                p={1}
                href="https://github.com/joycekyery"
                target="_blank"
                rel="noopener noreferrer"
              >
                <GitHubIcon style={{ color: '#F4F0F0' }} />
              </Link>
              <Link
                p={1}
                href="https://www.instagram.com/bleepbloopmylife/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <InstagramIcon style={{ color: '#F4F0F0' }} />
              </Link>
              <Link
                p={1}
                href="https://www.linkedin.com/in/yung-ching-lin/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <LinkedInIcon style={{ color: '#F4F0F0' }} />
              </Link>
              <LightTooltip
                title="Copied!"
                open={emailCopyTooltip}
                onOpen={() => {
                  setTimeout(() => {
                    setEmailCopyTooltip(false)
                  }, 1500)
                }}
              >
                <IconButton
                  size="small"
                  onClick={() => {
                    setEmailCopyTooltip(true)
                    navigator.clipboard.writeText('7a.joyce.lin@gmail.com')
                  }}
                >
                  <EmailIcon style={{ color: '#F4F0F0' }} />
                </IconButton>
              </LightTooltip>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  )
}

export default Footer
