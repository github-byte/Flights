import React, { useContext, useEffect, useState } from 'react'
import { Box, Breadcrumbs, Link, Typography } from '@mui/material';
import SearchImageCard from './searchImgCard';
import ResultCard from './resultCard';
import { useLocation } from 'react-router-dom'
import Filters from './filters';
import { FlightsResultsContext, MainContext, getFlightsData } from '../utility';
import NoSearch from './noSearch';
import SearchData from './searchData';

const SearchResults = (props) => {
  const location = useLocation();
  const { state = {} } = location || {}
  const { source = {}, destination = {}, date = '', apiData = [] } = state || {};
  const [flightResults, setFlightResults] = useState(apiData)
  const [originalRes, setOriginalRes] = useState(apiData)
  const { deskTopView = false } = useContext(MainContext)
  const { label: sourceLabel = '' } = source || {};
  const { label: destinationLabel = '' } = destination || {}
  useEffect(() => {
    getFlightsData(sourceLabel, destinationLabel, date, setOriginalRes, setFlightResults)
  }, [sourceLabel, destinationLabel, apiData, date])
  const flightContext = {
    flightResults,
    setFlightResults,
    originalRes,
    setOriginalRes
  }
  return (<FlightsResultsContext.Provider value={flightContext}>
    <Box height="100vh">
      <SearchImageCard />
      <Box width={deskTopView ? '60%' : '90%'} ml='auto' mr='auto' >
        <Box mt={3} mb={3}>
          <Breadcrumbs aria-label="breadcrumb">
            <Link underline="hover" color="inherit" href="/">
              Home
            </Link>
            <Typography color="initial">Search Page</Typography>
          </Breadcrumbs>
        </Box>
        <Box mt={4} mb={5}>
          <SearchData />
        </Box>
        <Box display='flex' flexDirection={deskTopView ? 'row' : 'column'} justifyContent='space-between'>
          <Box width={!deskTopView ? '95%' : '25%'} mb={2}>
            <Filters flightResults={flightResults} />
          </Box>
          <Box width={deskTopView ? '70%' : '100%'}>
            {flightResults && flightResults?.length > 0 ? flightResults?.map((item, index) => {
              return (<ResultCard index={index} item={item} flightResults={flightResults} />)
            }) : <NoSearch />}
          </Box>
        </Box>
      </Box>
    </Box>
  </FlightsResultsContext.Provider>
  )

}

export default SearchResults;