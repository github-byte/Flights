import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Box, Card, CardContent, CardMedia, Typography } from '@mui/material';
import useStyles from './styles'

const ResultCard = ({ item = {} }) => {
    const classes = useStyles();
    const { displayData = {}, fare = 0 } = item || {}
    const { totalDuration = '' } = displayData || {}
    console.log('my new data233', displayData, fare)
    return (
        <Card className={classes.activeCommunityCard} sx={{ display: 'flex' }}>
            <Box sx={{ display: 'flex', flexDirection: 'row' }}>
                <CardContent sx={{ flex: '1 0 auto' }}>
                    <Typography component="div" variant="h5">
                        { }
                    </Typography>
                    <Typography variant="subtitle1" color="text.secondary" component="div">
                        Mac Miller
                    </Typography>
                    <Typography variant="h4" color="text.secondary" component="div">
                        {`Rs ${fare}`}
                    </Typography>
                </CardContent>
                <CardMedia
                    component="img"
                    sx={{ width: 151 }}
                    image="/static/images/cards/live-from-space.jpg"
                    alt="Live from space album cover"
                />
            </Box>
        </Card>
    )

}

export default ResultCard;