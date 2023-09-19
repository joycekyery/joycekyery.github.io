import {
  Button,
  Grid,
  ImageList,
  ImageListItem,
  Skeleton,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material'
import { Box } from '@mui/system'
import React, { Fragment, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import CloseIcon from '@mui/icons-material/Close'
import callApi from 'api/util/callAPI'
import AxiosV1 from 'api/axiosV1'
import artAPI from 'api/def/test'

const ArtGallery = () => {
  const { year } = useParams()
  const [imageOpen, setImageOpen] = useState({
    open: false,
    currentIndex: 0,
  })
  const [cancelToken] = useState(AxiosV1.CancelToken.source())
  const [ImageSets, setImageSets] = useState(false)

  useEffect(() => {
    setImageSets(false)
    callApi({
      apiConfig: artAPI.findAll(year),
      onStart: () => {},
      onSuccess: (res) => {
        console.log(res.data)
        console.log(res)
        setImageSets(res.data)
      },
      onError: (err) => {
        // setError({ error: true, errorMessage: err.response.data })
      },

      onFinally: () => {},
    })
    return () => {
      cancelToken.cancel('Request cancel.')
    }
  }, [cancelToken, year])

  const theme = useTheme()
  const md = useMediaQuery(theme.breakpoints.up('md'))
  return (
    <Fragment>
      <Box
        pt={12}
        height="100%"
        width="100%"
        sx={{
          background: 'linear-gradient(#022422 ,#B9E1DE ,#B9E1DE)',
          minHeight: '100vh',
        }}
        display="flex"
        flexDirection="column"
        justifyContent="flex-start"
      >
        <ImageList
          variant="quilted"
          cols={md ? 6 : 2}
          gap={12}
          sx={{ padding: '16px' }}
        >
          {!ImageSets ? (
            <Grid container wrap="nowrap">
              {Array.from(new Array(3)).map((item, index) => (
                <Box key={index} sx={{ width: 210, marginRight: 0.5, my: 5 }}>
                  <Skeleton variant="rectangular" width={210} height={118} />
                </Box>
              ))}
            </Grid>
          ) : (
            ImageSets &&
            ImageSets.map((item, index) => (
              <ImageListItem
                key={index}
                cols={item.cols || 1}
                rows={item.rows || 1}
                sx={{
                  transition: 'transform .2s',
                  '&:hover': {
                    transform: 'scale(1.05)',
                    objectFit: 'none',
                    cursor: 'pointer',
                  },
                }}
              >
                <img
                  onClick={() => {
                    setImageOpen({
                      open: true,
                      image: item,
                      currentIndex: index,
                    })
                  }}
                  src={item.image_base64}
                  srcSet={item.image_base64}
                  alt={item.title}
                  loading="lazy"
                />
              </ImageListItem>
            ))
          )}
        </ImageList>
      </Box>
      {imageOpen.open && (
        <Box
          sx={{
            zIndex: '9999',
            height: '100vh',
            background: 'black',
            position: 'fixed',
            width: '100vw',
            top: '0',
            left: '0',
          }}
          onClick={(e) => {
            setImageOpen({ open: false, currentIndex: 0 })
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              width: '100%',
              height:
                ImageSets[imageOpen.currentIndex].description !== ''
                  ? 'calc(100% - 50px)'
                  : '100%',
            }}
          >
            <Button
              sx={{ color: '#fff' }}
              disabled={imageOpen.currentIndex === 0}
              onClick={(e) => {
                e.stopPropagation()
                setImageOpen((prev) => ({
                  open: true,
                  currentIndex: prev.currentIndex - 1,
                }))
              }}
            >
              <ArrowBackIosIcon />
            </Button>
            <Box
              sx={{
                width: '100%',
                height: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <img
                style={{ maxWidth: '100%', maxHeight: '100%' }}
                onClick={(e) => {
                  e.stopPropagation()
                }}
                src={ImageSets[imageOpen.currentIndex].image_base64}
                srcSet={ImageSets[imageOpen.currentIndex].image_base64}
                alt={ImageSets[imageOpen.currentIndex].title}
                loading="lazy"
              />
            </Box>
            <Box
              sx={{
                height: '100%',
                display: 'flex',
                justifyContent: 'center',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <Button
                sx={{ color: '#fff' }}
                disabled={imageOpen.currentIndex === ImageSets.length - 1}
                onClick={(e) => {
                  e.stopPropagation()
                  setImageOpen({ open: false, currentIndex: 0 })
                }}
              >
                <CloseIcon />
              </Button>
              <Button
                sx={{ color: '#fff', height: '100%', marginBottom: '24px' }}
                disabled={imageOpen.currentIndex === ImageSets.length - 1}
                onClick={(e) => {
                  e.stopPropagation()
                  setImageOpen((prev) => ({
                    open: true,
                    currentIndex: prev.currentIndex + 1,
                  }))
                }}
              >
                <ArrowForwardIosIcon />
              </Button>
            </Box>
          </Box>
          {ImageSets[imageOpen.currentIndex].description !== '' && (
            <Box
              height="50px"
              sx={{
                zIndex: '10000',
                backgroundColor: '#434641',
                width: '100vw',
                position: 'fixed',
                bottom: '0',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Typography
                sx={{ color: '#fff', textAlign: 'center' }}
                variant="h6"
              >
                {ImageSets[imageOpen.currentIndex].description}
              </Typography>
            </Box>
          )}
        </Box>
      )}
    </Fragment>
  )
}
export default ArtGallery
