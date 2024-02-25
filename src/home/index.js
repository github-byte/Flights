import React, { useContext, useEffect, useState } from 'react'
import { Box, useTheme, Typography } from '@mui/material'
import Search from './search'
import { MainContext, getFlightsData } from '../utility'

const Home = () => {
  const theme = useTheme();
  const [apiData, setApiData] = useState([])
  const [source, setSource] = useState(null)
  const [destination, setDestination] = useState(null)
  const [date, setDate] = useState('')
  const { deskTopView = true } = useContext(MainContext)
  useEffect(() => {
    getFlightsData(null, null, null, setApiData)
  }, [])
  return (
    <Box>
      <video style={{ width: '100%', height: '100%', objectFit: 'cover', position: 'absolute', top: '0px', filter: 'sepia(30%) brightness(0.7)' }} autoPlay muted loop id="myVideo">
        <source src="flight.mp4" type="video/mp4" />
      </video>
      <Box position="relative" width={'60%'} p={3} mt={'20vh'} bgcolor={theme.palette.text.secondary} ml={"auto"} mr={'auto'}>
        <Search source={source} setSource={setSource} destination={destination} setDestination={setDestination} setDate={setDate} date={date} apiData={apiData} />
      </Box>
      <Typography sx={{ position: "relative", textShadow: '9px 3px 2px black', fontSize: deskTopView ? '3rem' : '2rem', fontWeight: 900, mt: '50px', fontFamily: 'inherit', textAlign: 'center', color: theme.palette.text.secondary }} variant="h3" color="initial">Search Flights | Customize | Travel</Typography>
    </Box>
  )

}

export default Home