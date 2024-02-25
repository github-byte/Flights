import React, { useContext, useState } from 'react'
import { Box, Card, Grid, Typography, useTheme } from '@mui/material';
import { useLocation } from 'react-router-dom'
import { format } from 'date-fns'
import useStyles from '../styles';
import { FLIGHT_ARRIVAL, FLIGHT_DEPARTURE } from '../constants';
import { FlightsResultsContext } from '../utility'
import SearchCard from '../home/search'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

const SearchData = (props) => {
    const location = useLocation();
    const { state = {} } = location || {}
    const { setFlightResults = () => { }, setOriginalRes = () => {}} = useContext(FlightsResultsContext)
    const [edit, setEdit] = useState(false)
    const { source: stateSource = {}, destination: stateDestination = {}, date: stateDate = '', apiData = [] } = state || {}
    const [source, setSource] = useState(stateSource);
    const [destination, setDestination] = useState(stateDestination);
    const [date, setDate] = useState(stateDate)
    const classes = useStyles();
    const theme = useTheme()
    
    return (
        <Box>
            <Card className={classes.activeCommunityCard}>
                <Box mt={1} mb={1} sx={{ width: '100%' }}>
                    <Typography variant="body1" sx={{ textAlign: 'right', fontWeight: 700, color: theme.palette.text.secondary, cursor: "pointer", mb: edit ? 2 : {} }} color="initial" onClick={() => setEdit(!edit)}>{!edit ? 'Edit' : 'Cancel'}</Typography>
                    {edit ? <SearchCard setIsEdit={setEdit} setOriginalRes={setOriginalRes} setFlightResults={setFlightResults} isEdit apiData={apiData} setSource={setSource} setDestination={setDestination} setDate={setDate} source={source} destination={destination} date={date} /> : <Grid container spacing={0}>
                        <Grid md={4} sx={{ display: 'flex', alignItems: 'center' }} item spacing={0}>
                            <img src={FLIGHT_ARRIVAL} height={30} width={30} alt="flight1" />
                            <Typography sx={{ ml: 1 }} variant="body1" color="initial">{source?.label || ''}</Typography>
                        </Grid>
                        <Grid md={4} sx={{ display: 'flex', alignItems: 'center' }} item spacing={0}>
                            <img src={FLIGHT_DEPARTURE} height={30} width={30} alt="flight2" />
                            <Typography sx={{ ml: 1 }} variant="body1" color="initial">{destination?.label || ''}</Typography>
                        </Grid>
                        {date && <Grid md={4} item spacing={0}>
                            <Box display='flex' alignItems='center'>
                                <CalendarMonthIcon />
                                <Typography sx={{ ml: 1 }} variant="body1" color="initial">{date && new Date(date) ? format(new Date(date), 'dd MMM yyyy') : ''}</Typography>
                            </Box>
                        </Grid>}
                    </Grid>}
                </Box>
            </Card>
        </Box>
    )

}

export default SearchData;