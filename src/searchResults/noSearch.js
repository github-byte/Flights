import { Box, Card } from '@mui/material'
import React from 'react'
import useStyles from './styles'

const NoSearch = (props) => {
    const classes = useStyles();
    return (
        <Box>
            <Card className={classes.activeCommunityCard}>
                No Results Found
            </Card>
        </Box>
    )

}

export default NoSearch;