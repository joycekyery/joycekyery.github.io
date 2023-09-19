import { Box, Button } from '@mui/material'
import React from 'react'
// import React, { useState } from 'react'
// import artAPI from 'api/def/test'
// import AxiosV1 from 'api/axiosV1'
// import callApi from 'api/util/callAPI'
// import { imageSet2020 } from 'asset/2020/imageSet'
const Test = () => {
  // const [encodedImg, setencodedImg] = useState('')

  // const test = imageSet2019.image2018092404
  // const test = imageSet2020.image20200107

  const click = () => {
    // Promise.all(
    //   Object.values(imageSet2022).map(async (test) => {
    //     await fetch(test.image)
    //       .then((response) => response.blob())
    //       .then((blob) => {
    //         const reader = new FileReader()
    //         reader.readAsDataURL(blob)
    //         reader.onloadend = async () => {
    //           const base64data = reader.result
    //           // setencodedImg(base64data)
    //           return await AxiosV1(
    //             artAPI.create({
    //               title: test.title,
    //               description: test.description,
    //               year: test.year,
    //               image: base64data,
    //               cols: test.cols,
    //               rows: test.rows,
    //             })
    //           )
    //         }
    //       })
    //   })
    // ).then((values) => {
    //   console.log(values)
    // })
    //====================
    // fetch(test.image)
    //   .then((response) => response.blob())
    //   .then((blob) => {
    //     const reader = new FileReader()
    //     reader.readAsDataURL(blob)
    //     reader.onloadend = () => {
    //       const base64data = reader.result
    //       setencodedImg(base64data)
    //       console.log(base64data)
    //       callApi({
    //         apiConfig: artAPI.create({
    //           title: test.title,
    //           description: test.description,
    //           year: test.year,
    //           image: base64data,
    //           cols: test.cols,
    //           rows: test.rows,
    //         }),
    //         onStart: () => {},
    //         onSuccess: (data) => {
    //           console.log(1)
    //           console.log(data)
    //         },
    //         onError: (err) => {},
    //         onFinally: () => {},
    //       })
    //     }
    //   })
  }

  return (
    <Box paddingTop="500px">
      <Button onClick={click}>click</Button>
      {/* {encodedImg !== '' && <CardMedia component="img" src={encodedImg} />} */}
    </Box>
  )
}
export default Test
