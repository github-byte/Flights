import React, { useEffect, useState } from 'react'
import { Box, Grid } from '@mui/material';
import SearchImageCard from './searchImgCard';
import ResultCard from './resultCard';
import axios from 'axios'
import Filters from './filters';

const SearchResults = (props) => {
  const [flightResults, setFlightResults] = useState([])

  useEffect(() => {
    axios.get('https://api.npoint.io/4829d4ab0e96bfab50e7', {
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
        }
        return response; //{data: response.data, stats}
      })
      .catch(function (error) {
        // handle error
        let { response = {} } = error;
        console.log("catch error ", error, response);
        return { err: error, status: response.status };
      });
  }, [])
  
  return (
    <Box height="100vh">
      <SearchImageCard />
      <Box></Box>
      <Box></Box>
      <Box width='50%' ml='auto' mr='auto' display='flex' justifyContent='space-between'>
        <Box>
          <Filters />
        </Box>
        <Box position="relative">
          {/* {flightResults?.map((item) => {
            return (<ResultCard item={item} flightResults={flightResults} />)
          })} */}
          <ResultCard item={flightResults?.[0]} flightResults={flightResults} />
        </Box>
      </Box>
    </Box>
  )

}

export default SearchResults;