import React, { useEffect, useState } from 'react'
import { Box, Grid, Typography } from '@mui/material';
import SearchImageCard from './searchImgCard';
import ResultCard from './resultCard';
import axios from 'axios'
import Filters from './filters';
import { FlightsResultsContext } from '../utility';
import { API_URL } from '../constants';
import NoSearch from './noSearch';

const SearchResults = (props) => {
  const [flightResults, setFlightResults] = useState([])
  const [originalRes, setOriginalRes] = useState([])
  
  useEffect(() => {
    axios.get(API_URL, {
      headers: {
        "Content-Type": "application/json",
        source: "website",
      },
    })
      .then((response) => {
        // handle success
        console.log("response getapi ", response, response.data);
        if (response.status >= 200 && response.status < 300 && response.data) {
          let { data = {} } = response.data || {};
          let { result = [] } = data
          setFlightResults(result)
          setOriginalRes(result)
        }
        return response; //{data: response.data, stats}
      })
      .catch(function (error) {
        // handle error
        let { response = {} } = error;
        return { err: error, status: response.status };
      });
  }, [])
  console.log("inside fight context", flightResults)
  const flightContext = {
    flightResults,
    setFlightResults,
    originalRes
  }
  return (<FlightsResultsContext.Provider value={flightContext}>
    <Box height="100vh">
      <SearchImageCard />
      <Box width='50%' ml='auto' mr='auto' >
        <Box>
          <Typography sx={{ textAlign: 'left' }} variant="body1" color="initial">Search/Fights</Typography>
        </Box>
        <Box>
          <Typography sx={{ textAlign: 'left' }} variant="body1" color="initial">Search/Flights</Typography>
        </Box>
        <Box display='flex' justifyContent='space-between'>
          <Box>
            <Filters flightResults={flightResults} />
          </Box>
          <Box>
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