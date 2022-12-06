import React from 'react'
import {
  Grid,
  Box,
  Card,
  CardMedia,
  CardContent,
  Typography,
  IconButton,
  Link,
} from '@mui/material'
import WebAssetIcon from '@mui/icons-material/WebAsset'
import { projects } from 'asset/project'
import GitHubIcon from '@mui/icons-material/GitHub'

const Project = () => {
  return (
    <Box
      height="100%"
      width="100%"
      sx={{
        background: 'linear-gradient(#022422 ,#022422 ,#B9E1DE)',
        minHeight: '100vh',
      }}
      display="flex"
      flexDirection="column"
      justifyContent="flex-start"
    >
      <Grid
        container
        spacing={8}
        pt={20}
        pb={20}
        sx={{
          width: '80vw',
          alignSelf: 'center',
        }}
      >
        {projects.map((p, index) => {
          return (
            <Grid item xs={12} sm={12} md={6} lg={6} xl={4} key={index}>
              <Card sx={{ height: '100%', backgroundColor: '#434641' }}>
                <CardMedia
                  component="img"
                  height="200"
                  image={p.image}
                  alt={p.title}
                />
                <CardContent
                  sx={{ backgroundColor: '#d0bb96', padding: '2px' }}
                ></CardContent>
                <CardContent sx={{ height: 'calc(100% - 244px)' }}>
                  <Box
                    display="flex"
                    flexDirection="column"
                    justifyContent="space-between"
                    height="100%"
                  >
                    <Box>
                      <Typography
                        gutterBottom
                        variant="h5"
                        component="div"
                        sx={{ color: '#F4F0F0' }}
                      >
                        {p.title}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{ color: '#F4F0F0' }}
                        pb={2}
                      >
                        {p.description}
                      </Typography>
                      <Typography variant="body2" sx={{ color: '#d0bb96' }}>
                        tool used: {p.tools}
                      </Typography>
                    </Box>
                    <Box display="flex" justifyContent="space-between" p={3}>
                      {p.sourceCode && (
                        <Link
                          href={p.sourceCode}
                          target="_blank"
                          rel="noopener noreferrer"
                          underline="none"
                        >
                          <IconButton
                            size="small"
                            className="moreAboutMeButton"
                            sx={{
                              color: '#022422',
                              border: 'solid',
                              borderColor: '#d0bb96',
                              backgroundColor: '#d0bb96',
                              borderRadius: '10px',
                              '&:hover': {
                                backgroundColor: '#022422',
                                color: '#F4F0F0',
                                transition: 'background-color 200ms linear',
                              },
                            }}
                          >
                            Source Code&nbsp;
                            <GitHubIcon fontSize="inherit" />
                          </IconButton>
                        </Link>
                      )}
                      {p.visit && (
                        <Link
                          href={p.visit}
                          target="_blank"
                          rel="noopener noreferrer"
                          underline="none"
                        >
                          <IconButton
                            size="small"
                            className="moreAboutMeButton"
                            sx={{
                              color: '#022422',
                              border: 'solid',
                              borderColor: '#d0bb96',
                              backgroundColor: '#d0bb96',
                              borderRadius: '10px',
                              '&:hover': {
                                backgroundColor: '#022422',
                                color: '#F4F0F0',
                                transition: 'background-color 200ms linear',
                              },
                            }}
                            onClick={() => {}}
                          >
                            Visit&nbsp;
                            <WebAssetIcon fontSize="inherit" />
                          </IconButton>
                        </Link>
                      )}
                    </Box>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          )
        })}
      </Grid>
    </Box>
  )
}
export default Project
