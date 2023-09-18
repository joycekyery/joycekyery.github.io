import { Box, Button, CardMedia } from '@mui/material'
import React, { useState } from 'react'
import { imageSet2019 } from 'asset/2019/imageSet'
import artAPI from 'api/def/test'
import AxiosV1 from 'api/axiosV1'
const Test = () => {
  const [encodedImg, setencodedImg] = useState('')

  // const test = imageSet2019.image2018092404

  const click = () => {
    Promise.all(
      Object.values(imageSet2019).map(async (test) => {
        await fetch(test.image)
          .then((response) => response.blob())
          .then((blob) => {
            const reader = new FileReader()
            reader.readAsDataURL(blob)
            reader.onloadend = async () => {
              const base64data = reader.result
              setencodedImg(base64data)
              return await AxiosV1(
                artAPI.create({
                  title: test.title,
                  description: test.description,
                  year: test.year,
                  image: base64data,
                  cols: test.cols,
                  rows: test.rows,
                })
              )
            }
          })
      })
    ).then((values) => {
      console.log(values)
    })

    //====================
    //   setencodedImg(base64data)
    //   console.log(base64data)
    //   callApi({
    //     apiConfig: artAPI.create({
    //       title: test.title,
    //       description: test.description,
    //       year: test.year,
    //       image: base64data,
    //     }),
    //     onStart: () => {},
    //     onSuccess: (data) => {
    //       console.log(1)
    //       console.log(data)
    //     },
    //     onError: (err) => {},
    //     onFinally: () => {},
    //   })
    // }
  }

  return (
    <Box paddingTop="500px">
      <Button onClick={click}>click</Button>
      {encodedImg !== '' && <CardMedia component="img" src={encodedImg} />}
    </Box>
  )
}
export default Test
