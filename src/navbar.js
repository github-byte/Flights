import React from 'react'
import { AppBar, Box, Toolbar } from '@mui/material'
import { SITE_LOGO } from './constants';
import {useNavigate} from 'react-router-dom'

const SearchResults = (props) => {
    const navigate = useNavigate();
    return (
        <Box>
            <AppBar sx={{ backgroundColor: "rgba(0,0,0,0.6)", height: '10vh', opacity: 0.6, display: 'flex', justifyContent: 'center' }}>
                <Toolbar>
                    <img alt='logo' onClick={() => navigate('/')} style={{ marginLeft: '18%', height: '90%', cursor: 'pointer' }} src={SITE_LOGO} />
                </Toolbar>
            </AppBar>
        </Box>
    )

}

export default SearchResults;