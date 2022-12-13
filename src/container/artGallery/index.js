import { ImageList, ImageListItem } from '@mui/material'
import { Box } from '@mui/system'
import { imageSet2019 } from 'asset/2019/imageSet'
import React, { Fragment, useState } from 'react'
import { useParams } from 'react-router-dom'
import ImageViewer from 'react-simple-image-viewer'

const ArtGallery = () => {
  const { year } = useParams()
  const [imageOpen, setImageOpen] = useState({
    open: false,
    image: false,
    currentIndex: 0,
  })
  const ImageSets = {
    2019: imageSet2019,
  }
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
        <ImageList variant="quilted" cols={6} gap={12} sx={{ padding: '16px' }}>
          {Object.values(ImageSets[year]).map((item, index) => (
            <ImageListItem
              key={index}
              cols={item.cols || 1}
              rows={item.rows || 1}
              sx={{
                transition: 'transform .2s',
                '&:hover': {
                  transform: 'scale(1.05)',
                  objectFit: 'none',
                },
              }}
            >
              <img
                onClick={() => {
                  setImageOpen({ open: true, image: item, currentIndex: index })
                }}
                src={item.image}
                srcSet={item.image}
                alt={item.title}
                loading="lazy"
              />
            </ImageListItem>
          ))}
        </ImageList>
      </Box>
      {imageOpen.open && (
        <ImageViewer
          backgroundStyle={{ zIndex: '9999' }}
          disableScroll
          src={Object.values(imageSet2019).map((item) => item.image)}
          currentIndex={imageOpen.currentIndex}
          closeOnClickOutside={true}
          onClose={() => {
            setImageOpen({
              open: false,
              image: false,
              currentIndex: 0,
            })
          }}
        />
      )}
    </Fragment>
  )
}
export default ArtGallery
