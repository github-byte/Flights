import { Box, Typography } from '@mui/material';
import React from 'react'

const SearchImageCard = (props) => {
    return (
        <Box position="relative">
            <Box width="100%">
                <img width="100%" alt='flightCard' src='https://d3tfanr7troppj.cloudfront.net/static_files/images/000/005/400/original/Search.png?1704262718' />
            </Box>
            <Box position="absolute" sx={{top: 20}}>
                <Typography variant="h2" sx={{ color: 'white' }} color="initial">Search List</Typography>
            </Box>
        </Box>
    )

}

export default SearchImageCard;