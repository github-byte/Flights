import React from 'react'
import { Box, Typography } from '@mui/material';
import { SEARCH_FLIGHT } from '../constants';

const SearchImageCard = (props) => {
    return (
        <Box position="relative">
            <Box width="100%">
                <img width="100%" alt='flightCard' src={SEARCH_FLIGHT} />
            </Box>
            <Box position="absolute" sx={{ top: 0, marginTop: '10%', marginLeft: '10%' }}>
                <Typography variant="h2" sx={{ color: 'white' }} color="initial">Search List</Typography>
            </Box>
        </Box>
    )

}

export default SearchImageCard;