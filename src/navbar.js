import { AppBar, Box, Toolbar, Typography } from '@mui/material'
import React from 'react'

const SearchResults = (props) => {
    return (
        <Box>
            <AppBar sx={{backgroundColor:"rgba(0,0,0,0.6)", opacity: 0.6}}>
                <Toolbar>
                    <Typography variant="h6" component="div">
                        Scroll to see button
                    </Typography>
                </Toolbar>
            </AppBar>
        </Box>
    )

}

export default SearchResults;