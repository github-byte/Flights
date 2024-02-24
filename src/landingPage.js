import { Box } from '@mui/material'
import React from 'react'

const LandingPage = (props) => {
  return(
    <Box style={{filter:"brightness(0.4)"}}>
        <video style={{width: '100%'}} autoPlay muted loop id="myVideo">
        <source src="flight.mp4" type="video/mp4"/>
        </video>
    </Box>
   )

 }

export default LandingPage